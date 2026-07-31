import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, Sparkles, MessageCircle, ShoppingBag, Eye, ShieldCheck, Check, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryId, Product } from '../types';
import { PRODUCTS, getProductImageForColor } from '../data/products';
import { CATEGORIES, COMPANY_DETAILS } from '../data/company';

interface CategoryPageProps {
  categoryId: CategoryId;
  onQuickView: (product: Product) => void;
  onAddToEnquiry: (product: Product, color?: string) => void;
  products?: Product[];
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  onQuickView,
  onAddToEnquiry,
  products,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const navScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategoryNav = (direction: 'left' | 'right') => {
    if (navScrollRef.current) {
      navScrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  // Pagination State (10 items per page)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryId]);

  const allProducts = products || PRODUCTS;
  const categoryInfo = CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES.find((c) => c.id === 'ride-ons') || CATEGORIES[0];
  const categoryProducts = allProducts.filter((p) => {
    if (categoryId === 'ride-ons' || categoryId === 'riders' || categoryId === 'electric-rideons' || categoryId === 'rocking-animals') {
      return p.category === 'ride-ons' || p.category === 'riders' || p.category === 'electric-rideons' || p.category === 'rocking-animals';
    }
    if (categoryId === 'swing-cars' || categoryId === 'magic-cars') {
      return p.category === 'swing-cars' || p.category === 'magic-cars';
    }
    if (categoryId === 'tricycles' || categoryId === 'tri-cycles') {
      return p.category === 'tricycles' || p.category === 'tri-cycles';
    }
    if (categoryId === 'potty-trainers' || categoryId === 'potty-chairs') {
      return p.category === 'potty-trainers' || p.category === 'potty-chairs';
    }
    return p.category === categoryId;
  });

  const filteredProducts = categoryProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.modelCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getCategoryDetails = () => {
    switch (categoryId) {
      case 'ride-ons':
      case 'riders':
      case 'electric-rideons':
      case 'rocking-animals':
        return {
          title: 'Ride-Ons & Push Cars',
          subtitle: 'Sturdy push-along ride-ons with back support, under-seat storage, and interactive lights.',
          highlights: ['Under-Seat Storage Trunk', 'Ergonomic Backrest', 'Anti-Flip Rear Bumper', 'Squeaker Steering Horn']
        };
      case 'swing-cars':
      case 'magic-cars':
        return {
          title: 'Magic Swing Cars & Twisters',
          subtitle: 'No batteries, no gears, no pedals needed! Twist the steering wheel left and right to glide forward using gravity & centrifugal force.',
          highlights: ['360° Polyurethane Wheels', 'Up to 30-35 kg Capacity', '100% Non-Toxic Virgin ABS', 'Indoor & Outdoor Safe']
        };
      case 'baby-walkers':
        return {
          title: 'Baby Activity Walkers & Push Toys',
          subtitle: 'Designed to encourage first steps safely with multi-position height adjustments, speed-controlled wheels, and removable activity trays.',
          highlights: ['3-Position Height Adjustment', 'Speed Control Tension Wheels', 'Removable Toy/Snack Tray', 'Padded Washable Seat']
        };
      case 'potty-trainers':
      case 'potty-chairs':
        return {
          title: 'Ergonomic Potty Chairs & Ride-On Trainers',
          subtitle: 'Make potty training gentle and exciting! Features high splash guards, easy-clean removable bowls, and fun animal & scooter designs.',
          highlights: ['Removable Inner Bowl', 'Non-Slip Tile Grips', 'Splash Guard & Lid', '2-in-1 Scooter Ride-Ons']
        };
      case 'tricycles':
      case 'tri-cycles':
        return {
          title: 'Kids Activity Tri Cycles & Tricycles',
          subtitle: 'Heavy-duty 3-wheel tricycles with adjustable parent push handles, safety seat harnesses, and storage baskets.',
          highlights: ['Parent Steering Push Handle', 'Rear Storage Basket', 'Safety Seat Belt', 'Anti-Slip Foot Pedals']
        };
      case 'kick-scooters':
        return {
          title: '3-Wheel Light-Up Kick Scooters',
          subtitle: 'Lean-to-steer balance scooters with 3-level height adjustable T-bar, magnetic flashing LED wheels, and rear foot brake.',
          highlights: ['Self-Generating LED Wheels', '3-Level Adjustable Height', 'Lean-to-Steer Balance', 'Wide Non-Slip Deck']
        };
      default:
        return {
          title: 'Young Wheels Premium Toys',
          subtitle: 'Safe, durable, and joyful ride-on toys manufactured with love in New Delhi, India.',
          highlights: ['100% Non-Toxic Virgin ABS', 'Factory Direct Quality', 'Ergonomic Toddler Safety', 'BIS Certified']
        };
    }
  };

  const details = getCategoryDetails();

  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Hero Banner */}
        <div className={`rounded-[36px] bg-gradient-to-r ${categoryInfo.bgGradient} border-4 border-[#FFE8B5] p-8 sm:p-12 shadow-xl relative overflow-hidden`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                Young Wheels Catalog • {categoryProducts.length} Models
              </span>

              <h1 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
                {details.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-2xl">
                {details.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {details.highlights.map((hl, i) => (
                  <span key={i} className="bg-white/90 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-xl border border-slate-200/60 shadow-2xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="h-48 w-full rounded-2xl overflow-hidden bg-white/80 p-3 shadow-md border border-slate-200">
                <img src={categoryInfo.bannerImage} alt={categoryInfo.name} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border-2 border-[#FFE8B5] shadow-md flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Search Input Box */}
          <div className="relative w-full lg:max-w-xl group">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center pointer-events-none group-focus-within:bg-[#FF6B6B] group-focus-within:text-white transition-colors">
              <Search className="w-4 h-4" />
            </div>
            
            <input
              type="text"
              placeholder={`Search ${categoryInfo.name} models, colors, codes...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-10 py-3 rounded-2xl border-2 border-slate-100 bg-slate-50/80 text-xs font-bold text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B6B] focus:ring-4 focus:ring-[#FF6B6B]/10 transition-all shadow-inner"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Model Count Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF9EE] border border-[#FFE8B5] px-4 py-2.5 rounded-2xl text-xs font-extrabold text-slate-800 shrink-0 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#FF6B6B] animate-wiggle" />
            <span>Showing <strong className="text-[#FF6B6B] font-black text-sm">{filteredProducts.length}</strong> of {categoryProducts.length} Models</span>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-[#FF6B6B]" />
            </div>
            <h3 className="font-heading font-black text-slate-800 text-lg">No Matching Models Found</h3>
            <p className="text-xs text-slate-500 font-medium">Try adjusting your search terms or view all models.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-[#FFD93D] text-slate-900 font-bold text-xs rounded-xl"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => {
                const activeColorName = selectedColors[product.id] || product.colors[0]?.name;

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-[28px] border-2 border-[#FFE8B5] p-4 toy-card flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] flex items-center justify-center p-3 mb-3">
                        <span className="absolute top-2 left-2 bg-[#FFD93D] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                          {product.modelCode}
                        </span>

                        <img
                          src={getProductImageForColor(product, activeColorName)}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                        />

                        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => onQuickView(product)}
                            className="bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold font-heading shadow-lg flex items-center gap-1.5 hover:bg-[#FFD93D]"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Quick Details</span>
                          </button>
                        </div>
                      </div>

                      <h3
                        onClick={() => onQuickView(product)}
                        className="font-black font-heading text-slate-900 text-lg hover:text-[#FF6B6B] cursor-pointer transition-colors line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-3">
                        {product.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-bold bg-[#FFF9EE] p-2 rounded-xl mb-3 border border-[#FFE8B5]">
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase">Age Suitability</span>
                          <span className="text-slate-800">{product.ageRange}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase">Capacity</span>
                          <span className="text-slate-800">{product.weightCapacity}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex justify-between">
                          <span>Colors</span>
                          <span className="text-slate-700 font-extrabold">{activeColorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {product.colors.map((c, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: c.name }))}
                              className={`w-5 h-5 rounded-full border-2 transition-transform ${
                                activeColorName === c.name ? 'scale-125 border-slate-900 ring-2 ring-[#FFD93D]' : 'border-white'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => onAddToEnquiry(product, activeColorName)}
                        className="py-2 px-2 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>

                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels! I am inquiring about ${product.name} (${product.modelCode}) in ${activeColorName} color.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Pagination Control Bar */}
            {totalPages > 1 && (
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-bold text-slate-600">
                  Showing <strong className="text-slate-900">{startIndex + 1}</strong> – <strong className="text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}</strong> of <strong className="text-[#FF6B6B] font-black">{filteredProducts.length}</strong> Models
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(prev => Math.max(1, prev - 1));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-black bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-xl text-xs font-black transition-all shadow-2xs ${
                        currentPage === pageNum
                          ? 'bg-[#FF6B6B] text-white shadow-md scale-105'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage(prev => Math.min(totalPages, prev + 1));
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-black bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

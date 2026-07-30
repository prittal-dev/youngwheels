import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Eye, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Check, 
  Filter, 
  ArrowRight,
  Car,
  Footprints,
  Smile,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Product, CategoryId } from '../types';
import { PRODUCTS } from '../data/products';
import { COMPANY_DETAILS } from '../data/company';

interface FeaturedProductsProps {
  onQuickView: (product: Product) => void;
  onAddToEnquiry: (product: Product, color?: string) => void;
  onNavigateToCategory: (catId: CategoryId) => void;
  products?: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onQuickView,
  onAddToEnquiry,
  onNavigateToCategory,
  products,
}) => {
  const [selectedTab, setSelectedTab] = useState<CategoryId | 'bestsellers'>('bestsellers');
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Pagination State (10 items per page)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  const allProducts = products || PRODUCTS;
  const displayedProducts = selectedTab === 'bestsellers'
    ? allProducts.filter(p => p.isBestSeller)
    : allProducts.filter(p => p.category === selectedTab);

  const totalPages = Math.ceil(displayedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = displayedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors(prev => ({ ...prev, [productId]: colorName }));
  };

  const handleAddWithNotice = (product: Product) => {
    const chosenColor = selectedColors[product.id] || product.colors[0]?.name;
    onAddToEnquiry(product, chosenColor);
    setAddedNotice(product.name);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FFD93D', '#FF6B6B', '#4ECDC4']
    });
    setTimeout(() => setAddedNotice(null), 2500);
  };

  return (
    <section className="py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-[#FFD93D]" />
              Popular Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
              Featured Best Sellers & New Arrivals
            </h2>
            <p className="text-slate-600 font-medium text-sm mt-1">
              Top requested ride-ons and infant mobility toys by parents & wholesale distributors.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTab('bestsellers')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'bestsellers'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-[#FFD93D] fill-[#FFD93D]" />
              <span>Best Sellers</span>
            </button>
            <button
              onClick={() => setSelectedTab('magic-cars')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'magic-cars'
                  ? 'bg-[#FF6B6B] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>Magic Cars</span>
            </button>
            <button
              onClick={() => setSelectedTab('baby-walkers')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'baby-walkers'
                  ? 'bg-[#4ECDC4] text-slate-900 shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Footprints className="w-3.5 h-3.5 text-[#4ECDC4]" />
              <span>Walkers</span>
            </button>
            <button
              onClick={() => setSelectedTab('potty-chairs')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'potty-chairs'
                  ? 'bg-[#8B5CF6] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Potty Chairs</span>
            </button>
            <button
              onClick={() => setSelectedTab('rocking-animals')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'rocking-animals'
                  ? 'bg-[#EC4899] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Smile className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>Rockers</span>
            </button>
            <button
              onClick={() => setSelectedTab('riders')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'riders'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Riders</span>
            </button>
            <button
              onClick={() => setSelectedTab('electric-rideons')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'electric-rideons'
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Electric</span>
            </button>
            <button
              onClick={() => setSelectedTab('tri-cycles')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'tri-cycles'
                  ? 'bg-[#06B6D4] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Tri Cycles</span>
            </button>
            <button
              onClick={() => setSelectedTab('kick-scooters')}
              className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                selectedTab === 'kick-scooters'
                  ? 'bg-[#22C55E] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Scooters</span>
            </button>
          </div>
        </div>

        {/* Added Notification Toast */}
        {addedNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-[#FFD93D] flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
            <div className="w-8 h-8 rounded-full bg-[#FFD93D] text-slate-900 flex items-center justify-center font-bold">
              <Check className="w-4 h-4 text-slate-900" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#FFD93D]">Added to Enquiry Basket!</div>
              <div className="text-xs text-slate-200">{addedNotice}</div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product, idx) => {
              const activeColorName = selectedColors[product.id] || product.colors[0]?.name;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-[28px] border-2 border-[#FFE8B5] p-4 toy-card flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Image Frame + Badges */}
                    <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] flex items-center justify-center p-3 mb-3">
                      
                      {/* Top Status Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                        {product.isBestSeller && (
                          <span className="bg-[#FFD93D] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                            <Star className="w-3 h-3 fill-slate-900 text-slate-900" /> BESTSELLER
                          </span>
                        )}
                        {product.isNewArrival && (
                          <span className="bg-[#4ECDC4] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                            <Sparkles className="w-3 h-3 fill-slate-900 text-slate-900" /> NEW
                          </span>
                        )}
                      </div>

                      <span className="absolute top-2 right-2 bg-white/90 text-slate-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-slate-200">
                        {product.modelCode}
                      </span>

                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                      />

                      {/* Quick View Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => onQuickView(product)}
                          className="bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold font-heading shadow-lg flex items-center gap-1.5 hover:bg-[#FFD93D] transition-colors"
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

                    {/* Specs Pill */}
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

                    {/* Color Selector */}
                    <div className="mb-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>Color Options</span>
                        <span className="text-slate-600 font-extrabold">{activeColorName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => handleColorSelect(product.id, c.name)}
                            className={`w-5 h-5 rounded-full border-2 transition-transform ${
                              activeColorName === c.name ? 'scale-125 border-slate-900 ring-2 ring-[#FFD93D]' : 'border-white hover:scale-110'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action CTAs */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleAddWithNotice(product)}
                        className="py-2 px-3 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-2xs active:scale-95 transition-transform"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>

                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels! I want to inquire about ${product.name} (Model: ${product.modelCode}) in ${activeColorName} color.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-2xs active:scale-95 transition-transform"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Pagination Control Bar */}
          {totalPages > 1 && (
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-bold text-slate-600">
                Showing <strong className="text-slate-900">{startIndex + 1}</strong> – <strong className="text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, displayedProducts.length)}</strong> of <strong className="text-[#FF6B6B] font-black">{displayedProducts.length}</strong> Featured Items
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
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

        {/* View Full Category CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigateToCategory(selectedTab === 'bestsellers' ? 'magic-cars' : selectedTab)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            <span>View Complete Product Catalog & Specifications</span>
            <ArrowRight className="w-4 h-4 text-[#FFD93D]" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, Sparkles, MessageCircle, ShoppingBag, Eye, ShieldCheck, Check, CheckCircle2, X, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';
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

  // FAQ State & 5 Category-Specific Questions
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrentPage(1);
    setOpenFaqIndex(null);
  }, [searchQuery, categoryId]);

  const normalizedCategory = (() => {
    if (categoryId === 'magic-cars') return 'swing-cars';
    if (categoryId === 'riders' || categoryId === 'electric-rideons' || categoryId === 'rocking-animals') return 'ride-ons';
    if (categoryId === 'tri-cycles') return 'tricycles';
    if (categoryId === 'potty-chairs') return 'potty-trainers';
    return categoryId;
  })();

  const allProducts = products || PRODUCTS;
  const categoryInfo = CATEGORIES.find((c) => c.id === normalizedCategory) || CATEGORIES[0];
  const categoryProducts = allProducts.filter((p) => {
    if (normalizedCategory === 'ride-ons') return p.category === 'ride-ons';
    if (normalizedCategory === 'kick-scooters') return p.category === 'kick-scooters';
    if (normalizedCategory === 'baby-walkers') return p.category === 'baby-walkers';
    if (normalizedCategory === 'swing-cars') return p.category === 'swing-cars';
    if (normalizedCategory === 'tricycles') return p.category === 'tricycles';
    if (normalizedCategory === 'potty-trainers') return p.category === 'potty-trainers';
    return p.category === normalizedCategory;
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
    switch (normalizedCategory) {
      case 'ride-ons':
        return {
          title: 'Ride-Ons & Push Cars',
          subtitle: 'European supercar styling push cars with steering wheel horn, ergonomic back support, and hidden under-seat storage trunk.',
          highlights: ['Under-Seat Storage Trunk', 'Ergonomic High Backrest', 'Anti-Flip Safety Rear Bumper', 'Squeaker Steering Horn']
        };
      case 'kick-scooters':
        return {
          title: 'Kick Scooters & Police Bikes',
          subtitle: 'Thrilling police patrol bikes and kick balance trikes with electronic sirens, flashing emergency beacons, and rugged wide wheels.',
          highlights: ['Electronic Police Siren', 'Flashing Emergency Light', 'Superbike Decal Styling', 'Wide High-Traction Wheels']
        };
      case 'baby-walkers':
        return {
          title: 'Baby Walkers & Push Trikes',
          subtitle: 'Grow-with-me 2-in-1 stroller push trikes with steerable parent handles, safety harnesses, and retractable toddler footrests.',
          highlights: ['Steerable Parent Push Handle', 'Foldaway Footrests', 'Safety Strap Harness', 'Heavy-Duty Steel Frame']
        };
      case 'swing-cars':
        return {
          title: 'Magic Swing Cars & Twisters',
          subtitle: 'No batteries, no gears, no pedals needed! Twist the steering wheel left and right to glide forward with smooth 360° rotation.',
          highlights: ['360° Polyurethane Smooth Wheels', 'Up to 35 kg Weight Capacity', '100% Non-Toxic Virgin ABS', 'Indoor & Outdoor Safe']
        };
      case 'tricycles':
        return {
          title: 'Kids Activity Tricycles & Trikes',
          subtitle: 'Classic heavy-duty carbon steel tricycles, robot mascot trikes, and deluxe musical cushion models.',
          highlights: ['Carbon Steel Sturdy Frame', 'Wide Non-Slip Foot Pedals', 'Ergonomic Contoured Seat', 'Front & Rear Storage Baskets']
        };
      case 'potty-trainers':
        return {
          title: 'Ergonomic Potty Chairs & Trainers',
          subtitle: 'Make potty training gentle and exciting with real scooty scooter handles, deep removable bowl, and splash-guard lid.',
          highlights: ['Deep Removable Inner Bowl', 'Non-Slip Grippy Base', 'High Splash Guard & Lid', 'Fun Ergonomic Handlebars']
        };
      default:
        return {
          title: categoryInfo.name,
          subtitle: categoryInfo.shortDesc,
          highlights: ['100% Non-Toxic Virgin ABS', 'Factory Direct Quality', 'Ergonomic Toddler Safety', 'BIS Certified']
        };
    }
  };

  const details = getCategoryDetails();

  const getCategoryFaqs = () => {
    switch (normalizedCategory) {
      case 'swing-cars':
        return [
          {
            question: "How does a YoungWheels Swing Car move without batteries, pedals, or gears?",
            answer: "Our Magic Swing Cars operate using kinetic energy, gravity, and centrifugal force. Children simply sit on the seat, place their feet on the footrests, and turn the butterfly steering wheel left and right. The precision 360° front wheels glide smoothly forward on smooth indoor and outdoor surfaces."
          },
          {
            question: "What is the age group and weight capacity for YoungWheels Swing Cars?",
            answer: "YoungWheels Swing Cars are suitable for toddlers and kids aged 2 to 6 years. Manufactured using high-tensile 100% virgin ABS plastic and steel bearings, they support up to 35 kg on smooth surfaces."
          },
          {
            question: "Are the wheels safe for indoor marble, wooden, or tile floors?",
            answer: "Yes! Every YoungWheels Swing Car is fitted with non-marking Polyurethane (PU) silent wheels. They glide smoothly across marble, tiles, and wooden floors without leaving scratches or making noise."
          },
          {
            question: "Is assembly required when the Swing Car arrives?",
            answer: "Minimal assembly is required. The main body comes pre-molded. You only need to fit the front wheel shaft and butterfly steering wheel using the included safety wrench and lock nut. Detailed assembly instructions are provided in the box."
          },
          {
            question: "What safety features are built into YoungWheels Magic Swing Cars?",
            answer: "Our Swing Cars feature Zero Edge Design (ZED) rounded plastic edges, an anti-flip front safety wheel to prevent tipping forward, footrest grips, and 100% non-toxic, BPA-free virgin ABS plastic certified safe for kids."
          }
        ];
      case 'ride-ons':
        return [
          {
            question: "What age group are YoungWheels Ride-On Push Supercars designed for?",
            answer: "Our Ride-Ons (including McLaren, G-Vagon, and Scooby Riders) are engineered for children aged 1 to 4 years. They assist toddlers in developing leg muscle strength, balance, and spatial awareness during early walking stages."
          },
          {
            question: "Is there a storage space inside the Ride-On push car?",
            answer: "Yes! Most of our Ride-On models feature a spacious under-seat storage trunk where kids can keep their favorite small toys, water bottles, or snacks while riding around."
          },
          {
            question: "Does the steering wheel have sound or music features?",
            answer: "Absolutely. The steering wheel comes equipped with an interactive squeaker horn and push-button music module that keeps toddlers entertained and engaged while riding."
          },
          {
            question: "What is the weight limit for YoungWheels Ride-On Push Cars?",
            answer: "Our Ride-On push cars are built with thick-walled virgin PP plastic and can comfortably support weight up to 20 to 25 kg depending on the specific model."
          },
          {
            question: "How do I clean and maintain the Ride-On push car?",
            answer: "Since all YoungWheels Ride-Ons are made from food-grade water-resistant plastic, simply wipe down the body with a damp cloth and mild soap. Avoid spraying water directly into battery-operated steering music buttons."
          }
        ];
      case 'kick-scooters':
        return [
          {
            question: "What age range are YoungWheels Kick Scooters suitable for?",
            answer: "YoungWheels Kick Scooters (including Speedy, Smiley, and Turbo Police models) are designed for kids aged 3 to 8 years. Adjustable handlebar height options allow the scooter to grow with your child."
          },
          {
            question: "Are the wheels equipped with LED flashing lights?",
            answer: "Yes! Our kick scooters feature high-traction LED light-up polyurethane wheels that illuminate automatically as your child scoots faster—no batteries needed for wheel lights!"
          },
          {
            question: "What safety mechanisms are included on the kick scooters?",
            answer: "Every scooter comes with a wide anti-slip foot deck, sturdy rear foot brake for quick stopping, rubber handlebar grips, and a wide 3-wheel design for maximum balance and anti-tipping safety."
          },
          {
            question: "Can the handlebar height be adjusted as my child grows?",
            answer: "Yes, the T-bar steering handlebar offers 3-level quick-release height adjustment settings to suit growing toddlers and young kids comfortably."
          },
          {
            question: "Are YoungWheels Police Tricycles battery-operated for lights and siren?",
            answer: "Yes! Our Turbo Police Tricycles feature battery-powered electronic siren sounds and flashing emergency light beacons for an exciting police patrol roleplay experience."
          }
        ];
      case 'baby-walkers':
        return [
          {
            question: "How do YoungWheels Baby Walkers help toddlers learn to walk?",
            answer: "YoungWheels Walkers (like Casper Deluxe, Bunny Rider, and Bearyboo) feature 360° revolving multi-directional wheels and ergonomic push handles that provide balanced support, helping infants build confidence, leg strength, and motor skills safely."
          },
          {
            question: "Are the walker seat cushions washable and comfortable?",
            answer: "Yes! The seat cushion is made from breathable, padded, skin-friendly fabric with high backrest support. The seat cover is removable and hand-washable to maintain hygienic play."
          },
          {
            question: "Can the height of the baby walker be adjusted?",
            answer: "Yes, our push walkers feature multi-level height adjustment settings so your baby's feet can rest flat on the floor, preventing O-leg developmental issues."
          },
          {
            question: "Does the walker include a detachable activity toy tray?",
            answer: "Yes! YoungWheels Walkers come with a detachable musical toy tray featuring rattles, buttons, and lights. Removing the toy tray transforms the top into a clean snack or feeding tray for baby."
          },
          {
            question: "What safety features prevent the walker from tipping over?",
            answer: "Our walkers feature a wide anti-collision base frame, smooth 360° swivel wheels, and anti-slip stopper pads to prevent accidental flips on steps or uneven floor transitions."
          }
        ];
      case 'tricycles':
        return [
          {
            question: "What age group are YoungWheels Tricycles suitable for?",
            answer: "Our Tricycles (such as NexRide, Tiny Rider, and Ninja Rider) are designed for kids aged 1.5 to 5 years. Models with parent push handles are great for younger toddlers, while self-pedal mode suits older toddlers."
          },
          {
            question: "Does the parent push handle steer the front wheel?",
            answer: "Yes! On our 2-in-1 Parent Push Trikes, the adjustable parent push handle connects directly to the front wheel fork, allowing parents to guide steering smoothly until the toddler is ready to pedal independently."
          },
          {
            question: "What material are the wheels and frame made of?",
            answer: "YoungWheels Tricycles feature a heavy-duty carbon steel frame with rust-resistant powder coating. The wheels are made of durable EVA foam / rubberized shock-absorbing material that never goes flat or punctures."
          },
          {
            question: "Is there a footrest for younger toddlers who cannot reach the pedals?",
            answer: "Yes! Our convertible trikes include foldable or detachable toddler footrests where little feet can rest safely while parents push."
          },
          {
            question: "Does the tricycle come with a front and rear storage basket?",
            answer: "Yes, most models include a front handlebar basket and a spacious rear cargo basket for carrying toys, water bottles, and accessories during outdoor trips."
          }
        ];
      case 'potty-trainers':
        return [
          {
            question: "Why choose YoungWheels Potty Chairs for toddler potty training?",
            answer: "YoungWheels Potty Chairs (including Scooty Potty, Teddy, Cow, and Sofa trainers) feature ergonomic high backrests, front splash guards, handlebar grips, and fun ride-on designs that make potty training stress-free and exciting for toddlers."
          },
          {
            question: "Is the inner potty bowl removable for easy cleaning?",
            answer: "Yes! Every YoungWheels Potty Chair is designed with a removable inner bowl drawer. Simply lift out the bowl, empty it, wash with water and soap, and slide it back in seconds."
          },
          {
            question: "What age group is appropriate for YoungWheels Potty Chairs?",
            answer: "Our potty chairs are ideal for toddlers aged 9 months to 4 years during early toilet training stages."
          },
          {
            question: "Is the plastic material safe and non-toxic for baby skin?",
            answer: "Absolutely! Manufactured with 100% virgin food-grade ABS/PP plastic, all potty chairs are non-toxic, BPA-free, and feature rounded zero-scratch edges (ZED)."
          },
          {
            question: "Does the potty chair have a cover lid when not in use?",
            answer: "Yes, every potty trainer comes with a matching hygienic cover lid that closes neatly when not in use, converting the chair into a cute toddler seat or stool."
          }
        ];
      default:
        return [
          {
            question: "Are YoungWheels toys manufactured in India?",
            answer: "Yes! All YoungWheels toys are manufactured in our state-of-the-art facility in Pooth Khurd, New Delhi using 100% virgin food-grade ABS plastic."
          },
          {
            question: "Do you offer wholesale and bulk dealer pricing?",
            answer: "Yes, we supply directly to toy retailers, distributors, and store owners across 200+ Indian cities at factory-direct wholesale rates."
          },
          {
            question: "What safety standards do YoungWheels toys follow?",
            answer: "All our products are BIS certified, 100% non-toxic, BPA-free, and undergo weight and drop testing for maximum child safety."
          },
          {
            question: "How long does shipping take across India?",
            answer: "Orders are dispatched from our New Delhi factory within 24 to 48 hours and typically arrive within 3 to 6 business days depending on your location."
          },
          {
            question: "How can I get catalog & price list details on WhatsApp?",
            answer: "Simply click the 'WhatsApp Desk' button on any product or banner to instantly connect with our sales desk on +91 7011227049."
          }
        ];
    }
  };

  const categoryFaqs = getCategoryFaqs();

  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Hero Banner */}
        <div className={`rounded-[36px] bg-gradient-to-r ${categoryInfo.bgGradient} border-4 border-[#FFE8B5] p-8 sm:p-12 shadow-xl relative overflow-hidden`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                Young Wheels Catalogue • {categoryProducts.length} Models
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
              <div className="h-52 w-full rounded-2xl overflow-hidden bg-white/95 p-3 shadow-md border border-slate-200 flex items-center justify-center">
                <img 
                  src={categoryInfo.bannerImage} 
                  alt={categoryInfo.name} 
                  className="w-full h-full object-contain p-1 rounded-xl filter drop-shadow-sm" 
                />
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

        {/* Category FAQs Section */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border-4 border-[#FFE8B5] shadow-xl space-y-6">
          <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
            <div 
              className="w-12 h-12 rounded-2xl bg-[#FFD93D] text-slate-900 flex items-center justify-center font-black shrink-0 shadow-md ring-4 ring-[#FFE8B5] transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer group/icon"
              title="Category FAQ Help Center"
            >
              <HelpCircle className="w-6 h-6 text-slate-900 transition-transform duration-300 group-hover/icon:rotate-12" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Frequently Asked Questions about {details.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                5 essential answers for parents and bulk buyers regarding YoungWheels {categoryInfo.name}
              </p>
            </div>
          </div>

          <div className="space-y-3.5">
            {categoryFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#FF6B6B] bg-[#FFF9F9] shadow-sm' 
                      : 'border-slate-200/80 bg-slate-50/60 hover:bg-slate-100/60 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="leading-snug flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl font-heading font-black text-xs flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#FF6B6B] text-white shadow-xs scale-105' 
                          : 'bg-[#FFE399] text-slate-900 group-hover:bg-[#FFD93D] group-hover:scale-105'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="font-heading font-black text-sm sm:text-base text-slate-900 group-hover:text-[#FF6B6B] transition-colors">
                        {faq.question}
                      </span>
                    </span>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 border ${
                      isOpen
                        ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-md scale-110'
                        : 'bg-white text-slate-700 border-slate-200 group-hover:bg-[#FFD93D] group-hover:border-[#FFD93D] group-hover:text-slate-900 shadow-2xs group-hover:scale-110'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed border-t border-slate-200/60 mt-1 animate-fadeIn">
                      <div className="bg-white p-4 sm:p-4.5 rounded-xl border border-slate-100 shadow-2xs text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
};


import React, { useState, useRef, useEffect, useMemo } from 'react';
import { X, Check, MessageCircle, ShoppingBag, ChevronLeft, ChevronRight, Search, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { COMPANY_DETAILS } from '../data/company';
import { getProductImageForColor } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToEnquiry: (product: Product, color?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToEnquiry }) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Fullscreen Carousel Lightbox State
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Amazon-style Plaza Clock hover zoom lens & adjacent pop screen
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const zoomViewportRef = useRef<HTMLDivElement>(null);
  const colorScrollRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, width: 140, height: 140 });
  const [containerSize, setContainerSize] = useState({ width: 340, height: 340 });

  const ZOOM_SCALE = 2.5;

  // Extract all distinct images & color variations for the fullscreen carousel
  const galleryItems = useMemo(() => {
    if (!product) return [];
    const items: Array<{ image: string; colorName: string; colorHex?: string }> = [];
    const seenImages = new Set<string>();

    if (product.colors && product.colors.length > 0) {
      product.colors.forEach((c) => {
        const img = getProductImageForColor(product, c.name);
        if (img && !seenImages.has(img)) {
          seenImages.add(img);
          items.push({ image: img, colorName: c.name, colorHex: c.hex });
        }
      });
    }

    if (items.length === 0 && product.image) {
      items.push({ image: product.image, colorName: 'Standard' });
    }

    return items;
  }, [product]);

  useEffect(() => {
    if (product?.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].name);
    }
    setIsZoomed(false);
    setIsCarouselOpen(false);
    setActiveImageIndex(0);
  }, [product?.id]);

  const activeColor = product.colors.find(
    c => c.name.toLowerCase() === selectedColor.toLowerCase()
  ) || product.colors[0];

  const displayedImage = getProductImageForColor(product, selectedColor);

  // Strictly check if device is desktop with fine pointer (mouse)
  const isDesktopPointer = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 768 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  };

  const handleMouseEnter = () => {
    if (!isDesktopPointer()) return;
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktopPointer() || !imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Viewport dimensions in the pop screen (measured or fallback)
    const vWidth = zoomViewportRef.current?.clientWidth || rect.width || 340;
    const vHeight = zoomViewportRef.current?.clientHeight || rect.height || 340;

    // Lens dimensions proportional to the zoom viewport and scale
    const lensW = Math.max(90, Math.min(Math.round(vWidth / ZOOM_SCALE), Math.round(rect.width * 0.55)));
    const lensH = Math.max(90, Math.min(Math.round(vHeight / ZOOM_SCALE), Math.round(rect.height * 0.55)));

    // Center lens on cursor and clamp strictly within container bounds
    const rawX = mouseX - lensW / 2;
    const rawY = mouseY - lensH / 2;
    const clampedX = Math.max(0, Math.min(rawX, rect.width - lensW));
    const clampedY = Math.max(0, Math.min(rawY, rect.height - lensH));

    setContainerSize({ width: rect.width, height: rect.height });
    setLensPos({
      x: clampedX,
      y: clampedY,
      width: lensW,
      height: lensH,
    });
  };

  // Open Fullscreen Carousel
  const handleOpenCarousel = () => {
    const currentIdx = galleryItems.findIndex(
      item => item.colorName.toLowerCase() === selectedColor.toLowerCase()
    );
    setActiveImageIndex(currentIdx >= 0 ? currentIdx : 0);
    setIsCarouselOpen(true);
    setIsZoomed(false);
  };

  // Carousel Navigation Handlers
  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (galleryItems.length <= 1) return;
    setActiveImageIndex((prev) => {
      const nextIdx = (prev - 1 + galleryItems.length) % galleryItems.length;
      if (galleryItems[nextIdx]?.colorName) {
        setSelectedColor(galleryItems[nextIdx].colorName);
      }
      return nextIdx;
    });
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (galleryItems.length <= 1) return;
    setActiveImageIndex((prev) => {
      const nextIdx = (prev + 1) % galleryItems.length;
      if (galleryItems[nextIdx]?.colorName) {
        setSelectedColor(galleryItems[nextIdx].colorName);
      }
      return nextIdx;
    });
  };

  // Mobile Touch Swipe Handling in Carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextImage();
    } else if (diff < -45) {
      handlePrevImage();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation for Fullscreen Carousel
  useEffect(() => {
    if (!isCarouselOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCarouselOpen(false);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCarouselOpen, galleryItems]);

  const currentCarouselItem = galleryItems[activeImageIndex] || galleryItems[0];


  const scrollColors = (direction: 'left' | 'right') => {
    if (colorScrollRef.current) {
      const scrollAmount = direction === 'left' ? -140 : 140;
      colorScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-3xl sm:rounded-[32px] border-2 sm:border-4 border-[#FFE8B5] p-4 sm:p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto cursor-default"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-slate-100/90 text-slate-700 hover:bg-[#FF6B6B] hover:text-white transition-colors cursor-pointer shadow-xs active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Image & Specs */}
          <div className="md:col-span-5 space-y-3">
            {/* Plaza Clock Amazon-style Hover Zoom Image Container (Click opens Carousel) */}
            <div
              ref={imageContainerRef}
              onClick={handleOpenCarousel}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-60 sm:h-72 md:h-84 w-full rounded-2xl bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] p-3 flex items-center justify-center border border-slate-200 overflow-hidden cursor-pointer select-none group"
              title="Click to view full screen carousel"
            >
              {/* Product Main Image */}
              <img
                src={displayedImage}
                alt={product.name}
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain pointer-events-none select-none drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
              />

              {/* Movable Hover Zoom Lens with Precision Crosshair (Desktop only) */}
              {isZoomed && (
                <div
                  style={{
                    left: `${lensPos.x}px`,
                    top: `${lensPos.y}px`,
                    width: `${lensPos.width}px`,
                    height: `${lensPos.height}px`,
                  }}
                  className="hidden md:block absolute pointer-events-none z-20 border-2 border-[#FFB800] bg-[#FFD93D]/25 shadow-md rounded-xl backdrop-blur-[0.5px]"
                >
                  {/* Precision center crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                    <div className="w-3.5 h-0.5 bg-[#D97706] rounded-full"></div>
                    <div className="w-0.5 h-3.5 bg-[#D97706] rounded-full -ml-1.5"></div>
                  </div>
                </div>
              )}

              {/* Model Code Badge */}
              <span className={`absolute top-2 left-2 bg-[#FFD93D] text-slate-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs z-10 transition-opacity duration-200 ${isZoomed ? 'opacity-30' : 'opacity-100'}`}>
                {product.modelCode}
              </span>

              {/* Mobile "Tap for Fullscreen" Pill */}
              <div className="flex md:hidden absolute bottom-2.5 right-2.5 items-center gap-1.5 bg-slate-900/80 text-white border border-white/20 shadow-md backdrop-blur-md text-[10px] font-extrabold px-2.5 py-1 rounded-full pointer-events-none z-10">
                <Maximize2 className="w-3 h-3 text-[#FFD93D]" />
                <span>Tap for Fullscreen</span>
              </div>

              {/* Desktop "Hover to zoom • Click to expand" helper pill */}
              <div
                className={`hidden md:flex absolute bottom-2.5 right-2.5 items-center gap-1.5 bg-white/95 text-slate-700 border border-slate-200/90 shadow-sm backdrop-blur-xs text-[10px] font-bold px-2.5 py-1 rounded-lg pointer-events-none transition-all duration-200 z-10 ${
                  isZoomed ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-90 group-hover:opacity-100'
                }`}
              >
                <Search className="w-3 h-3 text-[#FFB800]" />
                <span>Hover to zoom • Click to expand</span>
              </div>
            </div>

            {/* Specs Quick Card */}
            <div className="bg-[#FFF9EE] p-3 rounded-2xl border border-[#FFE8B5] space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-slate-700">
                <span>Age Limit:</span>
                <span className="text-slate-900">{product.ageRange}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-700">
                <span>Weight Capacity:</span>
                <span className="text-slate-900">{product.weightCapacity}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-700">
                <span>Material:</span>
                <span className="text-slate-900 text-[11px] truncate max-w-[130px]">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details + Amazon-Style Pop Screen */}
          <div className="md:col-span-7 space-y-4 relative min-h-[420px] flex flex-col justify-between">
            
            <div className="space-y-4">
              <div>
                <span className="bg-[#4ECDC4] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  {product.category.replace('-', ' ')}
                </span>
                <h2 className="text-2xl font-black font-heading text-slate-900 mt-1">{product.name}</h2>
                <p className="text-xs font-bold text-[#FF6B6B]">{product.tagline}</p>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Product Features</h4>
                <ul className="space-y-1 text-xs font-medium text-slate-700">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Swatch Selector with Arrows */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <span>Select Color Option:</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-900 border border-slate-200">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: activeColor?.hex || '#3B82F6' }}
                    />
                    <span className="font-extrabold" style={{ color: activeColor?.hex && activeColor.hex !== '#FFFFFF' ? activeColor.hex : undefined }}>
                      {selectedColor}
                    </span>
                  </span>
                </h4>

                <div className="relative flex items-center gap-1.5 w-full">
                  {/* Left Scroll Arrow */}
                  {product.colors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => scrollColors('left')}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-[#FFD93D] text-slate-700 hover:text-slate-900 transition-colors shrink-0 shadow-2xs active:scale-95 border border-slate-200"
                      title="Scroll left"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Scrollable Color Buttons List */}
                  <div
                    ref={colorScrollRef}
                    className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5 flex-1 min-w-0"
                  >
                    {product.colors.map((c, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                          selectedColor === c.name ? 'border-slate-900 bg-slate-900 text-white shadow-xs' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full shrink-0 border border-black/10" style={{ backgroundColor: c.hex }}></span>
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Right Scroll Arrow */}
                  {product.colors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => scrollColors('right')}
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-[#FFD93D] text-slate-700 hover:text-slate-900 transition-colors shrink-0 shadow-2xs active:scale-95 border border-slate-200"
                      title="Scroll right"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onAddToEnquiry(product, selectedColor);
                  onClose();
                }}
                className="py-3 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Enquiry Basket</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels! I am inquiring about ${product.name} (Model: ${product.modelCode}) in ${selectedColor} color.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Price Quote</span>
              </a>
            </div>

            {/* Amazon-Style Pop Screen Beside Image (Plaza Clock style - Desktop Only) */}
            <AnimatePresence>
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="hidden md:flex absolute inset-0 z-40 bg-white p-4 sm:p-5 flex-col justify-between shadow-2xl rounded-2xl border border-slate-200"
                >
                  {/* Pop Screen Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD93D] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB800]"></span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-[#FFB800]" />
                        Zoom Preview
                      </span>
                      <span className="bg-slate-900 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full tracking-wide">
                        {ZOOM_SCALE}× Ultra HD
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider hidden sm:inline">
                      Amazon-Style Magnifier
                    </span>
                  </div>

                  {/* Pop Screen Viewport */}
                  <div 
                    ref={zoomViewportRef}
                    className="flex-1 my-2.5 bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] rounded-xl border border-slate-200 overflow-hidden relative shadow-inner flex items-center justify-center min-h-[220px]"
                  >
                    <div
                      className="absolute top-0 left-0 pointer-events-none flex items-center justify-center"
                      style={{
                        width: `${containerSize.width * ZOOM_SCALE}px`,
                        height: `${containerSize.height * ZOOM_SCALE}px`,
                        padding: `${12 * ZOOM_SCALE}px`,
                        transform: `translate3d(${-lensPos.x * ZOOM_SCALE}px, ${-lensPos.y * ZOOM_SCALE}px, 0)`,
                      }}
                    >
                      <img
                        src={displayedImage}
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-sm select-none"
                      />
                    </div>
                  </div>

                  {/* Pop Screen Footer Bar */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] inline-block"></span>
                      Move cursor on product to inspect details
                    </span>
                    <span className="text-slate-400 font-medium">100% Non-Toxic & Safe</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* Fullscreen Image Carousel Lightbox */}
      <AnimatePresence>
        {isCarouselOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsCarouselOpen(false);
            }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none cursor-default"
          >
            {/* Top Bar */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between gap-3 w-full max-w-5xl mx-auto z-20 pb-2 border-b border-white/10"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/40 shrink-0 shadow-sm"
                  style={{ backgroundColor: currentCarouselItem?.colorHex || '#FF6B6B' }}
                />
                <div>
                  <h3 className="text-white font-heading font-black text-sm sm:text-base leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-bold">
                    Variant: <span className="text-[#FFD93D]">{currentCarouselItem?.colorName}</span>
                    <span className="text-slate-500 mx-1.5">•</span>
                    Model: <span className="text-slate-200">{product.modelCode}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Counter */}
                <span className="bg-white/15 text-white font-black text-xs px-3 py-1 rounded-full border border-white/20">
                  {activeImageIndex + 1} / {galleryItems.length}
                </span>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCarouselOpen(false);
                  }}
                  className="p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-[#FF6B6B] text-white transition-all cursor-pointer shadow-lg active:scale-90"
                  title="Close Fullscreen (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Carousel Display Area */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-2 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Prev Button */}
              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-1 sm:left-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-2xl"
                  title="Previous image (Swipe or ←)"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Current Active Image with smooth crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCarouselItem?.image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center p-2 sm:p-4"
                >
                  <img
                    src={currentCarouselItem?.image}
                    alt={`${product.name} - ${currentCarouselItem?.colorName}`}
                    className="max-h-[64vh] sm:max-h-[70vh] max-w-full object-contain drop-shadow-2xl select-none"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              {galleryItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-1 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-2xl"
                  title="Next image (Swipe or →)"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            {/* Bottom Carousel Thumbnails & Quick Actions */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl mx-auto z-20 pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              {/* Thumbnails Gallery */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 max-w-full">
                {galleryItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      if (item.colorName) setSelectedColor(item.colorName);
                    }}
                    className={`relative p-1 rounded-xl border-2 transition-all shrink-0 bg-white/5 cursor-pointer flex items-center gap-1.5 ${
                      activeImageIndex === idx
                        ? 'border-[#FFD93D] ring-2 ring-[#FFD93D]/40 scale-105 bg-white/15'
                        : 'border-white/20 hover:border-white/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.colorName}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                    <span className="text-[10px] font-bold text-white pr-1.5 hidden sm:inline">
                      {item.colorName}
                    </span>
                  </button>
                ))}
              </div>

              {/* Bottom Quick Action */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onAddToEnquiry(product, currentCarouselItem?.colorName || selectedColor);
                    setIsCarouselOpen(false);
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Enquire This Variant</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels! I am inquiring about ${product.name} (Model: ${product.modelCode}) in ${currentCarouselItem?.colorName || selectedColor} color.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

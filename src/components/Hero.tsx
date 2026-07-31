import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Smile, 
  Star,
  CheckCircle2,
  Car,
  Heart,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/company';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onExploreClick: () => void;
  onOpenWholesaleModal: () => void;
  heroImage?: string;
}

const FLIP_ITEMS = [
  { 
    text: "Kid’s Talent!", 
    icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD93D] inline-block ml-2 animate-wiggle" />,
    initial: { opacity: 0, rotateY: 90, scale: 0.6 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    exit: { opacity: 0, rotateY: -90, scale: 0.6 },
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  { 
    text: "Magic Cars!", 
    icon: <Car className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B6B] inline-block ml-2 animate-bounce-slow" />,
    initial: { opacity: 0, x: -80, rotate: -15 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    exit: { opacity: 0, x: 80, rotate: 15 },
    transition: { type: "spring", stiffness: 250, damping: 14 }
  },
  { 
    text: "Happy Smiles!", 
    icon: <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD93D] inline-block ml-2 animate-pulse" />,
    initial: { opacity: 0, y: -60, scale: 1.3 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 60, scale: 0.7 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  { 
    text: "Active Play!", 
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-[#4ECDC4] inline-block ml-2 animate-wiggle" />,
    initial: { opacity: 0, scale: 0.1, rotate: -30 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 1.4, rotate: 30 },
    transition: { type: "spring", stiffness: 350, damping: 12 }
  },
  { 
    text: "Big Dreams!", 
    icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF8E53] inline-block ml-2 fill-[#FF8E53] animate-bounce-slow" />,
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -50, rotateX: 90 },
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenWholesaleModal, heroImage }) => {
  const [flipIndex, setFlipIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % FLIP_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentFlip = FLIP_ITEMS[flipIndex];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFD93D', '#FF6B6B', '#4ECDC4', '#C7B8EA', '#FFB6C1']
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#FFF9EE]/40 to-transparent pt-8 pb-16 md:py-20">
      
      {/* Background Soft Playful Blobs */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-[#FFD93D]/25 rounded-full blur-3xl pointer-events-none animate-float-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#4ECDC4]/20 rounded-full blur-3xl pointer-events-none animate-float-fast"></div>
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-[#FFB6C1]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-scroll-speed="1.5"
        className="hidden xl:block absolute top-4 left-6 animate-float-slow opacity-90 z-10"
      >
        <div className="bg-white/90 backdrop-blur-md border-2 border-[#FFE8B5] rounded-2xl p-3 shadow-xl flex items-center gap-3 icon-box-glow">
          <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] flex items-center justify-center shrink-0">
            <Car className="w-5 h-5 text-[#FF6B6B]" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-900">360° Magic Cars</div>
            <div className="text-[10px] font-bold text-slate-500">No Pedals Needed!</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        data-scroll-speed="-1.2"
        className="hidden xl:block absolute top-28 right-6 animate-float-fast opacity-90 z-10"
      >
        <div className="bg-white/90 backdrop-blur-md border-2 border-[#4ECDC4]/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 icon-box-glow">
          <div className="w-10 h-10 rounded-xl bg-[#EBFBFA] flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-[#4ECDC4]" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-900">Non-Toxic ABS</div>
            <div className="text-[10px] font-bold text-slate-500">Child Safety First</div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFE399]/60 border border-[#FFD93D] px-4 py-1.5 rounded-full shadow-xs animate-bounce-slow">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6B6B] animate-pulse"></span>
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Direct New Delhi Manufacturer • Est. 2019
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B] animate-wiggle" />
            </div>

            {/* Main Playful Heading with Stacked Top Line & Animated Flip Word Below */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-[1.2] flex flex-col items-center lg:items-start gap-1">
              <span className="block text-slate-900">A Perfect Place To Explore Your</span>
              <span className="inline-flex items-center relative min-w-[280px] sm:min-w-[400px] text-left align-bottom h-[1.3em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={flipIndex}
                    initial={currentFlip.initial}
                    animate={currentFlip.animate}
                    exit={currentFlip.exit}
                    transition={currentFlip.transition}
                    className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFD93D] drop-shadow-xs"
                  >
                    <span>{currentFlip.text}</span>
                    {currentFlip.icon}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting vibrant, ultra-durable <strong className="text-slate-900 font-bold">Magic Swing Cars, Baby Walkers, Potty Chairs & Rocking Animals</strong>. Designed with 100% non-toxic materials to help toddlers learn, balance, and play safely!
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#4ECDC4]" />
                <span>100% BPA-Free Non-Toxic</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <Award className="w-4 h-4 text-[#FF6B6B]" />
                <span>Made in India</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFD93D]" />
                <span>Pan-India Wholesale & Retail</span>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  triggerConfetti();
                  onExploreClick();
                }}
                className="w-full sm:w-auto toy-button bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-heading font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg group"
              >
                <span>Explore All Toys</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels! I am looking for kids ride-on toys / swing cars. Please share catalog & price details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="w-full sm:w-auto toy-button bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-base px-7 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>WhatsApp Catalog & Prices</span>
              </motion.a>
            </div>

            {/* Wholesale Dealer Quick Banner */}
            <div className="pt-2">
              <button
                onClick={onOpenWholesaleModal}
                className="text-xs font-bold text-slate-700 hover:text-[#FF6B6B] underline flex items-center gap-1 mx-auto lg:mx-0 transition-colors"
              >
                <span>Looking for Bulk / Wholesale Pricing for your Toy Store? Click here to request dealer rates!</span>
              </button>
            </div>

          </motion.div>

          {/* Right Visual Hero Card / Product Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Card Frame */}
              <div className="relative bg-white p-4 sm:p-6 rounded-[36px] border-4 border-[#FFE8B5] shadow-2xl overflow-hidden">
                
                {/* Product Badge */}
                <div className="absolute top-6 left-6 z-20 bg-[#FFD93D] text-slate-900 px-3 py-1 rounded-full text-xs font-black shadow-xs flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-slate-900" />
                  <span>Flagship Bestseller</span>
                </div>

                {/* Hero Product Image */}
                <div className="relative h-72 sm:h-80 w-full rounded-[28px] overflow-hidden bg-gradient-to-tr from-[#FFF4B0] via-[#FFEBEB] to-[#E0F7F5] flex items-center justify-center p-4">
                  <img
                    src={heroImage || "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"}
                    alt="Young Wheels Magic Swing Car"
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Decorative Stickers */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-black text-slate-800 shadow-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#FF6B6B] fill-[#FF6B6B]" />
                    <span>360° Twist Glide</span>
                  </div>
                </div>

                {/* Card Title & Specs Summary */}
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-slate-900">Bear Rider Swing Car</h3>
                    <p className="text-xs font-semibold text-slate-500">Model: YW-MC-01 • Musical Horn & LED</p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold bg-[#A8E6CF] text-slate-900 px-2.5 py-1 rounded-full">
                      Up to 30 kg
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Review Ribbon */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-30 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white">
                <div className="w-10 h-10 rounded-xl bg-[#FFD93D] text-slate-900 font-black text-xs flex items-center justify-center gap-0.5">
                  <span>4.9</span>
                  <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold flex items-center gap-1">
                    <AnimatedCounter value="150,000+" duration={2} /> Happy Toddlers
                  </div>
                  <div className="text-[10px] text-slate-300">Certified Kid Safe • Pan-India</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-8 border-t-2 border-[#FFE8B5] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border-2 border-[#FFE8B5] shadow-sm hover:shadow-md hover:border-[#FF6B6B]/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-black font-heading text-[#FF6B6B] group-hover:scale-105 transition-transform inline-block">
                <AnimatedCounter value={stat.value} duration={2.2} />
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-700 mt-1.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

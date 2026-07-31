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
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/company';
import swingCarNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.44.11.png';
import mclarenNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.43.12.png';
import nexrideNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.43.21 (1).png';
import walkerNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.43.29.png';
import policeBikeNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.44.13.png';
import pottyChairNoBg from '../../assets/bg_removed/WhatsApp Image 2026-07-30 at 15.44.08.png';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onExploreClick: () => void;
  onOpenWholesaleModal: () => void;
  heroImage?: string;
}

const CAROUSEL_SLIDES = [
  {
    id: 'swing-cars',
    categoryName: 'Swing Cars & Magic Cars',
    title: 'Bear Rider Magic Swing Car',
    subtitle: 'Model: YW-MC-01 • Musical Horn & 360° Glider',
    badge: 'Flagship Bestseller',
    badgeIcon: Star,
    featureTag: '360° Twist Glide',
    capacity: 'Up to 30 kg',
    image: swingCarNoBg,
    bgGradient: 'from-[#FFF4B0] via-[#FFEBEB] to-[#E0F7F5]',
  },
  {
    id: 'ride-ons',
    categoryName: 'Ride-Ons & Push Cars',
    title: 'McLaren Sports Push Car',
    subtitle: 'Model: YW-RO-13 • Supercar Design & Bucket Seat',
    badge: '13 Models Available',
    badgeIcon: Car,
    featureTag: 'Supercar Styling',
    capacity: 'Up to 20 kg',
    image: mclarenNoBg,
    bgGradient: 'from-[#E6F4EA] via-[#FFF4B0] to-[#E0F7F5]',
  },
  {
    id: 'kick-scooters',
    categoryName: 'Kick Scooters & Police Bikes',
    title: 'Turbo Police Patrol Bike',
    subtitle: 'Model: YW-TC-04 • Electronic Siren & LED Tail Light',
    badge: '8 Models Available',
    badgeIcon: Sparkles,
    featureTag: 'Siren & Flashing Lights',
    capacity: 'Up to 25 kg',
    image: policeBikeNoBg,
    bgGradient: 'from-[#E0F7F5] via-[#E6F4EA] to-[#FFF4B0]',
  },
  {
    id: 'baby-walkers',
    categoryName: 'Baby Walkers',
    title: 'Bunny Sit-to-Stand Walker',
    subtitle: 'Model: YW-BW-01 • Speed Control Wheels & Music',
    badge: '3 Models Available',
    badgeIcon: ShieldCheck,
    featureTag: 'ZED Zero Edge Tech',
    capacity: 'Up to 15 kg',
    image: walkerNoBg,
    bgGradient: 'from-[#FFEBEB] via-[#FFF4B0] to-[#FFE399]',
  },
  {
    id: 'tricycles',
    categoryName: 'Kids Tricycles',
    title: 'NexRide Classic Tricycle',
    subtitle: 'Model: YW-TC-01 • High-Tensile Steel Frame & Pedals',
    badge: '11 Models Available',
    badgeIcon: Award,
    featureTag: 'Carbon Steel Frame',
    capacity: 'Up to 25 kg',
    image: nexrideNoBg,
    bgGradient: 'from-[#FFE399] via-[#E0F7F5] to-[#E6F4EA]',
  },
  {
    id: 'potty-trainers',
    categoryName: 'Potty Chairs & Trainers',
    title: 'Scooty Fun Potty Trainer',
    subtitle: 'Model: YW-PT-01 • Ergonomic Splashtrap & Soft Seat',
    badge: '8 Models Available',
    badgeIcon: Heart,
    featureTag: '100% Non-Toxic ABS',
    capacity: 'Up to 20 kg',
    image: pottyChairNoBg,
    bgGradient: 'from-[#EBF5FF] via-[#FFEBEB] to-[#FFF4B0]',
  },
];

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
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % FLIP_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 1800);
    return () => clearInterval(slideTimer);
  }, []);

  const currentFlip = FLIP_ITEMS[flipIndex];
  const currentSlide = CAROUSEL_SLIDES[slideIndex];
  const BadgeIcon = currentSlide.badgeIcon;

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
        className="hidden xl:block absolute top-14 left-6 animate-float-slow opacity-95 z-10"
      >
        <div className="bg-white/95 backdrop-blur-md border-2 border-[#FFE8B5] rounded-2xl p-3 shadow-xl flex items-center gap-3 icon-box-glow">
          <div className="w-10 h-10 rounded-xl bg-[#FFF9EE] border border-[#FFE8B5] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5.5 h-5.5 text-[#FF6B6B]" />
          </div>
          <div>
            <div className="font-heading text-xs font-black tracking-wide flex items-center gap-1 uppercase">
              <span className="text-[#2563EB]">Quality</span>
              <span className="text-pink-300">•</span>
              <span className="text-[#EC4899]">Trust</span>
              <span className="text-lime-300">•</span>
              <span className="text-[#10B981]">Care</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500">Certified Kid Safe & Durable</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        data-scroll-speed="-1.2"
        className="hidden xl:block absolute top-10 right-6 animate-float-fast opacity-95 z-10"
      >
        <div className="bg-white/95 backdrop-blur-md border-2 border-[#4ECDC4]/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 icon-box-glow">
          <div className="w-10 h-10 rounded-xl bg-[#EBFBFA] border border-[#4ECDC4]/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[#4ECDC4]" />
          </div>
          <div>
            <div className="font-heading text-xs font-black tracking-wide flex items-center gap-1">
              <span className="text-slate-900">Play</span>
              <span className="text-[#FF6B6B] font-black text-sm">•</span>
              <span className="text-slate-900">Learn</span>
              <span className="text-[#FFD93D] font-black text-sm">•</span>
              <span className="text-slate-900">Imagine</span>
              <span className="text-[#4ECDC4] font-black text-sm">•</span>
              <span className="text-slate-900">Grow</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500">Non-Toxic ABS • Child Safety First</div>
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
            

            {/* Main Playful Heading with Stacked Top Line & Animated Flip Word Below */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-[1.2] flex flex-col items-center lg:items-start gap-1 mt-11">
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
             Designed for little explorers, crafted for lasting memories. Our premium range of  <strong className="text-slate-900 font-bold">Magic Swing Cars, Baby Walkers, Potty Chairs, Tri-Cycle & Rocking Animals</strong> combines innovation, safety, and durability to create joyful learning experiences for every child.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#4ECDC4]" />
                <span>100% BPA-Free Non-Toxic</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <img src="../../assets/india_flag.png" className='w-3 inline' alt="" />
                <span>Proudly Made in India </span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white border border-[#FFE8B5] px-3 py-1 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFD93D]" />
                <span>Wholesale and Retail Distribution</span>
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

          </motion.div>

          {/* Right Visual Hero Card / Product Spotlight Automatic Carousel */}
          <div className="lg:col-span-5 relative -mt-6 sm:-mt-10 lg:-mt-16 z-20">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Card Frame */}
              <div className="relative bg-white p-4 sm:p-6 rounded-[36px] border-4 border-[#FFE8B5] shadow-2xl overflow-hidden group">
                
                {/* Product Badge */}
                <div className="absolute top-6 left-6 z-20 bg-[#FFD93D] text-slate-900 px-3 py-1 rounded-full text-xs font-black shadow-xs flex items-center gap-1">
                  <BadgeIcon className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
                  <span>{currentSlide.badge}</span>
                </div>

                {/* Category Pill Top Right */}
                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md text-slate-800 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs border border-slate-200">
                  {slideIndex + 1} / {CAROUSEL_SLIDES.length} • {currentSlide.categoryName}
                </div>

                {/* Main Hero Product Image Carousel Container */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] flex items-center justify-center p-4 overflow-hidden my-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.05, rotate: 3 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                    />
                  </AnimatePresence>
                  <button
                    onClick={() => setSlideIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-slate-800 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Title & Specs Summary */}
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-slate-900">{currentSlide.title}</h3>
                    <p className="text-xs font-semibold text-slate-500">{currentSlide.subtitle}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold bg-[#A8E6CF] text-slate-900 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {currentSlide.capacity}
                    </span>
                  </div>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  {CAROUSEL_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === slideIndex 
                          ? 'w-7 bg-[#FF6B6B]' 
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      title={`Go to category ${idx + 1}`}
                    />
                  ))}
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
                  <div className="text-[10px] text-slate-300">Certified Kid Safe</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Centered Wholesale Dealer Quick Banner */}
        {/* <div className="mt-8 text-center flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenWholesaleModal}
            className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white border-2 border-[#FFE8B5] hover:border-[#FF6B6B] px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md text-slate-800 hover:text-[#FF6B6B] transition-all cursor-pointer group max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-bold text-center">
              <strong className="text-slate-900 font-extrabold group-hover:text-[#FF6B6B]">Grow Your Toy Business with Exclusive Wholesale Deals:</strong>{' '}
              <span className="font-semibold text-slate-600 underline">Request competitive dealer pricing and unlock special bulk purchase benefits.</span>
            </span>
          </motion.button>
        </div> */}

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

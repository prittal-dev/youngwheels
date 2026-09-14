import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Car, 
  Sparkles, 
  ArrowRight, 
  Footprints, 
  Bike, 
  Smile, 
  Search, 
  MessageCircle, 
  Building2,
  Compass
} from 'lucide-react';
import duck404Img from '../assets/youngwheels_duck_404.jpg';
import { CATEGORIES } from '../data/company';
import { getPathFromTab } from '../utils/router';


interface NotFoundPageProps {
  onNavigateTab: (tab: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateTab }) => {
  const quickToyCategories = [
    { id: 'swing-cars', name: 'Magic Swing Cars', badge: '12 Models', color: 'bg-[#FEF08A] text-slate-900 border-[#FFD93D]', icon: Car },
    { id: 'ride-ons', name: 'Ride-Ons & Push Cars', badge: '13 Models', color: 'bg-[#E0F2FE] text-slate-900 border-[#7DD3FC]', icon: Car },
    { id: 'baby-walkers', name: 'Baby Walkers', badge: '3 Models', color: 'bg-[#DCFCE7] text-slate-900 border-[#86EFAC]', icon: Footprints },
    { id: 'kick-scooters', name: 'Kick Scooters', badge: '8 Models', color: 'bg-[#FCE7F3] text-slate-900 border-[#F472B6]', icon: Sparkles },
    { id: 'tricycles', name: 'Kids Tricycles', badge: '15 Models', color: 'bg-[#FED7AA] text-slate-900 border-[#FB923C]', icon: Bike },
    { id: 'potty-trainers', name: 'Potty Chairs', badge: '4 Models', color: 'bg-[#E9D5FF] text-slate-900 border-[#C084FC]', icon: Smile },
  ];


  return (
    <div className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#FFD93D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4ECDC4]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main 404 Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-tr from-[#FFF9EE] via-white to-[#EBFBFA] rounded-[36px] border-4 border-[#FFE8B5] p-6 sm:p-10 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Side: Duckling Toy Driver Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white group">
              <img 
                src={duck404Img} 
                alt="YoungWheels Toy 404 Driver"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#FFD93D] text-slate-900 font-black px-3 py-1 rounded-full text-xs shadow-xs uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>Wrong Turn!</span>
              </div>
            </div>
          </div>

          {/* Right Side: Branded 404 Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              YoungWheels • Error 404
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight flex items-center justify-center lg:justify-start gap-3 flex-wrap leading-tight">
              <span>404</span>
              <span className="text-[#FF6B6B]">Page Not Found</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-black text-slate-800 font-heading">
              Oops! This toy ride-on wandered off the track! 🐥🚗
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sorry, we couldn't find the page you were looking for. The link might be broken or moved, but don't worry — our toy factory is packed with magic cars, walkers, scooters, and tricycles ready to explore!
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTab('home');
                }}
                className="w-full sm:w-auto toy-button bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-heading font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Home className="w-4 h-4 text-[#FFD93D]" />
                <span>GO BACK HOME</span>
              </a>

              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTab('all-categories');
                }}
                className="w-full sm:w-auto toy-button bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-heading font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>EXPLORE ALL TOYS</span>
              </a>
            </div>
          </div>

        </motion.div>

        {/* Quick Toy Categories Navigation Card Section */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black font-heading text-slate-900 flex items-center justify-center gap-2">
              <span>Popular Toy Categories</span>
              <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Jump straight into our bestselling kids mobility models manufactured in Pooth Khurd, New Delhi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {quickToyCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={getPathFromTab(cat.id)}

                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab(cat.id);
                  }}
                  className={`p-5 rounded-3xl border-3 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${cat.color}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-full shadow-2xs text-slate-800">
                        {cat.badge}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="font-heading font-black text-base text-slate-900">
                      {cat.name}
                    </h4>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>Browse Models</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF6B6B]" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

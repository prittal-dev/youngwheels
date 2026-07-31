import React from 'react';
import { motion } from 'motion/react';
import { Store, CheckCircle2, ShoppingBag, Sparkles, MapPin } from 'lucide-react';
import vmartImg from '../assets/vmart.png';
import vbazaarImg from '../assets/vbazaar.png';

export const RetailPartners: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFFDF9] relative overflow-hidden">
      
      {/* Background Playful Ambient Blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FFD93D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12"
        >
          {/* Top Theme Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
            <span>Official Retail Network</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#1E293B] tracking-tight">
            Collaborate for a <span className="text-[#FF6B6B]">Brighter Tomorrow</span>
          </h2>
          
          <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            We proudly team up with brands that believe in shaping young minds and joyful learning.
            Together, we create playful possibilities that make a lasting impact.
          </p>

          {/* Signature Red Wavy Accent Line */}
          <div className="flex justify-center pt-2">
            <svg width="110" height="14" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xs">
              <path 
                d="M2 6C6 2 10 2 14 6C18 10 22 10 26 6C30 2 34 2 38 6C42 10 46 10 50 6C54 2 58 2 62 6C66 10 70 10 74 6C78 2 82 2 86 6C90 10 94 10 98 6" 
                stroke="#FF6B6B" 
                strokeWidth="3" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </motion.div>

        {/* Partner Cards Grid - Horizontal Layout (Left Image / Right Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* V-MART Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border-2 border-dashed border-[#FCD34D] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#FF6B6B]/60 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 group cursor-pointer text-left relative overflow-hidden"
          >
            {/* Left Side: Brand Logo Image Box */}
            <div className="w-full sm:w-44 h-28 sm:h-32 bg-[#E11D48] rounded-2xl p-3 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 relative border border-white/20 shrink-0 overflow-hidden">
              <img 
                src={vmartImg} 
                alt="V-Mart Logo" 
                className="max-h-full max-w-full object-contain filter drop-shadow-xs" 
              />
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 space-y-2 min-w-0 w-full">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[#E11D48] text-[10px] font-bold">
                  <MapPin className="w-3 h-3" />
                  Pan-India Outlets
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Retail Chain
                </span>
              </div>

              <h3 className="font-heading font-black text-slate-800 text-base group-hover:text-[#E11D48] transition-colors leading-tight">
                V-Mart Retail Network
              </h3>
              
              <p className="text-slate-500 text-xs leading-relaxed">
                Featured across 400+ departmental stores nationwide for offline toy buyers.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1 text-slate-700">
                  <Store className="w-3.5 h-3.5 text-[#E11D48]" />
                  400+ Stores
                </span>
                <span className="flex items-center gap-1 text-[#E11D48] text-[11px] group-hover:translate-x-0.5 transition-transform">
                  Available In-Store <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* V-BAZAAR Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="bg-white rounded-3xl border-2 border-dashed border-[#FCD34D] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#6B1D2F]/60 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 group cursor-pointer text-left relative overflow-hidden"
          >
            {/* Left Side: Brand Logo Image Box */}
            <div className="w-full sm:w-44 h-28 sm:h-32 bg-[#812530] rounded-2xl p-3 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 relative border border-white/20 shrink-0 overflow-hidden">
              <img 
                src={vbazaarImg} 
                alt="V-Bazaar Logo" 
                className="max-h-full max-w-full object-contain filter drop-shadow-xs" 
              />
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 space-y-2 min-w-0 w-full">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[#6B1D2F] text-[10px] font-bold">
                  <ShoppingBag className="w-3 h-3 text-[#6B1D2F]" />
                  Value Megastores
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  Licensed Retailer
                </span>
              </div>

              <h3 className="font-heading font-black text-slate-800 text-base group-hover:text-[#6B1D2F] transition-colors leading-tight">
                V-Bazaar Megastores
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed">
                Expanding into high-footfall retail hubs in Tier 2 & 3 cities with Young Wheels toys.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1 text-slate-700">
                  <Store className="w-3.5 h-3.5 text-[#6B1D2F]" />
                  100+ Outlets
                </span>
                <span className="flex items-center gap-1 text-[#6B1D2F] text-[11px] group-hover:translate-x-0.5 transition-transform">
                  Available In-Store <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';

export const RetailPartners: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-3 mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#1E293B] tracking-tight">
            Collaborate for a Brighter Tomorrow
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            We proudly team up with brands that believe in shaping young minds and joyful learning.
            Together, we create playful possibilities that make a lasting impact.
          </p>

          {/* Red Wavy Accent Line */}
          <div className="flex justify-center pt-2">
            <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6C6 2 10 2 14 6C18 10 22 10 26 6C30 2 34 2 38 6C42 10 46 10 50 6C54 2 58 2 62 6C66 10 70 10 74 6C78 2 82 2 86 6C90 10 94 10 98 6" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Partner Cards Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          
          {/* V-MART Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="w-64 sm:w-72 h-36 bg-white rounded-3xl border-2 border-dashed border-[#FCD34D] p-5 shadow-xs hover:shadow-xl transition-all flex items-center justify-center group cursor-pointer"
          >
            <div className="w-48 h-20 bg-[#E11D48] rounded-2xl flex flex-col items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif text-3xl font-black leading-none tracking-tighter drop-shadow-xs">V</span>
              <span className="font-serif text-xs font-bold tracking-[0.25em] uppercase pt-0.5 border-t border-white/40 mt-0.5">MART</span>
            </div>
          </motion.div>

          {/* V-BAZAAR Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-64 sm:w-72 h-36 bg-white rounded-3xl border-2 border-dashed border-[#FCD34D] p-5 shadow-xs hover:shadow-xl transition-all flex items-center justify-center group cursor-pointer"
          >
            <div className="w-48 h-20 bg-[#6B1D2F] rounded-2xl flex flex-col items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              {/* Shopping Bag with V */}
              <div className="relative flex flex-col items-center">
                <svg className="w-7 h-7 text-white fill-white" viewBox="0 0 24 24">
                  <path d="M16 6V4a4 4 0 00-8 0v2H4v14a2 2 0 002 2h12a2 2 0 002-2V6h-4zm-6-2a2 2 0 014 0v2h-4V4zm-1 6h2v2H9v-2zm6 0h2v2h-2v-2z" />
                </svg>
                <span className="font-serif text-xs font-extrabold tracking-[0.25em] uppercase pt-1">BAZAAR</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

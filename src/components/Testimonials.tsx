import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/company';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-2"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#FFD93D] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
            <span>5-Star Loved By Parents & Retailers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Happy Stories From Young Wheels Families
          </h2>
          <p className="text-slate-600 font-medium text-sm">
            Read real feedback from parents across India and our wholesale dealer network.
          </p>
        </motion.div>

        {/* Testimonial Card Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-tr from-[#FFF9EE] via-white to-[#EBFBFA] rounded-[36px] border-4 border-[#FFE8B5] p-6 sm:p-10 shadow-xl relative"
        >
          
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#FFD93D]/30" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Avatar & User Details */}
            <div className="md:col-span-4 text-center space-y-3">
              <div className="relative inline-block">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-24 h-24 rounded-3xl object-cover mx-auto border-4 border-white shadow-md"
                />
                <span className="absolute -bottom-2 -right-2 bg-[#FFD93D] text-slate-900 text-xs px-2 py-0.5 rounded-full font-black flex items-center gap-0.5">
                  <span>4.9</span>
                  <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
                </span>
              </div>

              <div>
                <h4 className="font-heading font-black text-lg text-slate-900">{current.name}</h4>
                <p className="text-xs font-bold text-[#FF6B6B]">{current.role}</p>
                <p className="text-[11px] text-slate-500 font-medium">{current.location}</p>
              </div>

              <div className="inline-block bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
                Purchased: {current.productBought}
              </div>
            </div>

            {/* Testimonial Comment & Rating */}
            <div className="md:col-span-8 space-y-4">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic">
                “{current.comment}”
              </p>

              {/* Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <span className="text-xs font-bold text-slate-400">
                  Story {currentIndex + 1} of {TESTIMONIALS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-[#FFD93D] transition-colors border border-slate-200 shadow-xs"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-[#FFD93D] transition-colors border border-slate-200 shadow-xs"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, Smile, ArrowRight, RefreshCw, CheckCircle2, Target, Car, Footprints } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ToyFinderProps {
  onQuickView: (product: Product) => void;
  onAddToEnquiry: (product: Product) => void;
}

export const ToyFinder: React.FC<ToyFinderProps> = ({ onQuickView, onAddToEnquiry }) => {
  const [ageGroup, setAgeGroup] = useState<string>('2-4');
  const [goal, setGoal] = useState<string>('twist');
  const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

  const handleFind = () => {
    let matches = PRODUCTS.filter(p => {
      if (goal === 'twist') return p.category === 'magic-cars';
      if (goal === 'walk') return p.category === 'baby-walkers';
      if (goal === 'potty') return p.category === 'potty-chairs';
      if (goal === 'rock') return p.category === 'rocking-animals';
      return true;
    });

    if (matches.length === 0) {
      matches = PRODUCTS.slice(0, 3);
    }
    setMatchedProducts(matches.slice(0, 3));
  };

  React.useEffect(() => {
    handleFind();
  }, [ageGroup, goal]);

  const handleGoalChange = (newGoal: string) => {
    setGoal(newGoal);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#4ECDC4', '#FF6B6B', '#FFD93D']
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#FFF4E0] via-[#FFEBEB] to-[#F0EBFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[36px] border-4 border-[#FFE8B5] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFD93D] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                Interactive Recommender
              </div>

              <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight flex items-center gap-2 flex-wrap">
                <span>Find the Perfect Toy for Your Toddler</span>
                <Target className="w-7 h-7 text-[#FF6B6B] shrink-0" />
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Answer 2 quick questions to get instant personalized toy suggestions certified safe for your kid’s age & stage!
              </p>

              {/* Step 1: Age Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  1. How old is your child?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: '6-18m', label: '6 - 18 Mos' },
                    { id: '1-3y', label: '1 - 3 Yrs' },
                    { id: '2-4y', label: '2 - 4 Yrs' },
                    { id: '4-6y', label: '4 - 6 Yrs' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setAgeGroup(item.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold font-heading border-2 transition-all ${
                        ageGroup === item.id
                          ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Goal / Play Type */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  2. What play activity are you looking for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'twist', label: '360° Magic Swing Car', icon: <Car className="w-4 h-4 text-[#FF6B6B] shrink-0" /> },
                    { id: 'walk', label: 'First Steps Baby Walker', icon: <Footprints className="w-4 h-4 text-[#4ECDC4] shrink-0" /> },
                    { id: 'potty', label: 'Fun Potty Trainer', icon: <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0" /> },
                    { id: 'rock', label: 'Rocking & Riding', icon: <Smile className="w-4 h-4 text-[#EC4899] shrink-0" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleGoalChange(item.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left border-2 transition-all flex items-center gap-2 ${
                        goal === item.id
                          ? 'bg-[#4ECDC4] text-slate-900 border-[#4ECDC4] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Matched Product Cards */}
            <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-4 sm:p-6 border-2 border-[#FFE8B5]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Top Recommended Matches ({matchedProducts.length})</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {matchedProducts.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-white rounded-2xl border border-slate-200 p-3 flex flex-col justify-between hover:shadow-lg transition-all"
                  >
                    <div>
                      <div className="h-28 w-full bg-slate-50 rounded-xl p-2 mb-2 flex items-center justify-center">
                        <img src={p.image} alt={p.name} className="h-full object-contain" />
                      </div>
                      <h4 className="font-heading font-extrabold text-xs text-slate-900 line-clamp-1">{p.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium line-clamp-1">{p.modelCode} • {p.ageRange}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                      <button
                        onClick={() => onQuickView(p)}
                        className="w-full py-1.5 bg-[#FFD93D] text-slate-900 font-heading font-bold text-[11px] rounded-lg hover:bg-[#ffe366] transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

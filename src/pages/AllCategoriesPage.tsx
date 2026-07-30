import React from 'react';
import { CategoryId, Product } from '../types';
import { Sparkles, ArrowRight, Car, Footprints, Smile, ShieldCheck, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface AllCategoriesPageProps {
  onSelectCategory: (catId: CategoryId) => void;
  products?: Product[];
}

export interface CategoryCardItem {
  id: CategoryId;
  name: string;
  subtitle: string;
  bgHex: string;
  bgClass: string;
  textClass: string;
  doodleType: 'scribble' | 'cloud';
  image: string;
  modelCountText: string;
}

export const ALL_CATEGORY_CARDS: CategoryCardItem[] = [
  {
    id: 'ride-ons',
    name: 'Ride-Ons &\nPush Cars',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#6EE7B7',
    bgClass: 'bg-[#6EE7B7]',
    textClass: 'text-slate-900',
    doodleType: 'cloud',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=600',
    modelCountText: '13 Models'
  },
  {
    id: 'kick-scooters',
    name: 'Kick\nScooters',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#86EFAC',
    bgClass: 'bg-[#86EFAC]',
    textClass: 'text-slate-900',
    doodleType: 'cloud',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    modelCountText: '8 Models'
  },
  {
    id: 'baby-walkers',
    name: 'Baby\nWalkers',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#A3E635',
    bgClass: 'bg-[#A3E635]',
    textClass: 'text-slate-900',
    doodleType: 'scribble',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600',
    modelCountText: '3 Models'
  },
  {
    id: 'swing-cars',
    name: 'Swing Cars &\nMagic Cars',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#FEF08A',
    bgClass: 'bg-[#FEF08A]',
    textClass: 'text-slate-900',
    doodleType: 'cloud',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    modelCountText: '12 Models'
  },
  {
    id: 'tricycles',
    name: 'Kids\nTricycles',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#67E8F9',
    bgClass: 'bg-[#67E8F9]',
    textClass: 'text-slate-900',
    doodleType: 'scribble',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=600',
    modelCountText: '11 Models'
  },
  {
    id: 'potty-trainers',
    name: 'Potty Chairs &\nTrainers',
    subtitle: 'For Little Feet and Big Adventures',
    bgHex: '#FCA5A5',
    bgClass: 'bg-[#FCA5A5]',
    textClass: 'text-slate-900',
    doodleType: 'scribble',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
    modelCountText: '8 Models'
  }
];

export const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({ onSelectCategory }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Top Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#FFF4B0] border border-[#FFE8B5] px-4 py-1.5 rounded-full text-xs font-black text-slate-800 shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
          <span>Explore All Factory Categories</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
          Explore Our <span className="text-[#FF6B6B]">Kids Toy Categories</span>
        </h1>
        <p className="text-slate-600 font-semibold text-xs sm:text-sm">
          From gravity-driven swing cars to ergonomic walkers, rocking animals & potty trainers — engineered for safety, durability, and endless play.
        </p>
      </div>

      {/* 8 Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALL_CATEGORY_CARDS.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative rounded-[32px] p-5 sm:p-6 cursor-pointer border-2 border-dashed border-slate-800/15 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between min-h-[230px] group ${cat.bgClass}`}
          >
            {/* Background SVG Doodle */}
            {cat.doodleType === 'scribble' ? (
              <svg
                className="absolute bottom-4 left-4 w-20 h-10 text-slate-800/15 pointer-events-none"
                viewBox="0 0 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M10 25 Q 30 5, 50 25 T 90 25" />
              </svg>
            ) : (
              <svg
                className="absolute bottom-4 left-4 w-14 h-10 text-slate-800/15 pointer-events-none"
                viewBox="0 0 64 48"
                fill="currentColor"
              >
                <path d="M18 36h28a14 14 0 0 0 4-27.4 18 18 0 0 0-33-4A12 12 0 0 0 18 36z" />
              </svg>
            )}

            {/* Left Content */}
            <div className="relative z-10 space-y-1 pr-32">
              <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 leading-tight whitespace-pre-line">
                {cat.name}
              </h2>
              <p className="text-[11px] font-bold text-slate-800/70 leading-snug">
                {cat.subtitle}
              </p>
            </div>

            {/* Model Badge CTA */}
            <div className="relative z-10 pt-4 flex items-center gap-1 text-xs font-black text-slate-900">
              <span className="bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-900/10 shadow-2xs group-hover:bg-white transition-colors flex items-center gap-1">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Right Rounded Corner Image Container */}
            <div className="absolute right-3 bottom-3 w-28 h-24 sm:w-32 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/90 shadow-md bg-white flex items-center justify-center pointer-events-none">
              <img
                src={cat.image}
                alt={cat.name.replace('\n', ' ')}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

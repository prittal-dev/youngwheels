import React from 'react';
import { 
  Car, 
  Footprints, 
  Sparkles, 
  Smile, 
  ArrowUpRight, 
  ChevronRight,
  ShieldAlert,
  Zap,
  Bike
} from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data/company';
import { CategoryId } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (catId: CategoryId) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {

  const getCategoryTheme = (id: CategoryId) => {
    switch (id) {
      case 'magic-cars':
        return {
          cardBg: 'bg-gradient-to-br from-[#FFF9E6] to-[#FFE399]/40',
          borderColor: 'border-[#FFD93D]',
          badgeBg: 'bg-[#FFD93D] text-slate-900',
          btnBg: 'bg-[#FF6B6B] hover:bg-[#FF5252] text-white',
          iconBg: 'bg-[#FFF0F0] text-[#FF6B6B]',
          icon: <Car className="w-5 h-5 text-[#FF6B6B]" />,
        };
      case 'baby-walkers':
        return {
          cardBg: 'bg-gradient-to-br from-[#EBFBFA] to-[#A8E6CF]/30',
          borderColor: 'border-[#4ECDC4]',
          badgeBg: 'bg-[#4ECDC4] text-slate-900',
          btnBg: 'bg-[#4ECDC4] hover:bg-[#3dbdb4] text-slate-900',
          iconBg: 'bg-[#EBFBFA] text-[#4ECDC4]',
          icon: <Footprints className="w-5 h-5 text-[#4ECDC4]" />,
        };
      case 'riders':
        return {
          cardBg: 'bg-gradient-to-br from-[#E6F4EA] to-[#A7F3D0]/30',
          borderColor: 'border-[#10B981]',
          badgeBg: 'bg-[#10B981] text-white',
          btnBg: 'bg-[#10B981] hover:bg-[#059669] text-white',
          iconBg: 'bg-[#E6F4EA] text-[#10B981]',
          icon: <Car className="w-5 h-5 text-[#10B981]" />,
        };
      case 'potty-chairs':
        return {
          cardBg: 'bg-gradient-to-br from-[#FFF0F0] to-[#FECDD3]/30',
          borderColor: 'border-[#FCA5A5]',
          badgeBg: 'bg-[#FCA5A5] text-slate-900',
          btnBg: 'bg-[#EF4444] hover:bg-[#DC2626] text-white',
          iconBg: 'bg-[#FFF0F0] text-[#EF4444]',
          icon: <Sparkles className="w-5 h-5 text-[#EF4444]" />,
        };
      case 'electric-rideons':
        return {
          cardBg: 'bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA]/40',
          borderColor: 'border-[#F97316]',
          badgeBg: 'bg-[#F97316] text-white',
          btnBg: 'bg-[#F97316] hover:bg-[#EA580C] text-white',
          iconBg: 'bg-[#FFF7ED] text-[#F97316]',
          icon: <Zap className="w-5 h-5 text-[#F97316]" />,
        };
      case 'rocking-animals':
        return {
          cardBg: 'bg-gradient-to-br from-[#FFF0F5] to-[#FFB6C1]/30',
          borderColor: 'border-[#FFB6C1]',
          badgeBg: 'bg-[#FFB6C1] text-slate-900',
          btnBg: 'bg-[#EC4899] hover:bg-[#DB2777] text-white',
          iconBg: 'bg-[#FFF0F5] text-[#EC4899]',
          icon: <Smile className="w-5 h-5 text-[#EC4899]" />,
        };
      case 'tri-cycles':
        return {
          cardBg: 'bg-gradient-to-br from-[#ECFEFF] to-[#A5F3FC]/30',
          borderColor: 'border-[#06B6D4]',
          badgeBg: 'bg-[#06B6D4] text-white',
          btnBg: 'bg-[#06B6D4] hover:bg-[#0891B2] text-white',
          iconBg: 'bg-[#ECFEFF] text-[#06B6D4]',
          icon: <Bike className="w-5 h-5 text-[#06B6D4]" />,
        };
      case 'kick-scooters':
        return {
          cardBg: 'bg-gradient-to-br from-[#F0FDF4] to-[#BBF7D0]/30',
          borderColor: 'border-[#22C55E]',
          badgeBg: 'bg-[#22C55E] text-white',
          btnBg: 'bg-[#22C55E] hover:bg-[#16A34A] text-white',
          iconBg: 'bg-[#F0FDF4] text-[#22C55E]',
          icon: <Sparkles className="w-5 h-5 text-[#22C55E]" />,
        };
      default:
        return {
          cardBg: 'bg-gradient-to-br from-[#FFF9E6] to-[#FFE399]/40',
          borderColor: 'border-[#FFD93D]',
          badgeBg: 'bg-[#FFD93D] text-slate-900',
          btnBg: 'bg-[#FF6B6B] hover:bg-[#FF5252] text-white',
          iconBg: 'bg-[#FFF0F0] text-[#FF6B6B]',
          icon: <Car className="w-5 h-5 text-[#FF6B6B]" />,
        };
    }
  };

  return (
    <section className="py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFE399] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 uppercase tracking-wider">
            Explore Toy World
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Explore Toys By Category
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            From 360° twist magic cars to ergonomic potty chairs & baby walkers — designed for absolute fun, physical learning, and child safety.
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const theme = getCategoryTheme(cat.id);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-[32px] border-3 ${theme.borderColor} ${theme.cardBg} p-6 toy-card cursor-pointer flex flex-col justify-between overflow-hidden transition-all`}
              >
                {/* Top Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${theme.badgeBg}`}>
                      {cat.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${theme.iconBg} flex items-center justify-center shadow-xs border border-white/60 group-hover:scale-110 transition-transform`}>
                      {theme.icon}
                    </div>
                  </div>

                  {/* Category Image Frame */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-white/80 mb-4 border border-slate-100 shadow-xs group-hover:shadow-md transition-all">
                    <img
                      src={cat.bannerImage}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 text-white text-xs font-bold flex items-center justify-between">
                      <span>{cat.itemCount} Models Available</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FFD93D]" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-black font-heading text-slate-900 group-hover:text-[#FF6B6B] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                    {cat.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <button
                  className={`w-full py-3 px-4 rounded-2xl font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all ${theme.btnBg}`}
                >
                  <span>Explore {cat.name}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

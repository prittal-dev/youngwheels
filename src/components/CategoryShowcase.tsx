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
      case 'ride-ons':
      case 'riders':
      case 'electric-rideons':
      case 'rocking-animals':
        return {
          cardBg: 'bg-gradient-to-br from-[#F3E8FF] via-[#FAF5FF] to-[#E9D5FF]/60',
          borderColor: 'border-[#8B5CF6]',
          badgeBg: 'bg-[#8B5CF6] text-white',
          btnBg: 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white',
          iconBg: 'bg-[#F3E8FF] text-[#8B5CF6]',
          icon: <Car className="w-5 h-5 text-[#8B5CF6]" />,
        };
      case 'kick-scooters':
        return {
          cardBg: 'bg-gradient-to-br from-[#ECFDF5] via-[#F0FDF4] to-[#A7F3D0]/60',
          borderColor: 'border-[#10B981]',
          badgeBg: 'bg-[#10B981] text-white',
          btnBg: 'bg-[#10B981] hover:bg-[#059669] text-white',
          iconBg: 'bg-[#ECFDF5] text-[#10B981]',
          icon: <Sparkles className="w-5 h-5 text-[#10B981]" />,
        };
      case 'baby-walkers':
        return {
          cardBg: 'bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD]/60',
          borderColor: 'border-[#0284C7]',
          badgeBg: 'bg-[#0284C7] text-white',
          btnBg: 'bg-[#0284C7] hover:bg-[#0369A1] text-white',
          iconBg: 'bg-[#E0F2FE] text-[#0284C7]',
          icon: <Footprints className="w-5 h-5 text-[#0284C7]" />,
        };
      case 'swing-cars':
      case 'magic-cars':
        return {
          cardBg: 'bg-gradient-to-br from-[#FEF9C3] via-[#FFFBEB] to-[#FDE68A]/60',
          borderColor: 'border-[#F59E0B]',
          badgeBg: 'bg-[#F59E0B] text-slate-900 font-black',
          btnBg: 'bg-[#D97706] hover:bg-[#B45309] text-white',
          iconBg: 'bg-[#FEF9C3] text-[#D97706]',
          icon: <Car className="w-5 h-5 text-[#D97706]" />,
        };
      case 'tricycles':
      case 'tri-cycles':
        return {
          cardBg: 'bg-gradient-to-br from-[#FFEDD5] via-[#FFF7ED] to-[#FED7AA]/60',
          borderColor: 'border-[#F97316]',
          badgeBg: 'bg-[#F97316] text-white',
          btnBg: 'bg-[#EA580C] hover:bg-[#C2410C] text-white',
          iconBg: 'bg-[#FFEDD5] text-[#EA580C]',
          icon: <Bike className="w-5 h-5 text-[#EA580C]" />,
        };
      case 'potty-trainers':
      case 'potty-chairs':
        return {
          cardBg: 'bg-gradient-to-br from-[#FCE7F3] via-[#FDF2F8] to-[#FBCFE8]/60',
          borderColor: 'border-[#EC4899]',
          badgeBg: 'bg-[#EC4899] text-white',
          btnBg: 'bg-[#DB2777] hover:bg-[#BE185D] text-white',
          iconBg: 'bg-[#FCE7F3] text-[#DB2777]',
          icon: <Smile className="w-5 h-5 text-[#DB2777]" />,
        };
      default:
        return {
          cardBg: 'bg-gradient-to-br from-[#F3E8FF] via-[#FAF5FF] to-[#E9D5FF]/60',
          borderColor: 'border-[#8B5CF6]',
          badgeBg: 'bg-[#8B5CF6] text-white',
          btnBg: 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white',
          iconBg: 'bg-[#F3E8FF] text-[#8B5CF6]',
          icon: <Car className="w-5 h-5 text-[#8B5CF6]" />,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

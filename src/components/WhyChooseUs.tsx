import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Truck, 
  Award, 
  Factory, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_BADGES, COMPANY_DETAILS } from '../data/company';

export const WhyChooseUs: React.FC = () => {
  const FEATURES = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FF6B6B]" />,
      title: '100% Non-Toxic & Safe',
      desc: 'Crafted exclusively using virgin, BPA-free ABS & polypropylene materials. Smooth rounded safety edges ensure safe play for toddlers.',
      colorBg: 'bg-[#FFF0F0]',
      badge: 'Certified Safe'
    },
    {
      icon: <Award className="w-8 h-8 text-[#4ECDC4]" />,
      title: 'Heavy Duty Durability',
      desc: 'Engineered with reinforced steel axels, precision steel bearings, and impact-resistant chassis to handle active toddler energy.',
      colorBg: 'bg-[#EBFBFA]',
      badge: 'Built to Last'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#8B5CF6]" />,
      title: 'Designed for Learning & Balance',
      desc: 'Our 360° twist cars and walkers promote essential gross motor skills, leg strength, spatial coordination, and joyful physical exercise.',
      colorBg: 'bg-[#F5F0FF]',
      badge: 'Pediatric Approved'
    },
    {
      icon: <Factory className="w-8 h-8 text-[#F59E0B]" />,
      title: 'Direct Delhi Factory Wholesale',
      desc: 'Manufactured in our New Delhi facility since 2019. Enjoy unbeatable factory direct prices, custom branding options, and quick dispatch.',
      colorBg: 'bg-[#FFF9E6]',
      badge: 'Factory Rates'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFFDF9] relative overflow-hidden">
      
      {/* Background Subtle Accent Circles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FFD93D]/15 rounded-full blur-3xl pointer-events-none animate-float-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ECDC4]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#A8E6CF] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 uppercase tracking-wider">
            Trust & Quality First
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
            Why Parents & Retailers Love Young Wheels
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            We don’t just make toys — we manufacture trusted childhood companions that encourage active play and give parents complete peace of mind.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-[28px] p-6 border-2 border-[#FFE8B5] shadow-xs hover:shadow-xl transition-all toy-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${feat.colorBg} flex items-center justify-center shadow-xs`}>
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black font-heading text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#FF6B6B]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Young Wheels Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Badges Strip */}
        <div className="mt-12 bg-white rounded-3xl border-2 border-[#FFE8B5] p-6 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E6FAD8] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{badge.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { COMPANY_DETAILS, TRUST_BADGES } from '../data/company';
import { ShieldCheck, Heart, Sparkles, Award, Factory, CheckCircle2, ArrowRight, Target, Cog } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onOpenWholesaleModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWholesaleModal }) => {
  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD93D] px-4 py-1.5 rounded-full text-xs font-black text-slate-900 uppercase tracking-wider animate-bounce-slow">
            Established 2019 • Pooth Khurd, New Delhi
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight flex items-center justify-center gap-2 flex-wrap">
            <span>Crafting Safe, Joyful & Durable Toys for Growing Minds</span>
            <Sparkles className="w-8 h-8 text-[#FF6B6B] shrink-0 animate-wiggle" />
          </h1>

          <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
            Welcome to <strong className="text-slate-900 font-bold">Young Wheels</strong> — India’s trusted manufacturer of kids ride-on magic cars, baby walkers, potty chairs, and rocking animals.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-tr from-[#FFF9EE] via-white to-[#EBFBFA] rounded-[36px] border-4 border-[#FFE8B5] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-black text-[#FF6B6B] uppercase tracking-wider">
              Our Journey & Values
            </span>

            <h2 className="text-3xl font-black font-heading text-slate-900">
              Innovating Kids Mobility Toys Since 2019
            </h2>

            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Founded in New Delhi, Young Wheels was born out of a passionate commitment to replace fragile, chemical-laden toys with high-quality, non-toxic, ergonomic ride-ons.
            </p>

            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Our state-of-the-art facility in <strong className="text-slate-900 font-bold">Pooth Khurd, New Delhi</strong> manufactures every toy using 100% virgin ABS and food-grade plastic. From our iconic 360° twist Bear Rider Swing Car to our 2-in-1 Dino Rocker, every product undergoes rigorous weight capacity and safety testing before reaching families and toy stores across India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <div className="text-2xl font-black font-heading text-[#FF6B6B]">100%</div>
                <div className="text-xs font-bold text-slate-700">Virgin Non-Toxic Plastic</div>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <div className="text-2xl font-black font-heading text-[#4ECDC4]">200+</div>
                <div className="text-xs font-bold text-slate-700">Pan-India Cities Served</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-[28px] overflow-hidden border-4 border-white shadow-xl bg-slate-100 h-80">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
                alt="Young Wheels Factory Manufactured Toy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#FFF9EE] rounded-[32px] border-3 border-[#FFD93D] p-8 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD93D] text-slate-900 flex items-center justify-center font-black text-xl shadow-xs">
              <Target className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-2xl font-black font-heading text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {COMPANY_DETAILS.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#EBFBFA] rounded-[32px] border-3 border-[#4ECDC4] p-8 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#4ECDC4] text-slate-900 flex items-center justify-center font-black text-xl shadow-xs">
              <Award className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-2xl font-black font-heading text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {COMPANY_DETAILS.vision}
            </p>
          </div>

        </div>

        {/* Manufacturing Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black font-heading text-slate-900 flex items-center justify-center gap-2">
              <span>How We Manufacture Safe Toys</span>
              <Cog className="w-7 h-7 text-[#FF6B6B] animate-spin-slow shrink-0" />
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Every Young Wheels toy follows a 4-step precision manufacturing pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Ergonomic CAD Design', desc: 'Designed for toddler spinal support, smooth 360° steering, and anti-tip stability.' },
              { step: '02', title: 'Virgin ABS Molding', desc: 'Zero recycled toxic plastic. Pure food-grade ABS resin for bright colors and durability.' },
              { step: '03', title: 'Precision Axle Assembly', desc: 'Heavy-duty steel axles & silent polyurethane wheels fitted for smooth glide.' },
              { step: '04', title: 'Quality & Drop Testing', desc: 'Weight tested up to 35 kg and drop-checked to guarantee zero fragile breaks.' },
            ].map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border-2 border-[#FFE8B5] shadow-2xs space-y-2 relative">
                <span className="text-3xl font-black font-heading text-[#FFD93D]">{st.step}</span>
                <h4 className="font-heading font-black text-base text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Wholesale Action */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-[36px] border-4 border-[#FFD93D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black font-heading">Partner With India’s Top Ride-On Manufacturer</h3>
            <p className="text-xs text-slate-300 font-medium mt-1">Get factory direct quotes and master catalogs for bulk orders.</p>
          </div>

          <button
            onClick={onOpenWholesaleModal}
            className="py-3.5 px-8 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-bold text-xs rounded-2xl shadow-lg shrink-0"
          >
            Request Wholesale Dealer Rates
          </button>
        </div>

      </div>
    </div>
  );
};

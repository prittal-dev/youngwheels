import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Home, 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Sparkles, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Car
} from 'lucide-react';
import thankYouDuckImg from '../assets/thankyou_duck.jpg';
import { COMPANY_DETAILS } from '../data/company';

interface ThankYouPageProps {
  onNavigateTab: (tab: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigateTab }) => {
  useEffect(() => {
    // Trigger celebratory confetti on mount
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#FFD93D', '#FF6B6B', '#4ECDC4', '#25D366', '#8B5CF6']
    });
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Background Soft Playful Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#FFD93D]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4ECDC4]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Thank You Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-tr from-[#FFF9EE] via-white to-[#E6FAD8]/50 rounded-[36px] border-4 border-[#FFE8B5] p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Side: Celebrating Duckling Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-white group">
              <img 
                src={thankYouDuckImg} 
                alt="YoungWheels Thank You Celebration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#25D366] text-white font-black px-3 py-1 rounded-full text-xs shadow-xs uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Inquiry Confirmed</span>
              </div>
            </div>
          </div>

          {/* Right Side: Thank You Text & Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E6FAD8] text-[#15803D] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-[#86EFAC] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#25D366]" />
              <span>YoungWheels Factory Desk Response</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
              Thank You for Choosing <span className="text-[#FF6B6B]">Young Wheels</span>! 🎉
            </h1>

            <h2 className="text-lg sm:text-xl font-bold text-slate-700 font-heading">
              Your inquiry has been successfully received by our Pooth Khurd, New Delhi factory team!
            </h2>

            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Whether you are looking for single direct orders or bulk wholesale pricing for your toy business, our customer care desk will connect with you shortly with complete catalog details & competitive rates.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team! I submitted an inquiry on your website and would like to chat.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto toy-button bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>INSTANT WHATSAPP CHAT</span>
              </a>

              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTab('all-categories');
                }}
                className="w-full sm:w-auto toy-button bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-heading font-bold text-xs sm:text-sm px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Car className="w-4 h-4 text-white" />
                <span>CONTINUE EXPLORING TOYS</span>
              </a>
            </div>

          </div>
        </motion.div>

        {/* 3-Step Next Steps & Factory Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border-2 border-[#FFE8B5] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E6FAD8] text-[#25D366] flex items-center justify-center font-black">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">Step 1: Received</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Your message is logged in our central system with full requirement details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#FFE8B5] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center font-black">
              <Clock className="w-5 h-5 text-[#D97706]" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">Step 2: Desk Review</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Our New Delhi factory team checks stock availability, colors, and direct discount rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#FFE8B5] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-black">
              <Phone className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">Step 3: Direct Connect</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We connect via WhatsApp or Phone within 2-4 operating hours with complete guidance.
            </p>
          </div>
        </div>

        {/* Return to Home Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-4 border-[#FFD93D] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-black text-xl text-white">Want to return to main homepage?</h3>
            <p className="text-xs text-slate-300 font-medium">Browse our full 55+ model catalog or discover our manufacturing values.</p>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateTab('home');
            }}
            className="px-6 py-3 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-black text-xs sm:text-sm rounded-2xl shadow-md shrink-0 flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-slate-900" />
            <span>GO TO HOME PAGE</span>
          </a>
        </div>

      </div>
    </div>
  );
};

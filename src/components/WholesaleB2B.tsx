import React from 'react';
import { Building2, MessageCircle, FileText, CheckCircle2, ArrowRight, Factory } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data/company';

interface WholesaleB2BProps {
  onOpenWholesaleModal: () => void;
}

export const WholesaleB2B: React.FC<WholesaleB2BProps> = ({ onOpenWholesaleModal }) => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Accent Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B6B]/20 rounded-full blur-3xl pointer-events-none animate-float-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD93D]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-[36px] p-8 sm:p-12 shadow-2xl"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                Factory Direct B2B Wholesale
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white flex items-center gap-2 flex-wrap">
                <span>Collaborate With Young Wheels Factory</span>
                <Factory className="w-8 h-8 text-[#FFD93D] shrink-0" />
              </h2>

              <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
                Are you a toy retailer, online seller, or regional distributor? Partner directly with our Pooth Khurd, New Delhi manufacturing plant for unbeatable wholesale pricing, custom carton packaging, and fast dispatch across India!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD93D]" />
                  <span>Tiered Volume Wholesale Discounts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#4ECDC4]" />
                  <span>Custom OEM Branding & Color Batches</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B6B]" />
                  <span>GST Invoice & Transport Logistics</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B8EA]" />
                  <span>Zero Defect Factory Quality Check</span>
                </div>
              </div>

            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 shadow-xl border-4 border-[#FFD93D] space-y-4">
              
              <div>
                <span className="text-xs font-black text-[#FF6B6B] uppercase tracking-wider">
                  Quick Wholesale Quotation
                </span>
                <h3 className="text-xl font-black font-heading mt-1 flex items-center gap-2">
                  <span>Request Dealer Price List</span>
                  <FileText className="w-5 h-5 text-[#FF6B6B] shrink-0" />
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Get our complete master catalog with wholesale tier rates sent directly to your WhatsApp or Email.
                </p>
              </div>

              <button
                onClick={onOpenWholesaleModal}
                className="w-full py-4 bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-heading font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
              >
                <FileText className="w-4 h-4" />
                <span>Fill Dealer Inquiry Form</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Wholesale Dept! I am a toy dealer interested in buying Swing Cars & Walkers in bulk. Please share dealer catalog.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp B2B Desk ({COMPANY_DETAILS.whatsapp})</span>
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

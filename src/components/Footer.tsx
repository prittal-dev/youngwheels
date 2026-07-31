import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Car, 
  ExternalLink,
  ArrowUp
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/company';
import logoImg from '../../assets/logo.png';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenWholesaleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenWholesaleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden pt-16 pb-12 border-t-4 border-[#FFD93D]">
      
      {/* Background Subtle Blobs */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#FFD93D]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4ECDC4]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-2">
              <div className="bg-white p-2 rounded-2xl inline-block shadow-md">
                <img 
                  src={logoImg} 
                  alt="Young Wheels" 
                  className="h-12 w-auto object-contain" 
                />
              </div>
              <div className="font-heading flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider pt-1">
                <span className="text-[#60A5FA]">Quality</span>
                <span className="text-slate-500">•</span>
                <span className="text-[#F472B6]">Trust</span>
                <span className="text-slate-500">•</span>
                <span className="text-[#34D399]">Care</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Delhi-based manufacturer & wholesaler of premium non-toxic ride-on toys, 360° magic swing cars, baby walkers, potty chairs & rocking animals. Bringing childhood joy & learning to families across India since 2019.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#25D366] text-white hover:opacity-90 transition-opacity shadow-xs"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="p-2.5 rounded-xl bg-slate-800 text-[#FFD93D] hover:bg-slate-700 transition-colors shadow-xs"
                title="Call Factory Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="p-2.5 rounded-xl bg-slate-800 text-[#4ECDC4] hover:bg-slate-700 transition-colors shadow-xs"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Toy Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#FFD93D] uppercase tracking-wider">
              Toy Categories
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigateTab(cat.id)}
                    className="hover:text-[#FF6B6B] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FFD93D]">›</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#4ECDC4] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavigateTab('home')} className="hover:text-[#FF6B6B] transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('about')} className="hover:text-[#FF6B6B] transition-colors">
                  About Our Factory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('blog')} className="hover:text-[#FF6B6B] transition-colors">
                  Blog & Buying Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('social')} className="hover:text-[#DD2A7B] transition-colors flex items-center gap-1">
                  <span>Social Hub (Instagram)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('contact')} className="hover:text-[#FF6B6B] transition-colors">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('admin')} className="hover:text-slate-200 transition-colors text-slate-400 text-[11px]">
                  Factory Admin Portal
                </button>
              </li>
              <li>
                <button onClick={onOpenWholesaleModal} className="hover:text-[#FFD93D] transition-colors font-bold text-[#FFD93D]">
                  Dealer Bulk Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Factory Address & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs font-medium text-slate-300">
            <h4 className="font-heading font-bold text-sm text-[#FF6B6B] uppercase tracking-wider">
              Factory Location
            </h4>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#FFD93D] shrink-0 mt-0.5" />
              <p className="leading-relaxed">{COMPANY_DETAILS.address}</p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Phone className="w-4 h-4 text-[#4ECDC4] shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#EC4899] shrink-0" />
              <span className="truncate">{COMPANY_DETAILS.email}</span>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FFD93D] hover:underline bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700"
              >
                <span>View Factory on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Young Wheels</strong>. All Rights Reserved. Manufactured in Pooth Khurd, New Delhi – 110039.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-slate-800 text-[#4ECDC4] px-2.5 py-1 rounded-full border border-slate-700">
              100% Non-Toxic ABS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 text-white hover:bg-[#FF6B6B] transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

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
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/company';
import logoImg from '../../assets/logo.png';
import msmeImg from '../assets/msme.png';
import isoImg from '../assets/iso.png';


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
              <div className="bg-white p-1 rounded-xl inline-block shadow-md">
                <img 
                  src={logoImg} 
                  alt="Young Wheels" 
                  className="h-16 w-auto object-contain" 
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

            <div className="pt-2 flex items-center gap-2.5 flex-wrap">
              {/* 1. Facebook */}
              <a
                href="https://www.facebook.com/people/Young-Wheels/61577800809594/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1877F2] text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 fill-white" />
              </a>

              {/* 2. Instagram */}
              <a
                href="https://www.instagram.com/youngwheelsindia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>

              {/* 3. LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0A66C2] text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-white" />
              </a>

              {/* 4. YouTube */}
              <a
                href="https://www.youtube.com/@youngwheelss"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FF0000] text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs flex items-center justify-center"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* 5. WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#25D366] text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs flex items-center justify-center"
                title="WhatsApp Direct"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.74.949 3.71 1.45 5.71 1.451h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* 6. Phone */}
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="p-2.5 rounded-xl bg-slate-800 text-[#FFD93D] hover:bg-slate-700 hover:scale-105 transition-all shadow-xs"
                title="Call Factory Desk"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* 7. Email */}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="p-2.5 rounded-xl bg-slate-800 text-[#4ECDC4] hover:bg-slate-700 hover:scale-105 transition-all shadow-xs"
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

            {/* MSME & ISO Logos in the empty space under the category links */}
            <div className="pt-3 flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-700/50 flex items-center justify-center hover:scale-105 transition-transform" title="MSME Registered Enterprise">
                <img src={msmeImg} alt="MSME Certified" className="h-9 w-auto object-contain" />
              </div>
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-700/50 flex items-center justify-center hover:scale-105 transition-transform" title="ISO 9001:2015 Quality System">
                <img src={isoImg} alt="ISO Certified 9001:2015" className="h-9 w-auto object-contain" />
              </div>
            </div>
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
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('blog')} className="hover:text-[#FF6B6B] transition-colors">
                  Blog & Buying Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('events')} className="hover:text-[#FF6B6B] transition-colors flex items-center gap-1 font-bold text-[#FFD93D]">
                  <span>Events 🎟️</span>
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
                <button onClick={onOpenWholesaleModal} className="hover:text-[#FFD93D] transition-colors font-bold text-[#FFD93D]">
                  Dealer Bulk Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Factory Address & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs font-medium text-slate-300">
            <h4 className="font-heading font-bold text-sm text-[#FF6B6B] uppercase tracking-wider">
              Factory Location & Tax ID
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

            {/* Legal & Government Registrations Card */}
            <div className="bg-slate-800/90 rounded-2xl p-3 border border-slate-700 space-y-2 text-[11px] font-bold text-slate-300 mt-2 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-white px-1.5 py-1 rounded-lg">
                    <img src={msmeImg} alt="MSME" className="h-5 w-auto object-contain" />
                  </div>
                  <div className="bg-white px-1.5 py-1 rounded-lg">
                    <img src={isoImg} alt="ISO" className="h-5 w-auto object-contain" />
                  </div>
                </div>
                <span className="text-[10px] text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded-full border border-[#34D399]/20 font-semibold">Verified Unit</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#FFD93D]">MSME NO:</span>
                <span className="text-white font-mono">{COMPANY_DETAILS.msmeNo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#4ECDC4]">GSTIN/UIN:</span>
                <span className="text-white font-mono">{COMPANY_DETAILS.gstNo}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5 border-t border-slate-700/60">
                <span>State Name: <strong className="text-slate-200">{COMPANY_DETAILS.stateName}</strong></span>
                <span>Code: <strong className="text-[#FF6B6B]">{COMPANY_DETAILS.stateCode}</strong></span>
              </div>
            </div>

            <div className="pt-1">
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
            © {new Date().getFullYear()} <strong className="text-white">Young Wheels</strong>. All Rights Reserved. 
            
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] bg-slate-800 text-[#4ECDC4] px-2.5 py-1 rounded-full border border-slate-700">
              Made in India with Trust & Excellence.
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

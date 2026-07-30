import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  Car, 
  Footprints, 
  Smile, 
  ChevronDown,
  Building2,
  Info,
  Home,
  Flag,
  Cog,
  PhoneCall,
  ShieldCheck,
  LayoutGrid,
  Zap,
  Bike,
  Instagram,
  BookOpen
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/company';
import { CategoryId } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  enquiryCount: number;
  onOpenEnquiryDrawer: () => void;
  onOpenWholesaleModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  enquiryCount,
  onOpenEnquiryDrawer,
  onOpenWholesaleModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'ride-ons':
      case 'riders':
      case 'electric-rideons':
      case 'rocking-animals':
        return <Car className="w-4 h-4 text-[#10B981]" />;
      case 'swing-cars':
      case 'magic-cars':
        return <Car className="w-4 h-4 text-[#FF6B6B]" />;
      case 'baby-walkers':
        return <Footprints className="w-4 h-4 text-[#84CC16]" />;
      case 'potty-trainers':
      case 'potty-chairs':
        return <Sparkles className="w-4 h-4 text-[#EF4444]" />;
      case 'tricycles':
      case 'tri-cycles':
        return <Bike className="w-4 h-4 text-[#06B6D4]" />;
      case 'kick-scooters':
        return <Sparkles className="w-4 h-4 text-[#22C55E]" />;
      default:
        return <Car className="w-4 h-4 text-[#FF6B6B]" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#FFE8B5] transition-all">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#4ECDC4] text-slate-900 py-1.5 px-4 text-xs md:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-slate-900 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
              <Flag className="w-3 h-3 text-[#FF9933]" />
              Factory Direct
            </span>
            <span className="hidden sm:inline font-medium text-slate-900">
              India’s Premier Kids Toys Manufacturer • Pooth Khurd, New Delhi
            </span>
            <span className="sm:hidden font-medium text-slate-900 truncate">
              Young Wheels • Wholesale & Retail
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="flex items-center gap-1 hover:underline text-slate-900 font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="opacity-40">|</span>
            <button
              onClick={onOpenWholesaleModal}
              className="flex items-center gap-1 bg-slate-900 text-white px-2.5 py-0.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Building2 className="w-3 h-3 text-[#FFD93D]" />
              <span>Bulk / Dealer Enquiries</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left focus:outline-hidden"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-tr from-[#FFD93D] via-[#FF6B6B] to-[#4ECDC4] rounded-2xl p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="text-xl sm:text-2xl font-black font-heading text-[#FF6B6B] group-hover:rotate-12 transition-transform">
                YW
              </span>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                <Cog className="w-3.5 h-3.5 text-white animate-spin-slow" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-[#2C3E50]">
                YOUNG <span className="text-[#FF6B6B]">WHEELS</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFD93D] animate-ping hidden sm:inline-block"></span>
            </div>
            <p className="text-[11px] font-semibold text-[#64748B] tracking-wide hidden sm:block">
              {COMPANY_DETAILS.tagline}
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-semibold text-sm">
          {/* 1. Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-xl transition-all ${
              activeTab === 'home'
                ? 'bg-[#FFD93D] text-slate-900 font-bold shadow-xs'
                : 'text-slate-700 hover:bg-[#FFF4B0] hover:text-slate-900'
            }`}
          >
            Home
          </button>

          {/* 2. About Us */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-xl transition-all ${
              activeTab === 'about'
                ? 'bg-[#4ECDC4] text-slate-900 font-bold shadow-xs'
                : 'text-slate-700 hover:bg-[#E0F7F5] hover:text-slate-900'
            }`}
          >
            About Us
          </button>

          {/* 3. Toys Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('all-categories')}
              className={`px-3 py-2 rounded-xl flex items-center gap-1 transition-all ${
                activeTab === 'all-categories' || ['ride-ons', 'kick-scooters', 'baby-walkers', 'swing-cars', 'tricycles', 'potty-trainers', 'magic-cars', 'riders', 'potty-chairs', 'electric-rideons', 'rocking-animals', 'tri-cycles'].includes(activeTab)
                  ? 'bg-[#FF6B6B] text-white font-bold shadow-xs'
                  : 'text-slate-700 hover:bg-[#FFE399] hover:text-slate-900'
              }`}
            >
              <span>Toys</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border-2 border-[#FFE8B5] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <button
                  onClick={() => handleNavClick('all-categories')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all mb-1 ${
                    activeTab === 'all-categories' 
                      ? 'bg-[#FFD93D] font-black text-slate-900 shadow-2xs' 
                      : 'bg-[#FFF9EE] hover:bg-[#FFE8B5] text-slate-900 font-bold border border-[#FFE8B5]'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs">
                    <LayoutGrid className="w-4 h-4 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <div className="text-xs font-black">All Categories View</div>
                    <div className="text-[10px] text-slate-600">Browse 6 Core Categories (55 Models)</div>
                  </div>
                </button>

                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 border-t border-slate-100">
                  Individual Category Models
                </div>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all ${
                      activeTab === cat.id 
                        ? 'bg-[#FFFDF9] border border-[#FF6B6B] font-bold text-[#FF6B6B]' 
                        : 'hover:bg-[#FFF8F0] text-slate-800'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{cat.name}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{cat.badge}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Blogs */}
          <button
            onClick={() => handleNavClick('blog')}
            className={`px-3 py-2 rounded-xl transition-all ${
              activeTab === 'blog'
                ? 'bg-[#FFD93D] text-slate-900 font-bold shadow-xs'
                : 'text-slate-700 hover:bg-[#FFF4B0] hover:text-slate-900'
            }`}
          >
            Blogs
          </button>

          {/* 5. Visit Factory */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-xl transition-all ${
              activeTab === 'contact'
                ? 'bg-[#C7B8EA] text-slate-900 font-bold shadow-xs'
                : 'text-slate-700 hover:bg-[#F0EBFA] hover:text-slate-900'
            }`}
          >
            Visit Factory
          </button>

          {/* 6. Social Hub */}
          <button
            onClick={() => handleNavClick('social')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'social'
                ? 'bg-[#DD2A7B] text-white font-bold shadow-xs'
                : 'text-slate-700 hover:bg-[#FDF2F8] hover:text-[#DD2A7B]'
            }`}
          >
            <Instagram className="w-4 h-4 text-[#DD2A7B]" />
            <span>Social Hub</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dealer & Distributor Form Button */}
          <button
            onClick={onOpenWholesaleModal}
            className="hidden sm:flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-3.5 py-2 rounded-2xl font-bold text-xs transition-all shadow-xs hover:scale-105 active:scale-95"
            title="Dealer & Distributor Registration Form"
          >
            <Building2 className="w-4 h-4 text-[#FFD93D]" />
            <span>Dealer & Distributor Form</span>
          </button>

          {/* Enquiry Basket Badge Button */}
          <button
            onClick={onOpenEnquiryDrawer}
            className="relative flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-3.5 py-2 rounded-2xl font-bold text-xs transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden md:inline">Enquiry Basket</span>
            {enquiryCount > 0 && (
              <span className="bg-[#FFD93D] text-slate-900 font-black px-2 py-0.5 rounded-full text-[11px] animate-bounce">
                {enquiryCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-t border-[#FFE8B5] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {/* 1. Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeTab === 'home' ? 'bg-[#FFD93D] text-slate-900' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4 text-slate-900" />
            <span>Home</span>
          </button>

          {/* 2. About Us */}
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeTab === 'about' ? 'bg-[#4ECDC4] text-slate-900' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Info className="w-4 h-4 text-slate-900" />
            <span>About Us</span>
          </button>

          {/* 3. Toys Categories */}
          <div className="py-1">
            <button
              onClick={() => handleNavClick('all-categories')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-black flex items-center gap-2 mb-1 ${
                activeTab === 'all-categories' ? 'bg-[#FF6B6B] text-white' : 'bg-[#FFF9EE] text-slate-900 border border-[#FFE8B5]'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-[#FFD93D]" />
              <span>Toys (All Categories)</span>
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick(cat.id)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeTab === cat.id ? 'bg-[#FF6B6B] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                </div>
                <span className="text-[10px] opacity-75">{cat.badge}</span>
              </button>
            ))}
          </div>

          {/* 4. Blogs */}
          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeTab === 'blog' ? 'bg-[#FFD93D] text-slate-900' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-slate-900" />
            <span>Blogs & Guides</span>
          </button>

          {/* 5. Visit Factory */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeTab === 'contact' ? 'bg-[#C7B8EA] text-slate-900' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-slate-900" />
            <span>Visit Factory</span>
          </button>

          {/* 6. Social Hub */}
          <button
            onClick={() => handleNavClick('social')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${
              activeTab === 'social' ? 'bg-[#DD2A7B] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Instagram className="w-4 h-4 text-[#DD2A7B]" />
            <span>Social Hub (Instagram)</span>
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team! I am visiting your website and would like to enquire about your kids toys.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Enquiry</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWholesaleModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm"
            >
              <Building2 className="w-4 h-4 text-[#FFD93D]" />
              <span>Wholesale / Dealer Request</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { X, Check, MessageCircle, ShoppingBag, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_DETAILS } from '../data/company';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToEnquiry: (product: Product, color?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToEnquiry }) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');

  const activeColorObj = product.colors.find(c => c.name === selectedColor);
  const displayedImage = activeColorObj?.image || product.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] border-4 border-[#FFE8B5] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF6B6B] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Image & Specs */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative h-60 w-full rounded-2xl bg-gradient-to-tr from-[#FFFDF9] via-[#FFF9EE] to-[#E0F7F5] p-3 flex items-center justify-center border border-slate-200">
              <img src={displayedImage} alt={product.name} className="h-full object-contain transition-all duration-300" />
              <span className="absolute top-2 left-2 bg-[#FFD93D] text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                {product.modelCode}
              </span>
            </div>

            <div className="bg-[#FFF9EE] p-3 rounded-2xl border border-[#FFE8B5] space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-slate-700">
                <span>Age Limit:</span>
                <span className="text-slate-900">{product.ageRange}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-700">
                <span>Weight Capacity:</span>
                <span className="text-slate-900">{product.weightCapacity}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-700">
                <span>Material:</span>
                <span className="text-slate-900 text-[11px] truncate max-w-[130px]">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Right Product Details */}
          <div className="md:col-span-7 space-y-4">
            
            <div>
              <span className="bg-[#4ECDC4] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                {product.category.replace('-', ' ')}
              </span>
              <h2 className="text-2xl font-black font-heading text-slate-900 mt-1">{product.name}</h2>
              <p className="text-xs font-bold text-[#FF6B6B]">{product.tagline}</p>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {product.description}
            </p>

            {/* Features List */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Product Features</h4>
              <ul className="space-y-1 text-xs font-medium text-slate-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Swatch Selector */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Select Color Option: <span className="text-[#FF6B6B]">{selectedColor}</span>
              </h4>
              <div className="flex items-center gap-2">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(c.name)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all flex items-center gap-1.5 ${
                      selectedColor === c.name ? 'border-slate-900 bg-slate-900 text-white shadow-xs' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.hex }}></span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onAddToEnquiry(product, selectedColor);
                  onClose();
                }}
                className="py-3 bg-[#FFD93D] hover:bg-[#ffe366] text-slate-900 font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Enquiry Basket</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels! I am inquiring about ${product.name} (Model: ${product.modelCode}) in ${selectedColor} color.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Price Quote</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

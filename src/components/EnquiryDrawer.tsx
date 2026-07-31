import React, { useState, useEffect } from 'react';
import { X, Trash2, MessageCircle, Send, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { EnquiryItem } from '../types';
import { COMPANY_DETAILS } from '../data/company';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: EnquiryItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearItems: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearItems,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [orderType, setOrderType] = useState<'Retail' | 'Wholesale'>('Retail');
  const [notes, setNotes] = useState('');

  // Close drawer on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    let msg = `*NEW TOY ENQUIRY - YOUNG WHEELS*\n`;
    msg += `------------------------------------\n`;
    msg += `👤 *Customer Name:* ${customerName || 'Valued Customer'}\n`;
    msg += `📍 *City / State:* ${city || 'Not specified'}\n`;
    msg += `🏷️ *Enquiry Type:* ${orderType} Order\n\n`;
    msg += `📦 *SELECTED TOYS:* \n`;

    items.forEach((item, index) => {
      msg += `${index + 1}. *${item.product.name}* (${item.product.modelCode})\n`;
      msg += `   - Color: ${item.selectedColor || 'Standard'}\n`;
      msg += `   - Quantity: ${item.quantity} unit(s)\n`;
    });

    if (notes) {
      msg += `\n💬 *Additional Message:* ${notes}\n`;
    }

    msg += `\n------------------------------------\n`;
    msg += `Please share price details, stock availability, and dispatch timeline. Thank you!`;

    return encodeURIComponent(msg);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl border-l-4 border-[#FFD93D] p-6 flex flex-col justify-between overflow-y-auto cursor-default"
      >
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B6B] text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-slate-900">Your Enquiry Basket</h3>
                <p className="text-xs text-slate-500 font-semibold">{items.length} Toy Model(s) Selected</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FFF0F0] flex items-center justify-center mx-auto shadow-inner">
                <ShoppingBag className="w-8 h-8 text-[#FF6B6B]" />
              </div>
              <h4 className="font-heading font-bold text-slate-800 text-base">Your Basket is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto font-medium">
                Browse our Magic Cars, Walkers, and Potty Chairs and click "Enquire" to add them here!
              </p>
            </div>
          ) : (
            <div className="py-4 space-y-3 max-h-[38vh] overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                >
                  <img src={item.product.image} alt={item.product.name} className="w-14 h-14 object-contain rounded-xl bg-slate-50 p-1" />
                  
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading font-bold text-xs text-slate-900 truncate">{item.product.name}</h5>
                    <p className="text-[10px] text-slate-500 font-medium">Color: {item.selectedColor}</p>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs hover:bg-slate-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs hover:bg-slate-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  onClick={onClearItems}
                  className="text-[11px] font-bold text-slate-500 hover:text-red-500 underline"
                >
                  Clear All Basket Items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Form Inputs & WhatsApp Submit */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-slate-200 space-y-3">
            
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Enquiry Type:</span>
              <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg">
                <button
                  onClick={() => setOrderType('Retail')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    orderType === 'Retail' ? 'bg-[#FF6B6B] text-white' : 'text-slate-600'
                  }`}
                >
                  Retail / Personal
                </button>
                <button
                  onClick={() => setOrderType('Wholesale')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    orderType === 'Wholesale' ? 'bg-slate-900 text-white' : 'text-slate-600'
                  }`}
                >
                  Bulk Wholesale
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name *"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-[#FF6B6B]"
              />
              <input
                type="text"
                placeholder="City / Location *"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-[#FF6B6B]"
              />
              <textarea
                placeholder="Optional notes or quantity details..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-[#FF6B6B]"
              ></textarea>
            </div>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Enquiry via WhatsApp</span>
            </a>

            <p className="text-[10px] text-center text-slate-400 font-medium">
              Sends your selected toys directly to Young Wheels Factory Desk on WhatsApp.
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

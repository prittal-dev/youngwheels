import React, { useState } from 'react';
import { X, Building2, Send, MessageCircle, CheckCircle2, Mail, Loader2 } from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/company';

interface WholesaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    gstNumber: '',
    estimatedQuantity: '10-50 units',
    interestedCategories: [] as string[],
    message: ''
  });

  const handleCategoryToggle = (cat: string) => {
    setFormData(prev => {
      const exists = prev.interestedCategories.includes(cat);
      if (exists) {
        return { ...prev, interestedCategories: prev.interestedCategories.filter(c => c !== cat) };
      } else {
        return { ...prev, interestedCategories: [...prev.interestedCategories, cat] };
      }
    });
  };

  const sendMailtoFallback = () => {
    const subject = `Wholesale Enquiry from ${formData.businessName || formData.contactPerson}`;
    let body = `NEW B2B DISTRIBUTOR ENQUIRY - YOUNG WHEELS\n`;
    body += `------------------------------------\n`;
    body += `🏢 Business/Shop Name: ${formData.businessName || 'N/A'}\n`;
    body += `👤 Contact Person: ${formData.contactPerson}\n`;
    body += `📧 Distributor Email ID: ${formData.email}\n`;
    body += `📞 Phone: ${formData.phone}\n`;
    body += `📍 City / State: ${formData.city}\n`;
    body += `📋 GST No: ${formData.gstNumber || 'Not provided'}\n`;
    body += `📦 Est. Order Qty: ${formData.estimatedQuantity}\n`;
    body += `🧸 Interested Categories: ${formData.interestedCategories.join(', ') || 'All Categories'}\n`;
    if (formData.message) {
      body += `💬 Note / Requirements: ${formData.message}\n`;
    }
    body += `------------------------------------\n`;
    body += `Sent via Young Wheels India Wholesale Enquiry Form.`;

    const mailtoUrl = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send direct background email query to india.youngwheels@gmail.com using FormSubmit API
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_DETAILS.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New B2B Wholesale Enquiry from ${formData.businessName || formData.contactPerson}`,
          _replyto: formData.email,
          _template: 'table',
          "Business / Shop Name": formData.businessName || 'N/A',
          "Contact Person": formData.contactPerson,
          "Distributor Email": formData.email,
          "Phone / Mobile": formData.phone,
          "City & State": formData.city,
          "GST Number": formData.gstNumber || 'Not provided',
          "Estimated Order Volume": formData.estimatedQuantity,
          "Interested Product Categories": formData.interestedCategories.join(', ') || 'All Categories',
          "Message / Requirements": formData.message || 'N/A'
        })
      });

      if (!response.ok) {
        // Fallback to mailto if service is blocked or fails
        sendMailtoFallback();
      }
    } catch (err) {
      console.warn('Direct email API fallback:', err);
      sendMailtoFallback();
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const sendWhatsAppQuote = () => {
    let msg = `*NEW B2B DEALER ENQUIRY - YOUNG WHEELS*\n`;
    msg += `------------------------------------\n`;
    msg += `🏢 *Business Name:* ${formData.businessName || 'N/A'}\n`;
    msg += `👤 *Contact Person:* ${formData.contactPerson}\n`;
    msg += `📧 *Email ID:* ${formData.email}\n`;
    msg += `📞 *Phone:* ${formData.phone}\n`;
    msg += `📍 *City / State:* ${formData.city}\n`;
    msg += `📋 *GST No:* ${formData.gstNumber || 'Not provided'}\n`;
    msg += `📦 *Est. Order Qty:* ${formData.estimatedQuantity}\n`;
    msg += `🧸 *Categories:* ${formData.interestedCategories.join(', ') || 'All Toys'}\n`;
    if (formData.message) {
      msg += `💬 *Note:* ${formData.message}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please send wholesale price master list and catalog. Thank you!`;

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
    >
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-[32px] border-4 border-[#FFD93D] p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto cursor-default"
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E6FAD8] text-[#25D366] mx-auto flex items-center justify-center font-black text-2xl shadow-md">
              <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">Wholesale Enquiry Sent!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-medium leading-relaxed">
              Thank you <strong>{formData.contactPerson}</strong>! Your enquiry has been sent directly to Young Wheels India (<span className="text-slate-900 font-bold">{COMPANY_DETAILS.email}</span>). Our New Delhi factory wholesale desk will contact you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              <button
                type="button"
                onClick={sendMailtoFallback}
                className="py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs rounded-xl inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FFD93D]" />
                <span>Open Mail Client</span>
              </button>

              <button
                type="button"
                onClick={sendWhatsAppQuote}
                className="py-3 px-5 bg-[#25D366] text-white font-heading font-bold text-xs rounded-xl inline-flex items-center justify-center gap-2 shadow-md hover:bg-[#20bd5a] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Connect Instant on WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#FFD93D] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl text-slate-900">Wholesale & Retailer Enquiry</h3>
                <p className="text-xs text-slate-500 font-semibold">Pooth Khurd, New Delhi Factory Direct</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Business / Shop Name</label>
                <input
                  type="text"
                  placeholder="e.g. Toy World Stores"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Distributor Email ID * <span className="text-[#FF6B6B] font-bold">(Compulsory)</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. distributor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone / Mobile *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">City & State *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jaipur, Rajasthan"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">GST Number (Optional)</label>
                <input
                  type="text"
                  placeholder="22AAAAA0000A1Z5"
                  value={formData.gstNumber}
                  onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Estimated Order Volume</label>
                <select
                  value={formData.estimatedQuantity}
                  onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                >
                  <option value="10-50 units">10 - 50 units (Sample Batch)</option>
                  <option value="50-200 units">50 - 200 units (Standard Dealer)</option>
                  <option value="200+ units">200+ units (Regional Distributor)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Interested Product Lines (Select all that apply)</label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                {CATEGORIES.map((catObj) => {
                  const cat = catObj.name;
                  const checked = formData.interestedCategories.includes(cat);
                  return (
                    <button
                      type="button"
                      key={catObj.id}
                      onClick={() => handleCategoryToggle(cat)}
                      className={`p-2 rounded-xl text-xs font-bold border text-left transition-all flex items-center justify-between cursor-pointer ${
                        checked ? 'bg-[#FFD93D] border-slate-900 text-slate-900 shadow-2xs' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate pr-1">{cat}</span>
                      {checked && <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Message / Requirements</label>
              <textarea
                rows={2}
                placeholder="Specific models or custom logo packaging requests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-75 text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 text-[#FFD93D] animate-spin" />
                    <span>Sending Mail Query...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#FFD93D]" />
                    <span>Submit Wholesale Query</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={sendWhatsAppQuote}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Direct WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
};



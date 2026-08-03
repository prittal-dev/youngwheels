import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/company';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, PhoneCall, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productInterest: 'Magic Cars / Swing Cars',
    inquiryType: 'Parent Direct Purchase',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsAppDirect = () => {
    let msg = `*NEW CONTACT INQUIRY - YOUNG WHEELS WEBSITE*\n`;
    msg += `------------------------------------\n`;
    msg += `👤 *Name:* ${formData.name}\n`;
    msg += `📞 *Phone:* ${formData.phone}\n`;
    msg += `✉️ *Email:* ${formData.email || 'N/A'}\n`;
    msg += `🧸 *Interest:* ${formData.productInterest}\n`;
    msg += `🏷️ *Type:* ${formData.inquiryType}\n`;
    if (formData.message) {
      msg += `💬 *Message:* ${formData.message}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `Please connect with me. Thank you!`;

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFD93D] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 uppercase tracking-wider">
            Pooth Khurd, New Delhi Factory Desk
          </div>
          <h1 className="text-4xl font-black font-heading text-slate-900 flex items-center justify-center gap-2 flex-wrap">
            <span>Get In Touch With Young Wheels</span>
            <PhoneCall className="w-7 h-7 text-[#FF6B6B] shrink-0" />
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Have questions about our Magic Cars, Walkers, or Wholesale Dealer Rates? We are always happy to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-[32px] border-4 border-[#FFE8B5] p-6 space-y-5 shadow-lg relative z-10">
              
              <h3 className="text-xl font-black font-heading text-slate-900">Factory & Office Details</h3>

              <div className="space-y-4 text-xs font-medium text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase">Factory Address</span>
                    <p className="leading-relaxed mt-0.5">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBFBFA] text-[#4ECDC4] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase">Phone Hotline</span>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:underline text-slate-900 font-bold">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E6FAD8] text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase">WhatsApp Desk</span>
                    <a href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`} target="_blank" rel="noreferrer" className="hover:underline text-slate-900 font-bold">
                      {COMPANY_DETAILS.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F0FF] text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase">Email Address</span>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:underline text-slate-900 font-bold">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF9E6] text-[#F59E0B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase">Factory Business Hours</span>
                    <p>{COMPANY_DETAILS.operatingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels! I want to inquire about toys.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Frame */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-4 shadow-md space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6B6B]" />
                  <h4 className="font-heading font-black text-xs text-slate-900 uppercase tracking-wider">
                    Factory Location Map
                  </h4>
                </div>
                <a
                  href={COMPANY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-slate-900 text-white rounded-xl text-[11px] font-bold flex items-center gap-1 hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD93D]" />
                </a>
              </div>

              <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe 
                  src={COMPANY_DETAILS.googleMapsEmbedUrl}
                  width="100%" 
                  height="260" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Young Wheels Toys Factory Google Map"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border-4 border-[#FFE8B5] p-6 sm:p-8 shadow-xl relative z-10">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6FAD8] text-[#25D366] mx-auto flex items-center justify-center font-black text-2xl shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                  Thank you {formData.name}! Our customer care team in Pooth Khurd, New Delhi will respond to your query shortly.
                </p>

                <button
                  onClick={sendWhatsAppDirect}
                  className="py-3 px-6 bg-[#25D366] text-white font-heading font-bold text-xs rounded-xl inline-flex items-center gap-2 shadow-md hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Direct WhatsApp Copy</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h3 className="font-heading font-black text-2xl text-slate-900">Send Factory Message</h3>
                  <p className="text-xs text-slate-500 font-medium">Fill in your details below to request price lists or product details.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7011227049"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Enquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                    >
                      <option value="Parent Direct Purchase">Parent Direct Purchase</option>
                      <option value="Wholesale Toy Dealer">Wholesale Toy Dealer / Retailer</option>
                      <option value="Online E-Commerce Seller">Online E-Commerce Seller</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Primary Product Interest</label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                  >
                    <option value="Magic Cars / Swing Cars">Magic Cars / Swing Cars (15+ models)</option>
                    <option value="Baby Walkers">Baby Walkers & First Steps</option>
                    <option value="Potty Chairs">Potty Chairs & Ride-On Trainers</option>
                    <option value="Rocking Animals">Rocking Animals 2-in-1</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message or Requirements</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us which models or quantities you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#FF6B6B]"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#FFD93D]" />
                    <span>Submit Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={sendWhatsAppDirect}
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Directly</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

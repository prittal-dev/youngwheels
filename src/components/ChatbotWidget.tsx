import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Truck, 
  Car, 
  RotateCcw,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Calendar,
  FileText,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/company';

export interface QuickActionItem {
  label: string;
  action: () => void;
  iconType?: 'map' | 'contact' | 'whatsapp' | 'call' | 'wholesale' | 'categories' | 'bestseller' | 'about' | 'shipping' | 'events' | 'catalog' | 'certifications';
}

export interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickActions?: QuickActionItem[];
}

interface ChatbotWidgetProps {
  onOpenWholesaleModal: () => void;
  onNavigateTab: (tab: string) => void;
  hideInFooter?: boolean;
}

const FAQ_MENU_ITEMS = [
  { id: 'events', label: 'Events & Expos Visited', Icon: Calendar, color: 'text-[#FF6B6B]' },
  { id: 'location', label: 'Address & Google Maps', Icon: MapPin, color: 'text-[#EF4444]' },
  { id: 'contact', label: 'Phone & WhatsApp Direct', Icon: Phone, color: 'text-[#2563EB]' },
  { id: 'wholesale', label: 'Bulk / Dealer Rates', Icon: Building2, color: 'text-[#10B981]' },
  { id: 'products', label: '55+ Toy Models & Types', Icon: Car, color: 'text-[#FFD93D]' },
  { id: 'certifications', label: 'MSME & ISO Quality', Icon: Award, color: 'text-[#8B5CF6]' },
  { id: 'safety', label: 'Non-Toxic BPA-Free Plastic', Icon: ShieldCheck, color: 'text-[#EC4899]' },
  { id: 'shipping', label: 'Pan-India Shipping & MOQ', Icon: Truck, color: 'text-[#06B6D4]' },
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenWholesaleModal, onNavigateTab, hideInFooter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const faqScrollRef = useRef<HTMLDivElement>(null);

  // Initialize initial bot greeting
  useEffect(() => {
    if (messages.length === 0) {
      const initialMsg: Message = {
        id: '1',
        sender: 'bot',
        text: `Welcome to **Young Wheels** — India's premier kids toy manufacturer in New Delhi!\n\nHow can I help you today? Select an option below or type your query!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([initialMsg]);
    }
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      try {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        console.warn('Scroll warning:', e);
      }
    }, 60);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const getTime = () => {
    try {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '12:00 PM';
    }
  };

  const scrollFaq = (direction: 'left' | 'right') => {
    if (faqScrollRef.current) {
      const amount = direction === 'left' ? -150 : 150;
      faqScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const renderActionIcon = (iconType?: QuickActionItem['iconType']) => {
    switch (iconType) {
      case 'map':
        return <MapPin className="w-3.5 h-3.5 text-[#FF6B6B]" />;
      case 'contact':
        return <Building2 className="w-3.5 h-3.5 text-[#4ECDC4]" />;
      case 'whatsapp':
        return <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />;
      case 'call':
        return <Phone className="w-3.5 h-3.5 text-[#2563EB]" />;
      case 'wholesale':
        return <Building2 className="w-3.5 h-3.5 text-[#FFD93D]" />;
      case 'categories':
        return <Car className="w-3.5 h-3.5 text-[#FF6B6B]" />;
      case 'bestseller':
        return <Sparkles className="w-3.5 h-3.5 text-[#FFD93D]" />;
      case 'about':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#4ECDC4]" />;
      case 'shipping':
        return <Truck className="w-3.5 h-3.5 text-[#06B6D4]" />;
      case 'events':
        return <Calendar className="w-3.5 h-3.5 text-[#FF6B6B]" />;
      case 'certifications':
        return <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  // Intelligent Answer Generator
  const generateBotResponse = (query: string): { text: string; actions?: QuickActionItem[] } => {
    const q = query.toLowerCase();

    // 0. Events & Expos
    if (q.includes('event') || q.includes('expo') || q.includes('exhibition') || q.includes('fair') || q.includes('fest') || q.includes('visit') || q.includes('reel') || q.includes('showcase')) {
      return {
        text: `**Young Wheels Events & Expos:**\n\nYoung Wheels regularly visits & showcases toys at national trade expos and kids carnivals across India!\n\n• **Featured Reel**: Live exhibition visit footage on Instagram (@youngwheelsindia)\n• **Factory Event Support**: Partnership options for school carnivals & expos`,
        actions: [
          {
            label: 'View Events & Exhibition Highlights Page',
            action: () => {
              onNavigateTab('events');
              setIsOpen(false);
            },
            iconType: 'events'
          },
          {
            label: 'Watch Event Reel on Instagram',
            action: () => window.open('https://www.instagram.com/reel/Dae9OaMTqfK/', '_blank'),
            iconType: 'whatsapp'
          }
        ]
      };
    }

    // 0.5 Certifications & MSME / ISO
    if (q.includes('msme') || q.includes('iso') || q.includes('gst') || q.includes('certificate') || q.includes('gov') || q.includes('registered') || q.includes('legal') || q.includes('udyam')) {
      return {
        text: `**Government Registrations & Verification:**\n\n• **MSME Registration No:** ${COMPANY_DETAILS.msmeNo}\n• **GSTIN / UIN:** ${COMPANY_DETAILS.gstNo} (State Code ${COMPANY_DETAILS.stateCode}, ${COMPANY_DETAILS.stateName})\n• **ISO 9001:2015 Certified Quality Facility**\n\nVerified manufacturing unit in Pooth Khurd, New Delhi!`,
        actions: [
          {
            label: 'Request Official MSME / GST Rate Sheet',
            action: () => {
              onOpenWholesaleModal();
              setIsOpen(false);
            },
            iconType: 'wholesale'
          }
        ]
      };
    }

    // 1. Address / Location / Directions / Where
    if (q.includes('address') || q.includes('location') || q.includes('where') || q.includes('factory') || q.includes('delhi') || q.includes('map') || q.includes('place') || q.includes('pooth')) {
      return {
        text: `**Young Wheels Factory & Office Address:**\n\n${COMPANY_DETAILS.address}\n\n**Operating Hours:** ${COMPANY_DETAILS.operatingHours}`,
        actions: [
          {
            label: 'Open Google Maps Location',
            action: () => window.open(COMPANY_DETAILS.googleMapsUrl, '_blank'),
            iconType: 'map'
          },
          {
            label: 'Visit Factory Contact Page',
            action: () => {
              onNavigateTab('contact');
              setIsOpen(false);
            },
            iconType: 'contact'
          }
        ]
      };
    }

    // 2. Phone / Contact / Call / WhatsApp / Email
    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('whatsapp') || q.includes('email') || q.includes('mobile')) {
      return {
        text: `**Contact Us Directly:**\n\n• **Phone Call:** ${COMPANY_DETAILS.phone}\n• **WhatsApp Direct:** ${COMPANY_DETAILS.whatsapp}\n• **Email:** ${COMPANY_DETAILS.email}\n\nOur team is available Mon-Sat (9:30 AM – 7:00 PM IST)!`,
        actions: [
          {
            label: 'Chat on WhatsApp Direct',
            action: () => window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team!')}`, '_blank'),
            iconType: 'whatsapp'
          },
          {
            label: `Call ${COMPANY_DETAILS.phone}`,
            action: () => window.open(`tel:${COMPANY_DETAILS.phone}`, '_self'),
            iconType: 'call'
          }
        ]
      };
    }

    // 3. Wholesale / Bulk / Dealer / Price / Rate
    if (q.includes('wholesale') || q.includes('bulk') || q.includes('dealer') || q.includes('distributor') || q.includes('margin') || q.includes('shop') || q.includes('price list')) {
      return {
        text: `**Wholesale & Dealer Program:**\n\nWe provide factory-direct pricing for toy retailers, store owners & pan-India wholesalers.\n\n• Low Minimum Order Quantities (MOQ)\n• Pan-India shipping across 200+ cities\n• 55+ fast-selling models available`,
        actions: [
          {
            label: 'Request Dealer Rate Sheet Form',
            action: () => {
              onOpenWholesaleModal();
              setIsOpen(false);
            },
            iconType: 'wholesale'
          },
          {
            label: 'WhatsApp Wholesale Desk',
            action: () => window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels! I am looking for wholesale / dealer rates for my toy business.')}`, '_blank'),
            iconType: 'whatsapp'
          }
        ]
      };
    }

    // 4. Products / Models / Categories / Cars / Walkers / Scooters
    if (q.includes('product') || q.includes('category') || q.includes('models') || q.includes('car') || q.includes('walker') || q.includes('scooter') || q.includes('tricycle') || q.includes('potty') || q.includes('swing')) {
      const catList = CATEGORIES.map(c => `• **${c.name}** (${c.badge})`).join('\n');
      return {
        text: `**Our Core Product Range (55+ Models):**\n\n${catList}\n\nAll manufactured with 100% virgin non-toxic ABS plastic!`,
        actions: [
          {
            label: 'Explore All Toy Categories',
            action: () => {
              onNavigateTab('all-categories');
              setIsOpen(false);
            },
            iconType: 'categories'
          },
          {
            label: 'View Best Sellers',
            action: () => {
              onNavigateTab('home');
              setIsOpen(false);
            },
            iconType: 'bestseller'
          }
        ]
      };
    }

    // 5. Safety / Plastic / BPA / Material / Non-Toxic
    if (q.includes('safe') || q.includes('safety') || q.includes('plastic') || q.includes('bpa') || q.includes('toxic') || q.includes('material') || q.includes('quality')) {
      return {
        text: `**Safety & Quality Standards:**\n\n• **100% BPA-Free Virgin ABS Plastic**: Certified safe for infants & toddlers.\n• **Zero Edge Design (ZED)**: Soft, rounded edges to prevent scratches.\n• **High Impact Durability**: Built for active outdoor & indoor play.\n• **150,000+ Happy Toddlers** nationwide!`,
        actions: [
          {
            label: 'Read About Factory Quality & Safety',
            action: () => {
              onNavigateTab('about');
              setIsOpen(false);
            },
            iconType: 'about'
          }
        ]
      };
    }

    // 6. Shipping / Delivery / Dispatch / Time
    if (q.includes('shipping') || q.includes('delivery') || q.includes('dispatch') || q.includes('days') || q.includes('courier') || q.includes('track')) {
      return {
        text: `**Shipping & Delivery Information:**\n\n• **Fast Dispatch**: Orders leave our New Delhi factory within 24–48 hours.\n• **Pan-India Coverage**: Shipping to 200+ cities and towns.\n• **Safe Transport Packaging**: Double-walled corrugated boxes to prevent transit damage.`,
        actions: [
          {
            label: 'Inquire Shipping to your Pincode',
            action: () => window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi! I want to check delivery time & shipping rates to my pincode.')}`, '_blank'),
            iconType: 'shipping'
          }
        ]
      };
    }

    // Default Fallback
    return {
      text: `Thank you for reaching out!\n\nI can assist you with:\n• Factory address & location in New Delhi\n• Product models & categories\n• Wholesale / dealer pricing\n• Direct WhatsApp & phone support\n\nOr select one of the quick options below!`,
      actions: [
        {
          label: 'Chat on WhatsApp Direct',
          action: () => window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi Young Wheels Team! Query: ${query}`)}`, '_blank'),
          iconType: 'whatsapp'
        },
        {
          label: `Call Factory (${COMPANY_DETAILS.phone})`,
          action: () => window.open(`tel:${COMPANY_DETAILS.phone}`, '_self'),
          iconType: 'call'
        }
      ]
    };
  };

  const handleSelectOption = (optionId: string, label: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: label,
      timestamp: getTime(),
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      try {
        const response = generateBotResponse(optionId);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: response.text,
          timestamp: getTime(),
          quickActions: response.actions,
        };
        setMessages(prev => [...prev, botMsg]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsTyping(false);
      }
    }, 350);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const query = inputValue.trim();
    setInputValue('');

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: getTime(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      try {
        const response = generateBotResponse(query);
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: response.text,
          timestamp: getTime(),
          quickActions: response.actions,
        };
        setMessages(prev => [...prev, botMsg]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsTyping(false);
      }
    }, 400);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Welcome to **Young Wheels** — India's premier kids toy manufacturer in New Delhi!\n\nHow can I help you today? Select an option below or type your query!`,
        timestamp: getTime(),
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${hideInFooter && !isOpen ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(prev => !prev)}
          className="relative group bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 border-2 border-white cursor-pointer"
          aria-label="Open AI Assistant Chat"
          type="button"
        >
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FFD93D] rounded-full border-2 border-white animate-ping" />
          )}
          
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
          
          <span className="hidden sm:inline font-heading font-black text-xs text-white tracking-wide">
            {isOpen ? 'Close Assistant' : 'Ask Young Wheels AI'}
          </span>

          <Sparkles className="w-3.5 h-3.5 text-[#FFD93D] animate-wiggle hidden sm:inline" />
        </motion.button>
      </div>

      {/* Floating Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-22 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] bg-white rounded-[28px] border-4 border-[#FFE8B5] shadow-2xl overflow-hidden flex flex-col max-h-[580px] h-[80vh]"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFD93D] p-3.5 text-white flex items-center justify-between shrink-0 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-slate-900 text-[#FFD93D] flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-sm text-slate-900 leading-tight">
                    Young Wheels AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-800 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Delhi Factory Desk Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 rounded-xl text-slate-900 hover:bg-white/30 transition-colors cursor-pointer"
                  title="Reset Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl text-slate-900 hover:bg-white/30 transition-colors cursor-pointer"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFFDF9]/80 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl shadow-2xs font-medium leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#FF6B6B] text-white rounded-br-none'
                        : 'bg-white border border-[#FFE8B5] text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {String(msg.text || '').split('**').map((part, i) => (
                        i % 2 === 1 ? <strong key={i} className="font-extrabold">{part}</strong> : part
                      ))}
                    </div>

                    {/* Bot Quick Action Buttons */}
                    {msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col gap-1.5">
                        {msg.quickActions.map((act, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={act.action}
                            className="w-full text-left px-3 py-2 rounded-xl bg-[#FFF9EE] hover:bg-[#FFE399] border border-[#FFE8B5] text-slate-900 font-extrabold text-[11px] flex items-center justify-between transition-colors group cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              {renderActionIcon(act.iconType)}
                              <span>{act.label}</span>
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="text-[9px] font-bold text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-xs pl-2 pt-1">
                  <Bot className="w-4 h-4 text-[#FF6B6B] animate-bounce" />
                  <span className="font-bold animate-pulse">Young Wheels AI typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Menu Options Pills with Carousel Controls */}
            <div className="p-2.5 bg-white border-t border-slate-100 shrink-0">
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5 px-1 flex items-center justify-between">
                <span>Popular Questions</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#FF6B6B] flex items-center gap-1 font-bold mr-1">
                    <Sparkles className="w-3 h-3 text-[#FF6B6B]" />
                    <span>Click to ask</span>
                  </span>
                  <button
                    onClick={() => scrollFaq('left')}
                    className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#FFD93D] text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                    title="Scroll Left"
                    type="button"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => scrollFaq('right')}
                    className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#FFD93D] text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                    title="Scroll Right"
                    type="button"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div 
                ref={faqScrollRef}
                className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 scroll-smooth"
              >
                {FAQ_MENU_ITEMS.map((opt) => {
                  const IconComp = opt.Icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id, opt.label)}
                      className="px-2.5 py-1.5 rounded-xl bg-[#FFFDF9] hover:bg-[#FFF4B0] border border-[#FFE8B5] text-slate-800 text-[10px] font-bold whitespace-nowrap flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs cursor-pointer"
                    >
                      <IconComp className={`w-3.5 h-3.5 ${opt.color}`} />
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Text Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask address, phone, swing car prices..."
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FF6B6B]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-xl bg-[#FF6B6B] hover:bg-[#FF5252] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs cursor-pointer"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

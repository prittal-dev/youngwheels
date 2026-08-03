import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Sparkles, 
  MessageCircle, 
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Calendar,
  MapPin,
  Tag,
  Maximize2,
  Phone,
  Globe,
  Award
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import invitationImg from '../assets/invitation.jpeg';

interface EventsPageProps {
  onOpenWholesaleModal: () => void;
  onNavigateHome?: () => void;
}

const EVENT_GALLERY = [
  {
    id: 'invitation',
    title: 'TOY BIZ INTERNATIONAL 2026 - Official Pass',
    caption: 'Stall X253 • 4-7 July 2026 • Bharat Mandapam, Pragati Maidan, New Delhi',
    image: invitationImg,
    badge: 'Official Pass'
  },
  {
    id: 'stall-pavilion',
    title: 'Youngwheels Grand Exhibition Stall',
    caption: 'Showcase of 55+ non-toxic ride-on toys, baby walkers & magic cars.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    badge: 'Live Pavilion'
  },
  {
    id: 'test-track',
    title: 'Live Product Demo & Kids Ride-On Track',
    caption: 'Interactive obstacle course and 360° swing car test rides.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800',
    badge: 'Interactive Track'
  }
];

const EVENT_VIDEO_URL = "https://instagram.fdel1-3.fna.fbcdn.net/o1/v/t2/f2/m86/AQM_qS0H5M_idwUozclV2bTbfNE-1CKWCbvSBfnRoFFqaH9IlDmxLHm9noEoOCvQGGMBYaN3eyg_mdTU6WPXbjqEP1qSoCpE-Rfm_QA.mp4?_nc_cat=109&_nc_oc=Adq2Efw6ajmMhe9LQFj1vACftLxjY0N4rGgd_1oHFDhXOxkIGw-7NqLlttBVSF1QWMzitVkmIgTwzQNq2zURAfrU&_nc_sid=5e9851&_nc_ht=instagram.fdel1-3.fna.fbcdn.net&_nc_ohc=TZWGSPpaZW8Q7kNvwGjdAu2&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ2MjYzNDMwMjU0OTg0NiwiYXNzZXRfYWdlX2RheXMiOjI0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6ODUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=112b3ce07487de1b&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81RjQyOTBGRTgxNkZFNEI1RjU4MzY1MkREOUYzMDM4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0E5NEFCN0JFNEM3ODM3OEFFNzRDNkVGMDVBRTY0NEIzX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACasvdHgwpCZBRUCKAJDMywXQFVszMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=PLAPMcwGSkulzd_DwRVujw&_nc_ss=7a22e&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQEz_OjDGX711D-tZ2hkLW8Hce6-Eq3Wo6s2CqQidXyd2g&oe=6A6F85F6";

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenWholesaleModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % EVENT_GALLERY.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + EVENT_GALLERY.length) % EVENT_GALLERY.length);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FFD93D]">
        {/* Glow Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD93D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ECDC4]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
              <span>Young Wheels Event Showcase</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white leading-tight"
            >
              Exhibitions & Live Event Showcase
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed"
            >
              Take an exclusive look at Young Wheels live exhibition footage, official invitation pass, and interactive stall showcases across national kids trade expos!
            </motion.p>

            {/* Quick Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
            >
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <div className="text-xl sm:text-2xl font-black text-[#FFD93D]">100%</div>
                <div className="text-xs text-slate-300 font-bold">Non-Toxic BIS Toys</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <div className="text-xl sm:text-2xl font-black text-[#4ECDC4]">200+</div>
                <div className="text-xs text-slate-300 font-bold">Cities Network</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <div className="text-xl sm:text-2xl font-black text-[#FF6B6B]">Pan-India</div>
                <div className="text-xs text-slate-300 font-bold">Exhibition Visits</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <div className="text-xl sm:text-2xl font-black text-[#34D399]">Direct</div>
                <div className="text-xs text-slate-300 font-bold">Factory Support</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Main Event Details: Full Width Info (Top) & Photo + Video Side-by-Side (Bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-5 sm:p-8 border-4 border-[#FFE8B5] shadow-2xl space-y-8">
          
          {/* TOP SECTION: Full Width Event Details Card */}
          <div className="space-y-5 bg-[#FFFDF9] p-6 sm:p-8 rounded-3xl border-2 border-[#FFE8B5] shadow-xs">
            
            {/* Header Title & Tagline & Organizer Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="bg-[#FF6B6B] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
                  B2B Toy Exhibition
                </span>
                <div className="flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-3.5 py-1 rounded-full text-xs font-black shadow-xs">
                  <Award className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Organizer: Young Wheels</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 pt-1">
                TOY BIZ INTERNATIONAL 2026
              </h2>
              <p className="text-sm sm:text-base font-extrabold text-[#FF6B6B]">
                South Asia’s Biggest B2B Toy Expo
              </p>
            </div>

            {/* Event Specs Bar (Dates, Venue, Stall #, Organizer) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-800 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF1F1] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Event Dates</div>
                  <div className="text-sm font-black text-slate-900">4 – 7 July 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFFBE6] flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Stall Number</div>
                  <div className="text-[#FF6B6B] font-black text-sm">Stall X253</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E6FFFA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Venue & Location</div>
                  <div className="text-xs font-black text-slate-900">Bharat Mandapam, Pragati Maidan, New Delhi</div>
                </div>
              </div>
            </div>



            {/* Contact Information */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 bg-white p-4 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700">
              <a href="tel:8383047505" className="flex items-center gap-1.5 hover:text-[#FF6B6B]">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>Phone: +91 8383047505</span>
              </a>
              <a href={COMPANY_DETAILS.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#FF6B6B]">
                <Globe className="w-4 h-4 text-[#10B981]" />
                <span>{COMPANY_DETAILS.websiteDisplay}</span>
              </a>
            </div>

          </div>

          {/* BOTTOM SECTION: Photo Carousel (Left) & Autoplay Video (Right) Side-by-Side */}
          <div className="pt-4 border-t-2 border-[#FFE8B5]">
            <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
                <span>Exhibition Photos & Live Video Footage</span>
              </h3>
              <span className="text-xs font-bold text-slate-500">
                Invitation Card & Event Media Gallery
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Photo Carousel */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#FF6B6B]/30 shadow-lg bg-slate-900 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-slate-950 flex items-center justify-center"
                    >
                      <img 
                        src={EVENT_GALLERY[activeSlide].image} 
                        alt={EVENT_GALLERY[activeSlide].title}
                        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
                        onClick={() => setIsFullscreenImage(true)}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Slide Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-[#FF6B6B] text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                          {EVENT_GALLERY[activeSlide].badge}
                        </span>
                        <button
                          onClick={() => setIsFullscreenImage(true)}
                          className="bg-slate-900/80 text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors shadow-xs"
                          title="View Fullscreen"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                        <h4 className="text-sm sm:text-base font-black font-heading line-clamp-1">
                          {EVENT_GALLERY[activeSlide].title}
                        </h4>
                        <p className="text-[11px] text-slate-300 line-clamp-1">
                          {EVENT_GALLERY[activeSlide].caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-[#FF6B6B] text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-[#FF6B6B] text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {EVENT_GALLERY.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeSlide === idx ? 'w-6 bg-[#FFD93D]' : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 text-center font-bold">
                  📷 Official invitation pass & Young Wheels exhibition photos. Click image to expand.
                </p>
              </div>

              {/* RIGHT COLUMN: Autoplay Muted Video Player */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-slate-900 text-[#FFD93D] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-ping" />
                    <span>Live Exhibition Reel Video</span>
                  </span>

                  <button
                    onClick={toggleMute}
                    className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-[#FFD93D] text-slate-800 px-3 py-1 rounded-full text-xs font-extrabold transition-colors shadow-xs cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#FF6B6B]" /> : <Volume2 className="w-3.5 h-3.5 text-[#10B981]" />}
                    <span>{isMuted ? 'Unmute Sound' : 'Mute Sound'}</span>
                  </button>
                </div>

                {/* Autoplay Video Box */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#FFD93D] bg-slate-950 shadow-2xl aspect-9/16 max-h-[520px] mx-auto flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={EVENT_VIDEO_URL}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  {/* Sound Toggle Floating Button */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-16 right-4 z-20 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full shadow-lg border border-slate-700 backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                    title={isMuted ? "Click to Unmute" : "Click to Mute"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-[#FF6B6B]" /> : <Volume2 className="w-5 h-5 text-[#10B981]" />}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center font-bold">
                  🎥 Autoplay video from Young Wheels live exhibition visit.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Host / Partner Invitation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#FFF9EE] rounded-3xl p-6 sm:p-8 border-2 border-[#FFE8B5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Organizing an Event or Fest?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              Invite Youngwheels to Your School Fest, Expo or Carnival!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium">
              We provide ride-on test tracks, interactive toy showcases, and sponsored fun activities for school carnivals, housing society events, and regional trade expos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenWholesaleModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#FFD93D]" />
              <span>Partner With Us</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels Team! I am an event organizer and would like to invite Youngwheels to participate/showcase toys at our event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm hover:bg-[#20bd5a] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Event Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {isFullscreenImage && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsFullscreenImage(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border-4 border-[#FFD93D] shadow-2xl bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={EVENT_GALLERY[activeSlide].image}
                alt={EVENT_GALLERY[activeSlide].title}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="p-4 bg-slate-900 text-white text-center">
                <h4 className="font-heading font-black text-base text-[#FFD93D]">{EVENT_GALLERY[activeSlide].title}</h4>
                <p className="text-xs text-slate-300">{EVENT_GALLERY[activeSlide].caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

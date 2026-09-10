import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  Video,
  Sparkles,
  Award,
  Factory,
  Car,
  ShoppingBag,
  Heart,
  Youtube,
  Facebook,
  Play,
  ThumbsUp,
  MessageCircle,
  Building2
} from 'lucide-react';
import { getProductImg } from '../data/products';
import { COMPANY_DETAILS } from '../data/company';

interface SocialPageProps {
  initialPlatform?: 'instagram' | 'youtube' | 'facebook';
  onNavigateTab?: (tab: string) => void;
}

export const SocialPage: React.FC<SocialPageProps> = ({ 
  initialPlatform = 'instagram',
  onNavigateTab 
}) => {
  const [activePlatform, setActivePlatform] = useState<'instagram' | 'youtube' | 'facebook'>(initialPlatform);

  useEffect(() => {
    if (initialPlatform) {
      setActivePlatform(initialPlatform);
    }
  }, [initialPlatform]);

  // Official Social URLs
  const INSTAGRAM_PROFILE_URL = COMPANY_DETAILS.instagram || 'https://www.instagram.com/youngwheels__?igsh=ZDM3MXNoeGoyNGZk';
  const YOUTUBE_CHANNEL_URL = COMPANY_DETAILS.youtube || 'https://www.youtube.com/@youngwheelss/featured';
  const FACEBOOK_PAGE_URL = COMPANY_DETAILS.facebook || 'https://www.facebook.com/youngwheelsindia/';

  const REEL_1_URL = 'https://www.instagram.com/youngwheelsindia/reel/DbS1EHyzh_K/?hl=en';
  const REEL_1_SHORTCODE = 'DbS1EHyzh_K';

  // Official Provided YouTube Embed & Facebook Embed URLs
  const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/HdgkNy8j6DM?si=VhNfQgNVLFy1FrbE';
  const FACEBOOK_REEL_EMBED_URL = 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F754579180173049%2F&show_text=true&width=269&t=0';
  const FACEBOOK_REEL_DIRECT_URL = 'https://www.facebook.com/reel/754579180173049/';

  // YouTube Playlist
  const YOUTUBE_VIDEOS = [
    {
      id: 'HdgkNy8j6DM',
      title: 'Young Wheels Kids Toys Official Product Demo & Glider Showcase',
      subtitle: 'Watch Magic Swing Cars & Ride-Ons test speed, drift smoothness & durability',
      views: '15K views',
      time: 'Featured Video',
      thumbnail: getProductImg('candy-swing-car-cyan.jpg'),
      embedUrl: 'https://www.youtube.com/embed/HdgkNy8j6DM?si=VhNfQgNVLFy1FrbE'
    },
    {
      id: 'vid-2',
      title: 'Young Wheels New Delhi Factory Manufacturing Tour',
      subtitle: 'Inside our Pooth Khurd plant: 100% Virgin ABS Molding',
      views: '28K views',
      time: '1 week ago',
      thumbnail: getProductImg('mclaren-green.jpg'),
      embedUrl: 'https://www.youtube.com/embed/HdgkNy8j6DM?si=VhNfQgNVLFy1FrbE'
    },
    {
      id: 'vid-3',
      title: 'Kick Scooter LED Lighttray Wheels Assembly & Safety Check',
      subtitle: 'How magnetic self-generating LED wheels work without batteries',
      views: '19K views',
      time: '2 weeks ago',
      thumbnail: getProductImg('tiny-rider-mint.jpg'),
      embedUrl: 'https://www.youtube.com/embed/HdgkNy8j6DM?si=VhNfQgNVLFy1FrbE'
    },
    {
      id: 'vid-4',
      title: '2-in-1 Sit-to-Stand Baby Walker Unboxing & Speed Control',
      subtitle: 'Protecting early toddler steps with ZED Zero Edge Design',
      views: '35K views',
      time: '1 month ago',
      thumbnail: getProductImg('tiny-rider-2in1-red.jpg'),
      embedUrl: 'https://www.youtube.com/embed/HdgkNy8j6DM?si=VhNfQgNVLFy1FrbE'
    }
  ];

  const [activeYtVideo, setActiveYtVideo] = useState(YOUTUBE_VIDEOS[0]);

  // Official Instagram Profile Story Highlights (Matches @youngwheelsindia)
  const INSTAGRAM_HIGHLIGHTS = [
    {
      id: '1',
      title: 'Hello 👋 Rider!',
      url: 'https://www.instagram.com/stories/highlights/18020372864855157/?hl=en',
      image: '/assets/products/turbo-police-bike-red.jpg',
      gradient: 'from-[#F58529] via-[#DD2A7B] to-[#8134AF]'
    },
    {
      id: '2',
      title: 'Happy 😋 Engaged',
      url: 'https://www.instagram.com/stories/highlights/17981657552867322/?hl=en',
      image: '/assets/products/nexride-orange.jpg',
      gradient: 'from-[#DD2A7B] via-[#FF6B6B] to-[#FFD93D]'
    },
    {
      id: '3',
      title: 'Coming Soon...',
      url: 'https://www.instagram.com/stories/highlights/18103154513124977/?hl=en',
      image: '/assets/products/mclaren-grey.jpg',
      gradient: 'from-[#4ECDC4] via-[#10B981] to-[#FFD93D]'
    },
    {
      id: '4',
      title: 'New Launch',
      url: 'https://www.instagram.com/stories/highlights/18105638570015233/?hl=en',
      image: '/assets/products/nexride-2in1-deluxe-teal.jpg',
      gradient: 'from-[#2563EB] via-[#3B82F6] to-[#4ECDC4]'
    },
    {
      id: '5',
      title: 'FIRST 🏅 RIDE',
      url: 'https://www.instagram.com/stories/highlights/18169042252443483/?hl=en',
      image: '/assets/products/nexride-yellow.jpg',
      gradient: 'from-[#8134AF] via-[#DD2A7B] to-[#FF6B6B]'
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] py-5 sm:py-8 px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      
      {/* PLATFORM SWITCHER TABS HEADER */}
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-1.5 sm:gap-4 bg-white p-1.5 sm:p-2 rounded-2xl border-2 border-[#FFE8B5] shadow-xs">
        {/* Instagram Tab */}
        <button
          onClick={() => setActivePlatform('instagram')}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${
            activePlatform === 'instagram'
              ? 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Instagram</span>
          <span className="hidden sm:inline">Hub</span>
        </button>

        {/* YouTube Tab */}
        <button
          onClick={() => setActivePlatform('youtube')}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${
            activePlatform === 'youtube'
              ? 'bg-[#FF0000] text-white shadow-md'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>YouTube</span>
          <span className="hidden sm:inline">Channel</span>
        </button>

        {/* Facebook Tab */}
        <button
          onClick={() => setActivePlatform('facebook')}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${
            activePlatform === 'facebook'
              ? 'bg-[#1877F2] text-white shadow-md'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Facebook</span>
          <span className="hidden sm:inline">Community</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. INSTAGRAM PLATFORM PANEL */}
      {/* ========================================================================= */}
      {activePlatform === 'instagram' && (
        <div className="space-y-8 sm:space-y-12 animate-in fade-in duration-300">
          
          {/* INSTAGRAM PROFILE HEADER BANNER */}
          <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-0.5 sm:p-1 shadow-xl overflow-hidden">
            <div className="bg-white rounded-[22px] sm:rounded-[34px] p-4 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-center md:text-left">
                {/* Instagram Profile Avatar */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-[#FFD93D] via-[#DD2A7B] to-[#8134AF] shadow-xl">
                    <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-2 sm:p-2.5 overflow-hidden shadow-inner">
                        <img 
                          src="/assets/logo.png" 
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" 
                          alt="Young Wheels Official Instagram" 
                        />
                      </div>
                    </a>
                  </div>
                  <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 bg-blue-500 text-white rounded-full p-1 sm:p-1.5 shadow-md" title="Official Verified Brand">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-3 sm:space-y-4 flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
                    <div>
                      <h1 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-slate-900 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                        <span>@youngwheels__</span>
                        <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-[#DD2A7B]" />
                      </h1>
                      <p className="text-[11px] sm:text-xs font-extrabold text-slate-500 pt-0.5">
                        Young Wheels Toys Official • Pooth Khurd, New Delhi 🇮🇳
                      </p>
                    </div>

                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white font-black text-xs rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Follow @youngwheels__</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed max-w-2xl px-1 sm:px-0">
                    India’s premier manufacturer of Magic Swing Cars, Kick Scooters, Walkers, Tricycles & Potty Chairs. Quality. Trust. Care. 🧸🚗
                  </p>

                  {/* INSTAGRAM STORY HIGHLIGHTS BUBBLES ROW */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 px-1 sm:px-0">
                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-[#DD2A7B]" />
                        <span>Story Highlights</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400">Click to view ↗</span>
                    </div>

                    {/* FIXED OVERFLOW: justify-start so first bubble is NEVER clipped */}
                    <div className="flex items-center gap-3.5 sm:gap-6 overflow-x-auto pb-2 pt-1 no-scrollbar justify-start px-1">
                      {INSTAGRAM_HIGHLIGHTS.map((hl) => (
                        <a
                          key={hl.id}
                          href={hl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                          title={`View ${hl.title} Highlight on Instagram`}
                        >
                          {/* Gradient Story Ring */}
                          <div className={`w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full p-[2px] sm:p-[2.5px] bg-gradient-to-tr ${hl.gradient} shadow-md group-hover:shadow-lg transition-shadow relative`}>
                            <div className="w-full h-full rounded-full p-1 bg-white flex items-center justify-center overflow-hidden">
                              <img 
                                src={hl.image} 
                                alt={hl.title} 
                                className="w-full h-full rounded-full object-contain p-0.5 group-hover:scale-110 transition-transform duration-300" 
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/assets/products/mclaren-green.jpg';
                                }}
                              />
                            </div>
                          </div>

                          {/* Title matching Instagram profile */}
                          <span className="text-[10px] sm:text-xs font-heading font-black text-slate-900 group-hover:text-[#DD2A7B] transition-colors leading-tight text-center truncate max-w-[65px] sm:max-w-[85px]">
                            {hl.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* CLEAN & PREMIUM LIVE INSTAGRAM REEL EMBED SECTION */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200/80 pb-4 sm:pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#FFF4B0] border border-[#FFE8B5] px-3 py-1 rounded-full text-[11px] sm:text-xs font-black text-slate-900 mb-1.5 sm:mb-2">
                  <Flame className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>Official Instagram Live Stream</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-slate-900 tracking-tight">
                  Watch Young Wheels Official Instagram Reel
                </h2>
              </div>

              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Instagram className="w-4 h-4 text-[#DD2A7B]" />
                <span>Open @youngwheels__ on Instagram ↗</span>
              </a>
            </div>

            {/* ELEGANT CENTERED LIVE EMBED CONTAINER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Main Reel Embed Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200/90 p-3.5 sm:p-6 shadow-xl flex flex-col items-center">
                
                <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DD2A7B] animate-ping"></span>
                    <span className="text-[11px] sm:text-xs font-black text-slate-900 uppercase tracking-wider">
                      Live Reel • #DbS1EHyzh_K
                    </span>
                  </div>
                  <a
                    href={REEL_1_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#DD2A7B] hover:underline flex items-center gap-1"
                  >
                    <span>View on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Seamless Instagram Live Iframe Embed */}
                <div className="w-full flex justify-center bg-slate-50 rounded-2xl p-1.5 sm:p-2 border border-slate-100 shadow-inner overflow-hidden">
                  <iframe
                    src={`https://www.instagram.com/reel/${REEL_1_SHORTCODE}/embed/`}
                    className="w-full h-[460px] xs:h-[500px] sm:h-[520px] max-w-[360px] sm:max-w-[400px] border-0 rounded-2xl overflow-hidden shadow-md"
                    allowTransparency={true}
                    scrolling="no"
                    title="Young Wheels Instagram Reel DbS1EHyzh_K"
                  ></iframe>
                </div>

              </div>

              {/* Side Info & Channel Banner */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                
                <div className="bg-gradient-to-br from-[#FFF9EE] via-white to-[#FFE8B5]/40 rounded-3xl sm:rounded-[32px] border-2 border-[#FFE8B5] p-5 sm:p-8 space-y-4 sm:space-y-5 shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center font-bold shadow-md">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
                      Young Wheels Official Instagram Channel
                    </h3>
                    <p className="text-xs font-bold text-[#DD2A7B]">@youngwheels__</p>
                  </div>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Watch our latest factory manufacturing processes, magic car drift demonstrations, unboxing videos, and toddler safety checks live on Instagram!
                  </p>

                  <div className="pt-2 space-y-2.5 sm:space-y-3">
                    <a
                      href={REEL_1_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] text-white font-black text-xs rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-transform active:scale-95"
                    >
                      <Video className="w-4 h-4" />
                      <span>Play Reel on Instagram App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 sm:py-3.5 bg-white text-slate-900 font-black text-xs rounded-xl sm:rounded-2xl border-2 border-slate-200 shadow-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                      <span>Explore Full Profile & All Reels ↗</span>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl sm:rounded-[32px] p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-[#FFD93D] font-black text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Pooth Khurd, New Delhi 🇮🇳</span>
                  </div>
                  <h4 className="font-heading font-black text-base sm:text-lg text-white">
                    Factory Direct Quality Assurance
                  </h4>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Made with 100% Virgin ABS plastic, high-tensile steel bearings, and zero toxic chemical smell. BIS Safety Certified for active toddler play.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. YOUTUBE PLATFORM PANEL */}
      {/* ========================================================================= */}
      {activePlatform === 'youtube' && (
        <div className="space-y-8 sm:space-y-12 animate-in fade-in duration-300">
          
          {/* YOUTUBE CHANNEL HEADER BANNER */}
          <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#FF0000] via-[#CC0000] to-[#990000] p-0.5 sm:p-1 shadow-xl overflow-hidden">
            <div className="bg-white rounded-[22px] sm:rounded-[34px] p-4 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-center md:text-left">
                {/* YouTube Profile Avatar */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 sm:p-1.5 bg-[#FF0000] shadow-xl flex items-center justify-center">
                    <Youtube className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                  </div>
                  <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 bg-red-600 text-white rounded-full p-1 sm:p-1.5 shadow-md" title="Official YouTube Channel">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-3 sm:space-y-4 flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
                    <div>
                      <h1 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-slate-900 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                        <span>Young Wheels Official</span>
                        <Youtube className="w-5 h-5 sm:w-7 sm:h-7 text-[#FF0000]" />
                      </h1>
                      <p className="text-[11px] sm:text-xs font-extrabold text-slate-500 pt-0.5">
                        @youngwheelss • Official YouTube Channel • Pooth Khurd, New Delhi 🇮🇳
                      </p>
                    </div>

                    <a
                      href={YOUTUBE_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-black text-xs rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Subscribe @youngwheelss</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed max-w-2xl px-1 sm:px-0">
                    Official video channel featuring factory assembly guides, 360° magic car drift tests, kick scooter lighttray wheel showcases & toddler safety reviews.
                  </p>

                  {/* YOUTUBE CHANNEL METRICS */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1">
                    <div className="bg-[#FFF0F0] border border-[#FFD6D6] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#FF0000]">Official</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Video Channel</div>
                    </div>
                    <div className="bg-[#FFF8F0] border border-[#FFE8B5] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-slate-900">HD 1080p</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Product Demos</div>
                    </div>
                    <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#10B981]">Unboxing</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Assembly Guides</div>
                    </div>
                    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#2563EB]">55 Models</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Toy Showcase</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* YOUTUBE VIDEO PLAYER & FEATURED GRID */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200/80 pb-4 sm:pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#FFF0F0] border border-[#FFD6D6] px-3 py-1 rounded-full text-[11px] sm:text-xs font-black text-[#FF0000] mb-1.5 sm:mb-2">
                  <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
                  <span>Featured Channel Video</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-slate-900 tracking-tight">
                  {activeYtVideo.title}
                </h2>
              </div>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-[#FF0000] hover:bg-[#cc0000] text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Youtube className="w-4 h-4 text-white" />
                <span>Visit YouTube Channel ↗</span>
              </a>
            </div>

            {/* VIDEO PLAYER & SELECTION CONTAINER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Main Player Display */}
              <div className="lg:col-span-8 bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200/90 p-3.5 sm:p-6 shadow-xl space-y-3 sm:space-y-4">
                
                {/* Official Live YouTube Iframe Player */}
                <div className="w-full rounded-2xl bg-slate-900 overflow-hidden shadow-lg border border-slate-700">
                  <iframe
                    width="100%"
                    height="450"
                    src={activeYtVideo.embedUrl}
                    title={activeYtVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen={true}
                    className="w-full aspect-video h-auto min-h-[200px] sm:min-h-[380px] max-h-[460px] rounded-2xl"
                  ></iframe>
                </div>

                <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2 text-left">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">{activeYtVideo.title}</h3>
                  <p className="text-xs text-slate-600 font-medium">{activeYtVideo.subtitle}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1.5 sm:pt-2 text-[11px] sm:text-xs font-bold text-slate-500">
                    <span>{activeYtVideo.views}</span>
                    <span>•</span>
                    <span>{activeYtVideo.time}</span>
                    <span>•</span>
                    <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline flex items-center gap-1">
                      <span>Watch on YouTube App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Video Playlist Selector */}
              <div className="lg:col-span-4 space-y-3">
                <h4 className="font-heading font-black text-xs sm:text-sm text-slate-900 uppercase tracking-wider px-1">
                  More Channel Videos
                </h4>

                <div className="space-y-2.5 sm:space-y-3">
                  {YOUTUBE_VIDEOS.map((vid) => (
                    <button
                      key={vid.id}
                      onClick={() => setActiveYtVideo(vid)}
                      className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border-2 transition-all flex items-center gap-3 cursor-pointer ${
                        activeYtVideo.id === vid.id
                          ? 'bg-[#FFF0F0] border-[#FF0000] shadow-sm'
                          : 'bg-white border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-16 sm:w-20 h-12 sm:h-14 rounded-xl bg-slate-100 overflow-hidden relative shrink-0">
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h5 className="font-heading font-bold text-xs text-slate-900 line-clamp-2 leading-tight">
                          {vid.title}
                        </h5>
                        <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{vid.views}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 sm:py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-black text-xs rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center gap-2 mt-3 sm:mt-4"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Subscribe to Channel ↗</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. FACEBOOK PLATFORM PANEL */}
      {/* ========================================================================= */}
      {activePlatform === 'facebook' && (
        <div className="space-y-8 sm:space-y-12 animate-in fade-in duration-300">
          
          {/* FACEBOOK PAGE HEADER BANNER */}
          <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#1877F2] via-[#0B5ED7] to-[#0A4BA8] p-0.5 sm:p-1 shadow-xl overflow-hidden">
            <div className="bg-white rounded-[22px] sm:rounded-[34px] p-4 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-center md:text-left">
                {/* Facebook Profile Avatar */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 sm:p-1.5 bg-[#1877F2] shadow-xl flex items-center justify-center">
                    <Facebook className="w-10 h-10 sm:w-16 sm:h-16 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 bg-blue-600 text-white rounded-full p-1 sm:p-1.5 shadow-md" title="Official Facebook Page">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-3 sm:space-y-4 flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
                    <div>
                      <h1 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-slate-900 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                        <span>Young Wheels India</span>
                        <Facebook className="w-5 h-5 sm:w-7 sm:h-7 text-[#1877F2] fill-[#1877F2]" />
                      </h1>
                      <p className="text-[11px] sm:text-xs font-extrabold text-slate-500 pt-0.5">
                        @youngwheelsindia • Official Facebook Page • Pooth Khurd, New Delhi 🇮🇳
                      </p>
                    </div>

                    <a
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1877F2] hover:bg-[#0b5ed7] text-white font-black text-xs rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
                    >
                      <Facebook className="w-4 h-4 fill-white" />
                      <span>Follow @youngwheelsindia</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed max-w-2xl px-1 sm:px-0">
                    Connect with our official Facebook community! Get instant factory dispatch announcements, dealer customer reviews, wholesale catalogs, and new toy releases.
                  </p>

                  {/* FACEBOOK PAGE METRICS */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1">
                    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#1877F2]">Verified</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Facebook Page</div>
                    </div>
                    <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#10B981]">B2B Hub</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Dealer Network</div>
                    </div>
                    <div className="bg-[#FFF8F0] border border-[#FFE8B5] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-slate-900">4.9 ★</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Customer Trust</div>
                    </div>
                    <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                      <div className="text-base sm:text-lg font-black font-heading text-[#EC4899]">Pan-India</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Wholesale Logistics</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* FACEBOOK COMMUNITY POSTS & LIVE VIDEO REEL SECTION */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200/80 pb-4 sm:pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full text-[11px] sm:text-xs font-black text-[#1877F2] mb-1.5 sm:mb-2">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#1877F2]" />
                  <span>Facebook Live Reel & Community Feed</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-slate-900 tracking-tight">
                  Watch Young Wheels Official Facebook Reel
                </h2>
              </div>

              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-[#1877F2] hover:bg-[#0b5ed7] text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Open @youngwheelsindia on Facebook ↗</span>
              </a>
            </div>

            {/* LIVE FACEBOOK REEL EMBED + POSTS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Main Facebook Reel Player Embed */}
              <div className="lg:col-span-6 bg-white rounded-3xl sm:rounded-[36px] border-2 border-slate-200/90 p-4 sm:p-6 shadow-xl flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2] animate-ping"></span>
                    <span className="text-[11px] sm:text-xs font-black text-slate-900 uppercase tracking-wider">
                      Live Facebook Reel
                    </span>
                  </div>
                  <a
                    href={FACEBOOK_REEL_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1"
                  >
                    <span>Open Reel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Facebook Reel Official Iframe */}
                <div className="w-full flex justify-center bg-slate-50 p-1.5 sm:p-4 rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
                  <iframe
                    src={FACEBOOK_REEL_EMBED_URL}
                    width="269"
                    height="591"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="rounded-2xl shadow-md max-w-full"
                    title="Young Wheels Facebook Reel 754579180173049"
                  ></iframe>
                </div>
              </div>

              {/* Side Community Post Card */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                
                <div className="bg-white rounded-3xl sm:rounded-[32px] border-2 border-slate-200/90 p-4 sm:p-6 shadow-xl space-y-3 sm:space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-slate-900 text-xs sm:text-sm">Young Wheels India</h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Official Facebook Announcement</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400">Pooth Khurd, Delhi</span>
                  </div>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    🚚 <strong>Factory Dispatch Update:</strong> Fresh bulk carton dispatch of 360° Magic Swing Cars and Kick Scooters heading out to authorized dealers across India!
                  </p>

                  <div className="rounded-2xl overflow-hidden h-36 sm:h-48 bg-white border border-slate-200 relative flex items-center justify-center p-2">
                    <img src={getProductImg('candy-swing-car-cyan.jpg')} alt="Facebook Dispatch" className="w-full h-full object-contain" />
                    <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      Factory Direct Dispatch
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1 text-[#1877F2]">
                      <ThumbsUp className="w-3.5 h-3.5" /> 245 Likes
                    </span>
                    <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-700 flex items-center gap-1">
                      <span>View Page on Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* B2B Callout Banner */}
                <div className="bg-slate-900 text-white rounded-3xl sm:rounded-[32px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-left border-2 border-slate-800 shadow-xl">
                  <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-xs sm:text-sm text-white">
                        Become a Registered Facebook Retail Dealer
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-300">
                        Pooth Khurd, Delhi manufacturing wholesale desk.
                      </p>
                    </div>
                  </div>

                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto shrink-0 bg-[#1877F2] hover:bg-[#0b5ed7] text-white px-4 py-2 sm:py-2.5 rounded-xl font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Facebook className="w-3.5 h-3.5 fill-white" />
                    <span>Message Page</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

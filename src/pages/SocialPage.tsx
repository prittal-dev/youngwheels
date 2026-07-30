import React from 'react';
import { 
  Instagram, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  Video,
  Sparkles,
  Award
} from 'lucide-react';

export const SocialPage: React.FC = () => {
  const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/youngwheelsindia/?hl=en';
  const REEL_1_URL = 'https://www.instagram.com/youngwheelsindia/reel/DbS1EHyzh_K/?hl=en';
  const REEL_1_SHORTCODE = 'DbS1EHyzh_K';

  return (
    <div className="min-h-screen bg-[#FFFDF9] py-10 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* INSTAGRAM PROFILE HEADER BANNER */}
      <div className="max-w-5xl mx-auto rounded-[36px] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-1 shadow-xl">
        <div className="bg-white rounded-[34px] p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Instagram Profile Avatar */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#FFD93D] via-[#DD2A7B] to-[#8134AF] shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-900 border-4 border-white flex items-center justify-center overflow-hidden relative">
                  <span className="font-heading font-black text-3xl text-[#FFD93D]">YW</span>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-1.5 shadow-md" title="Official Verified Brand">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div>
                  <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                    <span>@youngwheelsindia</span>
                    <Instagram className="w-7 h-7 text-[#DD2A7B]" />
                  </h1>
                  <p className="text-xs font-extrabold text-slate-500 pt-0.5">
                    Young Wheels Toys Official • Pooth Khurd, New Delhi 🇮🇳
                  </p>
                </div>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white font-black text-xs rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow @youngwheelsindia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed max-w-2xl">
                India’s premier manufacturer of Magic Swing Cars, Kick Scooters, Walkers, Tricycles & Potty Chairs. Quality. Trust. Care. 🧸🚗
              </p>

              {/* PROFILE METRICS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#FFF8F0] border border-[#FFE8B5] rounded-2xl p-3 text-center">
                  <div className="text-lg font-black font-heading text-slate-900">Official</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Instagram Brand</div>
                </div>
                <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-3 text-center">
                  <div className="text-lg font-black font-heading text-[#DD2A7B]">Live Stream</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reels & Media</div>
                </div>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-3 text-center">
                  <div className="text-lg font-black font-heading text-[#10B981]">Factory Direct</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">New Delhi Unit</div>
                </div>
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-3 text-center">
                  <div className="text-lg font-black font-heading text-[#2563EB]">55 Models</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Toy Catalogue</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CLEAN & PREMIUM LIVE INSTAGRAM REEL EMBED SECTION */}
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF4B0] border border-[#FFE8B5] px-3.5 py-1 rounded-full text-xs font-black text-slate-900 mb-2">
              <Flame className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>Official Instagram Live Stream</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
              Watch Young Wheels Official Instagram Reel
            </h2>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#DD2A7B]" />
            <span>Open @youngwheelsindia on Instagram ↗</span>
          </a>
        </div>

        {/* ELEGANT CENTERED LIVE EMBED CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Reel Embed Card */}
          <div className="lg:col-span-7 bg-white rounded-[36px] border-2 border-slate-200/90 p-4 sm:p-6 shadow-2xl flex flex-col items-center">
            
            <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-slate-100 px-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#DD2A7B] animate-ping"></span>
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
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
            <div className="w-full flex justify-center bg-slate-50 rounded-2xl p-2 border border-slate-100 shadow-inner">
              <iframe
                src={`https://www.instagram.com/reel/${REEL_1_SHORTCODE}/embed/`}
                className="w-full h-[520px] max-w-[400px] border-0 rounded-2xl overflow-hidden shadow-md"
                allowTransparency={true}
                scrolling="no"
                title="Young Wheels Instagram Reel DbS1EHyzh_K"
              ></iframe>
            </div>

          </div>

          {/* Side Info & Channel Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-[#FFF9EE] via-white to-[#FFE8B5]/40 rounded-[32px] border-2 border-[#FFE8B5] p-6 sm:p-8 space-y-5 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center font-bold shadow-md">
                <Instagram className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-black text-xl text-slate-900">
                  Young Wheels Official Instagram Channel
                </h3>
                <p className="text-xs font-bold text-[#DD2A7B]">@youngwheelsindia</p>
              </div>

              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Watch our latest factory manufacturing processes, magic car drift demonstrations, unboxing videos, and toddler safety checks live on Instagram!
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href={REEL_1_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] text-white font-black text-xs rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:opacity-95 transition-transform active:scale-95"
                >
                  <Video className="w-4 h-4" />
                  <span>Play Reel on Instagram App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white text-slate-900 font-black text-xs rounded-2xl border-2 border-slate-200 shadow-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                  <span>Explore Full Profile & All Reels ↗</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[32px] p-6 space-y-3 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-[#FFD93D] font-black text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Pooth Khurd, New Delhi 🇮🇳</span>
              </div>
              <h4 className="font-heading font-black text-lg text-white">
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
  );
};

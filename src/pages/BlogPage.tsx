import React, { useState } from 'react';
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  MessageCircle, 
  Building2, 
  ChevronDown
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { COMPANY_DETAILS } from '../data/company';

interface BlogPageProps {
  onOpenWholesaleModal: () => void;
  onNavigateHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenWholesaleModal, onNavigateHome }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setOpenFaqIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      
      {/* BLOG TOP HERO BANNER */}
      <div className="relative bg-[#FEF08A] border-b-4 border-[#FFD93D] py-10 sm:py-14 px-4 overflow-hidden">
        
        {/* Floating Playful Bees & Stars Illustrations */}
        <div className="absolute top-3 left-8 text-2xl animate-bounce duration-1000">🐝</div>
        <div className="absolute top-4 right-12 text-3xl animate-pulse">🐝</div>
        <div className="absolute bottom-2 left-1/4 text-xl opacity-60">✨</div>
        <div className="absolute top-6 right-1/4 text-xl opacity-60">⭐</div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight">
            BLOG
          </h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 pt-1">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-1 hover:text-[#FF6B6B] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            {selectedPost ? (
              <>
                <button 
                  onClick={handleBackToList}
                  className="hover:text-[#FF6B6B] transition-colors"
                >
                  Blog
                </button>
                <ChevronRight className="w-4 h-4 text-slate-500" />
                <span className="text-slate-900 line-clamp-1 max-w-[200px] sm:max-w-xs">{selectedPost.category} Guide</span>
              </>
            ) : (
              <span className="text-slate-900 font-black">Blog</span>
            )}
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {selectedPost ? (
          /* ========================================================================= */
          /* SINGLE BLOG ARTICLE DETAIL VIEW                                            */
          /* ========================================================================= */
          <article className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Back Button */}
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black rounded-xl transition-all shadow-2xs hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to All Guides</span>
            </button>

            {/* Category Header Card Banner (Matching Screenshot 3) */}
            <div className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 border-4 border-white shadow-xl ${
              selectedPost.category === 'Tri Cycle' ? 'bg-[#67E8F9]' :
              selectedPost.category === 'Magic Car / Swing Car' ? 'bg-[#FEF08A]' :
              selectedPost.category === 'Potty Chair' ? 'bg-[#FCA5A5]' : 'bg-[#FFEDD5]'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-2">
                  <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs inline-block">
                    {selectedPost.category} Guide
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 leading-tight">
                    {selectedPost.category}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-slate-800/80">
                    {selectedPost.subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-extrabold text-slate-900 pt-2">
                    <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedPost.publishedDate}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 flex justify-center md:justify-end">
                  <div className="w-48 h-36 sm:w-56 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/90 shadow-lg bg-white">
                    <img 
                      src={selectedPost.cardImage} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Article Main Title */}
            <div className="space-y-3 pt-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 leading-tight tracking-tight">
                {selectedPost.title}
              </h1>
            </div>

            {/* Article Body Content */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/80 shadow-md space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
              
              {/* Intro Paragraphs */}
              <div className="space-y-4 text-slate-700 font-medium">
                {selectedPost.intro.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph.includes('Children Tricycle Manufacturer') ? (
                      <>
                        {paragraph.split('Children Tricycle Manufacturer').map((part, pIdx, arr) => (
                          <React.Fragment key={pIdx}>
                            {part}
                            {pIdx < arr.length - 1 && (
                              <span className="font-bold text-[#FF6B6B] underline decoration-[#FF6B6B]/40 decoration-2 underline-offset-2">
                                Children Tricycle Manufacturer
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              {/* Sections */}
              {selectedPost.sections.map((section, idx) => (
                <div key={idx} className="space-y-4 pt-4 border-t border-slate-100">
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FFD93D] inline-block shrink-0" />
                    <span>{section.heading}</span>
                  </h2>

                  <p className="text-slate-700 font-medium leading-relaxed">
                    {section.content.includes('Children Tricycle Manufacturer') ? (
                      <>
                        {section.content.split('Children Tricycle Manufacturer').map((part, pIdx, arr) => (
                          <React.Fragment key={pIdx}>
                            {part}
                            {pIdx < arr.length - 1 && (
                              <span className="font-bold text-[#FF6B6B] underline decoration-[#FF6B6B]/40 decoration-2 underline-offset-2">
                                Children Tricycle Manufacturer
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </>
                    ) : (
                      section.content
                    )}
                  </p>

                  {/* Bullet Points */}
                  {section.bulletPoints && (
                    <ul className="space-y-2.5 pl-2 pt-1">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-black text-slate-900">{bp.bold} </strong>
                            <span>{bp.text}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* B2B Callout Banner Inside Article */}
              <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFE399]/40 border-2 border-[#FFD93D] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-heading font-black text-base text-slate-900">
                    Are You a Retailer or Wholesale Toy Distributor?
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">
                    Get direct factory price lists and catalog samples directly from Young Wheels Pooth Khurd factory desk.
                  </p>
                </div>
                <button
                  onClick={onOpenWholesaleModal}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl shadow-md flex items-center gap-2 shrink-0 transition-transform active:scale-95"
                >
                  <Building2 className="w-4 h-4 text-[#FFD93D]" />
                  <span>Request Wholesale Catalog</span>
                </button>
              </div>

            </div>

            {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
            {selectedPost.faqs && selectedPost.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/80 shadow-md space-y-6">
                
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFE399] text-slate-900 flex items-center justify-center font-black shrink-0">
                    <HelpCircle className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      Everything you need to know about children tricycles & manufacturing standards
                    </p>
                  </div>
                </div>

                {/* FAQ Items Accordion / List */}
                <div className="space-y-3">
                  {selectedPost.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border-2 transition-all ${
                          isOpen ? 'border-[#FF6B6B] bg-[#FFF8F8] shadow-xs' : 'border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/60'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-black text-sm sm:text-base text-slate-900"
                        >
                          <span className="leading-snug">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 shrink-0 text-slate-600 transition-transform ${isOpen ? 'rotate-180 text-[#FF6B6B]' : ''}`} />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Navigation Back */}
            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={handleBackToList}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-slate-800 transition-all shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Guides</span>
              </button>
            </div>

          </article>
        ) : (
          /* ========================================================================= */
          /* BLOG CARDS GRID LIST VIEW (Matching Screenshot 1 & 2)                      */
          /* ========================================================================= */
          <div className="space-y-10">
            
            {/* Intro Heading */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="bg-[#FFE399] text-slate-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Parents & Buyers Knowledge Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
                Kids Toy Buying Guides & Industry Insights
              </h2>
              <p className="text-slate-600 font-medium text-xs sm:text-sm">
                Expert tips on choosing safe, durable, and ergonomic ride-on toys, magic swing cars, and tricycles.
              </p>
            </div>

            {/* Blog Posts Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleSelectPost(post)}
                  className="group bg-white rounded-[32px] border-3 border-slate-200/80 p-5 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    
                    {/* Top Pastel Header Frame (Matching Screenshots 1 & 2) */}
                    <div className={`relative rounded-2xl p-5 border-2 border-white shadow-xs overflow-hidden ${
                      post.category === 'Tri Cycle' ? 'bg-[#67E8F9]' :
                      post.category === 'Magic Car / Swing Car' ? 'bg-[#FEF08A]' :
                      post.category === 'Potty Chair' ? 'bg-[#FCA5A5]' : 'bg-[#FFEDD5]'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-heading font-black text-xl text-slate-900 leading-tight">
                            {post.category}
                          </h3>
                          <p className="text-[11px] font-bold text-slate-800/80">
                            {post.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Card Image Thumbnail */}
                      <div className="mt-4 h-36 w-full rounded-xl overflow-hidden border-2 border-white bg-white shadow-2xs">
                        <img 
                          src={post.cardImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Article Card Content */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                        <span className="flex items-center gap-1 text-[#FF6B6B]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{post.publishedDate}</span>
                      </div>

                      <h3 className="font-heading font-black text-base sm:text-lg text-slate-900 group-hover:text-[#FF6B6B] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                  </div>

                  {/* Read Guide CTA Link */}
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-xs font-black text-[#FF6B6B] group-hover:underline flex items-center gap-1">
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                      Guide
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

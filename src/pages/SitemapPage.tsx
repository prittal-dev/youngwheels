import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Search, 
  Sparkles, 
  ExternalLink, 
  Compass, 
  Car, 
  Footprints, 
  Bike, 
  Smile, 
  FileText, 
  Building2, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  ShoppingBag,
  Info
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { CATEGORIES, COMPANY_DETAILS } from '../data/company';
import { PRODUCTS } from '../data/products';
import { getPathFromTab } from '../utils/router';
import { Product } from '../types';

interface SitemapPageProps {
  onNavigateTab: (tab: string) => void;
  onQuickView: (product: Product) => void;
  onAddToEnquiry: (product: Product) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({
  onNavigateTab,
  onQuickView,
  onAddToEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Main Page Links
  const mainPages = [
    { title: 'Home Page', path: '/', tab: 'home', desc: 'Official homepage of Young Wheels toy factory in Delhi, India.' },
    { title: 'About Us', path: '/about-us', tab: 'about', desc: 'Learn about our 15+ years of toy manufacturing excellence & ISO standards.' },
    { title: 'All Toy Categories', path: '/toys-manufacturer-in-india', tab: 'all-categories', desc: 'Browse our complete catalog of kids mobility & learning toys.' },
    { title: 'Blog & Safety Guides', path: '/blog', tab: 'blog', desc: 'Expert guides on children tricycle safety, swing cars & potty training.' },
    { title: 'Exhibitions & Events', path: '/events', tab: 'events', desc: 'Upcoming toy industry fairs, dealer summits & manufacturing expos.' },
    { title: 'Contact Us & Factory Visit', path: '/contact-us', tab: 'contact', desc: 'Get in touch for wholesale orders, dealership inquiries & factory visits.' },
    { title: 'Social Media Hub', path: '/social', tab: 'social', desc: 'Follow Young Wheels on Instagram, YouTube, and Facebook.' },
    { title: 'XML Sitemap File', path: '/sitemap.xml', isXml: true, desc: 'Official XML Sitemap URL for Googlebot, Bingbot & Search Console crawlers.' },
    { title: 'Thank You Page', path: '/thank-you', tab: 'thank-you', desc: 'Confirmation page for inquiries and wholesale catalog requests.' },
  ];


  // Toy Category SEO Manufacturer Links
  const categoryLinks = [
    {
      id: 'ride-ons',
      name: 'Ride-Ons & Push Cars',
      path: '/kids-ride-on-car-manufacturer-in-delhi',
      tab: 'ride-ons',
      count: '13 Models',
      desc: 'Heavy-duty G-Vagon riders, McClaren supercars, racing push cars & rocking animals.',
      icon: Car,
      bgColor: 'bg-[#E0F2FE]',
      borderColor: 'border-[#7DD3FC]'
    },
    {
      id: 'tricycles',
      name: 'Kids Tricycles & Trikes',
      path: '/best-children-tricycle-manufacturer-in-delhi',
      tab: 'tricycles',
      count: '11 Models',
      desc: 'NexRide 2-in-1 push trikes, Tiny Rider pedal tricycles & Turbo Police bikes.',
      icon: Bike,
      bgColor: 'bg-[#FED7AA]',
      borderColor: 'border-[#FB923C]'
    },
    {
      id: 'swing-cars',
      name: 'Magic Swing Cars',
      path: '/kids-swing-car-manufacturer-in-delhi',
      tab: 'swing-cars',
      count: '12 Models',
      desc: '360° twist kinetic motion cars — Pandaa, Wendy, Cutiee & Candy swing cars.',
      icon: Car,
      bgColor: 'bg-[#FEF08A]',
      borderColor: 'border-[#FFD93D]'
    },
    {
      id: 'potty-trainers',
      name: 'Baby Potty Trainers',
      path: '/baby-potty-trainer-manufacturer-in-delhi',
      tab: 'potty-trainers',
      count: '8 Models',
      desc: 'Ergonomic, non-toxic potty chairs — Teddy, Cow, Sofa, Scooty & Joy Chairs.',
      icon: Smile,
      bgColor: 'bg-[#E9D5FF]',
      borderColor: 'border-[#C084FC]'
    },
    {
      id: 'baby-walkers',
      name: 'Baby Walkers & Push Trikes',
      path: '/baby-walkers-manufacturers-in-india',
      tab: 'baby-walkers',
      count: '3 Models',
      desc: 'Casper Deluxe & Bearyboo activity push walkers with 360° revolving wheels.',
      icon: Footprints,
      bgColor: 'bg-[#DCFCE7]',
      borderColor: 'border-[#86EFAC]'
    },
    {
      id: 'kick-scooters',
      name: 'Kids Kick Scooters',
      path: '/kids-kick-scooter-manufacturer-in-delhi',
      tab: 'kick-scooters',
      count: '8 Models',
      desc: 'Foldable 3-wheel scooters with height-adjustable handlebars & LED light-up wheels.',
      icon: Sparkles,
      bgColor: 'bg-[#FCE7F3]',
      borderColor: 'border-[#F472B6]'
    }
  ];

  // Top Product Models
  const featuredProducts = PRODUCTS.slice(0, 10);

  // Filtered Lists based on Search Query
  const filteredMainPages = mainPages.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categoryLinks.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBlogs = BLOG_POSTS.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProductsList = featuredProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 sm:py-14 bg-transparent relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FFD93D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#4ECDC4]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Hero Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[36px] border-4 border-[#FFE8B5] p-6 sm:p-10 shadow-xl text-center space-y-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-[#FFD93D] text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Compass className="w-4 h-4 text-slate-900" />
              <span>YoungWheels Official HTML Sitemap</span>
            </div>
            <a
              href="https://www.youngwheels.in/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-xs transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-[#FFD93D]" />
              <span>View XML Sitemap (sitemap.xml)</span>
              <ExternalLink className="w-3 h-3 text-slate-300" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Complete Website Sitemap
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Explore all pages, toy categories, factory manufacturing locations, product models, blog posts, and resources on <strong className="text-slate-900">youngwheels.in</strong>.
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search sitemap links, categories, or models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF6B6B] focus:bg-white transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* 1. MAIN WEBSITE PAGES */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFD93D] text-slate-900 flex items-center justify-center font-black shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                Main Website 
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMainPages.map((page, idx) => {
              if (page.isXml) {
                return (
                  <a
                    key="xml-sitemap-card"
                    href="https://www.youngwheels.in/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-[#FFF9EE] border-2 border-[#FFD93D] hover:border-[#FF6B6B] hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-slate-900 bg-[#FFD93D] px-2 py-0.5 rounded-md">
                          XML File
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-[#FF6B6B] group-hover:scale-110 transition-all" />
                      </div>
                      <h3 className="font-heading font-black text-base text-slate-900 group-hover:text-[#FF6B6B] transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed">
                        {page.desc}
                      </p>
                    </div>
                    <div className="pt-3 text-[11px] font-bold text-[#FF6B6B] group-hover:underline flex items-center gap-1">
                      <span>https://www.youngwheels.in/sitemap.xml</span>
                    </div>
                  </a>
                );
              }
              return (
                <a
                  key={page.tab || idx}
                  href={getPathFromTab(page.tab!)}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab(page.tab!);
                  }}
                  className="p-5 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-[#FF6B6B] hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-[#FF6B6B] bg-[#FFF0F0] px-2 py-0.5 rounded-md">
                        Page
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B6B] group-hover:scale-110 transition-all" />
                    </div>
                    <h3 className="font-heading font-black text-base text-slate-900 group-hover:text-[#FF6B6B] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 leading-relaxed">
                      {page.desc}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors flex items-center gap-1">
                    <span>URL: {page.path}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>


        {/* 2. TOY CATEGORY PAGES (SEO MANUFACTURER URLS) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
            <div className="w-9 h-9 rounded-xl bg-[#4ECDC4] text-slate-900 flex items-center justify-center font-black shadow-xs">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                Toy Category 
              </h2>
              <p className="text-xs font-semibold text-slate-500">Official product category landing pages</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {filteredCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={cat.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab(cat.tab);
                  }}
                  className={`p-5 rounded-3xl border-3 ${cat.bgColor} ${cat.borderColor} shadow-md hover:shadow-xl transition-all group flex flex-col justify-between hover:-translate-y-1`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-white/90 text-slate-900 px-2.5 py-0.5 rounded-full shadow-2xs">
                        {cat.count}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                        <IconComp className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-lg text-slate-900">
                      {cat.name}
                    </h3>
                    
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className="truncate pr-2 font-mono text-[10px] text-slate-600">{cat.path}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform text-[#FF6B6B]" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 3. BLOG POSTS & SAFETY GUIDES */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF6B6B] text-white flex items-center justify-center font-black shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                Blog Posts 
              </h2>
              <p className="text-xs font-semibold text-slate-500">In-depth guides on safety, standards & toddler toys</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {filteredBlogs.map((blog) => (
              <a
                key={blog.id}
                href={`/blog#${blog.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTab('blog');
                }}
                className="p-5 rounded-2xl bg-white border-2 border-slate-200/80 hover:border-[#FF6B6B] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span className="bg-[#FFE399] text-slate-900 px-2 py-0.5 rounded-md font-black">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-heading font-black text-base text-slate-900 group-hover:text-[#FF6B6B] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-600 line-clamp-2 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#FF6B6B]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 4. POPULAR PRODUCT MODELS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF8E53] text-white flex items-center justify-center font-black shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-slate-900 tracking-tight">
                  Featured Toy Models
                </h2>
                <p className="text-xs font-semibold text-slate-500">Popular manufactured products at Young Wheels</p>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('all-categories')}
              className="text-xs font-black text-[#FF6B6B] hover:underline flex items-center gap-1"
            >
              <span>View All Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredProductsList.map((product) => (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#FFD93D] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="h-24 w-full rounded-xl bg-slate-50 overflow-hidden p-1 flex items-center justify-center">
                    <img
                      src={product.colors[0]?.image || '/assets/products/mclaren-green.jpg'}
                      alt={product.name}
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-[10px] font-extrabold text-[#FF6B6B] bg-[#FFF0F0] px-2 py-0.5 rounded-md inline-block">
                    {product.modelCode}
                  </div>
                  <h4 className="font-heading font-black text-xs text-slate-900 line-clamp-1 group-hover:text-[#FF6B6B] transition-colors">
                    {product.name}
                  </h4>
                </div>

                <div className="pt-2 text-[11px] font-bold text-slate-600 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#FF6B6B] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FACTORY & HEADQUARTERS INFORMATION */}
        <div className="bg-gradient-to-br from-[#FFF9EE] via-white to-[#EBFBFA] rounded-[32px] border-4 border-[#FFE8B5] p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD93D] text-slate-900 flex items-center justify-center font-black shadow-xs shrink-0">
                <Building2 className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">
                  Factory & Contact Information
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                  Young Wheels Manufacturing Facility in Delhi, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-[#25D366] text-white text-xs font-black px-3 py-1 rounded-full shadow-2xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>MSME & ISO Certified</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800 text-xs sm:text-sm">
            
            {/* Location */}
            <div className="space-y-2 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 font-black font-heading text-slate-900 text-base">
                <MapPin className="w-5 h-5 text-[#FF6B6B]" />
                <span>Factory Location</span>
              </div>
              <p className="font-medium text-slate-600 leading-relaxed">
                Pooth Khurd Industrial Area, North West Delhi, New Delhi – 110039, India.
              </p>
            </div>

            {/* Direct Calls */}
            <div className="space-y-2 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 font-black font-heading text-slate-900 text-base">
                <Phone className="w-5 h-5 text-[#2563EB]" />
                <span>Wholesale Phone</span>
              </div>
              <p className="font-bold text-slate-900">
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#2563EB] transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </p>
              <p className="text-slate-500 font-medium">Monday – Saturday: 9:30 AM – 6:30 PM IST</p>
            </div>

            {/* WhatsApp */}
            <div className="space-y-2 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 font-black font-heading text-slate-900 text-base">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Catalog</span>
              </div>
              <p className="font-medium text-slate-600 leading-relaxed">
                Quick responses for bulk catalog requests & dealership inquiries across India.
              </p>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent("Hi Young Wheels! I am visiting your Sitemap page and would like to request a wholesale catalog.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#25D366] hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

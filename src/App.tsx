import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { WholesaleModal } from './components/WholesaleModal';
import { FloatingToyBackground } from './components/FloatingToyBackground';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { AllCategoriesPage } from './pages/AllCategoriesPage';
import { BlogPage } from './pages/BlogPage';
import { SocialPage } from './pages/SocialPage';
import { CategoryId, Product, EnquiryItem } from './types';
import { COMPANY_DETAILS } from './data/company';
import { PRODUCTS } from './data/products';
import { MessageCircle, ArrowUp, ShoppingBag } from 'lucide-react';
import { SmoothScrollProvider } from './components/SmoothScroll';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [enquiryDrawerOpen, setEnquiryDrawerOpen] = useState<boolean>(false);
  const [wholesaleModalOpen, setWholesaleModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Managed Products State (with localStorage persistence & auto-sync to 55 catalog items)
  const [productsList, setProductsList] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('yw_products_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= PRODUCTS.length) {
          return parsed;
        }
      }
      localStorage.setItem('yw_products_v4', JSON.stringify(PRODUCTS));
      return PRODUCTS;
    } catch {
      return PRODUCTS;
    }
  });

  // Managed Hero Section Image (with localStorage persistence)
  const [heroImage, setHeroImage] = useState<string>(() => {
    return localStorage.getItem('yw_hero_image') || 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800';
  });

  const [enquiryBasket, setEnquiryBasket] = useState<EnquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('yw_enquiry_basket');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Check URL pathname for /admin route
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setActiveTab('admin');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('yw_enquiry_basket', JSON.stringify(enquiryBasket));
    } catch (e) {
      console.error(e);
    }
  }, [enquiryBasket]);

  // Product CRUD Handlers
  const handleAddProduct = (newP: Product) => {
    const updated = [newP, ...productsList];
    setProductsList(updated);
    try {
      localStorage.setItem('yw_products', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateProduct = (updatedP: Product) => {
    const updated = productsList.map(p => p.id === updatedP.id ? updatedP : p);
    setProductsList(updated);
    try {
      localStorage.setItem('yw_products', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    const updated = productsList.filter(p => p.id !== productId);
    setProductsList(updated);
    try {
      localStorage.setItem('yw_products', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateHeroImage = (url: string) => {
    setHeroImage(url);
    try {
      localStorage.setItem('yw_hero_image', url);
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetCatalog = () => {
    setProductsList(PRODUCTS);
    localStorage.removeItem('yw_products');
    const defaultHero = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800';
    setHeroImage(defaultHero);
    localStorage.removeItem('yw_hero_image');
  };

  const handleAddToEnquiry = (product: Product, selectedColor?: string) => {
    setEnquiryBasket((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        if (selectedColor) updated[existingIndex].selectedColor = selectedColor;
        return updated;
      } else {
        return [...prev, { product, selectedColor: selectedColor || product.colors[0]?.name, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromEnquiry(productId);
      return;
    }
    setEnquiryBasket((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveFromEnquiry = (productId: string) => {
    setEnquiryBasket((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearBasket = () => {
    setEnquiryBasket([]);
  };

  const totalEnquiryCount = enquiryBasket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SmoothScrollProvider activeTab={activeTab}>
      <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-slate-800 font-sans selection:bg-[#FFD93D] relative">
        
        {/* Sticky Top Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        enquiryCount={totalEnquiryCount}
        onOpenEnquiryDrawer={() => setEnquiryDrawerOpen(true)}
        onOpenWholesaleModal={() => setWholesaleModalOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-1 relative pt-[100px] sm:pt-[108px]">
        {/* Top Progress Sweep Indicator on Page Switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`progress-${activeTab}`}
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "0% 50%" }}
            className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#4ECDC4] pointer-events-none shadow-md"
          />
        </AnimatePresence>

        {/* Interactive Mouse-Repelling Floating Toy Background */}
        <FloatingToyBackground />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === 'home' && (
                <HomePage
                  onSelectCategory={(catId) => {
                    setActiveTab(catId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToEnquiry={handleAddToEnquiry}
                  onOpenWholesaleModal={() => setWholesaleModalOpen(true)}
                  heroImage={heroImage}
                  products={productsList}
                />
              )}

              {activeTab === 'about' && (
                <AboutPage onOpenWholesaleModal={() => setWholesaleModalOpen(true)} />
              )}

              {activeTab === 'all-categories' && (
                <AllCategoriesPage
                  onSelectCategory={(catId) => {
                    setActiveTab(catId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  products={productsList}
                />
              )}

              {['ride-ons', 'kick-scooters', 'baby-walkers', 'swing-cars', 'tricycles', 'potty-trainers', 'magic-cars', 'riders', 'potty-chairs', 'electric-rideons', 'rocking-animals', 'tri-cycles'].includes(activeTab) && (
                <CategoryPage
                  categoryId={activeTab as CategoryId}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToEnquiry={handleAddToEnquiry}
                  products={productsList}
                />
              )}

              {activeTab === 'contact' && <ContactPage />}

              {activeTab === 'blog' && (
                <BlogPage
                  onOpenWholesaleModal={() => setWholesaleModalOpen(true)}
                  onNavigateHome={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              )}

              {activeTab === 'social' && <SocialPage />}

              {activeTab === 'admin' && (
                <AdminPage
                  products={productsList}
                  onAddProduct={handleAddProduct}
                  onUpdateProduct={handleUpdateProduct}
                  onDeleteProduct={handleDeleteProduct}
                  heroImage={heroImage}
                  onUpdateHeroImage={handleUpdateHeroImage}
                  onResetCatalog={handleResetCatalog}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWholesaleModal={() => setWholesaleModalOpen(true)}
      />

      {/* Quick Detail Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToEnquiry={handleAddToEnquiry}
      />

      {/* Slide-over Enquiry Basket Drawer */}
      <EnquiryDrawer
        isOpen={enquiryDrawerOpen}
        onClose={() => setEnquiryDrawerOpen(false)}
        items={enquiryBasket}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromEnquiry}
        onClearItems={handleClearBasket}
      />

      {/* Wholesale Dealer Modal */}
      <WholesaleModal
        isOpen={wholesaleModalOpen}
        onClose={() => setWholesaleModalOpen(false)}
      />

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Quick Basket Floating Button */}
        {totalEnquiryCount > 0 && (
          <button
            onClick={() => setEnquiryDrawerOpen(true)}
            className="bg-[#FF6B6B] text-white p-3.5 sm:px-4 sm:py-3 rounded-full flex items-center gap-2 shadow-2xl hover:bg-[#FF5252] transition-transform hover:scale-105 active:scale-95"
            title="View Enquiry Basket"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="bg-[#FFD93D] text-slate-900 font-black px-2 py-0.5 rounded-full text-xs animate-bounce">
              {totalEnquiryCount}
            </span>
          </button>
        )}

        {/* WhatsApp Floating Desk Button */}
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hi Young Wheels! I am on your website and would like to ask about your toys.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="toy-button bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full flex items-center gap-2 shadow-2xl hover:bg-[#20bd5a] group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-heading font-bold text-xs">
            WhatsApp Direct Desk
          </span>
        </a>

        {/* Scroll To Top Floating Button (Hidden at top) */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-slate-900 text-white p-3.5 rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 border border-slate-700 animate-in fade-in duration-200"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 text-[#FFD93D]" />
          </button>
        )}
      </div>
    </div>
  </SmoothScrollProvider>
);
}

import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  KeyRound, 
  Plus, 
  Edit3, 
  Trash2, 
  Image as ImageIcon, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Search, 
  LogOut, 
  Package, 
  Layout, 
  Upload, 
  Star, 
  Eye, 
  EyeOff,
  RefreshCw,
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CategoryId, Product } from '../types';
import { CATEGORIES } from '../data/company';

interface AdminPageProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  heroImage: string;
  onUpdateHeroImage: (url: string) => void;
  onResetCatalog: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  heroImage,
  onUpdateHeroImage,
  onResetCatalog,
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('yw_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Active Admin View Tab: 'products' | 'hero'
  const [activeTab, setActiveTab] = useState<'products' | 'hero'>('products');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category Nav Scroll Ref
  const categoryNavRef = useRef<HTMLDivElement>(null);

  const scrollCategoryNav = (direction: 'left' | 'right') => {
    if (categoryNavRef.current) {
      categoryNavRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  // Pagination State (10 items per page)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, searchQuery]);

  // Hero Image Form State
  const [heroUrlInput, setHeroUrlInput] = useState(heroImage);
  const [heroSuccessMsg, setHeroSuccessMsg] = useState('');

  // Product Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Color Swatch Manager State
  const PRESET_COLOR_SWATCHES = [
    { name: 'Sunny Yellow', hex: '#FFD93D' },
    { name: 'Coral Red', hex: '#FF6B6B' },
    { name: 'Sky Blue', hex: '#4ECDC4' },
    { name: 'Mint Green', hex: '#A8E6CF' },
    { name: 'Rose Pink', hex: '#FFB6C1' },
    { name: 'Lavender Purple', hex: '#C7B8EA' },
    { name: 'Royal Blue', hex: '#2563EB' },
    { name: 'Construction Orange', hex: '#F97316' },
    { name: 'Panda Black', hex: '#1E293B' },
    { name: 'Classic White', hex: '#FFFFFF' },
  ];

  const [productColors, setProductColors] = useState<Array<{ name: string; hex: string }>>([]);
  const [customColorName, setCustomColorName] = useState('');
  const [customColorHex, setCustomColorHex] = useState('#FF6B6B');

  const handleAddPresetColor = (preset: { name: string; hex: string }) => {
    if (!productColors.some(c => c.hex === preset.hex && c.name === preset.name)) {
      setProductColors(prev => [...prev, preset]);
    }
  };

  const handleAddCustomColor = () => {
    const name = customColorName.trim() || 'Custom Color';
    setProductColors(prev => [...prev, { name, hex: customColorHex }]);
    setCustomColorName('');
  };

  const handleRemoveColor = (indexToRemove: number) => {
    setProductColors(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Form State for Add / Edit Product
  const [formData, setFormData] = useState<{
    name: string;
    modelCode: string;
    category: CategoryId;
    price: string;
    tagline: string;
    description: string;
    ageRange: string;
    weightCapacity: string;
    material: string;
    image: string;
    isBestSeller: boolean;
    colorsText: string;
    featuresText: string;
    highlightsText: string;
  }>({
    name: '',
    modelCode: '',
    category: 'magic-cars',
    price: '₹1,299',
    tagline: '360° Smooth Steering & LED Flash Wheels',
    description: 'High-density non-toxic virgin ABS plastic body with anti-tip rear safety stopper.',
    ageRange: '1.5 - 5 Years',
    weightCapacity: '30 kg',
    material: '100% Non-Toxic ABS Plastic',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
    colorsText: '',
    featuresText: '360° Bearing Steering, Anti-Tip Rear Stopper, Musical Horn, Polyurethane Wheels',
    highlightsText: 'No Pedals Needed, Anti-Slip Footrests, LED Light Bar',
  });

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === 'prittal123') {
      setIsAuthenticated(true);
      localStorage.setItem('yw_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect Password! Access restricted to factory admin.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('yw_admin_auth');
    setPasswordInput('');
  };

  // Open Modal for New Product
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setProductColors([
      { name: 'Sunny Yellow', hex: '#FFD93D' },
      { name: 'Coral Red', hex: '#FF6B6B' }
    ]);
    setFormData({
      name: '',
      modelCode: `YW-MC-0${products.length + 1}`,
      category: 'magic-cars',
      price: '₹1,299',
      tagline: 'Premium Toddler Ride-On Toy',
      description: 'Durable non-toxic plastic with smooth steering and ergonomic seating.',
      ageRange: '1 - 4 Years',
      weightCapacity: '25 kg',
      material: '100% Non-Toxic Virgin ABS',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
      isBestSeller: false,
      colorsText: '',
      featuresText: 'Ergonomic Seat, Anti-Slip Base, Smooth Bearings',
      highlightsText: 'BPA Free, Light Weight, Safety Certified',
    });
    setIsModalOpen(true);
  };

  // Open Modal for Edit Product
  const handleOpenEditModal = (p: Product) => {
    setEditingProduct(p);
    setProductColors(p.colors && p.colors.length > 0 ? p.colors : [{ name: 'Vibrant Red', hex: '#FF6B6B' }]);
    setFormData({
      name: p.name,
      modelCode: p.modelCode,
      category: p.category,
      price: p.price || '₹1,299',
      tagline: p.tagline,
      description: p.description,
      ageRange: p.ageRange,
      weightCapacity: p.weightCapacity,
      material: p.material,
      image: p.image,
      isBestSeller: !!p.isBestSeller,
      colorsText: '',
      featuresText: p.features.join(', '),
      highlightsText: p.highlights.join(', '),
    });
    setIsModalOpen(true);
  };

  // Handle Local File Upload for Product Image
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isHero = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (isHero) {
          setHeroUrlInput(result);
        } else {
          setFormData(prev => ({ ...prev, image: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Product Form
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const finalColors = productColors.length > 0 ? productColors : [{ name: 'Vibrant Red', hex: '#FF6B6B' }];

    const parsedFeatures = formData.featuresText
      .split(',')
      .map(f => f.trim())
      .filter(Boolean);

    const parsedHighlights = formData.highlightsText
      .split(',')
      .map(h => h.trim())
      .filter(Boolean);

    const productPayload: Product = {
      id: editingProduct ? editingProduct.id : `yw-custom-${Date.now()}`,
      name: formData.name,
      modelCode: formData.modelCode,
      category: formData.category,
      price: formData.price,
      tagline: formData.tagline,
      description: formData.description,
      ageRange: formData.ageRange,
      weightCapacity: formData.weightCapacity,
      material: formData.material,
      image: formData.image,
      isBestSeller: formData.isBestSeller,
      colors: finalColors,
      features: parsedFeatures.length > 0 ? parsedFeatures : ['Non-Toxic ABS Plastic'],
      highlights: parsedHighlights.length > 0 ? parsedHighlights : ['Safety Certified'],
    };

    if (editingProduct) {
      onUpdateProduct(productPayload);
    } else {
      onAddProduct(productPayload);
    }

    setIsModalOpen(false);
  };

  // Filtered products list for admin table
  const filteredProducts = products.filter(p => {
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.modelCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Render Password Auth Screen if Not Logged In
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border-2 border-[#FFE8B5] shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFD93D]/30 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-[#FF6B6B] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black font-heading text-slate-900">Factory Admin Portal</h2>
            <p className="text-xs font-semibold text-slate-500">
              Enter Factory Master Password to manage products & hero banners
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                Admin Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter Password (prittal123)"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B] focus:ring-4 focus:ring-[#FF6B6B]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-heading font-black text-sm rounded-xl shadow-md transition-all active:scale-[0.99]"
            >
              Login to Admin Portal
            </button>
          </form>

          <div className="text-center pt-2 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400">
              Default password for reviewer: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">prittal123</code>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Admin Header Bar */}
      <div className="bg-white rounded-3xl p-6 border-2 border-[#FFE8B5] shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFD93D] text-slate-900 flex items-center justify-center font-black text-xl shadow-sm">
            YW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black font-heading text-slate-900">Young Wheels Admin Dashboard</h1>
              <span className="bg-[#25D366]/15 text-[#25D366] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#25D366]/30 uppercase tracking-wider">
                Live Factory Desk
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500">
              Manage products, assign categories & edit Hero section spotlight
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onResetCatalog}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold rounded-xl transition-colors flex items-center gap-1.5"
            title="Reset catalog to default factory items"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Catalog</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-black rounded-xl transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('products')}
          className={`pb-3 text-sm font-black flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === 'products'
              ? 'border-[#FF6B6B] text-[#FF6B6B]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Products Manager ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('hero')}
          className={`pb-3 text-sm font-black flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === 'hero'
              ? 'border-[#FF6B6B] text-[#FF6B6B]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layout className="w-4 h-4" />
          <span>Hero Banner Image</span>
        </button>
      </div>

      {/* TAB 1: PRODUCTS MANAGER */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products by name or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
              />
            </div>

            {/* Category Filter Pills with Left & Right Arrow Scroller */}
            <div className="relative flex items-center max-w-full md:max-w-md lg:max-w-xl group/scroll">
              <button
                type="button"
                onClick={() => scrollCategoryNav('left')}
                className="w-7 h-7 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-[#FFD93D] hover:text-slate-900 flex items-center justify-center shrink-0 mr-1 z-10 transition-all active:scale-95"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div
                ref={categoryNavRef}
                className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth max-w-full"
              >
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-colors shrink-0 ${
                    categoryFilter === 'all'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({products.length})
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-colors shrink-0 ${
                      categoryFilter === cat.id
                        ? 'bg-[#FFD93D] text-slate-900 shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollCategoryNav('right')}
                className="w-7 h-7 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-[#FFD93D] hover:text-slate-900 flex items-center justify-center shrink-0 ml-1 z-10 transition-all active:scale-95"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Add Product CTA */}
            <button
              onClick={handleOpenAddModal}
              className="w-full md:w-auto px-5 py-2.5 bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-xs font-black rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Products Table Grid */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4">Product Info</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Price</th>
                    <th className="py-3.5 px-4">Age / Capacity</th>
                    <th className="py-3.5 px-4">Colors</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-800">
                  {paginatedProducts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500 font-bold">
                        No products found matching your filter. Click "Add New Product" to create one!
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map(p => (
                      <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                        
                        {/* Product info */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-12 h-12 rounded-xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                            />
                            <div>
                              <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                                <span>{p.name}</span>
                                {p.isBestSeller && (
                                  <span className="bg-[#FFD93D] text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                    <Star className="w-2.5 h-2.5 fill-slate-900" />
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-500 font-bold">
                                Code: <code className="bg-slate-100 px-1 py-0.2 rounded text-slate-700">{p.modelCode}</code>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-3.5 px-4">
                          <span className="capitalize bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-200">
                            {p.category.replace('-', ' ')}
                          </span>
                        </td>

                        {/* Price */}
                        <td className="py-3.5 px-4 font-black text-slate-900 text-sm">
                          {p.price || '₹1,299'}
                        </td>

                        {/* Age / Capacity */}
                        <td className="py-3.5 px-4 text-slate-600">
                          <div>{p.ageRange}</div>
                          <div className="text-[10px] text-slate-400 font-bold">{p.weightCapacity}</div>
                        </td>

                        {/* Colors */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1">
                            {p.colors.slice(0, 4).map((c, i) => (
                              <span
                                key={i}
                                className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs"
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                              />
                            ))}
                            {p.colors.length > 4 && (
                              <span className="text-[10px] text-slate-400 font-bold">+{p.colors.length - 4}</span>
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenEditModal(p)}
                              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors"
                              title="Edit Product"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to delete ${p.name}?`)) {
                                  onDeleteProduct(p.id);
                                }
                              }}
                              className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Admin Table Pagination */}
            {totalPages > 1 && (
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-bold text-slate-600">
                  Showing <strong className="text-slate-900">{startIndex + 1}</strong> – <strong className="text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}</strong> of <strong className="text-[#FF6B6B] font-black">{filteredProducts.length}</strong> Products
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 rounded-xl text-xs font-black bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-xl text-xs font-black transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#FF6B6B] text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className="px-3 py-1.5 rounded-xl text-xs font-black bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: HERO SECTION IMAGE MANAGER */}
      {activeTab === 'hero' && (
        <div className="bg-white rounded-3xl p-6 border-2 border-[#FFE8B5] shadow-lg space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#FF6B6B] flex items-center justify-center font-bold">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black font-heading text-slate-900">Hero Section Main Image</h2>
              <p className="text-xs font-semibold text-slate-500">
                Update the main product image shown in the Hero section banner
              </p>
            </div>
          </div>

          {/* Current Live Preview */}
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
              Live Preview
            </label>
            <div className="h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-tr from-[#FFF4B0] via-[#FFEBEB] to-[#E0F7F5] p-4 flex items-center justify-center border-2 border-slate-200 shadow-inner">
              <img
                src={heroUrlInput || heroImage}
                alt="Hero Preview"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Image URL Input */}
          <div className="space-y-3">
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
              Image URL or Local Upload
            </label>
            
            <input
              type="text"
              value={heroUrlInput}
              onChange={(e) => setHeroUrlInput(e.target.value)}
              placeholder="Paste image URL (e.g. https://...)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
            />

            <div className="flex items-center gap-3">
              <label className="cursor-pointer px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold rounded-xl border border-slate-300 flex items-center gap-2 transition-colors">
                <Upload className="w-4 h-4 text-[#FF6B6B]" />
                <span>Upload Photo from Computer</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, true)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Quick Preset Images */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500">Or pick a factory preset sample:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setHeroUrlInput('https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800')}
                className="p-2 border rounded-xl text-[11px] font-bold text-slate-700 hover:border-[#FF6B6B] transition-colors"
              >
                Red Swing Car
              </button>
              <button
                type="button"
                onClick={() => setHeroUrlInput('https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800')}
                className="p-2 border rounded-xl text-[11px] font-bold text-slate-700 hover:border-[#FF6B6B] transition-colors"
              >
                Yellow Walker
              </button>
              <button
                type="button"
                onClick={() => setHeroUrlInput('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800')}
                className="p-2 border rounded-xl text-[11px] font-bold text-slate-700 hover:border-[#FF6B6B] transition-colors"
              >
                Panda Scooter
              </button>
              <button
                type="button"
                onClick={() => setHeroUrlInput('https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800')}
                className="p-2 border rounded-xl text-[11px] font-bold text-slate-700 hover:border-[#FF6B6B] transition-colors"
              >
                Rocking Animal
              </button>
            </div>
          </div>

          {/* Success Notification */}
          {heroSuccessMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-700 flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{heroSuccessMsg}</span>
            </div>
          )}

          {/* Save Action Button */}
          <button
            onClick={() => {
              onUpdateHeroImage(heroUrlInput);
              setHeroSuccessMsg('Hero section image updated successfully!');
              setTimeout(() => setHeroSuccessMsg(''), 3000);
            }}
            className="w-full py-3.5 bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-black text-sm rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Save Hero Section Image</span>
          </button>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border-4 border-[#FFE8B5] shadow-2xl relative flex flex-col max-h-[88vh] overflow-hidden my-auto">
            
            {/* Modal Header (Pinned at Top) */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <h3 className="text-base sm:text-lg font-black font-heading text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#FF6B6B]" />
                <span>{editingProduct ? 'Edit Product Details' : 'Add New Product to Catalog'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center font-black transition-colors"
                title="Close Modal"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              <form onSubmit={handleSaveProduct} className="space-y-4 text-xs font-semibold text-slate-700">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Bear Rider Swing Car"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Model Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.modelCode}
                    onChange={e => setFormData({ ...formData, modelCode: e.target.value })}
                    placeholder="e.g. YW-MC-05"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value as CategoryId })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Price (Wholesale / MRP) *</label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    placeholder="e.g. ₹1,299 or Dealer Rate"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF6B6B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold mb-1">Age Range</label>
                  <input
                    type="text"
                    value={formData.ageRange}
                    onChange={e => setFormData({ ...formData, ageRange: e.target.value })}
                    placeholder="e.g. 1 - 5 Years"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Weight Capacity</label>
                  <input
                    type="text"
                    value={formData.weightCapacity}
                    onChange={e => setFormData({ ...formData, weightCapacity: e.target.value })}
                    placeholder="e.g. 30 kg"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Material</label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={e => setFormData({ ...formData, material: e.target.value })}
                    placeholder="e.g. 100% Non-Toxic ABS"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>
              </div>

              {/* Tagline & Description */}
              <div>
                <label className="block font-bold mb-1">Short Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={e => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="e.g. 360° Smooth Bearing Steering with Music & LED Flash"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Product Image URL or Upload</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={e => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 mb-1"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileUpload(e, false)}
                  className="text-xs text-slate-500"
                />
              </div>

              {/* Visual Color Manager & Clickable Swatches */}
              <div className="space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                    Available Product Colors ({productColors.length})
                  </label>
                  <span className="text-[11px] text-slate-500 font-bold">Click swatches below to add</span>
                </div>

                {/* Selected Color Badges / Chips */}
                {productColors.length === 0 ? (
                  <div className="text-xs text-slate-400 font-bold italic py-1">No colors added yet. Select preset colors below!</div>
                ) : (
                  <div className="flex flex-wrap gap-2 py-1">
                    {productColors.map((col, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs text-xs font-black text-slate-800"
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs shrink-0"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span>{col.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveColor(idx)}
                          className="w-4 h-4 rounded-full bg-slate-100 hover:bg-red-100 text-slate-400 hover:text-red-600 flex items-center justify-center font-black text-[10px] transition-colors ml-1"
                          title="Remove Color"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Preset Color Swatches Picker */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider block">
                    Quick Preset Color Swatches (Click to Add)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_COLOR_SWATCHES.map((preset, i) => {
                      const isAlreadyAdded = productColors.some(c => c.name === preset.name && c.hex === preset.hex);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleAddPresetColor(preset)}
                          disabled={isAlreadyAdded}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                            isAlreadyAdded
                              ? 'bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed'
                              : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:scale-105 shadow-2xs'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs shrink-0"
                            style={{ backgroundColor: preset.hex }}
                          />
                          <span>{preset.name}</span>
                          {isAlreadyAdded && <Check className="w-3 h-3 text-emerald-600 ml-0.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Color Picker & Input */}
                <div className="pt-2 border-t border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider block">
                    Or Pick Custom Color & Name
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={customColorHex}
                      onChange={e => setNewColorHex(e.target.value)}
                      className="w-9 h-9 p-0.5 rounded-xl border border-slate-300 cursor-pointer bg-white"
                      title="Choose Custom Color"
                    />
                    <input
                      type="text"
                      value={customColorName}
                      onChange={e => setCustomColorName(e.target.value)}
                      placeholder="Color Name (e.g. Metallic Gold)"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white focus:outline-none focus:border-[#FF6B6B]"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomColor}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl shadow-xs transition-colors shrink-0"
                    >
                      + Add Color
                    </button>
                  </div>
                </div>
              </div>

              {/* Features & Highlights */}
              <div>
                <label className="block font-bold mb-1">Features (Comma Separated)</label>
                <input
                  type="text"
                  value={formData.featuresText}
                  onChange={e => setFormData({ ...formData, featuresText: e.target.value })}
                  placeholder="360° Bearings, Rear Stopper, Musical Horn"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              {/* Checkbox for Bestseller */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="isBestSeller"
                  checked={formData.isBestSeller}
                  onChange={e => setFormData({ ...formData, isBestSeller: e.target.checked })}
                  className="w-4 h-4 text-[#FF6B6B] rounded border-slate-300 focus:ring-[#FF6B6B]"
                />
                <label htmlFor="isBestSeller" className="font-extrabold text-slate-800">
                  Mark as Flagship Bestseller Product
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-black rounded-xl shadow-md"
                >
                  {editingProduct ? 'Update Product' : 'Save & Add Product'}
                </button>
              </div>

            </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

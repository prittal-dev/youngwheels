import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { ToyFinder } from '../components/ToyFinder';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { WholesaleB2B } from '../components/WholesaleB2B';
import { Testimonials } from '../components/Testimonials';
import { RetailPartners } from '../components/RetailPartners';
import { CategoryId, Product } from '../types';

interface HomePageProps {
  onSelectCategory: (catId: CategoryId) => void;
  onQuickView: (product: Product) => void;
  onAddToEnquiry: (product: Product, color?: string) => void;
  onOpenWholesaleModal: () => void;
  heroImage?: string;
  products?: Product[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCategory,
  onQuickView,
  onAddToEnquiry,
  onOpenWholesaleModal,
  heroImage,
  products,
}) => {
  return (
    <main>
      <Hero 
        onExploreClick={() => {
          const el = document.getElementById('featured-products-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenWholesaleModal={onOpenWholesaleModal}
        heroImage={heroImage}
      />

      <CategoryShowcase onSelectCategory={onSelectCategory} />

      <div id="featured-products-section">
        <FeaturedProducts
          onQuickView={onQuickView}
          onAddToEnquiry={onAddToEnquiry}
          onNavigateToCategory={onSelectCategory}
          products={products}
        />
      </div>

      <ToyFinder onQuickView={onQuickView} onAddToEnquiry={onAddToEnquiry} />

      <WhyChooseUs />

      <WholesaleB2B onOpenWholesaleModal={onOpenWholesaleModal} />

      <RetailPartners />

      <Testimonials />
    </main>
  );
};

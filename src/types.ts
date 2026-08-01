export type CategoryId = 
  | 'ride-ons' 
  | 'kick-scooters' 
  | 'baby-walkers' 
  | 'swing-cars' 
  | 'tricycles' 
  | 'potty-trainers'
  | 'magic-cars' 
  | 'riders' 
  | 'potty-chairs' 
  | 'electric-rideons' 
  | 'rocking-animals' 
  | 'tri-cycles';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  tagline: string;
  description: string;
  ageRange: string;
  weightCapacity: string;
  material: string;
  features: string[];
  colors: { name: string; hex: string; image?: string }[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  modelCode: string;
  image: string;
  highlights: string[];
  price?: string;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  bgGradient: string;
  accentColor: string;
  textColor: string;
  itemCount: number;
  bannerImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  productBought: string;
  initial?: string;
  bgColor?: string;
}

export interface EnquiryItem {
  product: Product;
  selectedColor?: string;
  quantity: number;
}

export interface FilterState {
  category: CategoryId | 'all';
  searchQuery: string;
  ageGroup: string;
  sortBy: 'popular' | 'name-asc' | 'age';
}

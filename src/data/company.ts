import { Testimonial, CategoryInfo } from '../types';

export const COMPANY_DETAILS = {
  name: 'Young Wheels',
  tagline: 'Quality • Trust • Care',
  foundedYear: 2019,
  headquarters: 'Pooth Khurd, New Delhi',
  phone: '+91 8383047505',
  whatsapp: '+91 7011227049',
  whatsappRaw: '917011227049',
  email: 'india.youngwheels@gmail.com',
  address: 'Plot No 182-183, Kh No 155, Lal Doora Village, Pooth Khurd, New Delhi – 110039',
  googleMapsUrl: 'https://maps.app.goo.gl/B8MxbnP2FN44nA4b8',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.2498953724457!2d77.04682507501344!3d28.77180467774343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07001e578161%3A0xc4edc6e6bca7ddb1!2sYoung%20wheel%20toys!5e0!3m2!1sen!2sin!4v1785394044814!5m2!1sen!2sin',
  gstNo: '07AAAAA0000A1Z5',
  operatingHours: 'Mon - Sat: 9:30 AM - 7:00 PM IST',
  mission: 'To craft high-quality, non-toxic, ergonomic, and durable ride-on toys that spark imagination, foster physical development, and deliver unmatched joy to children across India while providing reliable factory-direct value to parents and retailers.',
  vision: 'To be India’s most trusted and innovative manufacturer of kids mobility toys, setting gold standards for child safety, cheerful designs, and accessible wholesale distribution.',
  stats: [
    { label: 'Happy Kids & Families', value: '150,000+' },
    { label: 'Toy Models Produced', value: '40+' },
    { label: 'Retail & Wholesale Partners', value: '850+' },
    { label: 'Pan-India Cities Reached', value: '200+' },
  ]
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'ride-ons',
    name: 'Ride-Ons & Push Cars',
    shortDesc: 'Sturdy push-along ride-ons with back support, under-seat storage, and lights.',
    iconName: 'Car',
    badge: '13 Models',
    bgGradient: 'from-[#6EE7B7]/25 via-[#A7F3D0]/30 to-[#6EE7B7]/10',
    accentColor: '#10B981',
    textColor: 'text-[#047857]',
    itemCount: 13,
    bannerImage: '/assets/products/mclaren-green.jpg'
  },
  {
    id: 'kick-scooters',
    name: 'Kick Scooters',
    shortDesc: 'Lean-to-steer 3-wheel scooters with flashing LED wheels & anti-skid surface.',
    iconName: 'Sparkles',
    badge: '8 Models',
    bgGradient: 'from-[#86EFAC]/25 via-[#BBF7D0]/30 to-[#86EFAC]/10',
    accentColor: '#22C55E',
    textColor: 'text-[#15803D]',
    itemCount: 8,
    bannerImage: '/assets/products/tiny-rider-mint.jpg'
  },
  {
    id: 'baby-walkers',
    name: 'Baby Walkers',
    shortDesc: 'Multi-height activity walkers with ZED (Zero Edge Design) & 360° revolving wheels.',
    iconName: 'Footprints',
    badge: '3 Models',
    bgGradient: 'from-[#A3E635]/25 via-[#BEF264]/30 to-[#A3E635]/10',
    accentColor: '#84CC16',
    textColor: 'text-[#65A30D]',
    itemCount: 3,
    bannerImage: '/assets/products/tiny-rider-2in1-red.jpg'
  },
  {
    id: 'swing-cars',
    name: 'Swing Cars & Magic Cars',
    shortDesc: 'Twist & glide ride-ons with 360° rotation! No pedals, no batteries required.',
    iconName: 'Car',
    badge: '12 Models',
    bgGradient: 'from-[#FFD93D]/25 via-[#FFF4B0]/30 to-[#FFE399]/10',
    accentColor: '#FF6B6B',
    textColor: 'text-[#E05353]',
    itemCount: 12,
    bannerImage: '/assets/products/candy-swing-car-cyan.jpg'
  },
  {
    id: 'tricycles',
    name: 'Kids Tricycles',
    shortDesc: 'Sturdy 3-wheel tricycles with parent push handles & musical lighting.',
    iconName: 'Car',
    badge: '11 Models',
    bgGradient: 'from-[#67E8F9]/25 via-[#A5F3FC]/30 to-[#67E8F9]/10',
    accentColor: '#06B6D4',
    textColor: 'text-[#0E7490]',
    itemCount: 11,
    bannerImage: '/assets/products/nexride-orange.jpg'
  },
  {
    id: 'potty-trainers',
    name: 'Potty Chairs & Trainers',
    shortDesc: 'Ergonomic, easy-clean potty trainers with removable bowls & splash guards.',
    iconName: 'Sparkles',
    badge: '8 Models',
    bgGradient: 'from-[#FCA5A5]/25 via-[#FECDD3]/30 to-[#FCA5A5]/10',
    accentColor: '#EF4444',
    textColor: 'text-[#B91C1C]',
    itemCount: 8,
    bannerImage: '/assets/products/potty-chair-blue.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Parent of 3-year-old',
    location: 'Delhi NCR',
    rating: 5,
    comment: 'The Bear Rider Swing Car is amazing! My son spends hours gliding across our living room. Super smooth wheels, no scratches on flooring, and extremely sturdy build quality.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    productBought: 'Bear Rider Magic Car'
  },
  {
    id: '2',
    name: 'Rajesh Agarwal',
    role: 'Wholesale Toy Distributor',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    comment: 'We have been buying Young Wheels products in bulk for 3 years. Fast dispatch from Delhi factory, vibrant color options, and zero defect rate. Highly recommended for retailers!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    productBought: 'Bulk Swing Cars & Walkers'
  },
  {
    id: '3',
    name: 'Meenakshi & Ankit K.',
    role: 'Parents of 18-month twins',
    location: 'Chandigarh',
    rating: 5,
    comment: 'The Casper Deluxe Walker helped our daughter take her first confident steps! The padded seat is soft and easy to wash, and the activity tray keeps her entertained endlessly.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    productBought: 'Casper Deluxe Walker'
  },
  {
    id: '4',
    name: 'Dr. Vivek Malhotra',
    role: 'Pediatrician & Father',
    location: 'Bengaluru',
    rating: 5,
    comment: 'Impressed with the non-toxic BPA-free plastic construction and rounded edges. The Scooty Ride-on Potty made potty training a complete breeze for our toddler!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    productBought: 'Scooty Fun Potty'
  }
];

export const TRUST_BADGES = [
  { title: '100% Non-Toxic Material', desc: 'BPA-free virgin ABS plastic certified safe for infants', icon: 'ShieldCheck' },
  { title: 'Made in India', desc: 'Proudly manufactured in our Delhi facility since 2019', icon: 'Heart' },
  { title: 'Factory Direct Price', desc: 'Unbeatable manufacturer prices for retail & wholesale', icon: 'Tag' },
  { title: 'Pan-India Delivery', desc: 'Fast shipping across 200+ Indian cities and towns', icon: 'Truck' },
];

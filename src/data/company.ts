import { Testimonial, CategoryInfo } from '../types';

export const COMPANY_DETAILS = {
  name: 'Young Wheels',
  tagline: 'Quality • Trust • Care',
  foundedYear: 2019,
  headquarters: 'Pooth Khurd, New Delhi',
  phone: '+91 7011227049',
  whatsapp: '+91 7011227049',
  whatsappRaw: '917011227049',
  email: 'india.youngwheels@gmail.com',
  website: 'https://www.youngwheels.in',
  websiteDisplay: 'www.youngwheels.in',
  address: 'Plot No 182-183, Khasra No 155, Lal Doora Village, Pooth Khurd, New Delhi – 110039',
  googleMapsUrl: 'https://maps.app.goo.gl/B8MxbnP2FN44nA4b8',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.2498953724457!2d77.04682507501344!3d28.77180467774343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07001e578161%3A0xc4edc6e6bca7ddb1!2sYoung%20wheel%20toys!5e0!3m2!1sen!2sin!4v1785394044814!5m2!1sen!2sin',
  gstNo: '07AACFY3852A1ZE',
  msmeNo: 'UDYAM-DL-10-0029707',
  stateName: 'Delhi',
  stateCode: '07',
  operatingHours: 'Mon - Sat: 9:30 AM - 7:00 PM IST',
  facebook: 'https://www.facebook.com/youngwheelsindia/',
  youtube: 'https://www.youtube.com/@youngwheelss/featured',
  instagram: 'https://www.instagram.com/youngwheels__?igsh=ZDM3MXNoeGoyNGZk',
  mission: 'To craft high-quality, non-toxic, ergonomic, and durable ride-on toys that spark imagination, foster physical development, and deliver unmatched joy to children across India while providing reliable factory-direct value to parents and retailers.',
  vision: 'To be India’s most trusted and innovative manufacturer of kids mobility toys, setting gold standards for child safety, cheerful designs, and accessible wholesale distribution.',
  stats: [
    { label: 'Happy Kids & Families and Growing', value: '150,000+' },
    { label: ' Models and One Mission: Happy Kids', value: '40+' },
    { label: ' Built on trust, quality & lasting relationships.', value: '850+' },
    { label: 'Cities Across India Expanding nationwide with excellence.', value: '200+' },
  ]
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'ride-ons',
    name: 'Ride-Ons & Push Cars',
    shortDesc: 'Sturdy push-along ride-ons with back support, under-seat storage, and lights.',
    iconName: 'Car',
    badge: '13 Models',
    bgGradient: 'from-[#F3E8FF] via-[#FAF5FF] to-[#E9D5FF]',
    accentColor: '#8B5CF6',
    textColor: 'text-[#6D28D9]',
    itemCount: 13,
    bannerImage: '/assets/products/mclaren-green.jpg'
  },
  {
    id: 'kick-scooters',
    name: 'Kick Scooters',
    shortDesc: 'Lean-to-steer 3-wheel scooters with flashing LED wheels & anti-skid surface.',
    iconName: 'Sparkles',
    badge: '8 Models',
    bgGradient: 'from-[#ECFDF5] via-[#F0FDF4] to-[#A7F3D0]',
    accentColor: '#10B981',
    textColor: 'text-[#047857]',
    itemCount: 8,
    bannerImage: '/assets/products/tiny-rider-mint.jpg'
  },
  {
    id: 'baby-walkers',
    name: 'Baby Walkers',
    shortDesc: 'Multi-height activity walkers with ZED (Zero Edge Design) & 360° revolving wheels.',
    iconName: 'Footprints',
    badge: '3 Models',
    bgGradient: 'from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD]',
    accentColor: '#0284C7',
    textColor: 'text-[#0369A1]',
    itemCount: 3,
    bannerImage: '/assets/products/tiny-rider-2in1-red.jpg'
  },
  {
    id: 'swing-cars',
    name: 'Swing Cars & Magic Cars',
    shortDesc: 'Twist & glide ride-ons with 360° rotation! No pedals, no batteries required.',
    iconName: 'Car',
    badge: '12 Models',
    bgGradient: 'from-[#FEF9C3] via-[#FFFBEB] to-[#FDE68A]',
    accentColor: '#F59E0B',
    textColor: 'text-[#B45309]',
    itemCount: 12,
    bannerImage: '/assets/products/candy-swing-car-cyan.jpg'
  },
  {
    id: 'tricycles',
    name: 'Kids Tricycles',
    shortDesc: 'Sturdy 3-wheel tricycles with parent push handles & musical lighting.',
    iconName: 'Car',
    badge: '11 Models',
    bgGradient: 'from-[#FFEDD5] via-[#FFF7ED] to-[#FED7AA]',
    accentColor: '#F97316',
    textColor: 'text-[#C2410C]',
    itemCount: 11,
    bannerImage: '/assets/products/nexride-orange.jpg'
  },
  {
    id: 'potty-trainers',
    name: 'Potty Chairs & Trainers',
    shortDesc: 'Ergonomic, easy-clean potty trainers with removable bowls & splash guards.',
    iconName: 'Sparkles',
    badge: '8 Models',
    bgGradient: 'from-[#FCE7F3] via-[#FDF2F8] to-[#FBCFE8]',
    accentColor: '#EC4899',
    textColor: 'text-[#BE185D]',
    itemCount: 8,
    bannerImage: '/assets/products/potty-chair-blue.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Prashant Google',
    role: 'Google Verified Review',
    location: '11 months ago',
    rating: 5,
    comment: 'Excellent product quality and very professional company. Customer support was responsive and delivery was on time. Highly recommend.',
    avatar: '',
    initial: 'P',
    bgColor: 'bg-[#059669]',
    productBought: 'Ride-On Push Toys'
  },
  {
    id: '2',
    name: 'Vineet Bansal',
    role: 'Shree Bala Ji Traders Shamli',
    location: '10 months ago',
    rating: 5,
    comment: 'High-quality toys with safe, creative designs~perfect for kids\' fun and learning! Outstanding factory support.',
    avatar: '',
    initial: 'V',
    bgColor: 'bg-[#7C3AED]',
    productBought: 'Bulk Wholesale Toys'
  },
  {
    id: '3',
    name: 'Kuldeep Rajpurohit',
    role: 'Verified Customer',
    location: '10 months ago',
    rating: 5,
    comment: 'Amazing products, love it! Super smooth gliding wheels and sturdy build quality.',
    avatar: '',
    initial: 'K',
    bgColor: 'bg-[#C2410C]',
    productBought: 'Magic Swing Car'
  },
  {
    id: '4',
    name: 'Kunal',
    role: 'Verified Customer',
    location: '10 months ago',
    rating: 5,
    comment: 'Excellent product quality. Non-toxic BPA-free plastic with smooth safety edges.',
    avatar: '',
    initial: 'K',
    bgColor: 'bg-[#0F766E]',
    productBought: 'NexRide Tricycle'
  },
  {
    id: '5',
    name: 'Rajesh Sharma',
    role: 'Wholesale Distributor',
    location: '8 months ago',
    rating: 5,
    comment: 'Best toy manufacturer in Delhi NCR! Super sturdy magic cars and fast dispatch for our retail store.',
    avatar: '',
    initial: 'R',
    bgColor: 'bg-[#2563EB]',
    productBought: 'Magic Twister Cars'
  },
  {
    id: '6',
    name: 'Meenakshi Kapoor',
    role: 'Parent of 2-year-old',
    location: '6 months ago',
    rating: 5,
    comment: 'Ordered the Casper baby walker for my daughter. 100% safe non-toxic plastic and smooth 360° revolving wheels!',
    avatar: '',
    initial: 'M',
    bgColor: 'bg-[#DB2777]',
    productBought: 'Casper Baby Walker'
  }
];

export const TRUST_BADGES = [
  { title: '100% Non-Toxic Material', desc: 'BPA-free virgin ABS plastic certified safe for infants', icon: 'ShieldCheck' },
  { title: 'Made in India', desc: 'Proudly manufactured in our Delhi facility since 2019', icon: 'Heart' },
  { title: 'Factory Direct Price', desc: 'Unbeatable manufacturer prices for retail & wholesale', icon: 'Tag' },
  { title: 'Pan-India Delivery', desc: 'Fast shipping across 200+ Indian cities and towns', icon: 'Truck' },
];

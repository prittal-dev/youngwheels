export interface EventItem {
  id: string;
  title: string;
  tagline: string;
  category: 'B2B Expo & Trade Fair' | 'Community Fest & Rally' | 'Dealer Summit' | 'Workshop & Industry Summit';
  date: string;
  time: string;
  location: string;
  venue: string;
  stallNo?: string;
  status: 'Upcoming' | 'Registration Open' | 'Past Event';
  isFeatured?: boolean;
  registrationOpen: boolean;
  registrationBadge: string;
  description: string;
  highlights: string[];
  bannerGradient: string;
  image: string;
}

export interface PastEventHighlight {
  id: string;
  title: string;
  date: string;
  location: string;
  visitorsCount: string;
  dealsSigned: string;
  description: string;
  badge: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'toy-fair-2026',
    title: 'India International Toy Fair 2026',
    tagline: 'Experience Youngwheels Live at India\'s Largest Toy Trade Fair!',
    category: 'B2B Expo & Trade Fair',
    date: 'August 24 - 27, 2026',
    time: '10:00 AM - 6:30 PM IST',
    location: 'New Delhi, India',
    venue: 'Pragati Maidan Exhibition Centre, Hall 5',
    stallNo: 'Stall A-42 & A-43 (Young Wheels Grand Pavilion)',
    status: 'Registration Open',
    isFeatured: true,
    registrationOpen: true,
    registrationBadge: 'Free Visitor & Dealer Passes Available',
    description: 'Join Youngwheels at India\'s premier international toy exhibition. We will be showcasing our complete 2026 line-up of 360° magic swing cars, heavy-duty kick scooters, activity baby walkers, and ergonomic potty trainers.',
    highlights: [
      'Exclusive B2B Dealer Discounts & On-Spot Order Booking',
      'First Look at Unreleased 2026 Electric & Push Ride-On Models',
      'Free Visitor Pass Registration & Dedicated Lounge for Partners',
      'Direct 1-on-1 Consultation with Factory Founders'
    ],
    bannerGradient: 'from-[#FF6B6B] via-[#FFD93D] to-[#4ECDC4]',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kids-rally-2026',
    title: 'Youngwheels Kids Ride-On Rally & Family Carnival',
    tagline: 'A Fun-Filled Outdoor Test-Ride Festival for Kids & Parents!',
    category: 'Community Fest & Rally',
    date: 'September 12 - 13, 2026',
    time: '11:00 AM - 7:00 PM IST',
    location: 'Rohini, New Delhi',
    venue: 'Rohini Sports Complex Grounds, Sector 14',
    stallNo: 'Main Activity Zone & Obstacle Track',
    status: 'Upcoming',
    isFeatured: true,
    registrationOpen: true,
    registrationBadge: 'Open for All Kids & Families (Free Registration)',
    description: 'Organised directly by Youngwheels for kids and parents! Let your little champions test-drive our full range of swing cars, push cars, and trikes on safe, exciting custom obstacle tracks.',
    highlights: [
      'Free Test Rides & Fun Race Tracks for Kids Aged 1 to 6',
      'Safety Driver Certificate & Goodie Bags for every participant',
      'Special Festive Discount Vouchers for On-Spot Purchases',
      'Live Magic Show, Balloon Art, and Refreshment Counters'
    ],
    bannerGradient: 'from-[#4ECDC4] via-[#38EF7D] to-[#FFD93D]',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dealer-summit-2026',
    title: 'Pan-India Distributors & Wholesale Summit 2026',
    tagline: 'Connecting 300+ Wholesale Partners Nationwide!',
    category: 'Dealer Summit',
    date: 'October 10, 2026',
    time: '2:00 PM - 8:00 PM IST',
    location: 'Aero City, New Delhi',
    venue: 'Grand Hyatt Convention Centre, Ballroom 1',
    stallNo: 'Grand Exhibit Hall & VIP Lounge',
    status: 'Registration Open',
    isFeatured: false,
    registrationOpen: true,
    registrationBadge: 'Exclusive Invitation for Wholesale Dealers',
    description: 'Annual milestone gathering for certified Youngwheels distributors, retailers, and bulk buyers across India. Gain insider access to festival season inventory, credit incentives, and marketing support.',
    highlights: [
      'Unveiling of Diwale & New Year Festive Product Catalog',
      'Special Tier-1 Dealer Pricing & Freight Rebates',
      'Annual Excellence Awards & Dinner Gala',
      'Pan-India Supply Chain & Priority Dispatch Session'
    ],
    bannerGradient: 'from-[#8B5CF6] via-[#EC4899] to-[#FF6B6B]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'safety-summit-2026',
    title: 'National Toy Safety & Manufacturing Summit',
    tagline: 'Championing BIS Safety Standards & Non-Toxic Innovations',
    category: 'Workshop & Industry Summit',
    date: 'November 05, 2026',
    time: '10:30 AM - 4:30 PM IST',
    location: 'Okhla, New Delhi',
    venue: 'MSME Technology Centre, Okhla Industrial Estate',
    stallNo: 'Seminar Hall B',
    status: 'Upcoming',
    isFeatured: false,
    registrationOpen: true,
    registrationBadge: 'Open for Industry Professionals & Buyers',
    description: 'Industry symposium led by Youngwheels engineers and safety experts discussing IS 9873 toy safety standards, BPA-free virgin polymer selection, and ergonomic design for child growth.',
    highlights: [
      'Live Demonstration of Non-Toxic Material Testing',
      'Insights into BIS Certification & Quality Audits',
      'Panel Discussion on Sustainable Domestic Manufacturing'
    ],
    bannerGradient: 'from-[#3B82F6] via-[#06B6D4] to-[#10B981]',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800'
  }
];

export const PAST_EVENT_HIGHLIGHTS: PastEventHighlight[] = [
  {
    id: 'delhi-expo-2025',
    title: 'Delhi National Toy Expo 2025',
    date: 'November 15 - 18, 2025',
    location: 'NSIC Exhibition Grounds, New Delhi',
    visitorsCount: '8,500+ Visitors',
    dealsSigned: '140+ New Dealerships',
    description: 'Youngwheels premiered the 360° Casper Magic Swing Car. Received the "Best Ergonomic Product Design" recognition.',
    badge: 'Award Winner'
  },
  {
    id: 'mumbai-b2b-fest-2025',
    title: 'Mumbai Kids & Baby Products B2B Fest',
    date: 'August 04 - 06, 2025',
    location: 'World Trade Centre, Mumbai',
    visitorsCount: '5,200+ Trade Visitors',
    dealsSigned: '95+ Bulk Orders',
    description: 'Expanded West India distribution network with 95+ new retail partner sign-ups across Maharashtra & Gujarat.',
    badge: 'B2B Milestone'
  },
  {
    id: 'diwali-carnival-2024',
    title: 'Youngwheels Festive Kid Carnival 2024',
    date: 'October 20 - 22, 2024',
    location: 'Pooth Khurd, New Delhi',
    visitorsCount: '3,000+ Happy Kids',
    dealsSigned: 'Direct Factory Sale Success',
    description: 'Community celebratory event offering direct factory rides and gifts to over 3,000 children and families.',
    badge: 'Community Favorite'
  }
];

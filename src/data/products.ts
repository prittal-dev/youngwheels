import { Product } from '../types';

const productImages: Record<string, string> = (import.meta as any).glob('../assets/products/*.jpg', { eager: true, import: 'default' });

export const getProductImg = (path: string): string => {
  if (!path) return '/assets/products/mclaren-green.jpg';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  if (path.startsWith('products/')) return `/assets/${path}`;
  if (path.startsWith('assets/')) return `/${path}`;
  const key = `../assets/products/${path}`;
  return productImages[key] || `/assets/products/${path}`;
};

export const getProductImageForColor = (product: Product, selectedColorName?: string): string => {
  if (!selectedColorName) return product.image;

  // 1. Check if color object in product.colors has explicit image URL
  const foundColor = product.colors?.find(
    c => c.name.toLowerCase() === selectedColorName.toLowerCase() ||
         selectedColorName.toLowerCase().includes(c.name.toLowerCase()) ||
         c.name.toLowerCase().includes(selectedColorName.toLowerCase())
  );

  if (foundColor?.image) {
    return foundColor.image;
  }

  // 2. Dynamic matching based on color name & category
  const cName = selectedColorName.toLowerCase();
  const pId = product.id.toLowerCase();

  // NexRide 2in1 Tricycle series
  if (pId.includes('2in1') || pId.includes('nexride-2in1') || product.name.toLowerCase().includes('2in1')) {
    if (cName.includes('red')) return getProductImg('nexride-2in1-red.jpg');
    if (cName.includes('yellow') || cName.includes('gold')) return getProductImg('nexride-2in1-yellow.jpg');
    if (cName.includes('teal') || cName.includes('green') || cName.includes('mint')) return getProductImg('nexride-2in1-teal.jpg');
    if (cName.includes('blue')) return getProductImg('nexride-2in1-blue.jpg');
  }

  // NexRide Deluxe series
  if (pId.includes('deluxe') || product.name.toLowerCase().includes('deluxe')) {
    if (cName.includes('red')) return getProductImg('nexride-2in1-deluxe-red.jpg');
    if (cName.includes('yellow')) return getProductImg('nexride-2in1-deluxe-yellow.jpg');
    if (cName.includes('teal') || cName.includes('green')) return getProductImg('nexride-2in1-deluxe-teal.jpg');
    if (cName.includes('blue')) return getProductImg('nexride-2in1-deluxe-blue.jpg');
  }

  // NexRide Tricycles
  if (pId.includes('nexride') || product.category === 'tricycles' || product.category === 'tri-cycles') {
    if (cName.includes('red')) return getProductImg('nexride-red.jpg');
    if (cName.includes('yellow')) return getProductImg('nexride-yellow.jpg');
    if (cName.includes('teal') || cName.includes('green')) return getProductImg('nexride-teal.jpg');
    if (cName.includes('blue')) return getProductImg('nexride-blue.jpg');
    if (cName.includes('orange')) return getProductImg('nexride-orange.jpg');
  }

  // Tiny Rider / Scooters / Walkers
  if (pId.includes('tiny-rider') || pId.includes('walker') || pId.includes('scooter')) {
    if (cName.includes('red')) return getProductImg('tiny-rider-2in1-red.jpg');
    if (cName.includes('mint') || cName.includes('green')) return getProductImg('tiny-rider-mint.jpg');
    if (cName.includes('pink')) return getProductImg('tiny-rider-pink.jpg');
    if (cName.includes('blue')) return getProductImg('tiny-rider-blue.jpg');
    if (cName.includes('yellow')) return getProductImg('tiny-rider-yellow.jpg');
    if (cName.includes('grey') || cName.includes('gray')) return getProductImg('tiny-rider-grey.jpg');
  }

  // Magic / Swing Cars
  if (pId.includes('swing') || pId.includes('magic') || product.category === 'swing-cars' || product.category === 'magic-cars') {
    if (cName.includes('pink') || cName.includes('magenta')) return getProductImg('candy-swing-car-pink.jpg');
    if (cName.includes('cyan') || cName.includes('blue')) return getProductImg('candy-swing-car-cyan.jpg');
  }

  // Potty Chairs
  if (product.category === 'potty-trainers' || product.category === 'potty-chairs') {
    if (cName.includes('blue')) return getProductImg('potty-chair-blue.jpg');
    if (cName.includes('pink')) return getProductImg('potty-chair-pink.jpg');
  }

  // General Color Fallback across all products
  if (cName.includes('red')) return getProductImg('mclaren-red.jpg');
  if (cName.includes('blue')) return getProductImg('mclaren-blue.jpg');
  if (cName.includes('green') || cName.includes('mint')) return getProductImg('mclaren-green.jpg');
  if (cName.includes('grey') || cName.includes('gray') || cName.includes('silver')) return getProductImg('mclaren-grey.jpg');
  if (cName.includes('white')) return getProductImg('mclaren-white.jpg');

  return product.image;
};

export const PRODUCTS: Product[] = [
  // =========================================================================
  // CATEGORY 1: RIDE-ONS (13 Products)
  // =========================================================================
  {
    id: 'g-vagon-rider',
    name: 'G-Vagon Rider Push Car',
    category: 'ride-ons',
    tagline: 'Executive SUV Styling with Easy Steering & Back Support',
    description: 'The G-Vagon Rider is an executive push-along ride-on car designed with a bold front grill, responsive steering wheel, and high backrest support. Crafted from durable non-toxic plastic, it delivers smooth rides while boosting toddler balance.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: '100% Non-Toxic High-Impact ABS Plastic',
    features: ['Easy movement of steering wheel', 'Big sturdy wheels', 'Comfortable seat', 'Comfortable back support', 'Stylish lighting details'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/G-VAGON RIDER/WhatsApp Image 2026-09-09 at 15.27.13 (2).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Ride-Ons/G-VAGON RIDER/WhatsApp Image 2026-09-09 at 15.27.14.jpeg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/G-VAGON RIDER/WhatsApp Image 2026-09-09 at 15.27.13.jpeg'
      },
      {
            name: 'Black',
            hex: '#1E293B',
            image: '/assets/Ride-Ons/G-VAGON RIDER/WhatsApp Image 2026-09-09 at 15.27.13 (1).jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-RO-01',
    image: '/assets/Ride-Ons/G-VAGON RIDER/WhatsApp Image 2026-09-09 at 15.27.13 (2).jpeg',
    highlights: ['Executive SUV', 'Easy Steering', 'Back Support']
  },
  {
    id: 'g-vagon-plus-rider',
    name: 'G-Vagon Plus Deluxe Rider',
    category: 'ride-ons',
    tagline: 'Upgraded Executive Ride-On with Under-Seat Storage & Lights',
    description: 'Upgraded executive ride-on featuring enhanced front lighting, soft-touch grip handles, an extra-thick backrest support, and a secret under-seat toy storage trunk.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Heavy Duty ABS Plastic',
    features: ['Comfortable seat & soft-grip handle', 'Stylish LED lighting', 'Big sturdy wheels', 'Under-seat storage trunk', 'Easy steering movement'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.39.jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.37.jpeg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.39 (1).jpeg'
      },
      {
            name: 'Silver',
            hex: '#94A3B8',
            image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.38 (1).jpeg'
      },
      {
            name: 'Black',
            hex: '#1E293B',
            image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.38.jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-RO-02',
    image: '/assets/Ride-Ons/G-VAGON PLUS RIDER/WhatsApp Image 2026-09-09 at 15.27.39.jpeg',
    highlights: ['Toy Storage Trunk', 'LED Lights', 'Wide Stance']
  },
  {
    id: 'my-first-truck',
    name: 'My First Truck Activity Push Car',
    category: 'ride-ons',
    tagline: '4 Theme Variants: School Bus, Fire Truck, Ice Cream & Military Van',
    description: 'Transform playtime into a fun rescue adventure! Featuring interactive lights and music, rounded safety edges, and low-slung seating in 4 exciting variants.',
    ageRange: '1 to 3.5 Years',
    weightCapacity: 'Up to 18 kg',
    material: 'Non-Toxic Virgin Polypropylene',
    features: ['4 Variants: Military Van, School Bus, Icecream Van, Fire Truck', 'Comfortable seat', 'Builds balance & motor skills', 'Smooth floor wheels', 'Interactive lights & music'],
    colors: [
      {
            name: 'Fire Truck (Red)',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/MY FIRST TRUCK/WhatsApp Image 2026-09-09 at 15.28.11 (2).jpeg'
      },
      {
            name: 'School Bus (Yellow)',
            hex: '#EAB308',
            image: '/assets/Ride-Ons/MY FIRST TRUCK/WhatsApp Image 2026-09-09 at 15.28.11.jpeg'
      },
      {
            name: 'Military Van (Olive)',
            hex: '#4D7C0F',
            image: '/assets/Ride-Ons/MY FIRST TRUCK/WhatsApp Image 2026-09-09 at 15.28.10.jpeg'
      },
      {
            name: 'Ice Cream Van (Pink)',
            hex: '#EC4899',
            image: '/assets/Ride-Ons/MY FIRST TRUCK/WhatsApp Image 2026-09-09 at 15.28.11 (1).jpeg'
      }
],
    modelCode: 'YW-RO-03',
    image: '/assets/Ride-Ons/MY FIRST TRUCK/WhatsApp Image 2026-09-09 at 15.28.11 (2).jpeg',
    highlights: ['4 Fun Themes', 'Lights & Music', 'Floor Safe']
  },
  {
    id: 'racing-car-rider',
    name: 'Racing Car Push Rider',
    category: 'ride-ons',
    tagline: 'Sporty Aerodynamic Race Car with Easy Steering',
    description: 'Styled like a classic sports racer with aerodynamic decals, easy steering control with squeaky horn, and wide sturdy wheels for fast-paced active play.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'BPA-Free High Impact ABS',
    features: ['Comfortable seat & steering handle', 'Stylish lighting accents', 'Big sturdy wheels', 'Easy movement of steering wheel', 'Builds leg strength'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.31.26.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.28.42 (1).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.28.42.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.28.41.jpeg'
      },
      {
            name: 'Silver',
            hex: '#94A3B8',
            image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.28.40.jpeg'
      }
],
    modelCode: 'YW-RO-04',
    image: '/assets/Ride-Ons/RACING CAR/WhatsApp Image 2026-09-09 at 15.31.26.jpeg',
    highlights: ['Sport Racer', 'Easy Steering', 'Active Play']
  },
  {
    id: 'scooby-rider',
    name: 'Scooby Push Rider',
    category: 'ride-ons',
    tagline: 'Cute Character Nose with Pastel Colors & Music',
    description: 'A charming character push car in pleasing pastel shades featuring interactive melody buttons, gentle rounded seating, and smooth floor-safe wheels.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 18 kg',
    material: 'Virgin Non-Toxic Plastic',
    features: ['Develops motor skills', 'Builds balance & confidence', 'Smooth scratch-free wheels', 'Lights & music console', 'Aesthetic pastel colors'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/SCOOBY RIDER/WhatsApp Image 2026-09-09 at 15.29.16.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Ride-Ons/SCOOBY RIDER/WhatsApp Image 2026-09-09 at 15.29.17 (1).jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/SCOOBY RIDER/WhatsApp Image 2026-09-09 at 15.29.17.jpeg'
      }
],
    modelCode: 'YW-RO-05',
    image: '/assets/Ride-Ons/SCOOBY RIDER/WhatsApp Image 2026-09-09 at 15.29.16.jpeg',
    highlights: ['Pastel Aesthetics', 'Melody Horn', 'Smooth Wheels']
  },
  {
    id: 'scooby-plus-rider',
    name: 'Scooby Plus Storage Rider',
    category: 'ride-ons',
    tagline: 'Under-Seat Toy Storage & High Backrest Push Bar',
    description: 'An upgraded Scooby experience featuring a deep under-seat storage compartment, high backrest handle, and 20 kg weight capacity.',
    ageRange: '1 to 4 Years',
    weightCapacity: '15 to 20 kg',
    material: 'High-Density Virgin ABS',
    features: ['Easy to ride steering', 'Spacious storage under seat', 'Comes with posture back rest', 'Weight capacity 15-20 kg', 'Durable non-toxic build'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/SCOOBY PLUS RIDER/WhatsApp Image 2026-09-09 at 15.32.06.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/SCOOBY PLUS RIDER/WhatsApp Image 2026-09-09 at 15.32.06 (1).jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/SCOOBY PLUS RIDER/WhatsApp Image 2026-09-09 at 15.32.05.jpeg'
      }
],
    modelCode: 'YW-RO-06',
    image: '/assets/Ride-Ons/SCOOBY PLUS RIDER/WhatsApp Image 2026-09-09 at 15.32.06.jpeg',
    highlights: ['Under-Seat Storage', 'Dual Backrest', '20kg Capacity']
  },
  {
    id: 'aero-ride-on',
    name: 'Aero Jet Push Rider',
    category: 'ride-ons',
    tagline: 'Aviation-Inspired Side Wings with Music & Lights',
    description: 'Inspired by modern aviation with jet-contoured side wings, interactive electronic sound box, and ultra-smooth wheels for living room gliding.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Virgin Polypropylene',
    features: ['Develops motor skills', 'Builds balance & posture', 'Smooth whisper-quiet wheels', 'Lights & music console', 'Jet wing side contouring'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/AERO RIDE ON/WhatsApp Image 2026-09-09 at 15.33.00.jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/AERO RIDE ON/WhatsApp Image 2026-09-09 at 15.33.01 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Ride-Ons/AERO RIDE ON/WhatsApp Image 2026-09-09 at 15.33.01.jpeg'
      },
      {
            name: 'Purple',
            hex: '#A855F7',
            image: '/assets/Ride-Ons/AERO RIDE ON/WhatsApp Image 2026-09-09 at 15.33.02.jpeg'
      }
],
    modelCode: 'YW-RO-07',
    image: '/assets/Ride-Ons/AERO RIDE ON/WhatsApp Image 2026-09-09 at 15.33.00.jpeg',
    highlights: ['Jet Wing Design', 'Sound Module', 'Whisper Quiet']
  },
  {
    id: 'jcv-rider',
    name: 'JCV Digger Construction Rider',
    category: 'ride-ons',
    tagline: 'Available in Manual Push & Electric Motorized Versions',
    description: 'Modeled after real construction excavators in iconic yellow & black, featuring a sturdy backrest, high-traction tread wheels, and manual or electric drive options.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Reinforced High-Impact ABS',
    features: ['Easy to ride steering', 'Comes with supportive back rest', 'Weight capacity up to 20 kg', 'Keeps child active and moving', 'Electric and Non-Electric options'],
    colors: [
      {
            name: 'Yellow/Black',
            hex: '#EAB308',
            image: '/assets/Ride-Ons/JCV RIDER/WhatsApp Image 2026-09-09 at 15.35.16.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-RO-08',
    image: '/assets/Ride-Ons/JCV RIDER/WhatsApp Image 2026-09-09 at 15.35.16.jpeg',
    highlights: ['Excavator Digger', 'Electric & Manual', '20kg Capacity']
  },
  {
    id: 'tractor-rider',
    name: 'Farm Tractor Rider',
    category: 'ride-ons',
    tagline: 'Heavy Tread Wheels in Electric & Non-Electric Variants',
    description: 'Classic farm tractor ride-on with deep-tread rear wheels, supportive backrest, and easy steering in vibrant multi-color options.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Heavy-Duty ABS Plastic',
    features: ['Easy movement of steering', 'Comes with supportive back rest', 'Weight capacity up to 20 kg', 'Electric and Non-Electric options', 'Multiple vibrant colors'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/TRACTOR RIDER/WhatsApp Image 2026-09-09 at 15.35.56 (2).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/TRACTOR RIDER/WhatsApp Image 2026-09-09 at 15.35.56 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Ride-Ons/TRACTOR RIDER/WhatsApp Image 2026-09-09 at 15.35.56.jpeg'
      },
      {
            name: 'Black',
            hex: '#1E293B',
            image: '/assets/Ride-Ons/TRACTOR RIDER/WhatsApp Image 2026-09-09 at 15.35.57.jpeg'
      }
],
    modelCode: 'YW-RO-09',
    image: '/assets/Ride-Ons/TRACTOR RIDER/WhatsApp Image 2026-09-09 at 15.35.56 (2).jpeg',
    highlights: ['Farm Tractor', 'Deep Tread Wheels', 'Electric & Manual']
  },
  {
    id: 'rocking-rider',
    name: 'Rocking Rider 2-in-1 Convertible',
    category: 'ride-ons',
    tagline: 'Seamlessly Converts from Gentle Rocker to Rolling Car',
    description: 'Double the fun! Features a removable curved rocking base (15° arc safety) that easily converts into a rolling push car as baby grows.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'BPA-Free Blow-Molded ABS',
    features: ['Fun with music console', 'Smooth & safe ride-on wheels', 'Sturdy build for active play', 'Cute animal design', '2-in-1 Rocker & Rolling Car'],
    colors: [
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Ride-Ons/ROCKING RIDER/WhatsApp Image 2026-09-09 at 15.42.24.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Ride-Ons/ROCKING RIDER/WhatsApp Image 2026-09-09 at 15.42.26 (1).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Ride-Ons/ROCKING RIDER/WhatsApp Image 2026-09-09 at 15.42.26.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/ROCKING RIDER/WhatsApp Image 2026-09-09 at 15.42.27.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-RO-10',
    image: '/assets/Ride-Ons/ROCKING RIDER/WhatsApp Image 2026-09-09 at 15.42.24.jpeg',
    highlights: ['2-in-1 Rocker & Car', '15° Safe Arc', 'Music Box']
  },
  {
    id: 'jumbo-ride-on',
    name: 'Jumbo Wide-Seat Push Ride On',
    category: 'ride-ons',
    tagline: 'Extra-Wide Seat & Spacious Chassis with Musical Horn',
    description: 'Spacious wide-stance push car featuring an extra-broad seating surface, heavy-gauge steel wheel axles, and an interactive musical horn console.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'High-Density Polypropylene',
    features: ['Develops motor skills', 'Builds balance', 'Smooth floor wheels', 'Lights & music horn', 'Extra wide comfortable seat'],
    colors: [
      {
            name: 'Cyan',
            hex: '#06B6D4',
            image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.38.37 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.38.37.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.39.20.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.38.38 (1).jpeg'
      },
      {
            name: 'Purple',
            hex: '#A855F7',
            image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.38.38.jpeg'
      }
],
    modelCode: 'YW-RO-11',
    image: '/assets/Ride-Ons/JUMBO RIDE ON/WhatsApp Image 2026-09-09 at 15.38.37 (1).jpeg',
    highlights: ['Extra Wide Seat', 'Musical Horn', 'Steel Axle']
  },
  {
    id: 'jumbo-plus-ride-on',
    name: 'Jumbo Plus Stroller Push Rider',
    category: 'ride-ons',
    tagline: 'Detachable Parent Push Bar, Safety Guardrails & 360° Swivel Wheels',
    description: 'Grow-with-me stroller rider featuring a tall detachable parent push rod, removable armrest guardrails, plush breathable seat cushion, and 360° swivel wheels.',
    ageRange: '1 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Virgin ABS with Steel Rod',
    features: ['Grows with your child', 'Stylish design', 'Detachable parent push bar', 'Thick padded & breathable seat', '360° revolving front wheels'],
    colors: [
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.46.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.47 (2).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.47 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.47.jpeg'
      },
      {
            name: 'Purple',
            hex: '#A855F7',
            image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.46 (1).jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-RO-12',
    image: '/assets/Ride-Ons/JUMBO PLUS RIDE ON/WhatsApp Image 2026-09-09 at 15.39.46.jpeg',
    highlights: ['360° Swivel Wheels', 'Detachable Push Rod', 'Armrest Safety']
  },
  {
    id: 'mclaren-ride-on',
    name: 'McLaren Sports Push Car',
    category: 'ride-ons',
    tagline: 'European Supercar Styling with Precision Sports Steering',
    description: 'Inspired by European supercar aesthetics with sleek racing lines, iconic front grille work, ergonomic racing bucket seat, and smooth-rolling wide wheels.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Non-Toxic Virgin ABS Plastic',
    features: ['Builds balance & coordination', 'Smooth scratch-free wheels', 'Comfortable sports bucket seat', 'European supercar design', 'High-gloss non-fading finish'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/mclaren-red.jpg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/mclaren-blue.jpg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/products/mclaren-green.jpg'
      },
      {
            name: 'White',
            hex: '#F8FAFC',
            image: '/assets/products/mclaren-white.jpg'
      },
      {
            name: 'Grey',
            hex: '#94A3B8',
            image: '/assets/products/mclaren-grey.jpg'
      }
],
    modelCode: 'YW-RO-13',
    image: '/assets/products/mclaren-red.jpg',
    highlights: ['Supercar Design', 'Sports Bucket Seat', 'High Gloss']
  },

  // =========================================================================
  // CATEGORY 2: KICK SCOOTERS (8 Products)
  // =========================================================================
  {
    id: 'speedy-kick-scooter',
    name: 'Speedy 3-Wheel Lighttray Kick Scooter',
    category: 'kick-scooters',
    tagline: 'Magnetic LED Lighttray Wheels & Rear Foot Brake',
    description: 'Zip through paths with magnetic self-generating LED lighttray wheels that flash brightly without batteries! Features soft rubber T-bar handle and anti-skid deck.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 40 kg',
    material: 'Aluminum Alloy T-Bar & Glass-Fiber Deck',
    features: ['Comfortable soft handle grips', 'Big sturdy wheels', 'Stylish aerodynamic design', 'Lighttray self-generating LED wheels', 'Rear foot safety brake'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/SPEEDY KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.08 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/SPEEDY KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.08 (2).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/SPEEDY KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.08.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-KS-01',
    image: '/assets/Kick Scooters/SPEEDY KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.08 (1).jpeg',
    highlights: ['LED Lighttray Wheels', 'No Batteries Needed', 'Rear Brake']
  },
  {
    id: 'smiley-kick-scooter',
    name: 'Smiley 3-Wheel Kick Scooter',
    category: 'kick-scooters',
    tagline: 'Iconic Smiley Front Emblem with Stable 3-Wheel Base',
    description: 'Brighten up outdoor play with a cheerful smiley face front badge! Features low-friction steel bearings and a wide non-slip deck for effortless balancing.',
    ageRange: '2.5 to 7 Years',
    weightCapacity: 'Up to 35 kg',
    material: 'Durable Non-Toxic ABS',
    features: ['Builds balance & coordination', 'Smooth quiet floor wheels', 'Quality 3-wheel balance design', 'Iconic Smiley mascot badge', 'Anti-skid foot platform'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/Smiley Kick Scooter/WhatsApp Image 2026-09-09 at 16.12.06 (1).jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Kick Scooters/Smiley Kick Scooter/WhatsApp Image 2026-09-09 at 16.12.06.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/Smiley Kick Scooter/WhatsApp Image 2026-09-09 at 16.15.34.jpeg'
      }
],
    modelCode: 'YW-KS-02',
    image: '/assets/Kick Scooters/Smiley Kick Scooter/WhatsApp Image 2026-09-09 at 16.12.06 (1).jpeg',
    highlights: ['Smiley Badge', '3-Wheel Balance', 'Anti-Skid Deck']
  },
  {
    id: 'smiley-deluxe-kick-scooter',
    name: 'Smiley Deluxe LED Kick Scooter',
    category: 'kick-scooters',
    tagline: 'Height Adjustable Handlebar with Motion-Activated LED Wheels',
    description: 'Deluxe upgrade featuring magnetic LED flashing wheels, a 3-position height-adjustable handlebar, and a reinforced heavy-duty standing deck.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 45 kg',
    material: 'Reinforced Alloy & Polyurethane',
    features: ['Builds balance', 'Smooth polyurethane wheels', 'Battery-free LED flashing wheels', 'Height adjustable T-bar handlebar', 'Smiley front emblem'],
    colors: [
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Kick Scooters/Smiley Deluxe Kick Scooter/WhatsApp Image 2026-09-09 at 17.10.42 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/Smiley Deluxe Kick Scooter/WhatsApp Image 2026-09-09 at 17.10.42 (2).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/Smiley Deluxe Kick Scooter/WhatsApp Image 2026-09-09 at 17.10.42.jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-KS-03',
    image: '/assets/Kick Scooters/Smiley Deluxe Kick Scooter/WhatsApp Image 2026-09-09 at 17.10.42 (1).jpeg',
    highlights: ['Flashing LED Wheels', 'Height Adjustable', 'Reinforced Deck']
  },
  {
    id: 'ferrari-kick-scooter',
    name: 'Ferrari Edition 3-Wheel Scooter',
    category: 'kick-scooters',
    tagline: 'Italian Supercar Badge with Lean-to-Steer Technology',
    description: 'Italian racing-inspired scooter boasting sleek aerodynamic badge work, lighttray flashing wheels, and intuitive lean-to-steer carving balance.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 40 kg',
    material: 'Alloy & Virgin ABS',
    features: ['Comfortable molded hands', 'Big sturdy wheels', 'Stylish Italian racing design', 'Lighttray flashing wheels', 'Lean-to-steer balance system'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/FERRARII KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.27 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/FERRARII KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.27.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/FERRARII KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.28.jpeg'
      }
],
    modelCode: 'YW-KS-04',
    image: '/assets/Kick Scooters/FERRARII KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.44.27 (1).jpeg',
    highlights: ['Ferrari Styling', 'Lean-to-Steer', 'Lighttray Wheels']
  },
  {
    id: 'stylo-kick-scooter',
    name: 'Stylo Police Siren Kick Scooter',
    category: 'kick-scooters',
    tagline: 'Electronic Police Siren & Flashing LED Tail Light',
    description: 'The ultimate rescue scooter! Features a built-in electronic police siren module, flashing red LED tail light, wide anti-skid deck, and sturdy steel axles.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 45 kg',
    material: 'High-Impact ABS & Alloy',
    features: ['Comfortable handle grips', 'Big sturdy wheels', 'Electronic Police Siren sound box', 'Flashing LED tail light module', 'Anti-skid standing platform'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/stylo Kick scooter/WhatsApp Image 2026-09-09 at 15.50.47.jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/stylo Kick scooter/WhatsApp Image 2026-09-09 at 15.50.48 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Kick Scooters/stylo Kick scooter/WhatsApp Image 2026-09-09 at 15.50.48.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/stylo Kick scooter/WhatsApp Image 2026-09-09 at 15.50.49.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-KS-05',
    image: '/assets/Kick Scooters/stylo Kick scooter/WhatsApp Image 2026-09-09 at 15.50.47.jpeg',
    highlights: ['Police Siren', 'LED Tail Light', 'Heavy-Duty']
  },
  {
    id: 'stylo-junior-kick-scooter',
    name: 'Stylo Junior Beginner Scooter',
    category: 'kick-scooters',
    tagline: 'Low Deck Height Tailored for Early Toddler Balancing',
    description: 'Sized specifically for 2-5 year olds with a lowered center of gravity, wide anti-skid platform, and soft rubber handles for easy stepping.',
    ageRange: '2 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Non-Toxic Polypropylene',
    features: ['Comfortable handle grips', 'Big sturdy wheels', 'Stylish junior design', 'Anti-skid standing surface', 'Low deck height for easy mounting'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.24 (1).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.24.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.25 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.25.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.26.jpeg'
      }
],
    modelCode: 'YW-KS-06',
    image: '/assets/Kick Scooters/stylo Junior kick scooter/WhatsApp Image 2026-09-09 at 15.51.24 (1).jpeg',
    highlights: ['Junior Sizing', 'Low Deck Height', 'Easy Balance']
  },
  {
    id: 'royal-panda-kick-scooter',
    name: 'Royal Panda Deluxe Scooter',
    category: 'kick-scooters',
    tagline: 'Royal Panda Handlebar Mascot with Wide Safety Deck',
    description: 'Adorned with a cute panda face mascot on the front handlebar, wide anti-skid deck, height-adjustable T-bar, and responsive rear foot brake.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 45 kg',
    material: 'Alloy & Virgin Plastic',
    features: ['Comfortable handle grips', 'Big sturdy wheels', 'Iconic Royal Panda handlebar mascot', 'Anti-skid standing deck', 'Height adjustable handlebar'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/Royal Panda Kick Scooter/WhatsApp Image 2026-09-09 at 16.08.36 (2).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/Royal Panda Kick Scooter/WhatsApp Image 2026-09-09 at 16.09.17.jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/Royal Panda Kick Scooter/WhatsApp Image 2026-09-09 at 16.08.36 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Kick Scooters/Royal Panda Kick Scooter/WhatsApp Image 2026-09-09 at 16.08.36.jpeg'
      }
],
    modelCode: 'YW-KS-07',
    image: '/assets/Kick Scooters/Royal Panda Kick Scooter/WhatsApp Image 2026-09-09 at 16.08.36 (2).jpeg',
    highlights: ['Panda Mascot', 'Height Adjustable', 'Wide Deck']
  },
  {
    id: 'royal-panda-junior-kick-scooter',
    name: 'Royal Panda Junior Beginner Scooter',
    category: 'kick-scooters',
    tagline: 'Extra-Wide Front Wheel Spacing for Tipping Protection',
    description: 'Junior panda scooter with wider front wheel spacing for maximum anti-tip stability, giving 2-5 year old toddlers complete confidence.',
    ageRange: '2 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Non-Toxic Virgin ABS',
    features: ['Comfortable handle grips', 'Big sturdy wheels', 'Royal Panda front badge', 'Anti-skid standing deck', 'Extra wide front wheel stance'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.34 (1).jpeg'
      },
      {
            name: 'Black',
            hex: '#1E293B',
            image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.34 (2).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.34.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.35 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.35.jpeg'
      }
],
    modelCode: 'YW-KS-08',
    image: '/assets/Kick Scooters/ROYAL PANDA JUNIOR KICK SCOOTER/WhatsApp Image 2026-09-09 at 15.57.34 (1).jpeg',
    highlights: ['Extra Wide Stance', 'Anti-Tip Geometry', 'Panda Badge']
  },

  // =========================================================================
  // CATEGORY 3: WALKERS (3 Products)
  // =========================================================================
  {
    id: 'bunny-rider-walker',
    name: 'Bunny Rider Sit-to-Stand Walker',
    category: 'baby-walkers',
    tagline: '2-in-1 Sit-and-Play & Stand-and-Push with Speed-Control Wheels',
    description: 'Converts easily from a sit-and-play activity board with musical keys into a sturdy push walker. Features speed-control tension knobs on rear wheels.',
    ageRange: '6 to 24 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'BPA-Free Virgin Plastic',
    features: ['Learn to walk assistance', 'Builds balance & leg strength', 'Smooth non-slip wheels with speed control', 'Lights & music console', '2-in-1 Sit & Push design'],
    colors: [
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Walkers/Bunny rider/WhatsApp Image 2026-09-09 at 16.20.28 (1).jpeg'
      },
      {
            name: 'Brown',
            hex: '#78350F',
            image: '/assets/Walkers/Bunny rider/WhatsApp Image 2026-09-09 at 16.20.28 (2).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Walkers/Bunny rider/WhatsApp Image 2026-09-09 at 16.20.28.jpeg'
      },
      {
            name: 'Purple',
            hex: '#A855F7',
            image: '/assets/Walkers/Bunny rider/WhatsApp Image 2026-09-09 at 16.20.29.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-BW-01',
    image: '/assets/Walkers/Bunny rider/WhatsApp Image 2026-09-09 at 16.20.28 (1).jpeg',
    highlights: ['2-in-1 Sit & Push', 'Speed Control Wheels', 'Music Console']
  },
  {
    id: 'casper-deluxe-walker',
    name: 'Casper Deluxe Foldable Walker (With ZED Tech)',
    category: 'baby-walkers',
    tagline: 'Zero Edge Design (ZED) with 3-Height Adjust & 360° Swivel Wheels',
    description: 'Built with Zero Edge Design (ZED) to eliminate sharp corners. Features 3-position height adjustments, designer push bar, detachable musical tray, and 360° swivel wheels.',
    ageRange: '6 to 18 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'Virgin Plastic & Breathable Cushion',
    features: ['Grows with your child (3-height adjust)', 'Stylish design with ZED Zero Edge Design', 'Designer parent push bar', 'Thick padded & breathable seat', '360° revolving swivel wheels'],
    colors: [
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Walkers/CASPER DELUXE WALKER/WhatsApp Image 2026-09-09 at 16.22.27 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Walkers/CASPER DELUXE WALKER/WhatsApp Image 2026-09-09 at 16.22.27.jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Walkers/CASPER DELUXE WALKER/WhatsApp Image 2026-09-09 at 16.22.28 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Walkers/CASPER DELUXE WALKER/WhatsApp Image 2026-09-09 at 16.22.28.jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-BW-02',
    image: '/assets/Walkers/CASPER DELUXE WALKER/WhatsApp Image 2026-09-09 at 16.22.27 (1).jpeg',
    highlights: ['ZED Safety Tech', '3-Position Height Adjust', '360° Swivel Wheels']
  },
  {
    id: 'bearyboo-walker',
    name: 'Bearyboo ZED Activity Walker',
    category: 'baby-walkers',
    tagline: 'Teddy Bear Toy Tray with Zero Edge Design & Push Handle',
    description: 'Teddy bear activity tray filled with rattle beads and music buttons! Built with Zero Edge Design (ZED), 3-position height adjust, and 360° swivel wheels.',
    ageRange: '6 to 18 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'Virgin Polypropylene',
    features: ['Grows with your child', 'Teddy bear activity tray', 'Designer parent push bar', 'Thick padded & breathable seat', '360° revolving wheels & ZED safety'],
    colors: [
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Walkers/Bearyboo Walker/WhatsApp Image 2026-09-09 at 16.21.41.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Walkers/Bearyboo Walker/WhatsApp Image 2026-09-09 at 16.21.42 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Walkers/Bearyboo Walker/WhatsApp Image 2026-09-09 at 16.21.42.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Walkers/Bearyboo Walker/WhatsApp Image 2026-09-09 at 16.21.44.jpeg'
      }
],
    modelCode: 'YW-BW-03',
    image: '/assets/Walkers/Bearyboo Walker/WhatsApp Image 2026-09-09 at 16.21.41.jpeg',
    highlights: ['Teddy Toy Bar', 'ZED Zero Edge', 'Flat Folding']
  },

  // =========================================================================
  // CATEGORY 4: SWING CARS / MAGIC CARS (12 Products)
  // =========================================================================
  {
    id: 'pandaa-face-swing-car',
    name: 'Pandaa Face Magic Swing Car',
    category: 'swing-cars',
    tagline: 'Iconic Panda Face with ABEC Bearings & Musical Lights',
    description: 'Powered purely by kinetic steering motion — no pedals or batteries required! Features an iconic panda fascia, high-precision ABEC steel bearings, and musical lights.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: '100% Non-Toxic ABS Plastic',
    features: ['Wide comfortable bucket seat', 'Swift 360° kinetic motion', 'High-precision ABEC steel bearings', 'Zigzag twisting movement', 'Music & flashing headlights'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.24.47.jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.24.48 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.24.48.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.24.49.jpeg'
      },
      {
            name: 'Black',
            hex: '#1E293B',
            image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.32.13.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-SC-01',
    image: '/assets/Swing Cars/PANDAA FACE SWING CAR/WhatsApp Image 2026-09-09 at 16.24.47.jpeg',
    highlights: ['Iconic Panda Face', 'ABEC Bearings', 'Kinetic Motion']
  },
  {
    id: 'pandaa-basket-swing-car',
    name: 'Pandaa Basket Storage Swing Car',
    category: 'swing-cars',
    tagline: 'Built-in Front Toy Storage Basket & Silent PU Wheels',
    description: 'Combine toy storage with twisting speed! Includes a front storage basket, precision steel bearings, anti-skid foot pads, and silent polyurethane wheels.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Heavy Duty ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest pads', 'Builds balance & core strength', 'Smooth silent PU floor wheels', 'Front toy storage basket'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.25.54 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.25.54.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.25.55 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.25.55.jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.33.20.jpeg'
      }
],
    modelCode: 'YW-SC-02',
    image: '/assets/Swing Cars/PANDAA BASKET SWING CAR/WhatsApp Image 2026-09-09 at 16.25.54 (1).jpeg',
    highlights: ['Front Toy Basket', 'Silent PU Wheels', 'Anti-Skid Pads']
  },
  {
    id: 'pandaa-face-colour-swing-car',
    name: 'Pandaa Face Colour Swing Car',
    category: 'swing-cars',
    tagline: 'Vibrant Multi-Color Panda Themes with Precision Bearings',
    description: 'Offered in eye-catching Pink, Mint Green, and Sky Blue panda themes. Delivers high-energy active play with precision steel ball bearings for fast gliding.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Non-Toxic Virgin ABS',
    features: ['Develops motor skills', 'Anti-skid footrest pads', 'Builds balance', 'Smooth floor wheels', 'Vibrant pastel & neon panda colors'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/PANDAA FACE COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.25.16.jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/PANDAA FACE COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.25.17 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/PANDAA FACE COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.25.17.jpeg'
      }
],
    modelCode: 'YW-SC-03',
    image: '/assets/Swing Cars/PANDAA FACE COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.25.16.jpeg',
    highlights: ['Vibrant Panda Themes', 'Fast Gliding', 'BPA-Free']
  },
  {
    id: 'wendy-swing-car',
    name: 'Wendy Scandinavian Swing Car',
    category: 'swing-cars',
    tagline: 'Minimalist Soft Matte Finish with Floor-Safe PU Wheels',
    description: 'Minimalist Scandinavian-inspired soft pastel design. Features whisper-quiet polyurethane wheels that protect hardwood and marble floors.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Virgin Polypropylene',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'Whisper-quiet PU wheels', 'Scandinavian matte pastel aesthetic'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/WENDY SWING CAR/WhatsApp Image 2026-09-09 at 16.27.43.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/WENDY SWING CAR/WhatsApp Image 2026-09-09 at 16.27.44 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/WENDY SWING CAR/WhatsApp Image 2026-09-09 at 16.27.44.jpeg'
      }
],
    modelCode: 'YW-SC-04',
    image: '/assets/Swing Cars/WENDY SWING CAR/WhatsApp Image 2026-09-09 at 16.27.43.jpeg',
    highlights: ['Scandinavian Matte', 'Floor Safe PU', 'Low Noise']
  },
  {
    id: 'cutiee-swing-car',
    name: 'Cutiee Toddler Swing Car',
    category: 'swing-cars',
    tagline: 'Compact Low-Seat Twister Sized for Younger Toddlers',
    description: 'Specially sized for younger toddlers with a lowered seat center of gravity, anti-skid footrests, music box, and smooth kinetic steering.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Virgin ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'Smooth wheels', 'Compact size for early toddlers'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/CUTIEE SWING CAR/WhatsApp Image 2026-09-09 at 16.33.53 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Swing Cars/CUTIEE SWING CAR/WhatsApp Image 2026-09-09 at 16.33.53 (2).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/CUTIEE SWING CAR/WhatsApp Image 2026-09-09 at 16.33.53.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/CUTIEE SWING CAR/WhatsApp Image 2026-09-09 at 16.35.09.jpeg'
      }
],
    modelCode: 'YW-SC-05',
    image: '/assets/Swing Cars/CUTIEE SWING CAR/WhatsApp Image 2026-09-09 at 16.33.53 (1).jpeg',
    highlights: ['Early Toddler Sizing', 'Low Seat Height', 'Music Box']
  },
  {
    id: 'bear-swing-car',
    name: 'Bear Rider Monochrome Swing Car',
    category: 'swing-cars',
    tagline: 'Teddy Bear Head Mask with Glowing LED Eye Headlights',
    description: 'Iconic monochrome Black & White twister featuring a teddy bear front mask with glowing LED eye headlights and musical horn buttons.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'High-Impact ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'Smooth wheels', 'Teddy bear head mask with LED eyes'],
    colors: [
      {
            name: 'Cyan/Blue',
            hex: '#06B6D4',
            image: '/assets/Swing Cars/BEAR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.19.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-SC-06',
    image: '/assets/Swing Cars/BEAR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.19.jpeg',
    highlights: ['LED Eye Headlights', 'Monochrome Design', 'Bestseller']
  },
  {
    id: 'bear-colour-swing-car',
    name: 'Bear Colour Magic Swing Car',
    category: 'swing-cars',
    tagline: 'Vibrant Green-Yellow Edition with LED Headlights',
    description: 'Colorful edition of the Bear Swing Car in cheerful Green-Yellow hues with musical horn, LED eye headlights, anti-skid footrests, and silent PU wheels.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Virgin ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'Smooth floor wheels', 'Teddy bear face with LED lights'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/BEAR COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.47 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Swing Cars/BEAR COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.47.jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Swing Cars/BEAR COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.48 (1).jpeg'
      },
      {
            name: 'Brown',
            hex: '#78350F',
            image: '/assets/Swing Cars/BEAR COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.48.jpeg'
      }
],
    modelCode: 'YW-SC-07',
    image: '/assets/Swing Cars/BEAR COLOUR SWING CAR/WhatsApp Image 2026-09-09 at 16.36.47 (1).jpeg',
    highlights: ['Teddy LED Headlights', 'Green-Yellow Hues', 'Silent PU']
  },
  {
    id: 'boo-rider-swing-car',
    name: 'Boo Rider Sport Swing Car',
    category: 'swing-cars',
    tagline: 'High-Speed ABEC Bearings & 35 kg Weight Capacity',
    description: 'Futuristic sports car contours with high-precision ABEC steel ball bearings for maximum gliding efficiency. Supports up to 35 kg.',
    ageRange: '2.5 to 7 Years',
    weightCapacity: 'Up to 35 kg',
    material: 'Reinforced ABS & Polyurethane',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'High-speed ABEC steel bearings', '35 kg load capacity'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Swing Cars/BOO RIDER SWING CAR/WhatsApp Image 2026-09-09 at 17.10.04 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/BOO RIDER SWING CAR/WhatsApp Image 2026-09-09 at 17.10.04.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/BOO RIDER SWING CAR/WhatsApp Image 2026-09-09 at 17.10.05 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Swing Cars/BOO RIDER SWING CAR/WhatsApp Image 2026-09-09 at 17.10.05.jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-SC-08',
    image: '/assets/Swing Cars/BOO RIDER SWING CAR/WhatsApp Image 2026-09-09 at 17.10.04 (1).jpeg',
    highlights: ['35kg Load Capacity', 'ABEC Steel Bearings', 'Sports Body']
  },
  {
    id: 'spacy-swing-car',
    name: 'Spacy Rocket Swing Car',
    category: 'swing-cars',
    tagline: 'Rocket Tail Fin & Cosmic Sound Buttons',
    description: 'Galactic rocket tail fin design with galaxy-themed sound buttons, anti-skid footrests, 360° precision wheel bearings, and smooth floor-safe PU wheels.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Virgin ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'Rocket tail fin styling', 'Cosmic sound effects & lights'],
    colors: [
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Swing Cars/SPACY SWING CAR/WhatsApp Image 2026-09-09 at 16.40.16.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/SPACY SWING CAR/WhatsApp Image 2026-09-09 at 16.40.17 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Swing Cars/SPACY SWING CAR/WhatsApp Image 2026-09-09 at 16.40.17.jpeg'
      }
],
    modelCode: 'YW-SC-09',
    image: '/assets/Swing Cars/SPACY SWING CAR/WhatsApp Image 2026-09-09 at 16.40.16.jpeg',
    highlights: ['Rocket Tail Fin', 'Cosmic Sound Box', '360° Gliding']
  },
  {
    id: 'candy-swing-car',
    name: 'Candy Deluxe Dual-Tone Swing Car',
    category: 'swing-cars',
    tagline: 'Vibrant Dual-Tone Candy Colors with ABEC Steel Bearings',
    description: 'Striking dual-tone Candy Red, Sunshine Yellow, and Cyan palettes! Features high-precision steel bearings, floor-safe PU wheels, and deep bucket seat.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Virgin ABS Plastic',
    features: ['Develops motor skills', 'Anti-skid footrest', 'Builds balance', 'ABEC steel ball bearings', 'Dual-tone candy color scheme'],
    colors: [
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Swing Cars/CANDY SWING CAR/WhatsApp Image 2026-09-09 at 16.45.37.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/CANDY SWING CAR/WhatsApp Image 2026-09-09 at 16.45.38.jpeg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/Swing Cars/CANDY SWING CAR/WhatsApp Image 2026-09-09 at 16.45.39 (1).jpeg'
      }
],
    modelCode: 'YW-SC-10',
    image: '/assets/Swing Cars/CANDY SWING CAR/WhatsApp Image 2026-09-09 at 16.45.37.jpeg',
    highlights: ['Dual-Tone Candy', 'ABEC Steel Bearings', 'Silent PU']
  },
  {
    id: 'roar-rider-swing-car',
    name: 'Roar Rider Lion Swing Car',
    category: 'swing-cars',
    tagline: 'Bold Lion Character Mask with Roaring Sound Buttons',
    description: 'Bold lion character head mask with interactive roaring sound buttons! Built with high-impact ABS plastic and precision wheel bearings.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Virgin High-Impact ABS',
    features: ['Develops motor skills', 'Builds balance', 'Smooth wheels', 'Lion character head mask', 'Roaring musical sound buttons'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Swing Cars/ROAR RIDER/WhatsApp Image 2026-09-09 at 16.46.38.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Swing Cars/ROAR RIDER/WhatsApp Image 2026-09-09 at 16.46.38 (1).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/ROAR RIDER/WhatsApp Image 2026-09-09 at 16.46.39.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Swing Cars/ROAR RIDER/WhatsApp Image 2026-09-09 at 16.46.39 (1).jpeg'
      }
],
    modelCode: 'YW-SC-11',
    image: '/assets/Swing Cars/ROAR RIDER/WhatsApp Image 2026-09-09 at 16.46.38.jpeg',
    highlights: ['Lion Head Mask', 'Roaring Sounds', 'Kinetic Glider']
  },
  {
    id: 'character-series-swing-car',
    name: 'Rabbit / Crazy / Robo Character Swing Car',
    category: 'swing-cars',
    tagline: '3 Theme Variants: Rabbit (LED Wheels), Crazy (Neon), Robo (Cyber Light)',
    description: 'Feature-rich character series offering floppy rubber bunny ear handles with flashing LED wheels (Rabbit), neon twister styling (Crazy), or cyber robot lights (Robo).',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'High-Impact Virgin ABS',
    features: ['3 Variants: Rabbit, Crazy & Robo', 'Rabbit features bunny ear grips & LED wheels', 'Robo features cyber visor lights', 'Anti-skid footrests', 'ABEC steel bearings'],
    colors: [
      {
            name: 'Crazy Red',
            hex: '#EF4444',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Crazy/WhatsApp Image 2026-09-09 at 16.48.31.jpeg'
      },
      {
            name: 'Crazy Teal',
            hex: '#14B8A6',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Crazy/WhatsApp Image 2026-09-09 at 16.48.30.jpeg'
      },
      {
            name: 'Crazy Purple',
            hex: '#A855F7',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Crazy/WhatsApp Image 2026-09-09 at 16.48.30 (1).jpeg'
      },
      {
            name: 'Rabbit Red',
            hex: '#DC2626',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Rabbit/WhatsApp Image 2026-09-09 at 16.49.03.jpeg'
      },
      {
            name: 'Rabbit Teal',
            hex: '#0D9488',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Rabbit/WhatsApp Image 2026-09-09 at 16.49.05.jpeg'
      },
      {
            name: 'Robo Red',
            hex: '#B91C1C',
            image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Robo/WhatsApp Image 2026-09-09 at 16.47.59.jpeg'
      }
],
    modelCode: 'YW-SC-12',
    image: '/assets/Swing Cars/SWING CAR (Rabbit - Crazy - Robo)/Crazy/WhatsApp Image 2026-09-09 at 16.48.31.jpeg',
    highlights: ['3 Character Themes', 'Light-Up LED Wheels', 'Cyber Visor']
  },

  // =========================================================================
  // CATEGORY 5: TRICYCLES (11 Products)
  // =========================================================================
  {
    id: 'nexride-tricycle',
    name: 'NexRide Classic Tricycle',
    category: 'tricycles',
    tagline: 'High-Tensile Carbon Steel Frame with Anti-Slip Pedals',
    description: 'Classic 3-wheel pedal tricycle built around a high-tensile carbon steel frame. Features anti-slip pedals, comfortable bucket seat, and smooth rubber-tread wheels.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Carbon Steel Frame & ABS Seat',
    features: ['Builds balance & leg endurance', 'Smooth rubber tread wheels', 'Comfortable ergonomic bucket seat', 'High-tensile carbon steel frame', 'Anti-slip pedal grips'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/nexride-red.jpg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/nexride-blue.jpg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/products/nexride-yellow.jpg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/products/nexride-orange.jpg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/products/nexride-teal.jpg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-TC-01',
    image: '/assets/products/nexride-red.jpg',
    highlights: ['Carbon Steel Frame', 'Anti-Slip Pedals', 'Bestseller']
  },
  {
    id: 'tiny-rider-tricycle',
    name: 'Tiny Rider Toddler Tricycle',
    category: 'tricycles',
    tagline: 'Low Seat Height & Easy-Reach Pedals for Early Toddlers',
    description: 'Specially proportioned for smaller toddlers with a low seat height allowing feet to sit flat on the ground. Lightweight frame styled in soft pastels.',
    ageRange: '1.5 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Non-Toxic Plastic & Steel',
    features: ['Builds balance', 'Smooth wheels', 'Comfortable seat', 'Low seat height for early toddlers', 'Soft pastel aesthetic'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/tiny-rider-blue.jpg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/products/tiny-rider-yellow.jpg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/products/tiny-rider-mint.jpg'
      },
      {
            name: 'Grey',
            hex: '#94A3B8',
            image: '/assets/products/tiny-rider-grey.jpg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/products/tiny-rider-pink.jpg'
      }
],
    modelCode: 'YW-TC-02',
    image: '/assets/products/tiny-rider-blue.jpg',
    highlights: ['Early Toddler Sizing', 'Low Seat Height', 'Pastel Colors']
  },
  {
    id: 'ninja-rider-tricycle',
    name: 'Ninja Rider Heavy-Duty Tricycle',
    category: 'tricycles',
    tagline: 'Ninja Black & Yellow Styling with Big Sturdy All-Terrain Wheels',
    description: 'Bold ninja-themed trike featuring extra-wide all-terrain treaded wheels, high backrest seat, comfortable non-slip pedals, and heavy-duty frame.',
    ageRange: '2 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Reinforced Steel & ABS Plastic',
    features: ['Comfortable seat', 'Big sturdy all-terrain wheels', 'Stylish Ninja Black & Yellow graphics', 'Comfy anti-slip pedals', 'High backrest support'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Tricycles/NINJA RIDER/WhatsApp Image 2026-09-09 at 17.19.25 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/NINJA RIDER/WhatsApp Image 2026-09-09 at 17.19.26 (1).jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Tricycles/NINJA RIDER/WhatsApp Image 2026-09-09 at 17.19.26.jpeg'
      }
],
    modelCode: 'YW-TC-03',
    image: '/assets/Tricycles/NINJA RIDER/WhatsApp Image 2026-09-09 at 17.19.25 (1).jpeg',
    highlights: ['Ninja Graphics', 'All-Terrain Wheels', 'High Backrest']
  },
  {
    id: 'turbo-police-bike',
    name: 'Turbo Police Bike Tricycle',
    category: 'tricycles',
    tagline: 'Police Siren, Musical Headlights & Flashing LED Tail Light',
    description: 'Styled like a police patrol motorcycle! Features a built-in electronic police siren button, flashing headlights, red tail light console, and sturdy wheels.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'High-Impact ABS Plastic',
    features: ['Comfortable seat', 'Big sturdy wheels', 'Electronic Police Siren sound box', 'Musical lighting console', 'Flashing LED tail light'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/turbo-police-bike-red.jpg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/Turbo Police Bike/WhatsApp Image 2026-09-09 at 17.21.49 (1).jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-TC-04',
    image: '/assets/products/turbo-police-bike-red.jpg',
    highlights: ['Police Siren', 'LED Tail Light', 'Motorcycle Style']
  },
  {
    id: 'hello-rider-tricycle',
    name: 'Hello Rider Musical Tricycle',
    category: 'tricycles',
    tagline: 'Front Headlight Console with Interactive Music Tunes',
    description: 'Features a bright front light and music console that plays cheerful melodies as kids pedal along. Built with smooth-rolling wide wheels and comfortable bucket seat.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'Virgin Polypropylene & Steel',
    features: ['Builds balance', 'Smooth wheels', 'Lights & music console', 'Big sturdy wheels', 'Anti-slip pedal grips'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Tricycles/Hello Rider/WhatsApp Image 2026-09-09 at 17.18.42 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/Hello Rider/WhatsApp Image 2026-09-09 at 17.18.42.jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Tricycles/Hello Rider/WhatsApp Image 2026-09-09 at 17.18.41.jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Tricycles/Hello Rider/WhatsApp Image 2026-09-09 at 17.18.42 (2).jpeg'
      }
],
    modelCode: 'YW-TC-05',
    image: '/assets/Tricycles/Hello Rider/WhatsApp Image 2026-09-09 at 17.18.42 (1).jpeg',
    highlights: ['Front Light Console', 'Melody Tunes', 'Smooth Pedals']
  },
  {
    id: 'nexride-deluxe',
    name: 'Nexride Deluxe Musical Tricycle',
    category: 'tricycles',
    tagline: 'Integrated Musical Horn Console on Carbon Steel Frame',
    description: 'Upgrades the classic trike experience with an interactive musical horn console button. Built with high-tensile steel frame and posture-supporting bucket seat.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Carbon Steel Frame & ABS',
    features: ['Builds balance', 'Smooth rubber tread wheels', 'Integrated musical horn box', 'Comfortable ergonomic seat', 'High-tensile steel frame'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.22.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.23 (1).jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.23 (2).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.23 (3).jpeg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.23.jpeg'
      }
],
    modelCode: 'YW-TC-06',
    image: '/assets/Tricycles/Nexride Deluxe/WhatsApp Image 2026-09-09 at 17.12.22.jpeg',
    highlights: ['Musical Horn', 'Steel Frame', 'Treaded Wheels']
  },
  {
    id: 'tiny-rider-deluxe',
    name: 'Tiny Rider Deluxe Musical Tricycle',
    category: 'tricycles',
    tagline: 'Toddler Low Seat Height with Steering Musical Horn',
    description: 'Combines low-seat toddler ergonomics with steering wheel musical horn entertainment, keeping young toddlers engaged while learning to pedal.',
    ageRange: '1.5 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Non-Toxic ABS Plastic',
    features: ['Builds balance', 'Smooth wheels', 'Steering wheel musical horn', 'Comfortable seat', 'Low seat center of gravity'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.40 (1).jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.40 (3).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.40.jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.41.jpeg'
      },
      {
            name: 'Grey',
            hex: '#94A3B8',
            image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.40 (2).jpeg'
      }
],
    modelCode: 'YW-TC-07',
    image: '/assets/Tricycles/Tiny Rider Deluxe/WhatsApp Image 2026-09-09 at 17.12.40 (1).jpeg',
    highlights: ['Low Seat Height', 'Musical Horn', 'Pastel Aesthetic']
  },
  {
    id: 'tiny-rider-2in1',
    name: 'Tiny Rider 2in1 Parent Push Trike',
    category: 'tricycles',
    tagline: 'Steerable Parent Push Rod & Foldaway Toddler Footrests',
    description: 'Equipped with a tall steerable parent push handle allowing parents to guide younger toddlers. Detach the push rod to convert into an independent trike.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'Steel Frame & ABS Body',
    features: ['Builds balance', 'Smooth wheels', 'Steerable mother push handle', 'Comfortable seat', 'Foldaway toddler footrests'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/tiny-rider-2in1-blue.jpg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/tiny-rider-2in1-red.jpg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/products/tiny-rider-2in1-mint.jpg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/products/tiny-rider-2in1-yellow.jpg'
      }
],
    modelCode: 'YW-TC-08',
    image: '/assets/products/tiny-rider-2in1-blue.jpg',
    highlights: ['2-in-1 Stroller Trike', 'Parent Push Rod', 'Foldaway Footrests']
  },
  {
    id: 'nexride-2in1',
    name: 'NexRide 2in1 Heavy-Duty Push Tricycle',
    category: 'tricycles',
    tagline: 'Carbon Steel Frame with Parent Steering Rod & Luggage Basket',
    description: 'Heavy-gauge carbon steel push trike featuring a parent handle connected directly to front steering and a rear luggage basket for park essentials.',
    ageRange: '1 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Carbon Steel & High-Impact ABS',
    features: ['Builds balance', 'Smooth rubber tread wheels', 'Steerable parent push handle', 'Comfortable seat', 'Rear plastic luggage basket'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/nexride-2in1-blue.jpg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/nexride-2in1-red.jpg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/products/nexride-2in1-teal.jpg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/products/nexride-2in1-yellow.jpg'
      }
],
    modelCode: 'YW-TC-09',
    image: '/assets/products/nexride-2in1-blue.jpg',
    highlights: ['Carbon Steel Frame', 'Parent Steering Rod', 'Luggage Basket']
  },
  {
    id: 'tiny-rider-2in1-deluxe',
    name: 'Tiny Rider 2in1 Deluxe Push Trike',
    category: 'tricycles',
    tagline: 'Parent Steering Push Handle + Steering Musical Horn Box',
    description: 'Combines parent steering handle convenience with musical horn entertainment! Toddlers rest feet on foldaway footrests until ready to pedal independently.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'Virgin Plastic & Alloy',
    features: ['Builds balance', 'Smooth wheels', 'Musical horn console button', 'Comfortable seat', 'Steerable parent push handle'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Tricycles/Tiny Rider 2in1 Deluxe/WhatsApp Image 2026-09-09 at 17.15.40.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Tricycles/Tiny Rider 2in1 Deluxe/WhatsApp Image 2026-09-09 at 17.15.39 (2).jpeg'
      },
      {
            name: 'Mint',
            hex: '#14B8A6',
            image: '/assets/Tricycles/Tiny Rider 2in1 Deluxe/WhatsApp Image 2026-09-09 at 17.15.39.jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Tricycles/Tiny Rider 2in1 Deluxe/WhatsApp Image 2026-09-09 at 17.15.39 (1).jpeg'
      }
],
    modelCode: 'YW-TC-10',
    image: '/assets/Tricycles/Tiny Rider 2in1 Deluxe/WhatsApp Image 2026-09-09 at 17.15.40.jpeg',
    highlights: ['Parent Push Rod', 'Musical Horn', 'Foldaway Footrest']
  },
  {
    id: 'nexride-2in1-deluxe',
    name: 'NexRide 2in1 Deluxe Push Tricycle',
    category: 'tricycles',
    tagline: 'Full-Featured Stroller Trike with Steel Frame, Music & Basket',
    description: 'Premium grow-with-me push trike with carbon steel frame, steerable parent push handle, musical horn button console, and rear luggage basket.',
    ageRange: '1 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Carbon Steel Frame & ABS',
    features: ['Builds balance', 'Smooth wheels', 'Musical horn button console', 'Comfortable padded seat', 'Steerable parent handle & rear basket'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/products/nexride-2in1-deluxe-blue.jpg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/products/nexride-2in1-deluxe-red.jpg'
      },
      {
            name: 'Teal',
            hex: '#14B8A6',
            image: '/assets/products/nexride-2in1-deluxe-teal.jpg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/products/nexride-2in1-deluxe-yellow.jpg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-TC-11',
    image: '/assets/products/nexride-2in1-deluxe-blue.jpg',
    highlights: ['Carbon Steel Frame', 'Parent Steering Rod', 'Music & Basket']
  },

  // =========================================================================
  // CATEGORY 6: POTTY TRAINERS (8 Products)
  // =========================================================================
  {
    id: 'teddy-potty-trainer',
    name: 'Teddy Bear Potty Trainer & Chair (Foldable)',
    category: 'potty-trainers',
    tagline: 'Interactive Rattle Toy, High Backrest & Lid Stool Conversion',
    description: 'Designed with an adorable teddy bear backrest and an interactive rattle toy. Features a deep removable inner waste bowl with splash guard and lid stool conversion.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: '100% Non-Toxic BPA-Free Plastic',
    features: ['Wide comfortable seat', 'High backrest & splash guard', 'Deep removable potty bowl', 'Safe, durable & foldable', 'Interactive rattle toy on handle'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Potty Trainers/TEDDY BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.20.21 (1).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/TEDDY BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.20.22.jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Potty Trainers/TEDDY BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.20.22 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/TEDDY BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.20.21.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-PT-01',
    image: '/assets/Potty Trainers/TEDDY BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.20.21 (1).jpeg',
    highlights: ['Rattle Toy', 'Removable Bowl', 'Stool Lid Conversion']
  },
  {
    id: 'cow-potty-trainer',
    name: 'Cow Spotty Potty Trainer Chair (Foldable)',
    category: 'potty-trainers',
    tagline: 'Easy-Grip Horn Handles & Odour-Sealing Top Lid',
    description: 'Whimsical spotted cow design with easy-grip horn handles for toddler stability, high curved backrest, removable inner bowl, and splash guard.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'BPA-Free Polypropylene',
    features: ['Wide comfortable seat', 'High posture backrest', 'Removable inner potty bowl', 'Safe, durable & foldable', 'Whimsical spotted cow horn handles'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/COW BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.04 (1).jpeg'
      },
      {
            name: 'Orange',
            hex: '#F97316',
            image: '/assets/Potty Trainers/COW BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.04 (2).jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Potty Trainers/COW BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.04.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/COW BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.05.jpeg'
      }
],
    modelCode: 'YW-PT-02',
    image: '/assets/Potty Trainers/COW BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.04 (1).jpeg',
    highlights: ['Cow Horn Handles', 'Splash Guard', 'Removable Bowl']
  },
  {
    id: 'sofa-potty-trainer',
    name: 'Sofa Cushion Potty Trainer',
    category: 'potty-trainers',
    tagline: 'Soft Waterproof PU Seat Cushion & Side Armrest Handles',
    description: 'Designed like a soft armchair with a waterproof PU cushion seat pad that prevents cold plastic contact, side safety armrests, and removable inner bowl.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Food-Grade Plastic & PU Foam Cushion',
    features: ['Comfortable sofa cushion seat', 'Removable inner potty bowl', 'Safe & durable structure', 'Side safety armrest handles', 'Non-skid safety grip strips'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/SOFA BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.25 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/SOFA BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.25.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Potty Trainers/SOFA BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.26 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/SOFA BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.26.jpeg'
      }
],
    isBestSeller: true,
    modelCode: 'YW-PT-03',
    image: '/assets/Potty Trainers/SOFA BABY CHAIR & POTTY TRAINER/WhatsApp Image 2026-09-09 at 17.21.25 (1).jpeg',
    highlights: ['Soft Cushion Seat', 'Side Armrests', 'No Cold Plastic']
  },
  {
    id: 'scooty-potty',
    name: 'Scooty 2-in-1 Ride-On Potty Trainer',
    category: 'potty-trainers',
    tagline: 'Converts from Easy-Clean Potty to Rolling Scooter Toy',
    description: 'Designed like a vintage scooter with turning handlebar grips and squeaky horn! After potty time, pop on the top lid and let toddler ride on detachable wheels.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Virgin ABS Plastic',
    features: ['Wide comfortable seat', 'Removable inner potty bowl', 'Detachable 4-wheel base', 'Safe & durable non-toxic plastic', 'Turning handles with squeaky horn'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/SCOOTY POTTY/WhatsApp Image 2026-09-09 at 17.25.13.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/SCOOTY POTTY/WhatsApp Image 2026-09-09 at 17.25.13 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/SCOOTY POTTY/WhatsApp Image 2026-09-09 at 17.25.14.jpeg'
      }
],
    isNewArrival: true,
    modelCode: 'YW-PT-04',
    image: '/assets/Potty Trainers/SCOOTY POTTY/WhatsApp Image 2026-09-09 at 17.25.13.jpeg',
    highlights: ['2-in-1 Scooter Potty', 'Detachable Wheels', 'Squeaky Horn']
  },
  {
    id: 'joy-rider-potty',
    name: 'Joy Rider Activity Potty Trainer',
    category: 'potty-trainers',
    tagline: 'Playful Ride-On Style Potty with Floor Wheels & High Backrest',
    description: 'Playful ride-on seat profile with low-profile floor wheels, high splash guard, posture backrest support, and deep removable inner waste bowl.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'Virgin ABS Plastic',
    features: ['Builds balance & posture', 'Smooth floor wheels', 'Comfortable ergonomic seat', 'Deep removable waste bowl', 'High front splash guard'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/Joy Rider Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.32.jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/Joy Rider Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.32 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/Joy Rider Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.31.jpeg'
      }
],
    modelCode: 'YW-PT-05',
    image: '/assets/Potty Trainers/Joy Rider Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.32.jpeg',
    highlights: ['Ride-On Style', 'Floor Wheels', 'High Backrest']
  },
  {
    id: 'my-qitty-potty',
    name: 'My Qitty Cat Potty Trainer',
    category: 'potty-trainers',
    tagline: 'Cute Kitty Cat Mascot with Soft Ear Handle Grips',
    description: 'Cute kitty face motif with soft ear handles that toddlers love holding onto for balance. Features removable inner bowl and high front splash guard.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 22 kg',
    material: 'BPA-Free Virgin Plastic',
    features: ['Builds balance', 'Smooth floor-safe wheels', 'Comfortable wide seat', 'Cute Kitty face with soft ear grips', 'Removable inner waste bowl'],
    colors: [
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/MY QITTY Rider & Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.49.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/MY QITTY Rider & Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.50 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/MY QITTY Rider & Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.50.jpeg'
      }
],
    modelCode: 'YW-PT-06',
    image: '/assets/Potty Trainers/MY QITTY Rider & Potty Trainer/WhatsApp Image 2026-09-09 at 17.23.49.jpeg',
    highlights: ['Kitty Ear Handles', 'Removable Bowl', 'Floor Safe']
  },
  {
    id: 'foam-potty',
    name: 'Soft Foam Cushion Potty Trainer',
    category: 'potty-trainers',
    tagline: 'Waterproof PU Memory Foam Seat Cushion Eliminates Cold Plastic',
    description: 'Featuring a waterproof PU soft foam seat cushion that eliminates cold plastic contact. Equipped with a deep removable inner basin and non-slip bottom grips.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'PU Memory Foam & ABS Base',
    features: ['Comfortable soft foam seat pad', 'Safe & durable construction', 'Prevents cold plastic touch', 'Deep removable waste bowl', 'Easy wipe-clean surface'],
    colors: [
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/FOAM POTTY/WhatsApp Image 2026-09-09 at 17.21.49 (1).jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/FOAM POTTY/WhatsApp Image 2026-09-09 at 17.21.49 (2).jpeg'
      },
      {
            name: 'Yellow',
            hex: '#EAB308',
            image: '/assets/Potty Trainers/FOAM POTTY/WhatsApp Image 2026-09-09 at 17.21.49.jpeg'
      },
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Potty Trainers/FOAM POTTY/WhatsApp Image 2026-09-09 at 17.21.50.jpeg'
      }
],
    modelCode: 'YW-PT-07',
    image: '/assets/Potty Trainers/FOAM POTTY/WhatsApp Image 2026-09-09 at 17.21.49 (1).jpeg',
    highlights: ['Soft Foam Cushion', 'No Cold Plastic', 'Removable Basin']
  },
  {
    id: 'plastic-potty',
    name: 'Classic Easy-Clean Plastic Potty',
    category: 'potty-trainers',
    tagline: 'Lightweight Floor-Level Potty with High Splash Guard',
    description: 'Streamlined floor-level design with a high splash guard and wide stability base. Lightweight and easy to carry room-to-room or travel with.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 20 kg',
    material: 'Hygienic Virgin Polypropylene',
    features: ['Comfortable floor seat', 'Safe & durable non-porous plastic', 'High front splash guard', 'Wide anti-slip base stance', 'Easy rinse-clean surface'],
    colors: [
      {
            name: 'Red',
            hex: '#EF4444',
            image: '/assets/Potty Trainers/PLASTIC POTTY/WhatsApp Image 2026-09-09 at 17.22.13 (1).jpeg'
      },
      {
            name: 'Blue',
            hex: '#3B82F6',
            image: '/assets/Potty Trainers/PLASTIC POTTY/WhatsApp Image 2026-09-09 at 17.22.13 (2).jpeg'
      },
      {
            name: 'Green',
            hex: '#22C55E',
            image: '/assets/Potty Trainers/PLASTIC POTTY/WhatsApp Image 2026-09-09 at 17.22.13.jpeg'
      },
      {
            name: 'Pink',
            hex: '#EC4899',
            image: '/assets/Potty Trainers/PLASTIC POTTY/WhatsApp Image 2026-09-09 at 17.22.14.jpeg'
      }
],
    modelCode: 'YW-PT-08',
    image: '/assets/Potty Trainers/PLASTIC POTTY/WhatsApp Image 2026-09-09 at 17.22.13 (1).jpeg',
    highlights: ['Classic Floor Potty', 'High Splash Guard', 'Easy Rinse']
  }
];

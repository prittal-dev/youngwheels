import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- MAGIC CARS / SWING CARS ---
  {
    id: 'bear-rider',
    name: 'Bear Rider Swing Car',
    category: 'magic-cars',
    tagline: 'Cute Teddy Headlight with Musical Steering Wheel',
    description: 'The Bear Rider Magic Swing Car is our top-rated twist ride-on! Powered purely by kinetic steering motion — no batteries, gears, or pedals required. Features an ultra-cute teddy bear front face with glowing LED headlight eyes, musical horn buttons, and wide anti-slip footrest.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: '100% Non-Toxic High-Impact ABS Plastic',
    features: [
      '360° Smooth PU Polyurethane wheels',
      'Musical horn & LED headlights',
      'Ergonomic contour seat with backrest support',
      'Wide anti-skid foot support pads',
      'Anti-tip front stabilizer wheels'
    ],
    colors: [
      { name: 'Sunny Yellow', hex: '#FFD93D' },
      { name: 'Coral Red', hex: '#FF6B6B' },
      { name: 'Sky Blue', hex: '#4ECDC4' },
      { name: 'Soft Pink', hex: '#FFB6C1' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-MC-01',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    highlights: ['Bestseller', '360° Twister', 'LED Lights']
  },
  {
    id: 'piggy-magic-car',
    name: 'Piggy Magic Swing Car',
    category: 'magic-cars',
    tagline: 'Playful Piggy Snout Design & Dual Grip Handles',
    description: 'Bright, cheerful, and full of character! The Piggy Swing Car brings delightful smiles with its cute rounded snout headlight, dual-grip easy twist steering, and silent indoor/outdoor polyurethane wheels.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'BPA-Free Heavy Duty ABS',
    features: [
      'Ultra-silent PU wheels safe for wooden floors',
      'High back cushion support',
      'Fun piggy squeaker horn',
      'Smooth rounded safety edges'
    ],
    colors: [
      { name: 'Peachy Pink', hex: '#FFB6C1' },
      { name: 'Mint Green', hex: '#A8E6CF' },
      { name: 'Electric Yellow', hex: '#FFE399' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-MC-02',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600',
    highlights: ['Floor Safe', 'Cute Piggy Face']
  },
  {
    id: 'rabbit-rider',
    name: 'Rabbit Rider Twister',
    category: 'magic-cars',
    tagline: 'Floppy Ear Handles with Light-Up Flashing Wheels',
    description: 'Hop into fun with the Rabbit Rider! Designed with soft flexible bunny ear handles and magnetic motion-activated light-up wheels that flash without any batteries as your child twists and glides.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Non-Toxic Virgin Polypropylene',
    features: [
      'Self-generating LED flashing wheels',
      'Soft rubber bunny ear grip handles',
      'Extra-wide 6-wheel chassis for max stability',
      'Deep bucket seat prevents backward falls'
    ],
    colors: [
      { name: 'Lavender Purple', hex: '#C7B8EA' },
      { name: 'Baby Pink', hex: '#FFC0CB' },
      { name: 'Aqua Blue', hex: '#4ECDC4' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-MC-03',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600',
    highlights: ['Light-Up Wheels', '6-Wheel Stability']
  },
  {
    id: 'panda-face-car',
    name: 'Panda Face Magic Car',
    category: 'magic-cars',
    tagline: 'Iconic Panda Front Fascia & Under-Seat Storage',
    description: 'An all-time favorite! The Panda Face Magic Car features iconic monochrome panda eyes, built-in nursery rhyme melodies, and a hidden toy storage compartment beneath the seat.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: '100% Virgin Food-Grade Plastic',
    features: [
      'Secret trunk under the seat for favorite toys',
      'Melody music button box',
      'High density PU wheels for smooth drive',
      'Anti-flip rear bumper'
    ],
    colors: [
      { name: 'Panda Black & White', hex: '#334155' },
      { name: 'Panda Yellow & Green', hex: '#A8E6CF' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-MC-04',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    highlights: ['Storage Trunk', 'Nursery Rhymes']
  },
  {
    id: 'boo-rider',
    name: 'Boo Rider Sport',
    category: 'magic-cars',
    tagline: 'Futuristic Sporty Body & Precision Ball Bearings',
    description: 'Designed for young speedsters! The Boo Rider features aerodynamic sports car contours, high-precision ABEC bearings for effortless twisting, and vibrant neon colorways.',
    ageRange: '2.5 to 7 Years',
    weightCapacity: 'Up to 35 kg',
    material: 'Reinforced ABS Alloy Structure',
    features: [
      'High-speed precision steel ball bearings',
      'Sport steering wheel with dual horn',
      'Contoured racing seat',
      'Heavier load capacity up to 35kg'
    ],
    colors: [
      { name: 'Neon Orange', hex: '#FF6B6B' },
      { name: 'Cobalt Blue', hex: '#2563EB' },
      { name: 'Lime Green', hex: '#10B981' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-MC-05',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=600',
    highlights: ['ABEC Steel Bearings', 'High Capacity']
  },
  {
    id: 'spacy-car',
    name: 'Spacy Rocket Swing Car',
    category: 'magic-cars',
    tagline: 'Galactic Rocket Design with Star Projector Steering',
    description: 'Blast off into playful adventures! The Spacy Rocket Swing Car has a rocket-fin tail, galaxy themed decals, and steering buttons that play cosmic sound effects.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Non-Toxic ABS Plastic',
    features: [
      'Cosmic sound effects & starry lights',
      'Aerodynamic rocket tail fin design',
      'Wide anti-slip foot rests'
    ],
    colors: [
      { name: 'Galaxy Blue', hex: '#3B82F6' },
      { name: 'Starlight Yellow', hex: '#F59E0B' }
    ],
    isBestSeller: false,
    isNewArrival: false,
    modelCode: 'YW-MC-06',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=600',
    highlights: ['Space Theme', 'Sound Effects']
  },
  {
    id: 'wendy-classic',
    name: 'Wendy Pastel Magic Car',
    category: 'magic-cars',
    tagline: 'Soft Aesthetic Pastels & Smooth Glide Finish',
    description: 'Elegantly styled in soft Scandinavian-inspired pastel hues. The Wendy Classic combines minimalist aesthetic charm with rock-solid durability and whisper-quiet motion.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Eco-Friendly Virgin Polypropylene',
    features: [
      'Minimalist matte pastel finish',
      'Gentle ergonomic curves',
      'Non-scratch rubber coated wheels'
    ],
    colors: [
      { name: 'Soft Lavender', hex: '#C7B8EA' },
      { name: 'Mint Cream', hex: '#A8E6CF' },
      { name: 'Dusty Rose', hex: '#FFB6C1' }
    ],
    isBestSeller: false,
    isNewArrival: false,
    modelCode: 'YW-MC-07',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600',
    highlights: ['Pastel Edition', 'Aesthetic Design']
  },
  {
    id: 'robo-rider',
    name: 'Robo Rider LED Twister',
    category: 'magic-cars',
    tagline: 'Cyber Robot Headlight & Flashing Under-Glow',
    description: 'A sci-fi dream come true! The Robo Rider features a robot visor headlight panel, flashing LED under-glow chassis lights, and dynamic electronic sound effects.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'High Impact Resistant ABS',
    features: [
      'LED under-glow chassis lighting',
      'Futuristic robot sound panel',
      'Ultra-grippy steering wheel'
    ],
    colors: [
      { name: 'Cyber Red', hex: '#EF4444' },
      { name: 'Neon Blue', hex: '#06B6D4' }
    ],
    isBestSeller: true,
    isNewArrival: true,
    modelCode: 'YW-MC-08',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    highlights: ['LED Underglow', 'Futuristic']
  },

  // --- BABY WALKERS ---
  {
    id: 'bunny-push-walker',
    name: 'Bunny Push & Sit Walker',
    category: 'baby-walkers',
    tagline: '2-in-1 Sit-to-Stand Activity Walker with Musical Gears',
    description: 'Support your toddler’s crucial first steps! The Bunny Push Walker converts easily from a sit-and-play busy activity board to a sturdy push-along walker. Includes gear spinners, musical keys, shape sorters, and speed-controlled wheels to prevent slipping.',
    ageRange: '6 to 24 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'BPA-Free Non-Toxic Polypropylene',
    features: [
      'Speed control safety tension knob on rear wheels',
      'Removable activity center tray for crib attachment',
      'Water tank weight counter-balance cavity for maximum stability',
      'Plays 12 cheerful melodies & lights up'
    ],
    colors: [
      { name: 'Mint Bunny Green', hex: '#A8E6CF' },
      { name: 'Coral Bunny Pink', hex: '#FFB6C1' },
      { name: 'Sunny Yellow', hex: '#FFD93D' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-BW-01',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600',
    highlights: ['2-in-1 Sit & Push', 'Speed Control', 'Activity Tray']
  },
  {
    id: 'casper-deluxe-walker',
    name: 'Casper Deluxe Foldable Walker',
    category: 'baby-walkers',
    tagline: '3-Position Height Adjustment & Cushion Padded Seat',
    description: 'The ultimate comfortable walker for growing babies. Features a 3-position adjustable height frame, 360° multi-directional silent wheels, a thick washable seat cushion, and an interactive musical toy bar.',
    ageRange: '6 to 18 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'High Grade Steel Frame + Non-Toxic Plastic',
    features: [
      'Ultra-compact flat fold for easy car boot storage',
      'Breathable, removable machine-washable seat liner',
      '6 smooth swivel wheels with wide anti-collision bumper',
      'Detachable toy tray reveals snack tray underneath'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#3B82F6' },
      { name: 'Rose Pink', hex: '#EC4899' },
      { name: 'Panda Gray', hex: '#6B7280' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-BW-02',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
    highlights: ['3-Height Adjust', 'Foldable', 'Snack Tray']
  },
  {
    id: 'panda-first-steps',
    name: 'Panda First Steps Walker',
    category: 'baby-walkers',
    tagline: 'Interactive Panda Toy Bar with Rattle & Bead Maze',
    description: 'Designed to inspire sensory development while learning to balance. Features a cute panda face bar with spinning rattles, soft light buttons, and a wide safety stance frame.',
    ageRange: '6 to 20 Months',
    weightCapacity: 'Up to 15 kg',
    material: 'BPA-Free ABS Plastic',
    features: [
      'Wide stance anti-tip base',
      'Rattle bead maze & gear turners',
      'Padded anti-sweat mesh seat'
    ],
    colors: [
      { name: 'Pastel Yellow', hex: '#FFD93D' },
      { name: 'Soft Purple', hex: '#C7B8EA' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-BW-03',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600',
    highlights: ['Sensory Play', 'Padded Seat']
  },

  // --- POTTY CHAIRS ---
  {
    id: 'teddy-potty-chair',
    name: 'Teddy Bear Potty Chair',
    category: 'potty-chairs',
    tagline: 'High Backrest Support with Splash Guard & Handles',
    description: 'Makes potty training playful, gentle, and stress-free! The Teddy Potty Chair features an adorable bear backrest, ergonomic side safety handles, a front splash guard, and a removable inner bowl for instant cleaning.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: '100% Eco-Friendly Non-Toxic Polypropylene',
    features: [
      'Deep removable inner waste bowl with handle',
      'High splash guard prevents messy spills',
      'Non-slip rubber feet grips on wet bathroom tiles',
      'Closeable bear top lid converts into a comfortable stool'
    ],
    colors: [
      { name: 'Honey Yellow', hex: '#FFD93D' },
      { name: 'Bubblegum Pink', hex: '#FFB6C1' },
      { name: 'Ocean Turquoise', hex: '#4ECDC4' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-PC-01',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
    highlights: ['Removable Bowl', 'Non-Slip Base', 'Lid Closes to Stool']
  },
  {
    id: 'scooty-fun-potty',
    name: 'Scooty Ride-On Potty Trainer',
    category: 'potty-chairs',
    tagline: '2-in-1 Potty Chair that Doubles as a Fun Scooter Toy!',
    description: 'Transform potty time into playtime! Designed like a miniature vintage scooter with turning handles and a real horn button. When potty time is done, pop on the lid and let your toddler push or ride around!',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'BPA-Free Food Grade ABS Plastic',
    features: [
      'Interactive squeaking horn handle',
      'Converts into a ride-on toy scooter',
      'Smooth inner pot for effortless washing',
      'Sturdy 4-wheel base'
    ],
    colors: [
      { name: 'Retro Pink', hex: '#FFB6C1' },
      { name: 'Mint Scooter', hex: '#A8E6CF' },
      { name: 'Sky Yellow', hex: '#FFD93D' }
    ],
    isBestSeller: true,
    isNewArrival: true,
    modelCode: 'YW-PC-02',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    highlights: ['2-in-1 Ride On', 'Scooter Design', 'Interactive Horn']
  },
  {
    id: 'sofa-potty-trainer',
    name: 'Sofa Cushion Potty Trainer',
    category: 'potty-chairs',
    tagline: 'Ultra-Soft Padded Seat Cushion & Armrest Handles',
    description: 'Designed like a luxurious armchair! Features a waterproof PU memory foam seat pad that feels warm and cozy for toddlers during cold mornings, complete with side safety armrests.',
    ageRange: '1.5 to 5 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Waterproof PU Cushion + Virgin Polypropylene',
    features: [
      'Warm PU soft seat cushion prevents cold plastic touch',
      'Armrest handles give extra security',
      'Removable bowl with lid',
      'Double non-skid bottom strips'
    ],
    colors: [
      { name: 'Pastel Blue', hex: '#3B82F6' },
      { name: 'Pastel Pink', hex: '#EC4899' },
      { name: 'Matcha Green', hex: '#10B981' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-PC-03',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600',
    highlights: ['PU Soft Cushion', 'Armrests']
  },
  {
    id: 'cow-playful-potty',
    name: 'Cow Spotty Potty Trainer',
    category: 'potty-chairs',
    tagline: 'Cute Spotted Cow Motif & Easy-Grip Horns',
    description: 'Whimsical cow theme that toddlers adore! Features easy-grip horns for holding on, a high splash guard, and a lid that keeps odors sealed.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Non-Toxic ABS Plastic',
    features: [
      'Horn handles for child stability',
      'Odour-seal lid top',
      'Removable washable inner basin'
    ],
    colors: [
      { name: 'Black & White Cow', hex: '#1E293B' },
      { name: 'Pink & White Cow', hex: '#FFB6C1' }
    ],
    isBestSeller: false,
    isNewArrival: false,
    modelCode: 'YW-PC-04',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600',
    highlights: ['Cow Horn Handles', 'Odor Lock Lid']
  },

  // --- ROCKING ANIMALS ---
  {
    id: 'dino-rocker-2in1',
    name: 'Dino Rocker 2-in-1 Convertible',
    category: 'rocking-animals',
    tagline: 'Gentle Rocking Base Converts to Smooth Rolling Wheels!',
    description: 'Double the fun! The Dino Rocker functions as a safe, smooth-rocking animal rocker for infants and converts in seconds into a rolling ride-on toy by flipping down its hidden wheels.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Thick Non-Toxic Blow-Molded Polyethylene',
    features: [
      '2-in-1 Rocker & Rolling Ride-On',
      '15° safe rocking arc prevents tipping forward or backward',
      'Ergonomic saddle seat with safety backrest',
      'Built-in musical dinosaur rattle sound button'
    ],
    colors: [
      { name: 'Mint Dino Green', hex: '#A8E6CF' },
      { name: 'Sunshine Yellow', hex: '#FFD93D' },
      { name: 'Baby Pink', hex: '#FFB6C1' }
    ],
    isBestSeller: true,
    isNewArrival: true,
    modelCode: 'YW-RA-01',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600',
    highlights: ['2-in-1 Convertible', 'Safe 15° Rocking Arc', 'Musical Button']
  },
  {
    id: 'unicorn-dream-rocker',
    name: 'Unicorn Dream Rocker',
    category: 'rocking-animals',
    tagline: 'Pastel Magical Horn with Soft Safety Seat Support',
    description: 'A magical kingdom companion! Features a cute pastel unicorn horn, wide footrests, a high curved safety seat, and sweet lullaby melodies.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'BPA-Free Non-Toxic Virgin Plastic',
    features: [
      'Soft lullaby music player',
      'High back saddle seat',
      'Smooth rounded anti-scratch base'
    ],
    colors: [
      { name: 'Unicorn Pink', hex: '#FFB6C1' },
      { name: 'Pastel Purple', hex: '#C7B8EA' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-RA-02',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600',
    highlights: ['Magical Unicorn', 'Lullaby Sound']
  },
  {
    id: 'elephant-joy-rocker',
    name: 'Elephant Joy Rocker',
    category: 'rocking-animals',
    tagline: 'Sturdy Trunk Handle Grip & Extra Wide Stance Base',
    description: 'Super stable and lovable! The Elephant Joy Rocker has trunk handles that toddlers love holding onto, extra wide foot rests, and a cheerful trumpeting sound button.',
    ageRange: '1 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Non-Toxic High Density Plastic',
    features: [
      'Easy-hold trunk handle grips',
      'Extra wide anti-flip base',
      'Cheerful elephant trumpet sound'
    ],
    colors: [
      { name: 'Sky Blue Elephant', hex: '#4ECDC4' },
      { name: 'Soft Gray Elephant', hex: '#94A3B8' }
    ],
    isBestSeller: false,
    isNewArrival: false,
    modelCode: 'YW-RA-03',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
    highlights: ['Trunk Handles', 'Trumpet Sound']
  },

  // --- RIDERS & PUSH CARS ---
  {
    id: 'panda-push-rider',
    name: 'Panda Deluxe Push Rider',
    category: 'riders',
    tagline: 'High Backrest Push Car with Under-Seat Storage Trunk',
    description: 'Perfect first ride-on for toddlers learning to steer! Features a high safety backrest handle for parents or kids to push, spacious secret trunk under the seat, and squeaky horn steering wheel.',
    ageRange: '1 to 3 Years',
    weightCapacity: 'Up to 25 kg',
    material: '100% Non-Toxic Virgin ABS Plastic',
    features: [
      'High backrest handle support',
      'Under-seat secret toy storage',
      'Anti-flip rear safety stopper',
      'Squeaker steering horn'
    ],
    colors: [
      { name: 'Mint Green', hex: '#6EE7B7' },
      { name: 'Sunshine Yellow', hex: '#FEF08A' }
    ],
    isBestSeller: true,
    isNewArrival: false,
    modelCode: 'YW-RD-01',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&q=80&w=600',
    highlights: ['Push Handle', 'Storage Trunk', 'Anti-Flip Stopper']
  },

  // --- ELECTRIC RIDEONS ---
  {
    id: 'super-excavator-electric',
    name: 'Super Excavator Electric Tractor',
    category: 'electric-rideons',
    tagline: 'Motorized Digger Bucket & 2.4G Remote Control',
    description: 'Heavy duty construction fun! Features a real working motorized excavator arm digger lever, foot pedal accelerator, rechargeable 12V battery, and 2.4G wireless parental remote.',
    ageRange: '2 to 6 Years',
    weightCapacity: 'Up to 30 kg',
    material: 'Heavy-Duty Reinforced ABS',
    features: [
      'Controllable motorized excavator digger bucket',
      '2.4G Bluetooth parental remote control',
      'Engine start sound & LED working headlights',
      'Built-in MP3 music player'
    ],
    colors: [
      { name: 'Construction Yellow', hex: '#F97316' },
      { name: 'Vibrant Red', hex: '#EF4444' }
    ],
    isBestSeller: true,
    isNewArrival: true,
    modelCode: 'YW-ER-01',
    image: 'https://images.unsplash.com/photo-1558060370-d644479be6f7?auto=format&fit=crop&q=80&w=600',
    highlights: ['12V Rechargeable', 'Parent Remote', 'Working Digger']
  },

  // --- TRI CYCLES ---
  {
    id: 'casper-musical-trike',
    name: 'Casper Musical Push Trike',
    category: 'tri-cycles',
    tagline: 'Adjustable Parent Push Rod & Foldable Footrest',
    description: 'Smooth riding for kids and effortless control for parents! Features a height-adjustable steerable push rod, fold-away footrests for toddlers, rear luggage basket, and front bell.',
    ageRange: '1.5 to 4 Years',
    weightCapacity: 'Up to 25 kg',
    material: 'Carbon Steel Frame + Virgin Plastic Body',
    features: [
      'Steerable parent push handle rod',
      'Safety seat harness belt',
      'Rear plastic storage basket',
      'Non-slip rubber pedal grips'
    ],
    colors: [
      { name: 'Cyan Blue', hex: '#67E8F9' },
      { name: 'Cherry Red', hex: '#F43F5E' }
    ],
    isBestSeller: false,
    isNewArrival: true,
    modelCode: 'YW-TC-01',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=600',
    highlights: ['Steerable Push Rod', 'Seat Belt', 'Storage Basket']
  },

  // --- KICK SCOOTERS ---
  {
    id: 'glider-led-scooter',
    name: 'Glider 3-Wheel Light-Up Scooter',
    category: 'kick-scooters',
    tagline: 'Lean-to-Steer Balance Tech & Motion Flashing Wheels',
    description: 'Glide into action! Designed with 3-level T-bar height adjustments, magnetic self-generating flashing LED PU wheels, and lean-to-steer technology for developing balance.',
    ageRange: '3 to 8 Years',
    weightCapacity: 'Up to 40 kg',
    material: 'Aluminum Alloy T-Bar + Reinforced Deck',
    features: [
      'Self-generating LED flashing PU wheels',
      '3-level T-bar height adjustment (65cm - 80cm)',
      'Lean-to-steer intuitive balance system',
      'Wide anti-slip foot deck with rear brake'
    ],
    colors: [
      { name: 'Neon Lime', hex: '#86EFAC' },
      { name: 'Electric Cyan', hex: '#06B6D4' },
      { name: 'Hot Pink', hex: '#EC4899' }
    ],
    isBestSeller: true,
    isNewArrival: true,
    modelCode: 'YW-KS-01',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    highlights: ['Flashing LED Wheels', '3-Height Adjust', 'Lean-to-Steer']
  }
];

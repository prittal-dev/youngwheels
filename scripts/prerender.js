import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/events',
    title: 'Young Wheels Events | Kids Toy Exhibitions & Events in India',
    metaDesc: 'Explore Young Wheels events, exhibitions and industry showcases featuring premium kids’ ride-ons, scooters, tricycles and innovative toys across India.'
  },
  {
    path: '/social',
    title: 'Young Wheels | Follow Us on Facebook, Instagram, YouTube & LinkedIn',
    metaDesc: 'Discover Young Wheels on Facebook, Instagram, YouTube & LinkedIn. Follow us for kids’ ride-ons, toys, product updates, ideas and more.'
  },
  {
    path: '/social/instagram',
    title: 'Young Wheels | Follow Us on Facebook, Instagram, YouTube & LinkedIn',
    metaDesc: 'Discover Young Wheels on Facebook, Instagram, YouTube & LinkedIn. Follow us for kids’ ride-ons, toys, product updates, ideas and more.'
  },
  {
    path: '/social/youtube',
    title: 'Young Wheels | Follow Us on Facebook, Instagram, YouTube & LinkedIn',
    metaDesc: 'Discover Young Wheels on Facebook, Instagram, YouTube & LinkedIn. Follow us for kids’ ride-ons, toys, product updates, ideas and more.'
  },
  {
    path: '/social/facebook',
    title: 'Young Wheels | Follow Us on Facebook, Instagram, YouTube & LinkedIn',
    metaDesc: 'Discover Young Wheels on Facebook, Instagram, YouTube & LinkedIn. Follow us for kids’ ride-ons, toys, product updates, ideas and more.'
  },
  {
    path: '/social/linkedin',
    title: 'Young Wheels | Follow Us on Facebook, Instagram, YouTube & LinkedIn',
    metaDesc: 'Discover Young Wheels on Facebook, Instagram, YouTube & LinkedIn. Follow us for kids’ ride-ons, toys, product updates, ideas and more.'
  },
  {
    path: '/',
    title: 'Premier Kids Toys Manufacturers in India | Young Wheels',
    metaDesc: 'Young Wheels is a leading kids’ toy manufacturer in Delhi, India, offering premium, non-toxic ride-ons, scooters, walkers, tricycles, swing cars & potty trainers.'
  },
  {
    path: '/about-us',
    title: 'Premium Kids Toys Manufacturer & Wholesaler in India | Young Wheels',
    metaDesc: 'Young Wheels is a premium kids toys manufacturer in Delhi, offering quality ride-ons, kick scooters, walkers, swing cars, tricycles and potty trainers for businesses across India.'
  },
  {
    path: '/contact-us',
    title: 'Contact Us | Young Wheels Factory Pooth Khurd, New Delhi',
    metaDesc: 'Get in touch with Young Wheels for wholesale inquiries, dealership distribution, and factory visits in Pooth Khurd, New Delhi, India.'
  },
  {
    path: '/blog',
    title: 'Kids Toys Insights & Buying Guides | Young Wheels Blog',
    metaDesc: 'Read expert safety guides, manufacturing standards, and buying tips for children ride-on toys, swing cars, walkers & tricycles.'
  },
  {
    path: '/toys-manufacturer-in-india',
    title: 'Best Toys Manufacturer in India | Explore Our Kids Toy Categories | Young Wheels',
    metaDesc: 'From gravity-driven swing cars to ergonomic walkers, rocking animals & potty trainers — engineered for safety, durability, and endless play.'
  },
  {
    path: '/kids-ride-on-car-manufacturer-in-delhi',
    title: 'Kids Ride On Car Manufacturer in Delhi | Young Wheels',
    metaDesc: 'European supercar styling push cars with steering wheel horn, ergonomic back support, and hidden under-seat storage trunk.'
  },
  {
    path: '/best-children-tricycle-manufacturer-in-delhi',
    title: 'Best Children Tricycle Manufacturer in Delhi | Young Wheels',
    metaDesc: 'Classic heavy-duty carbon steel tricycles, robot mascot trikes, and deluxe musical cushion models.'
  },
  {
    path: '/kids-swing-car-manufacturer-in-delhi',
    title: 'Top Kids Swing Car Manufacturer in Delhi | Young Wheels',
    metaDesc: 'No batteries, no gears, no pedals needed! Twist the steering wheel left and right to glide forward with smooth 360° rotation.'
  },
  {
    path: '/baby-potty-trainer-manufacturer-in-delhi',
    title: 'Best Quality Baby Potty Trainer Manufacturer in Delhi | Young Wheels',
    metaDesc: 'Make potty training gentle and exciting with real scooty scooter handles, deep removable bowl, and splash-guard lid.'
  },
  {
    path: '/baby-walkers-manufacturers-in-india',
    title: 'Best Baby Walkers Manufacturers in India | Young Wheels',
    metaDesc: 'Grow-with-me 2-in-1 stroller push trikes with steerable parent handles, safety harnesses, and retractable toddler footrests.'
  },
  {
    path: '/kids-kick-scooter-manufacturer-in-delhi',
    title: 'Kids Kick Scooter Manufacturer in Delhi | Young Wheels',
    metaDesc: 'Thrilling police patrol bikes and kick balance trikes with electronic sirens, flashing emergency beacons, and rugged wide wheels.'
  },
  {
    path: '/sitemap',
    title: 'Sitemap | Young Wheels Toys Manufacturer Delhi',
    metaDesc: 'Explore all pages, toy categories, factory manufacturing locations, product models, blog posts, and resources on youngwheels.in.'
  },
  {
    path: '/sitemap.html',
    title: 'Sitemap | Young Wheels Toys Manufacturer Delhi',
    metaDesc: 'Explore all pages, toy categories, factory manufacturing locations, product models, blog posts, and resources on youngwheels.in.'
  }
];

routes.forEach(route => {
  let html = baseHtml;
  
  // Replace Title Tag
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);
  
  // Replace Meta Description Tag
  if (html.includes('name="description"')) {
    html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${route.metaDesc}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${route.metaDesc}" />\n</head>`);
  }

  // Populate Twitter Meta Tags for View Source & Social Crawlers
  html = html.replace('<meta name="twitter:title" content="" />', `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace('<meta name="twitter:description" content="" />', `<meta name="twitter:description" content="${route.metaDesc}" />`);

  const cleanPath = route.path.replace(/^\//, '');
  if (cleanPath.endsWith('.html')) {
    const parentDir = path.dirname(path.join(distDir, cleanPath));
    fs.mkdirSync(parentDir, { recursive: true });
    fs.writeFileSync(path.join(distDir, cleanPath), html, 'utf8');
  } else {
    const routeDir = path.join(distDir, cleanPath);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');

    if (!cleanPath.includes('/')) {
      fs.writeFileSync(path.join(distDir, `${cleanPath}.html`), html, 'utf8');
    }
  }
});

console.log(`[PRERENDER] Successfully generated static HTML files for ${routes.length} routes with pre-rendered View Source meta tags!`);

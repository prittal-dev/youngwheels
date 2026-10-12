/**
 * Router utility functions for YoungWheels website.
 * Maps application tabs to canonical URL paths and vice-versa.
 */

export function getTabFromPath(path: string): string {
  const cleanPath = path.replace(/\/+$/, '').toLowerCase() || '/';

  if (cleanPath === '/' || cleanPath === '/home') return 'home';
  if (cleanPath === '/about-us' || cleanPath === '/about') return 'about';
  if (cleanPath === '/blog' || cleanPath === '/blogs' || cleanPath.startsWith('/blog/')) return 'blog';
  if (cleanPath === '/contact-us' || cleanPath === '/contact' || cleanPath === '/visit-factory') return 'contact';
  if (cleanPath === '/events') return 'events';
  if (cleanPath === '/toys-manufacturer-in-india' || cleanPath === '/categories' || cleanPath === '/all-categories' || cleanPath === '/toys') return 'all-categories';
  if (cleanPath === '/social' || cleanPath === '/social-hub') return 'social';
  if (cleanPath === '/social/instagram' || cleanPath === '/social-instagram') return 'social-instagram';
  if (cleanPath === '/social/youtube' || cleanPath === '/social-youtube') return 'social-youtube';
  if (cleanPath === '/social/facebook' || cleanPath === '/social-facebook') return 'social-facebook';
  if (cleanPath === '/social/linkedin' || cleanPath === '/social-linkedin') return 'social-linkedin';

  if (cleanPath === '/admin') return 'admin';
  if (cleanPath === '/thank-you' || cleanPath === '/thankyou') return 'thank-you';
  if (cleanPath === '/sitemap' || cleanPath === '/site-map' || cleanPath === '/sitemap.xml' || cleanPath === '/sitemap.html') return 'sitemap';
  if (cleanPath === '/404') return 'not-found';


  // Specific SEO Manufacturer URLs requested by user
  if (cleanPath === '/toys-manufacturer-in-india' || cleanPath === '/toys-manufacturer-in-india/') return 'all-categories';
  if (cleanPath === '/kids-ride-on-car-manufacturer-in-delhi' || cleanPath === '/kids-ride-on-car-manufacturer-in-delhi/' || cleanPath === '/ride-on-toys-manufacturer-in-delhi') return 'ride-ons';
  if (cleanPath === '/best-children-tricycle-manufacturer-in-delhi' || cleanPath === '/best-children-tricycle-manufacturer-in-delhi/') return 'tricycles';
  if (cleanPath === '/kids-swing-car-manufacturer-in-delhi' || cleanPath === '/kids-swing-car-manufacturer-in-delhi/') return 'swing-cars';
  if (cleanPath === '/baby-potty-trainer-manufacturer-in-delhi' || cleanPath === '/baby-potty-trainer-manufacturer-in-delhi/') return 'potty-trainers';
  if (cleanPath === '/baby-walkers-manufacturers-in-india' || cleanPath === '/baby-walkers-manufacturers-in-india/' || cleanPath === '/baby-walker-manufacturer-in-delhi') return 'baby-walkers';
  if (cleanPath === '/kids-kick-scooter-manufacturer-in-delhi' || cleanPath === '/kids-kick-scooter-manufacturer-in-delhi/') return 'kick-scooters';

  if (cleanPath.startsWith('/categories/')) {
    const catId = cleanPath.replace('/categories/', '');
    if (catId === 'toys-manufacturer-in-india') return 'all-categories';
    if (catId === 'kids-ride-on-car-manufacturer-in-delhi' || catId === 'ride-on-toys-manufacturer-in-delhi') return 'ride-ons';
    if (catId === 'best-children-tricycle-manufacturer-in-delhi') return 'tricycles';
    if (catId === 'kids-swing-car-manufacturer-in-delhi') return 'swing-cars';
    if (catId === 'baby-potty-trainer-manufacturer-in-delhi') return 'potty-trainers';
    if (catId === 'baby-walkers-manufacturers-in-india' || catId === 'baby-walker-manufacturer-in-delhi') return 'baby-walkers';
    if (catId === 'kids-kick-scooter-manufacturer-in-delhi') return 'kick-scooters';

    const knownCategories = [
      'ride-ons', 'kick-scooters', 'baby-walkers', 'swing-cars', 'tricycles', 
      'potty-trainers', 'magic-cars', 'riders', 'potty-chairs', 'electric-rideons', 
      'rocking-animals', 'tri-cycles'
    ];
    if (knownCategories.includes(catId)) return catId;
  }

  // Handle direct category routes (e.g. /ride-ons, /swing-cars, /tricycles, etc.)
  const knownCategories = [
    'ride-ons', 'kick-scooters', 'baby-walkers', 'swing-cars', 'tricycles', 
    'potty-trainers', 'magic-cars', 'riders', 'potty-chairs', 'electric-rideons', 
    'rocking-animals', 'tri-cycles'
  ];
  const directKey = cleanPath.replace(/^\//, '');
  if (knownCategories.includes(directKey)) {
    if (directKey === 'magic-cars') return 'swing-cars';
    if (directKey === 'potty-chairs') return 'potty-trainers';
    if (directKey === 'tri-cycles') return 'tricycles';
    if (directKey === 'riders' || directKey === 'electric-rideons' || directKey === 'rocking-animals') return 'ride-ons';
    return directKey;
  }

  return 'not-found';
}

export function getPathFromTab(tab: string): string {
  switch (tab) {
    case 'home':
      return '/';
    case 'about':
      return '/about-us';
    case 'blog':
      return '/blog';
    case 'contact':
      return '/contact-us';
    case 'events':
      return '/events';
    case 'all-categories':
      return '/toys-manufacturer-in-india';
    case 'social':
      return '/social';
    case 'social-instagram':
      return '/social/instagram';
    case 'social-youtube':
      return '/social/youtube';
    case 'social-facebook':
      return '/social/facebook';
    case 'social-linkedin':
      return '/social/linkedin';
    case 'admin':

      return '/admin';
    case 'thank-you':
      return '/thank-you';
    case 'sitemap':
      return '/sitemap';
    case 'not-found':
      return '/404';


    // Category SEO Manufacturer URLs
    case 'ride-ons':
    case 'riders':
    case 'electric-rideons':
    case 'rocking-animals':
      return '/kids-ride-on-car-manufacturer-in-delhi';
    case 'tricycles':
    case 'tri-cycles':
      return '/best-children-tricycle-manufacturer-in-delhi';
    case 'swing-cars':
    case 'magic-cars':
      return '/kids-swing-car-manufacturer-in-delhi';
    case 'potty-trainers':
    case 'potty-chairs':
      return '/baby-potty-trainer-manufacturer-in-delhi';
    case 'baby-walkers':
      return '/baby-walkers-manufacturers-in-india';
    case 'kick-scooters':
      return '/kids-kick-scooter-manufacturer-in-delhi';

    default:
      return `/categories/${tab}`;
  }
}



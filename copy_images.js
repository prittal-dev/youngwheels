import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'assets');
const targetPublicDir = path.join(__dirname, 'public', 'assets', 'products');
const targetSrcDir = path.join(__dirname, 'src', 'assets', 'products');

if (!fs.existsSync(targetPublicDir)) {
  fs.mkdirSync(targetPublicDir, { recursive: true });
}
if (!fs.existsSync(targetSrcDir)) {
  fs.mkdirSync(targetSrcDir, { recursive: true });
}

const fileMap = {
  // McLaren Sports Push Car (mclaren-ride-on)
  'WhatsApp Image 2026-07-30 at 15.43.12.jpeg': 'mclaren-green.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.13 (1).jpeg': 'mclaren-grey.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.13 (2).jpeg': 'mclaren-white.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.13.jpeg': 'mclaren-blue.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.14.jpeg': 'mclaren-red.jpg',

  // NexRide Classic Tricycle (nexride-tricycle)
  'WhatsApp Image 2026-07-30 at 15.43.21 (1).jpeg': 'nexride-orange.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.21 (2).jpeg': 'nexride-yellow.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.22 (1).jpeg': 'nexride-teal.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.22.jpeg': 'nexride-blue.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.24.jpeg': 'nexride-red.jpg',

  // Tiny Rider 2in1 Parent Push Trike (tiny-rider-2in1)
  'WhatsApp Image 2026-07-30 at 15.43.23 (1).jpeg': 'tiny-rider-2in1-red.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.23.jpeg': 'tiny-rider-2in1-yellow.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.29 (1).jpeg': 'tiny-rider-2in1-blue.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.34 (1).jpeg': 'tiny-rider-2in1-mint.jpg',

  // Tiny Rider Toddler Tricycle (tiny-rider-tricycle)
  'WhatsApp Image 2026-07-30 at 15.43.24 (1).jpeg': 'tiny-rider-mint.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.25 (1).jpeg': 'tiny-rider-grey.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.25.jpeg': 'tiny-rider-pink.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.26 (1).jpeg': 'tiny-rider-blue.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.26.jpeg': 'tiny-rider-yellow.jpg',

  // NexRide 2in1 Heavy-Duty Push Tricycle (nexride-2in1)
  'WhatsApp Image 2026-07-30 at 15.43.31.jpeg': 'nexride-2in1-red.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.32.jpeg': 'nexride-2in1-yellow.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.33.jpeg': 'nexride-2in1-teal.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.34.jpeg': 'nexride-2in1-blue.jpg',

  // NexRide 2in1 Deluxe Push Tricycle with Musical Console (nexride-2in1-deluxe / nexride-deluxe)
  'WhatsApp Image 2026-07-30 at 15.43.36 (1).jpeg': 'nexride-2in1-deluxe-yellow.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.36 (2).jpeg': 'nexride-2in1-deluxe-teal.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.36.jpeg': 'nexride-2in1-deluxe-red.jpg',
  'WhatsApp Image 2026-07-30 at 15.43.37.jpeg': 'nexride-2in1-deluxe-blue.jpg',

  // Potty Chair
  'WhatsApp Image 2026-07-30 at 15.44.08.jpeg': 'potty-chair-blue.jpg',

  // Candy Swing Car
  'WhatsApp Image 2026-07-30 at 15.44.11.jpeg': 'candy-swing-car-cyan.jpg',

  // Turbo Police Bike
  'WhatsApp Image 2026-07-30 at 15.44.13.jpeg': 'turbo-police-bike-red.jpg'
};

let count = 0;
for (const [srcName, destName] of Object.entries(fileMap)) {
  const srcPath = path.join(srcDir, srcName);
  const destPublicPath = path.join(targetPublicDir, destName);
  const destSrcPath = path.join(targetSrcDir, destName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPublicPath);
    fs.copyFileSync(srcPath, destSrcPath);
    console.log(`Copied ${srcName} -> ${destName}`);
    count++;
  } else {
    console.warn(`Source file not found: ${srcName}`);
  }
}

console.log(`Successfully copied ${count} product images into public/assets/products/ and src/assets/products/!`);

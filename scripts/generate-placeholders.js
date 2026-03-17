// Script to generate SVG placeholder images for the Theia Coffee House website
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function createSvgPlaceholder(width, height, bgColor1, bgColor2, text, textColor = '#F5F1EB') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bgColor2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <text x="50%" y="50%" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.06}" fill="${textColor}" fill-opacity="0.6" text-anchor="middle" dominant-baseline="central">${text}</text>
</svg>`;
}

const placeholders = [
  // Hero
  { path: 'images/hero-fallback.jpg', w: 1920, h: 1080, c1: '#3A2320', c2: '#1F1F1F', t: 'Theia Coffee House' },
  // Experience
  { path: 'images/experience.jpg', w: 800, h: 1000, c1: '#4B2E2B', c2: '#7A8F7B', t: 'Experience' },
  // About
  { path: 'images/about.jpg', w: 800, h: 1000, c1: '#5F7360', c2: '#3A2320', t: 'About Theia' },
  // Community
  { path: 'images/community.jpg', w: 800, h: 1000, c1: '#7A8F7B', c2: '#4B2E2B', t: 'Community' },
  // Menu items
  ...['espresso', 'cortado', 'flat-white', 'pour-over', 'iced-latte', 'matcha',
    'avocado-toast', 'eggs-benedict', 'acai-bowl', 'french-toast',
    'croissant', 'pain-chocolat', 'cinnamon-roll', 'banana-bread',
    'caprese', 'chicken-wrap', 'soup',
    'tiramisu', 'fondant', 'cheesecake'].map(name => ({
    path: `images/menu/${name}.jpg`, w: 400, h: 400, c1: '#4B2E2B', c2: '#6B4E4B', t: name.replace(/-/g, ' ')
  })),
  // Gallery
  ...['coffee-1', 'interior-1', 'pastry-1', 'brunch-1', 'coffee-2', 'interior-2', 'pastry-2', 'brunch-2'].map(name => ({
    path: `images/gallery/${name}.jpg`, w: 800, h: 800, c1: '#3A2320', c2: '#7A8F7B', t: name.replace(/-/g, ' ')
  })),
  // Instagram
  ...['ig-1', 'ig-2', 'ig-3', 'ig-4', 'ig-5', 'ig-6'].map(name => ({
    path: `images/instagram/${name}.jpg`, w: 600, h: 600, c1: '#4B2E2B', c2: '#5F7360', t: 'Instagram'
  })),
];

// For .jpg named files we'll still write SVG content but rename to .jpg
// Next.js Image component will handle them fine since browsers parse by content
// Actually let's use proper SVG extension mapping
placeholders.forEach(({ path: filePath, w, h, c1, c2, t }) => {
  const svgPath = filePath.replace('.jpg', '.svg');
  const fullPath = path.join(publicDir, svgPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, createSvgPlaceholder(w, h, c1, c2, t));
  // Also write as .jpg (SVG content, browsers will handle)
  const jpgPath = path.join(publicDir, filePath);
  fs.writeFileSync(jpgPath, createSvgPlaceholder(w, h, c1, c2, t));
});

console.log(`Created ${placeholders.length} placeholder images`);

/**
 * Script to optimize images in the public directory
 * Run with: node scripts/optimize-images.js
 * 
 * Make sure to install dependencies first:
 * npm install sharp glob fs-extra
 */

const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');
const IMAGE_SIZES = {
  sm: 640,
  md: 1024,
  lg: 1440,
};
const IMAGE_QUALITY = 80;

// Create optimized directory if it doesn't exist
fs.ensureDirSync(OPTIMIZED_DIR);

// Find all PNG and JPG images in public directory
const images = glob.sync(`${PUBLIC_DIR}/**/*.{png,jpg,jpeg}`, {
  ignore: [`${OPTIMIZED_DIR}/**/*`, `${PUBLIC_DIR}/favicon.ico`]
});

console.log(`Found ${images.length} images to optimize...`);

// Process each image
(async () => {
  for (const imagePath of images) {
    const filename = path.basename(imagePath);
    const fileExt = path.extname(filename);
    const name = path.basename(filename, fileExt);
    
    console.log(`Optimizing ${filename}...`);
    
    // Create WebP version
    await sharp(imagePath)
      .webp({ quality: IMAGE_QUALITY })
      .toFile(path.join(OPTIMIZED_DIR, `${name}.webp`));
      
    // Create AVIF version
    await sharp(imagePath)
      .avif({ quality: IMAGE_QUALITY })
      .toFile(path.join(OPTIMIZED_DIR, `${name}.avif`));
      
    // Create responsive versions (sm, md, lg)
    for (const [size, width] of Object.entries(IMAGE_SIZES)) {
      // WebP versions
      await sharp(imagePath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: IMAGE_QUALITY })
        .toFile(path.join(OPTIMIZED_DIR, `${name}-${size}.webp`));
        
      // Original format versions
      await sharp(imagePath)
        .resize({ width, withoutEnlargement: true })
        .toFile(path.join(OPTIMIZED_DIR, `${name}-${size}${fileExt}`));
    }
    
    // Create optimized original format
    await sharp(imagePath)
      .jpeg({ quality: IMAGE_QUALITY, mozjpeg: true })
      .toFile(path.join(OPTIMIZED_DIR, filename));
  }
  
  console.log('Image optimization complete!');
})(); 
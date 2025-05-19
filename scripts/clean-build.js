#!/usr/bin/env node

/**
 * Clean Build Script for Vercel Deployment
 * 
 * This script cleans the build artifacts and rebuilds the project
 * to ensure a clean deployment on Vercel.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Cleaning build artifacts...');

// Define directories to clean
const directoriesToClean = [
  '.next',
  '.vercel',
  'node_modules/.cache'
];

// Clean directories
directoriesToClean.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      console.log(`Removing ${dir}...`);
      execSync(`rm -rf ${dirPath}`);
    } catch (error) {
      console.error(`Failed to remove ${dir}: ${error.message}`);
    }
  }
});

// Rebuild
console.log('\n🏗️ Rebuilding project...');
try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });
  
  // Build
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Clean build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
} 
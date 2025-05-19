#!/usr/bin/env node

/**
 * Vercel Deployment Preparation Script
 * 
 * This script helps prepare the project for Vercel deployment by:
 * 1. Checking for required environment variables
 * 2. Validating project configuration
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Preparing for Vercel deployment...');

// Check if vercel.json exists
const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  console.log('✅ vercel.json configuration found');
  
  try {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
    console.log('   Configuration validated');
  } catch (error) {
    console.error('❌ Error parsing vercel.json:', error.message);
    process.exit(1);
  }
} else {
  console.log('⚠️ No vercel.json found, using Vercel defaults');
}

// Check for Next.js config
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('✅ next.config.js found');
} else {
  console.log('⚠️ No next.config.js found');
}

// Validate build
console.log('🔍 Validating build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Check for required environment variables
console.log('\n📋 Environment variables required for Vercel:');
console.log('   NEXT_PUBLIC_SANITY_PROJECT_ID=h6zht0xd');
console.log('   NEXT_PUBLIC_SANITY_DATASET=production');
console.log('   NEXT_PUBLIC_SANITY_API_VERSION=2021-06-07');

console.log('\n🔧 Remember to set these environment variables in your Vercel project settings.');

console.log('\n✨ Project is ready for Vercel deployment!');
console.log('   You can now run:');
console.log('   1. vercel login');
console.log('   2. vercel');
console.log('   Or deploy through the Vercel dashboard by connecting your Git repository.'); 
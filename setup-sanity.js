/**
 * This is a setup script to help with Sanity Studio development
 * Run with: node setup-sanity.js
 */

const fs = require('fs');
const { execSync } = require('child_process');

// Generate a .env.local file
try {
  console.log('Creating .env.local file...');
  const envContent = `
NEXT_PUBLIC_SANITY_PROJECT_ID=h6zht0xd
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2021-06-07
  `.trim();
  
  fs.writeFileSync('.env.local', envContent);
  console.log('✅ .env.local file created');
} catch (err) {
  console.error('❌ Failed to create .env.local:', err);
}

// Try to login to Sanity
try {
  console.log('\nAttempting to log in to Sanity...');
  execSync('npx sanity login', { stdio: 'inherit' });
  console.log('✅ Sanity login successful');
} catch (err) {
  console.error('❌ Failed to login to Sanity. Please try manually with: npx sanity login');
}

console.log('\n🎉 Setup complete! Try running your app with: npm run dev'); 
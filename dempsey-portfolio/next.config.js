// import type { NextConfig } from "next"; // Type imports are not used at runtime in JS
const { createSecureHeaders } = require('next-secure-headers');

const nextConfig /*: NextConfig*/ = { // Type annotation commented out
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  /* config options here */
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add secure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://api.web3forms.com"],
              imgSrc: ["'self'", "data:", "https:", "blob:"],
              connectSrc: ["'self'", "https://api.web3forms.com", "https://cdn.sanity.io", "https://v20paafs.api.sanity.io"],
              fontSrc: ["'self'", "https:", "data:"],
              formAction: ["'self'", "https://api.web3forms.com"],
            },
          },
          referrerPolicy: 'strict-origin-when-cross-origin',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
          ],
          frameGuard: 'deny',
        }),
      },
      {
        // Match all routes under /studio
        source: '/studio/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            // IMPORTANT: Replace with your specific Sanity Studio domain in production
            // e.g., 'https://your-studio-domain.sanity.studio' or your custom domain for the studio
            value: 'YOUR_SANITY_STUDIO_DOMAIN_HERE', // Or keep '*' for local dev if needed, but be specific for prod
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

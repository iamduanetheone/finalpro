// import type { NextConfig } from "next"; // Type imports are not used at runtime in JS
const { createSecureHeaders } = require('next-secure-headers');

const isDev = process.env.NODE_ENV !== 'production';

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
    // Create secure headers with or without HTTPS redirect based on environment
    const secureHeadersConfig = {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'", "https:", "vercel.app", "vercel.com"],
          styleSrc: ["'self'", "'unsafe-inline'", "https:", "vercel.app", "vercel.com"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://api.web3forms.com", "https:", "vercel.app", "vercel.com"],
          imgSrc: ["'self'", "data:", "https:", "blob:"],
          connectSrc: ["'self'", "https://api.web3forms.com", "https://cdn.sanity.io", "https://h6zht0xd.api.sanity.io", "https:", "vercel.app", "vercel.com", "wss:", "ws:"],
          fontSrc: ["'self'", "https:", "data:"],
          formAction: ["'self'", "https://api.web3forms.com"],
          scriptSrcElem: ["'self'", "'unsafe-inline'", "https:", "vercel.app", "vercel.com"],
          scriptSrcAttr: ["'self'", "'unsafe-inline'"],
          baseUri: ["'self'"],
          frameAncestors: ["'self'"],
        },
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      xssProtection: 'sanitize',
      frameGuard: 'deny',
    };

    // Only add HTTPS redirect in production
    if (!isDev) {
      secureHeadersConfig.forceHTTPSRedirect = [
        true,
        { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
      ];
    }

    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders(secureHeadersConfig),
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
            value: '*', // Allow all origins for now, update this with your specific domain in production
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

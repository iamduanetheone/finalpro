/**
 * Authentication configuration for Sanity Studio
 */

import { type NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  // Configure authentication providers
  providers: [],
  
  // Enable debug messages in console
  debug: process.env.NODE_ENV === 'development',
  
  // A random string is used to hash tokens, sign cookies and generate cryptographic keys
  secret: (() => {
    if (process.env.NODE_ENV === 'production' && (!process.env.NEXTAUTH_SECRET || process.env.NEXTAUTH_SECRET === 'a-default-secret-for-development-only')) {
      throw new Error('CRITICAL: NEXTAUTH_SECRET is not set or is using the default insecure value in a production environment. Please set a strong unique secret in your environment variables.');
    }
    return process.env.NEXTAUTH_SECRET || 'a-default-secret-for-development-only';
  })(),
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  callbacks: {
    // Add custom callbacks here if needed
  },
} 
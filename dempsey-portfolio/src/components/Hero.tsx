"use client";

import Image from 'next/image'; // Import Next.js Image component
import Script from 'next/script';
import { motion } from 'framer-motion'; // Add animation library
import { useState, useEffect } from 'react';

export default function Hero() {
  // Track if component has mounted for animations
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Data for structured JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dempsey",
    "url": "https://www.dempseycopywriter.com",
    "jobTitle": "SEO Copywriter",
    "description": "Expert SEO copywriter specializing in conversion-focused content that ranks.",
    "knowsAbout": ["SEO", "Copywriting", "Content Strategy", "Digital Marketing"]
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      {/* Add structured data for SEO */}
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify(personSchema)}
      </Script>
      
      <section className="bg-gradient-to-b from-sky-50 to-white text-slate-900 min-h-screen flex items-center py-12 pt-28 md:pt-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content Column */}
          {mounted ? (
            <motion.div 
              className="md:w-1/2 lg:w-3/5 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.span 
                className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6"
                variants={itemVariants}
              >
                SEO-Driven Content Strategy
              </motion.span>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
                variants={itemVariants}
              >
                <span className="text-sky-600">SEO-Optimized Copy</span> That Drives Traffic & Converts
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-xl text-slate-600 mb-6 max-w-xl mx-auto md:mx-0"
                variants={itemVariants}
              >
                Strategic content that ranks in search engines and turns visitors into loyal customers. No fluff, just results.
              </motion.p>
              
              <motion.p 
                className="text-md sm:text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0 italic"
                variants={itemVariants}
              >
                Trusted by <strong>30+</strong> growing brands to elevate their SEO content strategy.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <a
                  href="#contact"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
                  aria-label="Contact for a free consultation about your SEO copywriting needs"
                >
                  <div className="flex items-center">
                    Let&apos;s Elevate Your Content
                    <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">🚀</span>
                  </div>
                  <span className="block text-xs font-normal mt-1 opacity-90">Free 30-min strategy call – no obligation</span>
                </a>
              </motion.div>
            </motion.div>
          ) : (
            <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
              {/* Static version for SSR */}
              <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6">
                SEO-Driven Content Strategy
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-sky-600">SEO-Optimized Copy</span> That Drives Traffic & Converts
              </h1>
              
              <p className="text-lg sm:text-xl md:text-xl text-slate-600 mb-6 max-w-xl mx-auto md:mx-0">
                Strategic content that ranks in search engines and turns visitors into loyal customers. No fluff, just results.
              </p>
              
              <p className="text-md sm:text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0 italic">
                Trusted by <strong>30+</strong> growing brands to elevate their SEO content strategy.
              </p>
              
              <a
                href="#contact"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
                aria-label="Contact for a free consultation about your SEO copywriting needs"
              >
                <div className="flex items-center">
                  Let&apos;s Elevate Your Content
                  <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">🚀</span>
                </div>
                <span className="block text-xs font-normal mt-1 opacity-90">Free 30-min strategy call – no obligation</span>
              </a>
            </div>
          )}

          {/* Visual Column with image */}
          {mounted ? (
            <motion.div 
              className="md:w-1/2 lg:w-2/5 mt-12 md:mt-0 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full max-w-md rounded-xl shadow-xl overflow-hidden border border-slate-100 relative">
                <Image 
                  src="/dempsey.png"
                  alt="Dempsey - Expert SEO Copywriter specializing in conversion-focused content" 
                  width={500}
                  height={600}
                  className="object-contain w-full h-auto"
                  priority
                /> 
              </div>
            </motion.div>
          ) : (
            <div className="md:w-1/2 lg:w-2/5 mt-12 md:mt-0 flex justify-center md:justify-end">
              <div className="w-full max-w-md rounded-xl shadow-xl overflow-hidden border border-slate-100 relative">
                <Image 
                  src="/dempsey.png"
                  alt="Dempsey - Expert SEO Copywriter specializing in conversion-focused content" 
                  width={500}
                  height={600}
                  className="object-contain w-full h-auto"
                  priority
                /> 
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
} 
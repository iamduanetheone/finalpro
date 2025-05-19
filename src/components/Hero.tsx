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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Academic Excellence",
    "url": "https://www.academicexcellence.com",
    "description": "Academic and career progression services helping students and professionals achieve their goals.",
    "knowsAbout": ["Academic Writing", "Research Papers", "Thesis Writing", "Resume Services", "Career Development"]
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
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
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
                Academic & Career Excellence
              </motion.span>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
                variants={itemVariants}
              >
                <span className="text-sky-600">Academic & Career</span> Services for Success
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-xl text-slate-600 mb-6 max-w-xl mx-auto md:mx-0"
                variants={itemVariants}
              >
                Comprehensive academic writing and career progression services to help you achieve your educational and professional goals.
              </motion.p>
              
              <motion.p 
                className="text-md sm:text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0 italic"
                variants={itemVariants}
              >
                Trusted by <strong>1000+</strong> students and professionals to excel in their academic and career journeys.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <a
                  href="#contact"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
                  aria-label="Contact for a free consultation about your academic or career needs"
                >
                  <div className="flex items-center">
                    Start Your Success Journey
                    <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">🚀</span>
                  </div>
                  <span className="block text-xs font-normal mt-1 opacity-90">Free consultation – no obligation</span>
                </a>
              </motion.div>
            </motion.div>
          ) : (
            <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
              {/* Static version for SSR */}
              <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6">
                Academic & Career Excellence
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-sky-600">Academic & Career</span> Services for Success
              </h1>
              
              <p className="text-lg sm:text-xl md:text-xl text-slate-600 mb-6 max-w-xl mx-auto md:mx-0">
                Comprehensive academic writing and career progression services to help you achieve your educational and professional goals.
              </p>
              
              <p className="text-md sm:text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0 italic">
                Trusted by <strong>1000+</strong> students and professionals to excel in their academic and career journeys.
              </p>
              
              <a
                href="#contact"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-lg text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
                aria-label="Contact for a free consultation about your academic or career needs"
              >
                <div className="flex items-center">
                  Start Your Success Journey
                  <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">🚀</span>
                </div>
                <span className="block text-xs font-normal mt-1 opacity-90">Free consultation – no obligation</span>
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
                  alt="Academic and Career Progression Services" 
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
                  alt="Academic and Career Progression Services" 
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
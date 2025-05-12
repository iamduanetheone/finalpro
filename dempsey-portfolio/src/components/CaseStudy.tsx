"use client";

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

type CaseStudyProps = {
  title: string;
  category: string;
  duration: string;
  industry: string;
  backgroundContent: React.ReactNode;
  challengesContent: React.ReactNode;
  approachContent: React.ReactNode;
  resultsContent: React.ReactNode;
  toolsContent?: React.ReactNode;
  lessonsContent?: React.ReactNode;
  conclusionContent?: React.ReactNode;
  heroImage?: string;
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  category,
  duration,
  industry,
  backgroundContent,
  challengesContent,
  approachContent,
  resultsContent,
  toolsContent,
  lessonsContent,
  conclusionContent,
  heroImage = "/case-study-default.jpg" // Default hero image
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Use intersection observer hooks for scroll-based animations
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [backgroundRef, backgroundInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [challengesRef, challengesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lessonsRef, lessonsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [conclusionRef, conclusionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative h-80 sm:h-96 md:h-[500px] bg-gradient-to-r from-sky-600 to-blue-700 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0 opacity-50">
            <Image 
              src={heroImage} 
              alt={title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-sky-800/60 z-0"></div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-white mb-6 transition hover:text-sky-200 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-sky-600 text-white rounded-full mb-4">
                {category}
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 text-white mt-6"
            >
              <div className="bg-sky-700/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="block text-xs text-sky-200">DURATION</span>
                <span className="font-medium">{duration}</span>
              </div>
              <div className="bg-sky-700/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="block text-xs text-sky-200">INDUSTRY</span>
                <span className="font-medium">{industry}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Background */}
        <motion.section 
          ref={backgroundRef}
          initial="hidden"
          animate={backgroundInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20 md:mb-24"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-100 pb-4 mb-8"
          >
            Background
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
          >
            {backgroundContent}
          </motion.div>
        </motion.section>

        {/* Challenges */}
        <motion.section 
          ref={challengesRef}
          initial="hidden"
          animate={challengesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20 md:mb-24 bg-slate-50 p-8 rounded-xl"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-200 pb-4 mb-8"
          >
            Key Challenges Identified
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
          >
            {challengesContent}
          </motion.div>
        </motion.section>

        {/* Approach */}
        <motion.section 
          ref={approachRef}
          initial="hidden"
          animate={approachInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20 md:mb-24"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-100 pb-4 mb-8"
          >
            Strategic Approach
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
          >
            {approachContent}
          </motion.div>
        </motion.section>

        {/* Results */}
        <motion.section 
          ref={resultsRef}
          initial="hidden"
          animate={resultsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20 md:mb-24 bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-xl"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-200 pb-4 mb-8"
          >
            Results & Impact
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
          >
            {resultsContent}
          </motion.div>
        </motion.section>

        {/* Tools & Stack */}
        {toolsContent && (
          <motion.section 
            ref={toolsRef}
            initial="hidden"
            animate={toolsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-20 md:mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-100 pb-4 mb-8"
            >
              Tools & Stack Used
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
            >
              {toolsContent}
            </motion.div>
          </motion.section>
        )}

        {/* Lessons & Reflections */}
        {lessonsContent && (
          <motion.section 
            ref={lessonsRef}
            initial="hidden"
            animate={lessonsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-20 md:mb-24 bg-slate-50 p-8 rounded-xl"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-200 pb-4 mb-8"
            >
              Lessons & Reflections
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
            >
              {lessonsContent}
            </motion.div>
          </motion.section>
        )}

        {/* Final Thoughts */}
        {conclusionContent && (
          <motion.section 
            ref={conclusionRef}
            initial="hidden"
            animate={conclusionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-20 md:mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-sky-800 border-b-2 border-sky-100 pb-4 mb-8"
            >
              Final Thoughts
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="prose prose-lg max-w-none prose-headings:text-sky-700 prose-a:text-sky-600 text-slate-700"
            >
              {conclusionContent}
            </motion.div>
          </motion.section>
        )}

        {/* CTA */}
        <div className="mt-20 md:mt-24 bg-sky-50 p-10 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Ready to achieve similar results for your business?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how my SEO copywriting expertise can help you increase traffic, improve conversions, and grow your online presence.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy; 
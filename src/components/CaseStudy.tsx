'use client';

import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { BlockContent } from './BlockContent';

interface CaseStudyProps {
  title: string;
  subtitle?: string;
  heroImage?: {
    url: string;
    alt?: string;
  };
  challenge?: any;
  approach?: any;
  results?: any;
  testimonial?: {
    quote: string;
    author: string;
    position?: string;
  };
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  heroImage,
  challenge,
  approach,
  results,
  testimonial,
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      </motion.div>

      {heroImage && (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <OptimizedImage
            src={heroImage.url}
            alt={heroImage.alt || title}
            width={1200}
            height={675}
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      )}

      <div className="grid gap-16">
        {challenge && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <BlockContent value={challenge} />
            </div>
          </motion.section>
        )}

        {approach && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">The Approach</h2>
            <div className="prose prose-lg max-w-none">
              <BlockContent value={approach} />
            </div>
          </motion.section>
        )}

        {results && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <div className="prose prose-lg max-w-none">
              <BlockContent value={results} />
            </div>
          </motion.section>
        )}

        {testimonial && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <blockquote className="text-xl italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="font-semibold">{testimonial.author}</div>
            {testimonial.position && <div className="text-gray-600">{testimonial.position}</div>}
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default CaseStudy; 
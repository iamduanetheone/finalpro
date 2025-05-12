"use client";

import OptimizedImage from './OptimizedImage';
import Script from 'next/script';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Testimonial data - replace with actual client feedback
const testimonials = [
  {
    id: 1,
    quote: "Working with Dempsey transformed our content strategy. Their SEO insights and persuasive copy increased our organic traffic by 127% in just 3 months. The ROI has been exceptional.",
    name: "Ava Miller",
    company: "Innovatech Systems (Custom Software Development)",
    imageUrl: "/23.jpg",
    position: "Marketing Manager"
  },
  {
    id: 2,
    quote: "Dempsey has a remarkable talent for capturing our brand voice and turning it into compelling, high-ranking content. Our blog engagement has increased 85% and our conversion rate has doubled.",
    name: "Ethan Davis",
    company: "BrightSparq Digital (E-commerce Brand Strategy)",
    imageUrl: "/32.jpg",
    position: "Head of Content"
  },
  {
    id: 3,
    quote: "The attention to detail, deep keyword research, and commitment to measurable results are what set Dempsey apart. Our content now ranks for over 50 high-value keywords.",
    name: "Chloe Garcia",
    company: "Everbloom Wellness (Organic Skincare Solutions)",
    imageUrl: "/44.jpg",
    position: "Founder & CEO"
  }
];

// Helper function to get initials from a name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .toUpperCase();
};

// JSON-LD structured data for testimonials
const createReviewsSchema = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Copywriting Services by Dempsey",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "jobTitle": testimonial.position
      },
      "reviewBody": testimonial.quote
    }))
  };
  
  return reviewsSchema;
};

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Add structured data for reviews */}
      <Script id="reviews-schema" type="application/ld+json">
        {JSON.stringify(createReviewsSchema())}
      </Script>
      
      <section id="testimonials" className="py-16 md:py-24 bg-sky-100">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              What My Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Don't just take my word for it. Here's what clients have to say about the impact of my SEO copywriting services on their businesses.
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-xl shadow-xl flex flex-col relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Large decorative quote marks */}
                <div className="absolute top-6 left-6 text-sky-100 text-7xl font-serif leading-none z-0 transition-all duration-300" 
                  style={{ 
                    transform: hoveredId === testimonial.id ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                    opacity: hoveredId === testimonial.id ? 0.8 : 0.5
                  }}
                >
                  &ldquo;
                </div>
                <div className="absolute bottom-6 right-6 text-sky-100 text-7xl font-serif leading-none rotate-180 z-0 transition-all duration-300"
                  style={{ 
                    transform: hoveredId === testimonial.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    opacity: hoveredId === testimonial.id ? 0.8 : 0.5
                  }}
                >
                  &ldquo;
                </div>
                
                <div className="relative z-10">
                  {/* Client image with fallback */}
                  <div className="relative w-20 h-20 rounded-full mb-6 overflow-hidden bg-sky-50 border-2 border-sky-200 mx-auto shadow-md transition-all duration-300"
                    style={{ 
                      transform: hoveredId === testimonial.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    {testimonial.imageUrl ? (
                      <OptimizedImage 
                        src={testimonial.imageUrl} 
                        alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`} 
                        fill
                        className="object-cover"
                        sizes="80px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target) target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-sky-200 text-sky-700 font-semibold text-xl">
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-lg italic font-normal text-slate-700 mb-6 leading-relaxed text-center relative z-10 transition-all duration-300"
                    style={{ 
                      opacity: hoveredId === testimonial.id ? 1 : 0.9
                    }}
                  >
                    {testimonial.quote}
                  </p>
                  
                  <div className="mt-auto text-center">
                    <p className="font-semibold text-sky-700 text-lg">— {testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white border border-sky-300 text-sky-700 rounded-lg font-medium hover:bg-sky-50 hover:border-sky-400 transition-colors shadow-sm hover:shadow"
            >
              Ready to achieve similar results? Let's talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 
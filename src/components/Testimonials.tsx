"use client";

import Script from 'next/script';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Testimonial data for academic and career services
const testimonials = [
  {
    id: 1,
    quote: "The dissertation support I received was exceptional. My thesis advisor was impressed with the quality of research and methodology. The statistical analysis support was particularly valuable as it helped me identify patterns I hadn't recognized. I successfully defended my dissertation with distinction.",
    name: "James H.",
    position: "PhD Graduate",
    service: "Dissertation Support"
  },
  {
    id: 2,
    quote: "After struggling with multiple job rejections, I decided to invest in professional resume services. The transformation was remarkable. My new resume highlighted achievements I didn't realize were significant. Within three weeks, I had four interviews and received two competitive offers. The career coaching also prepared me for tough interview questions.",
    name: "Sarah T.",
    position: "Marketing Professional",
    service: "Resume & Interview Preparation"
  },
  {
    id: 3,
    quote: "As a non-native English speaker, I was concerned about the quality of my research papers. The academic writing team helped me express complex ideas clearly while maintaining academic rigor. My professors noted significant improvement in my writing, and I maintained a 4.0 GPA throughout my master's program.",
    name: "Min L.",
    position: "Master's Student",
    service: "Research Paper Writing"
  },
  {
    id: 4,
    quote: "The guidance I received for my medical school application essays was invaluable. My personal statement effectively communicated my journey and passion for medicine in a compelling way. I received interview invitations from 8 out of 10 schools I applied to and was accepted to my top choice program.",
    name: "Daniel K.",
    position: "Medical School Student",
    service: "Admissions Essays"
  },
  {
    id: 5,
    quote: "After 15 years in finance, I wanted to transition into the tech industry but didn't know how to position my transferable skills. The career change package completely transformed my job search. My LinkedIn profile now attracts recruiters weekly, and I successfully made the industry switch with a 20% salary increase.",
    name: "Rebecca M.",
    position: "Tech Product Manager",
    service: "Career Transition"
  },
  {
    id: 6,
    quote: "I was struggling with my capstone project until I found Academic Excellence. They helped me refine my research question, develop a solid methodology, and analyze my findings. The final paper was well-structured and earned me an A. I couldn't have completed this project without their guidance.",
    name: "Taylor J.",
    position: "Undergraduate Student",
    service: "Capstone Project"
  }
];

// JSON-LD structured data for testimonials
const createReviewsSchema = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Academic and Career Services by Academic Excellence",
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
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Read how our academic and career services have helped students and professionals achieve their goals and advance their journeys.
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
                {/* Service tag */}
                <div className="absolute top-3 right-3">
                  <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
                
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
                
                <div className="relative z-10 pt-4">
                  <p className="text-lg italic font-normal text-slate-700 mb-6 leading-relaxed text-center relative z-10 transition-all duration-300"
                    style={{ 
                      opacity: hoveredId === testimonial.id ? 1 : 0.9
                    }}
                  >
                    {testimonial.quote}
                  </p>
                  
                  <div className="mt-auto text-center">
                    <p className="font-semibold text-sky-700 text-lg">— {testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
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
              Ready to start your success journey? Contact us today
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 
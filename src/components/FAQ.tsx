"use client";

import { useState } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';

// FAQ data - replace with your actual FAQs
const faqItems = [
  {
    id: 1,
    question: "What kind of academic writing services do you offer?",
    answer: "We provide a comprehensive range of academic writing services including essays, research papers, thesis and dissertation support, lab reports, case studies, literature reviews, and more. Our experienced team of writers has expertise across various disciplines to help you excel in your academic journey."
  },
  {
    id: 2,
    question: "How do you ensure the quality and originality of your academic work?",
    answer: "Quality and originality are our top priorities. Each assignment goes through a rigorous quality control process that includes plagiarism checking, proofreading, and editing. We use advanced plagiarism detection software to ensure all work is 100% original, properly cited, and meets the highest academic standards."
  },
  {
    id: 3,
    question: "What are your rates for academic and career services?",
    answer: "Our rates vary depending on the type of service, complexity, academic level, and deadline. For academic writing, prices typically start at $20 per page for undergraduate level and increase for graduate and PhD level work. Career services such as resume writing start at $100. We provide detailed quotes after understanding your specific requirements."
  },
  {
    id: 4,
    question: "Do you offer revisions to the work you provide?",
    answer: "Yes, we include free revisions with all our services. We work closely with you to ensure the final product meets your expectations and requirements. If you need any adjustments after receiving your completed work, we're happy to make necessary revisions within the revision period (typically 7-14 days, depending on the service)."
  },
  {
    id: 5,
    question: "How do you handle confidentiality and privacy?",
    answer: "We take confidentiality and privacy extremely seriously. All client information and completed work remain strictly confidential. We never share, sell, or publish any of your personal information or the work we create for you. Our secure systems ensure your data is protected at all times."
  },
  {
    id: 6,
    question: "What is your turnaround time for academic assignments?",
    answer: "Our turnaround time depends on the complexity and length of the assignment. We can accommodate urgent requests with deadlines as short as 24 hours for shorter assignments. For longer projects like dissertations, we typically require 7-14 days or more. We always strive to deliver before the deadline to allow time for review."
  },
  {
    id: 7,
    question: "How will your resume writing services help me stand out to employers?",
    answer: "Our career specialists are experienced in creating ATS-optimized resumes that highlight your unique strengths and achievements. We research industry-specific keywords, craft compelling achievement statements, and design professional layouts that catch recruiters' attention. Our clients report a significant increase in interview invitations after using our resume services."
  },
  {
    id: 8,
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply fill out the contact form on this website or send us an email with your requirements. Our team will get back to you within 24 hours to discuss your needs, provide a quote, and explain the next steps. We can then assign the most suitable specialist to your project and begin working on your success."
  }
];

// FAQPage structured data for SEO
const createFaqSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  
  return faqSchema;
};

// Split FAQ items into two columns for layout
const splitFaqsIntoColumns = (items: typeof faqItems) => {
  const midpoint = Math.ceil(items.length / 2);
  return [
    items.slice(0, midpoint),
    items.slice(midpoint)
  ];
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [columns, rightColumn] = splitFaqsIntoColumns(faqItems);
  
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };
  
  return (
    <>
      {/* Add structured data for FAQs */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(createFaqSchema())}
      </Script>
      
      <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-sky-400 blur-3xl"></div>
          <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-sky-100 text-sky-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our academic and career services? Here are answers to some common queries. If you don't see what you're looking for, feel free to <a href="#contact" className="text-sky-600 hover:text-sky-700 hover:underline font-medium">reach out</a>.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-6xl mx-auto">
            {/* Left column */}
            <div className="space-y-4">
              {columns.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    className={`bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 ${openItems.includes(item.id) ? 'ring-2 ring-sky-200 shadow-md' : ''}`}
                    aria-expanded={openItems.includes(item.id)}
                  >
                    <button 
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left font-semibold text-lg text-slate-800 cursor-pointer flex justify-between items-center"
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span className="pr-8">{item.question}</span>
                      <span 
                        className={`flex-shrink-0 text-sky-600 transform transition-transform duration-300 bg-sky-50 rounded-full p-1 ${openItems.includes(item.id) ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      id={`faq-answer-${item.id}`}
                      className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-slate-600 leading-relaxed pl-4 border-l-2 border-sky-200 text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Right column */}
            <div className="space-y-4">
              {rightColumn.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (index + columns.length) * 0.1 }}
                >
                  <div 
                    className={`bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 ${openItems.includes(item.id) ? 'ring-2 ring-sky-200 shadow-md' : ''}`}
                    aria-expanded={openItems.includes(item.id)}
                  >
                    <button 
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left font-semibold text-lg text-slate-800 cursor-pointer flex justify-between items-center"
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span className="pr-8">{item.question}</span>
                      <span 
                        className={`flex-shrink-0 text-sky-600 transform transition-transform duration-300 bg-sky-50 rounded-full p-1 ${openItems.includes(item.id) ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      id={`faq-answer-${item.id}`}
                      className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-slate-600 leading-relaxed pl-4 border-l-2 border-sky-200 text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">Still have questions?</h3>
              <p className="text-slate-600 mb-6">
                I'm here to help! Feel free to reach out with any specific questions about your project.
              </p>
              <a 
                href="/get-a-quote" 
                className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
              >
                Get a Personalized Answer
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
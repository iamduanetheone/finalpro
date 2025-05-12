"use client";

import { useState } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';

// FAQ data - replace with your actual FAQs
const faqItems = [
  {
    id: 1,
    question: "What kind of results can I expect from your SEO copywriting services?",
    answer: "While results vary based on many factors (industry, competition, budget), my goal is to significantly improve your organic search rankings, increase relevant traffic, enhance user engagement, and boost conversion rates. I focus on long-term, sustainable growth through high-quality, search-optimized content tailored to your audience's needs."
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO content?",
    answer: "SEO is a marathon, not a sprint. You might start seeing initial improvements in a few weeks to a few months, but significant, lasting results typically take 6-12 months of consistent effort. Patience and persistence are key! My comprehensive approach focuses on both quick wins and long-term strategies to ensure sustainable growth for your business."
  },
  {
    id: 3,
    question: "What are your rates for copywriting services?",
    answer: "My rates depend on the scope and complexity of the project. I offer project-based pricing and retainer packages. After our initial consultation where I understand your needs, I can provide a detailed proposal and quote. For most blog posts, rates start at $400, while website copy projects typically begin at $1,200, depending on the number of pages and complexity."
  },
  {
    id: 4,
    question: "Do you offer revisions to the content you create?",
    answer: "Absolutely! I want you to be thrilled with the content. My process typically includes two rounds of revisions to ensure the copy aligns perfectly with your expectations and goals. I believe in collaborative relationships and work closely with you to make sure the final product exceeds your expectations and achieves your business objectives."
  },
  {
    id: 5,
    question: "Can you also help with content strategy and keyword research?",
    answer: "Yes! In fact, I believe that effective SEO copywriting starts with a solid strategy and thorough keyword research. These are integral parts of my service offerings. I conduct comprehensive keyword research to identify high-value opportunities, analyze your competition, and develop a strategic content plan that aligns with your business goals and audience needs."
  },
  {
    id: 6,
    question: "How do you measure the success of your SEO copywriting?",
    answer: "I track multiple metrics to measure success, including organic traffic growth, keyword rankings, click-through rates, time on page, bounce rates, and conversion rates. At the beginning of our engagement, we'll define specific KPIs based on your business goals. I provide regular reports showing the impact of the content and opportunities for further optimization."
  },
  {
    id: 7,
    question: "Do you work with businesses in specific industries?",
    answer: "While I have experience across many industries, I specialize in B2B technology, SaaS, eCommerce, health and wellness, and professional services. My approach involves thoroughly researching your industry, competitors, and target audience to ensure the content is accurate, relevant, and effective regardless of your niche."
  },
  {
    id: 8,
    question: "How do I get started working with you?",
    answer: "Getting started is easy! Simply fill out the contact form on this website or send me an email. I'll schedule a complimentary consultation call to discuss your needs, goals, and how I can help. After our call, I'll provide a customized proposal outlining the scope, timeline, and pricing for your project."
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
              Have questions about my SEO copywriting services? Here are answers to some common queries. If you don't see what you're looking for, feel free to <a href="#contact" className="text-sky-600 hover:text-sky-700 hover:underline font-medium">reach out</a>.
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
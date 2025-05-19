"use client";

import { useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

// Define types for our process step data
interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  details: string;
  icon: keyof typeof icons;
}

// SVG icons for process steps
const icons = {
  discovery: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  ),
  research: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
    </svg>
  ),
  development: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  ),
  review: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
  ),
  delivery: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  )
};

const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start with a deep dive into your academic or career goals, needs, target outcomes, and current situation. Understanding your unique requirements is key.",
    details: "During this phase, we'll conduct a thorough review of your current academic standing or career trajectory, competitors, and performance. We'll identify your unique strengths and clarify your objectives to ensure our services align perfectly with your needs. This foundation enables us to develop a strategic roadmap for your success.",
    icon: "discovery"
  },
  {
    id: 2,
    step: "02",
    title: "Research & Planning",
    description: "We conduct thorough research and analysis to identify the best approach for your academic or career documents to stand out and achieve your desired outcomes.",
    details: "Using advanced academic resources and industry knowledge, we'll analyze requirements, competitive landscapes, and target audience expectations to identify high-value opportunities. This research informs a strategic plan that balances immediate requirements with long-term goals. You'll receive a detailed outline organized to guide our development process.",
    icon: "research"
  },
  {
    id: 3,
    step: "03",
    title: "Content Development",
    description: "This is where the magic happens! We craft compelling, well-researched academic or career content tailored to your voice and designed to meet your specific objectives.",
    details: "Each document is strategically structured with proper formatting, evidence-based content, and engaging arguments. We balance academic or professional best practices with compelling presentation that keeps evaluators engaged and persuaded. All content undergoes rigorous quality checks for accuracy, clarity, and alignment with your goals.",
    icon: "development"
  },
  {
    id: 4,
    step: "04",
    title: "Review & Revision",
    description: "You get to review the draft content. We welcome your feedback and will make revisions to ensure it perfectly aligns with your vision and objectives.",
    details: "Our revision process is thorough and collaborative. You'll have the opportunity to review all content before finalization, and we provide up to two rounds of revisions to ensure every detail meets your expectations. This step ensures the content not only meets academic or professional standards but also accurately represents your unique voice and goals.",
    icon: "review"
  },
  {
    id: 5,
    step: "05",
    title: "Final Delivery & Support",
    description: "Once approved, we deliver the final content, often with tips on how to best use it for maximum impact and ongoing success advice.",
    details: "The final deliverable includes submission guidelines with recommendations for formatting, presentation strategies, and optimization opportunities. We also provide suggestions for effective use and measurement to maximize your outcomes. Optional ongoing support ensures your continued success beyond the initial project.",
    icon: "delivery"
  }
];

interface AnimatedStepProps {
  children: ReactNode;
  index: number;
}

// Component to handle animation on scroll
const AnimatedStep = ({ children, index }: AnimatedStepProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 100
  });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 transform ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
};

interface StepDetailModalProps {
  step: ProcessStep;
  isOpen: boolean;
  onClose: () => void;
}

// Step detail dialog/modal component
const StepDetailModal = ({ step, isOpen, onClose }: StepDetailModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-white p-8 max-w-md rounded-xl shadow-2xl transform transition-all" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-sky-700">{step.title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-4">
            {icons[step.icon]}
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">{step.description}</p>
          <p className="text-slate-600 italic">This step is crucial for ensuring we're on the right track to creating academic or career documents that both represent your abilities and achieve your desired outcomes.</p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function MyProcess() {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (step: ProcessStep) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">
          <span className="block text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            How We&apos;ll Work Together
          </span>
          <span className="block text-2xl md:text-3xl text-sky-600 font-light">
            My Process
          </span>
        </h2>
        
        {/* Mobile Horizontal Scroll Version */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-6" style={{ minWidth: "min-content" }}>
            {processSteps.map((item, index) => (
              <div 
                key={item.id} 
                className="w-80 flex-shrink-0 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {icons[item.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-700">{item.title}</h3>
                <p className="text-slate-700 text-sm mb-3">{item.description}</p>
                <p className="text-slate-600 text-xs">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Timeline Version */}
        <div className="hidden md:block relative">
          {/* Dotted line (visual element) */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-sky-300 to-sky-500 -translate-x-1/2"></div>
          
          {processSteps.map((item, index) => (
            <AnimatedStep key={item.id} index={index}>
              <div 
                className={`mb-24 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="md:w-5/12">
                  {/* Empty div for spacing on one side */}
                </div>
                <div className="flex justify-center items-center mx-4 z-10">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                  >
                    {icons[item.icon]}
                  </div>
                </div>
                <div 
                  className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-sky-700">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">{item.description}</p>
                  <p className="text-slate-600 text-sm border-t border-slate-100 pt-3 mt-3">{item.details}</p>
                </div>
              </div>
            </AnimatedStep>
          ))}
        </div>
        
        {/* Modal for step details - keeping it in case it's needed later */}
        {selectedStep && (
          <StepDetailModal 
            step={selectedStep} 
            isOpen={isModalOpen} 
            onClose={closeModal} 
          />
        )}
      </div>
    </section>
  );
} 
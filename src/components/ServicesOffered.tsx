import Link from 'next/link';

// Icons for services
const ServiceIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  switch (name) {
    case "essay":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      );
    case "research":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      );
    case "thesis":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M16 13l-4 4-4-4"></path>
          <path d="M4 17h16"></path>
        </svg>
      );
    case "lab":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 20H7c-1 0-2-1-2-2V8h14v10c0 1-1 2-2 2h-2"></path>
          <path d="M5 8V6c0-1 1-2 2-2h10c1 0 2 1 2 2v2"></path>
          <path d="M9 14v6"></path>
          <path d="M15 14v6"></path>
          <path d="M12 20v-6"></path>
        </svg>
      );
    case "resume":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M12 11h4"></path>
          <path d="M12 16h4"></path>
          <path d="M8 11h.01"></path>
          <path d="M8 16h.01"></path>
        </svg>
      );
    case "career":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      );
    default:
      return null;
  }
};

const academicServices = [
  { 
    id: 1, 
    name: "Essay Writing", 
    description: "Well-researched, structured essays tailored to your requirements.", 
    details: "Our essay writing service covers all types including argumentative, narrative, descriptive, expository, reflective, and admission/scholarship essays.",
    experience: "Our team of expert writers has years of experience in crafting high-quality academic essays across various disciplines.",
    deliverables: ["Thoroughly researched content", "Clear thesis statement & structured arguments", "Original, plagiarism-free writing", "Proper citations in required format", "Free revisions included"],
    results: "Our essays consistently receive top grades with professors highlighting the depth of research and clarity of arguments.",
    icon: "essay" 
  },
  { 
    id: 2, 
    name: "Research Paper Writing", 
    description: "Comprehensive research papers with in-depth analysis and strong methodology.", 
    details: "We create detailed research papers including literature reviews, empirical research, analytical papers, comparative studies, and annotated bibliographies.",
    experience: "Our writers have backgrounds in various academic fields with expertise in both qualitative and quantitative research methodologies.",
    deliverables: ["Thorough literature review", "Robust methodology section", "Data analysis and interpretation", "Discussion of findings", "Academic formatting and citations"],
    results: "Research papers we've delivered have been published in academic journals and received recognition for their contribution to the field.",
    icon: "research" 
  },
  { 
    id: 3, 
    name: "Thesis & Dissertation Services", 
    description: "Complete support for your thesis or dissertation from proposal to defense.", 
    details: "Comprehensive thesis and dissertation assistance including topic selection, proposal writing, chapter-by-chapter development, data analysis, literature review, and final formatting.",
    experience: "Our specialized team includes PhD holders who understand the rigorous demands of dissertation committees across disciplines.",
    deliverables: ["Structured proposal document", "Comprehensive literature review", "Methodology development", "Data analysis (SPSS, R, STATA)", "Complete thesis with all required chapters"],
    results: "Students working with us have successfully defended their dissertations and theses, many with distinction.",
    icon: "thesis" 
  },
  { 
    id: 4, 
    name: "Resume & CV Writing", 
    description: "ATS-optimized resumes and CVs tailored to your target industry.", 
    details: "Professional resume writing and optimization including entry-level, professional, executive resumes, federal/government resumes, and ATS-optimized formats.",
    experience: "Our career specialists have helped thousands of clients land interviews at top companies across industries.",
    deliverables: ["Tailored industry-specific resume", "ATS-friendly formatting", "Achievement-focused content", "Keyword optimization", "Modern, professional design"],
    results: "Our clients report 40-60% higher interview rates after using our resume writing services.",
    icon: "resume" 
  },
  { 
    id: 5, 
    name: "Cover Letter & LinkedIn Services", 
    description: "Compelling cover letters and optimized LinkedIn profiles that get noticed.", 
    details: "Custom-tailored cover letters, LinkedIn profile creation and optimization, keyword optimization for recruiters, and professional headline & summary writing.",
    experience: "Our team includes former HR professionals and recruiters who understand what hiring managers are looking for.",
    deliverables: ["Customized cover letters", "LinkedIn profile optimization", "Keyword-rich content", "Professional summary", "Branding recommendations"],
    results: "Clients using our LinkedIn services report a 70% increase in recruiter contacts and interview opportunities.",
    icon: "career" 
  },
  { 
    id: 6, 
    name: "Lab Reports & Technical Writing", 
    description: "Precise lab reports and technical documents for science and engineering.", 
    details: "Expert lab reports for biology, chemistry, and physics, technical reports, data interpretation, and hypothesis testing documentation.",
    experience: "Our technical writers have advanced degrees in STEM fields with practical laboratory and research experience.",
    deliverables: ["Structured lab report format", "Clear methodology section", "Accurate data presentation", "Results analysis", "Scientific discussion and conclusions"],
    results: "Our lab reports have helped students improve their understanding of scientific principles while achieving excellent grades.",
    icon: "lab" 
  }
];

export default function ServicesOffered() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Our Academic & Career Services
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          Comprehensive academic and career progression services tailored to your specific needs. Each service comes with personalized attention, clear deliverables, and proven results.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col relative group"
            >
              {/* Top colored bar */}
              <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-600 w-full absolute top-0 left-0"></div>
              
              <div className="p-8 pt-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-sky-50 text-sky-600">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="text-xs font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                    {service.id % 2 === 0 ? 'Popular' : 'Core Service'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-sky-700">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                
                <div className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-5 mb-5">
                  <p>{service.details}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-slate-700">Experience</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-7">{service.experience}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-slate-700">What You Get</h4>
                  </div>
                  <ul className="text-sm text-slate-600 pl-7 space-y-1">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sky-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-semibold text-slate-700">Results</h4>
                  </div>
                  <p className="text-sm text-slate-600 pl-7">{service.results}</p>
                </div>
              </div>
              
              <div className="mt-auto border-t border-slate-100 p-6 bg-slate-50">
                <a 
                  href="/get-a-quote"
                  className="block w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white text-center font-medium rounded-lg transition-colors duration-300"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Let's discuss your specific academic or career needs to create a customized solution.
          </p>
          <a
            href="/get-a-quote"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 
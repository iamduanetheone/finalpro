import Link from 'next/link';

// Icons for services
const ServiceIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  switch (name) {
    case "blog":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      );
    case "website":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case "landing":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      );
    case "product":
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
    case "keyword":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      );
    case "audit":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M16 13l-4 4-4-4"></path>
          <path d="M4 17h16"></path>
        </svg>
      );
    default:
      return null;
  }
};

const services = [
  { 
    id: 1, 
    name: "SEO Blog & Article Writing", 
    description: "Engaging, well-researched posts optimized to rank.", 
    details: "Comprehensive content creation including topic ideation based on keyword research, creating a content calendar, writing engaging long-form articles or shorter blog posts, incorporating internal/external links, and optimizing meta descriptions.",
    experience: "7+ years of experience creating SEO-optimized blog content across industries like SaaS, finance, health, and e-commerce.",
    deliverables: ["Keyword-optimized articles (1,000-3,000 words)", "SEO title tags & meta descriptions", "Internal/external linking strategy", "Content that aligns with search intent", "2 rounds of revisions included"],
    results: "Articles I've written have consistently reached page 1 rankings, with many achieving featured snippets and position #1 spots for target keywords.",
    icon: "blog" 
  },
  { 
    id: 2, 
    name: "Website Content Creation", 
    description: "Compelling copy for core pages designed to convert.", 
    details: "Crafting persuasive copy for key website pages (Homepage, About, Services, Contact) that reflects your brand voice, addresses user pain points, and clearly guides visitors towards your conversion goals.",
    experience: "5+ years developing website copy for businesses ranging from startups to established companies looking to refresh their messaging.",
    deliverables: ["Home, About, Services & Product page copy", "Brand voice development", "Conversion-focused messaging", "SEO-optimized page content", "Content for supporting pages"],
    results: "Clients have reported 20-40% increases in conversions and significantly longer time-on-page after implementing my website copy.",
    icon: "website" 
  },
  { 
    id: 3, 
    name: "Landing Page Copy", 
    description: "High-impact copy that drives action and maximizes ROI.", 
    details: "Developing focused, benefit-driven copy for specific marketing campaigns or lead generation offers. Includes headline variations, strong calls-to-action, and recommendations for A/B testing elements.",
    experience: "Created high-converting landing pages for product launches, email campaigns, PPC ads, and lead generation across multiple industries.",
    deliverables: ["Headline and subhead options", "Benefit-focused body copy", "Compelling CTAs", "Social proof elements", "A/B testing recommendations"],
    results: "Landing pages I've written have achieved conversion rates 25-50% above industry averages, with some exceeding 10% conversion.",
    icon: "landing" 
  },
  { 
    id: 4, 
    name: "Product Descriptions", 
    description: "Persuasive, SEO-friendly descriptions that sell.", 
    details: "Writing unique, benefit-focused product descriptions that highlight key features, address customer needs, overcome objections, and are optimized for relevant search terms to improve visibility.",
    experience: "Written hundreds of product descriptions for e-commerce businesses across fashion, beauty, home goods, and technology sectors.",
    deliverables: ["Unique, SEO-optimized product descriptions", "Feature-to-benefit translations", "Consistent brand voice across products", "Keywords naturally incorporated", "Optimized for both conversions and search"],
    results: "Product descriptions I've written have helped improve product page conversion rates by 15-30% and increased organic traffic to product pages.",
    icon: "product" 
  },
  { 
    id: 5, 
    name: "Keyword Research & Strategy", 
    description: "In-depth analysis to find content opportunities.", 
    details: "Performing deep keyword analysis, competitor research, search intent mapping, identifying content gaps, and providing strategic recommendations for prioritizing content creation efforts.",
    experience: "Conducted keyword research and developed content strategies for businesses in competitive niches that have successfully expanded their organic search visibility.",
    deliverables: ["Comprehensive keyword research report", "Competitor content gap analysis", "Search intent mapping", "Content opportunity prioritization", "Implementation roadmap"],
    results: "My keyword strategies have helped clients identify untapped content opportunities, resulting in 35-70% increases in organic traffic within 6 months.",
    icon: "keyword" 
  },
  { 
    id: 6, 
    name: "Content Audits & Optimization", 
    description: "Review and improve your existing content.", 
    details: "Analyzing your current website content to identify underperforming pages, find optimization opportunities (on-page SEO, readability, CTAs), suggest content updates or refreshes, and provide an actionable improvement plan.",
    experience: "Performed in-depth content audits for websites with 50+ pages, identifying critical improvements that boosted organic visibility and engagement.",
    deliverables: ["Complete content inventory analysis", "Page-by-page optimization recommendations", "Content consolidation strategy", "Missing content opportunities", "Prioritized action plan"],
    results: "Content audits and subsequent optimization have helped clients recover lost rankings, with average traffic increases of 40-60% to previously underperforming pages.",
    icon: "audit" 
  }
];

export default function ServicesOffered() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Services I Offer
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          Expert SEO copywriting services tailored to your specific goals. Each service 
          comes with personalized attention, clear deliverables, and proven results.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
                <Link 
                  href="/get-a-quote"
                  className="block w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white text-center font-medium rounded-lg transition-colors duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Let's build a custom content plan tailored to your specific goals and budget.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Request a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
} 
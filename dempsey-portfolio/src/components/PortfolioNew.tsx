import Image from 'next/image';

// Enhanced portfolio items with more detailed information
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce SEO Overhaul",
    category: "SEO & Content Strategy",
    imageUrl: "/image1.png",
    description: "Revitalized an online store's content, leading to a 70% increase in organic traffic and a 45% boost in conversions within 6 months.",
    detailedDescription: "Complete overhaul of product descriptions, category pages, and blog content with optimized keywords and improved user engagement elements.",
    client: "Fashion & Lifestyle E-commerce Brand",
    duration: "4 months",
    metrics: [
      { label: "Organic Traffic", value: "+70%" },
      { label: "Conversion Rate", value: "+45%" },
      { label: "Keyword Rankings", value: "85+ in top 10" }
    ],
    skills: ["Keyword Research", "Content Strategy", "Technical SEO", "Product Copywriting"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-indigo-600",
    link: "/portfolio/ecommerce-seo-overhaul"
  },
  {
    id: 2,
    title: "B2B SaaS Blog Content",
    category: "Blog Writing & SEO",
    imageUrl: "/image2.png",
    description: "Developed and executed a content strategy for a SaaS company, resulting in multiple first-page rankings for key industry terms.",
    detailedDescription: "Created a comprehensive blog strategy focusing on solving customer pain points and addressing key objections in the sales process.",
    client: "Enterprise HR Software Company",
    duration: "6 months (ongoing)",
    metrics: [
      { label: "First-page Rankings", value: "22 keywords" },
      { label: "Organic Sessions", value: "+112%" },
      { label: "Lead Conversion", value: "+38%" }
    ],
    skills: ["SEO Content Writing", "Topic Research", "Industry Analysis", "CTA Optimization"],
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-600",
    link: "/portfolio/b2b-saas-blog-content"
  },
  {
    id: 3,
    title: "Local Business Website Copy",
    category: "Website Content",
    imageUrl: "/image3.png",
    description: "Crafted new website copy for a local service provider, significantly improving bounce rate and local SEO visibility.",
    detailedDescription: "Developed compelling service pages with local SEO elements, customer testimonial integration, and conversion-focused content.",
    client: "Regional Home Services Provider",
    duration: "2 months",
    metrics: [
      { label: "Bounce Rate", value: "-35%" },
      { label: "Local Visibility", value: "+65%" },
      { label: "Inquiry Conversion", value: "+52%" }
    ],
    skills: ["Local SEO", "Service Page Copywriting", "Trust Building", "Conversion Copy"],
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-600",
    link: "/portfolio/local-business-case-study"
  }
];

export default function PortfolioNew() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            My Work & Case Studies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore some of my most successful projects and the results they've achieved. Each case study demonstrates my approach to SEO copywriting and content strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col h-full border border-slate-100 group transition-all duration-300"
            >
              {/* Top colored gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}></div>
              
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                />
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10`}>
                  {item.category}
                </div>
              </div>
              
              {/* Client info */}
              <div className="px-6 pt-4 pb-2">
                <div className="flex items-center text-sm text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{item.client}</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.duration}</span>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="px-6 py-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="text-slate-500 text-sm mb-5 italic">
                  {item.detailedDescription}
                </p>
                
                {/* Key Metrics */}
                <div className="mb-5 grid grid-cols-3 gap-2">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-50 p-2 rounded-lg text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Skills Used */}
                <div className="mb-5">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Skills & Techniques</div>
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <a
                  href={item.link}
                  className={`inline-block mt-auto bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} text-white font-semibold py-2 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  style={{ marginTop: 'auto' }}
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 mb-6 text-lg">
            Want to see how I can help your business achieve similar results?
          </p>
          <a 
            href="/get-a-quote" 
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Get Started With Your Project
          </a>
        </div>
      </div>
    </section>
  );
} 
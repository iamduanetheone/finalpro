import Image from 'next/image';

// Enhanced portfolio items with more detailed information for academic and career services
export const successStories = [
  {
    id: 1,
    title: "PhD Dissertation Support",
    category: "Academic Writing",
    imageUrl: "/academic/dissertation.jpg",
    description: "Provided comprehensive dissertation support for a PhD candidate, resulting in successful defense and publication in a respected journal.",
    detailedDescription: "Assisted with research methodology, literature review, data analysis using SPSS, and final editing and formatting according to university guidelines.",
    client: "Doctoral Candidate in Psychology",
    duration: "8 months",
    metrics: [
      { label: "Dissertation Grade", value: "Distinction" },
      { label: "Journal Publication", value: "Accepted" },
      { label: "Defense Result", value: "Successful" }
    ],
    skills: ["Research Methodology", "Statistical Analysis", "Academic Editing", "Literature Review"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-indigo-600",
    link: "/success-stories/phd-dissertation"
  },
  {
    id: 2,
    title: "Executive Resume Transformation",
    category: "Career Services",
    imageUrl: "/career/resume.jpg",
    description: "Completely restructured a senior executive's resume, leading to multiple interview offers from Fortune 500 companies within weeks.",
    detailedDescription: "Revamped career narrative, quantified achievements, and implemented ATS-optimized formatting with industry-specific keywords.",
    client: "Senior Technology Executive",
    duration: "2 weeks",
    metrics: [
      { label: "Interview Rate", value: "+250%" },
      { label: "Salary Increase", value: "+35%" },
      { label: "Job Offers", value: "4 within 3 weeks" }
    ],
    skills: ["Executive Resume Writing", "ATS Optimization", "Achievement Quantification", "Personal Branding"],
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-600",
    link: "/success-stories/executive-resume"
  },
  {
    id: 3,
    title: "Research Paper Series",
    category: "Academic Research",
    imageUrl: "/academic/research.jpg",
    description: "Developed a series of research papers for a master's student, resulting in dean's list recognition and scholarship renewal.",
    detailedDescription: "Created 5 comprehensive research papers on environmental science topics, including literature reviews, methodology sections, and data interpretation.",
    client: "Master's Student in Environmental Science",
    duration: "4 months",
    metrics: [
      { label: "Average Grade", value: "A (95%)" },
      { label: "Scholarship", value: "Renewed" },
      { label: "Academic Standing", value: "Dean's List" }
    ],
    skills: ["Scientific Writing", "Research Analysis", "Environmental Science", "Academic Formatting"],
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-600",
    link: "/success-stories/research-papers"
  },
  {
    id: 4,
    title: "Career Change Package",
    category: "Career Services",
    imageUrl: "/career/career-change.jpg",
    description: "Helped a professional successfully transition from finance to tech with a comprehensive career change package.",
    detailedDescription: "Developed tailored resume, LinkedIn profile, cover letters, and interview coaching specifically designed for career transition.",
    client: "Finance Professional Transitioning to Tech",
    duration: "6 weeks",
    metrics: [
      { label: "Industry Switch", value: "Successful" },
      { label: "Interviews", value: "12 in 1 month" },
      { label: "Salary", value: "+20% from previous" }
    ],
    skills: ["Career Transition Strategy", "LinkedIn Optimization", "Interview Coaching", "Personal Branding"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-600",
    link: "/success-stories/career-change"
  },
  {
    id: 5,
    title: "Medical School Application Essays",
    category: "Academic Writing",
    imageUrl: "/academic/medical-school.jpg",
    description: "Crafted compelling personal statements and supplemental essays for a medical school applicant, resulting in multiple acceptances.",
    detailedDescription: "Developed authentic narrative, highlighted relevant experiences, and articulated motivation and vision for a career in medicine.",
    client: "Medical School Applicant",
    duration: "3 months",
    metrics: [
      { label: "Applications", value: "15 submitted" },
      { label: "Interviews", value: "10 received" },
      { label: "Acceptances", value: "4 schools" }
    ],
    skills: ["Personal Statement Writing", "Admissions Strategy", "Narrative Development", "Medical School Applications"],
    gradientFrom: "from-red-400",
    gradientTo: "to-rose-600",
    link: "/success-stories/medical-school"
  },
  {
    id: 6,
    title: "Corporate LinkedIn Revamp",
    category: "Career Services",
    imageUrl: "/career/linkedin.jpg",
    description: "Transformed the LinkedIn profiles of an entire executive team, enhancing company brand and individual professional visibility.",
    detailedDescription: "Developed consistent yet personalized profiles for 8 executives, with optimized headlines, about sections, and experience descriptions.",
    client: "Tech Startup Leadership Team",
    duration: "1 month",
    metrics: [
      { label: "Profile Views", value: "+185%" },
      { label: "Connection Requests", value: "+230%" },
      { label: "Recruiter Contacts", value: "+160%" }
    ],
    skills: ["LinkedIn Optimization", "Executive Branding", "B2B Networking", "Digital Presence"],
    gradientFrom: "from-sky-400",
    gradientTo: "to-blue-600",
    link: "/success-stories/linkedin-revamp"
  }
];

export default function PortfolioNew() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore how our academic and career services have helped students and professionals achieve their goals. Each success story demonstrates our commitment to excellence and personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col h-full border border-slate-100 group transition-all duration-300"
            >
              {/* Top colored gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}></div>
              
              {/* Image Container */}
              <div className="relative w-full h-48 bg-slate-50 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${item.gradientFrom} ${item.gradientTo}`}></div>
                
                {/* We'll replace actual images with icons and visual elements for a more professional look */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} bg-opacity-10 relative z-10`}>
                  {item.category === "Academic Writing" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {item.category === "Academic Research" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )}
                  {item.category === "Career Services" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10`}>
                  {item.category}
                </div>
              </div>
              
              {/* Client info */}
              <div className="px-6 pt-4 pb-2">
                <div className="flex items-center text-sm text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Services & Skills</div>
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
                  View Full Story
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 mb-6 text-lg">
            Ready to achieve your own academic and career success story?
          </p>
          <a 
            href="/get-a-quote" 
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
} 
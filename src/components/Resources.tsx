import Link from 'next/link'; // Or use <a> if linking to external files directly

// Data for academic and career resources
const resources = [
  {
    id: 1,
    title: "Academic Writing Style Guide",
    description: "Download this comprehensive guide to academic writing conventions, citation styles, and structure for essays, research papers, and dissertations.",
    link: "/academic-writing-guide",
    cta: "Download Guide",
    icon: "📚" // Book emoji
  },
  {
    id: 2,
    title: "Resume Optimization Checklist",
    description: "A curated list of essential elements for creating a standout resume that captures attention and effectively showcases your qualifications.",
    link: "/resume-checklist",
    cta: "Get Checklist",
    icon: "📝" // Document emoji
  },
  {
    id: 3,
    title: "Research Paper Template Pack",
    description: "Ready-to-use templates for various academic papers with proper formatting, section structure, and citation guidelines.",
    link: "/research-templates",
    cta: "Download Templates",
    icon: "📋" // Clipboard emoji
  },
  {
    id: 4,
    title: "Career Advancement Toolkit",
    description: "Essential resources for professional development including interview preparation guides, LinkedIn optimization tips, and networking strategies.",
    link: "/career-toolkit",
    cta: "Access Toolkit",
    icon: "💼" // Briefcase emoji
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Helpful Resources & Freebies
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col transform hover:-translate-y-1"
            >
              <div className="mb-5 text-4xl">{resource.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-700">{resource.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{resource.description}</p>
              <Link
                href={resource.link}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 self-start shadow-md"
              >
                {resource.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Looking for more specialized resources for your academic or career journey? 
            Contact us for customized templates, guides, and tools tailored to your specific needs.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Request Custom Resources
          </Link>
        </div>
      </div>
    </section>
  );
} 
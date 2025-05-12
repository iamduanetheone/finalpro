import Link from 'next/link'; // Or use <a> if linking to external files directly

// Dummy data for resources - replace with your actual resources
const resources = [
  {
    id: 1,
    title: "Free SEO Content Checklist for Beginners",
    description: "Download this handy checklist to ensure your content ticks all the basic SEO boxes before you hit publish.",
    link: "/seo-checklist-tool", // Link to the new checklist tool page
    cta: "Use Checklist Tool",
    icon: "📝" // Simple emoji icon
  },
  {
    id: 2,
    title: "Top 10 Tools for SEO Copywriters",
    description: "A curated list of my favorite tools for keyword research, content optimization, and tracking performance.",
    link: "/seo-tools-list", // Link to the new tools list page
    cta: "View Tools List",
    icon: "🔧" // Simple emoji icon
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Helpful Resources & Freebies
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
} 
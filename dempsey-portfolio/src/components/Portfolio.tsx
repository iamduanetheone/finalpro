import Image from 'next/image'; // Import Image component
import Link from 'next/link'; // Import Link for potential detail links

// Dummy data for portfolio items - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce SEO Overhaul",
    category: "SEO & Content Strategy",
    imageUrl: "/image1.png", // Updated to local image
    description: "Revitalized an online store's content, leading to a 70% increase in organic traffic and a 45% boost in conversions within 6 months.",
    link: "/portfolio/ecommerce-seo-overhaul" // Explicitly setting this link
  },
  {
    id: 2,
    title: "B2B SaaS Blog Content",
    category: "Blog Writing & SEO",
    imageUrl: "/image2.png", // Updated to local image
    description: "Developed and executed a content strategy for a SaaS company, resulting in multiple first-page rankings for key industry terms.",
    link: "/portfolio/b2b-saas-blog-content"
  },
  {
    id: 3,
    title: "Local Business Website Copy",
    category: "Website Content",
    imageUrl: "/image3.png", // Updated to local image
    description: "Crafted new website copy for a local service provider, significantly improving bounce rate and local SEO visibility.",
    link: "/portfolio/local-business-case-study" // Example of a real link
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          My Work & Case Studies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <a 
              key={item.id}
              href={item.link}
              className="block no-underline"
            >
              <div
                className="group bg-neutral-50 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill // Use fill to cover the container
                    className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                    {item.category}
                  </div>
                </div>
                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-sky-700 group-hover:text-sky-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <span
                    className="inline-block mt-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    View Details
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* Optional: Add a button to view more portfolio items if you have many */}
        {/* <div className="text-center mt-16">
          <Link href="/portfolio" className="... (use amber button style) ...">
            View All Projects
          </Link>
        </div> */}
      </div>
    </section>
  );
} 
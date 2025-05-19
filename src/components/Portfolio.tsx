// Dummy data for portfolio items - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce SEO Overhaul",
    category: "SEO & Content Strategy",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Project+Image+1", // Replace with actual image path or URL
    description: "Revitalized an online store's content, leading to a 70% increase in organic traffic and a 45% boost in conversions within 6 months.",
    link: "#" // Link to case study or live project
  },
  {
    id: 2,
    title: "B2B SaaS Blog Content",
    category: "Blog Writing & SEO",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Project+Image+2",
    description: "Developed and executed a content strategy for a SaaS company, resulting in multiple first-page rankings for key industry terms.",
    link: "#"
  },
  {
    id: 3,
    title: "Local Business Website Copy",
    category: "Website Content",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Project+Image+3",
    description: "Crafted new website copy for a local service provider, significantly improving bounce rate and local SEO visibility.",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Work & Case Studies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description}</p>
                {item.link && item.link !== "#" && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-300"
                  >
                    View Details
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Add a button to view more portfolio items if you have many */}
        {/* <div className="text-center mt-12">
          <a href="/portfolio" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg">
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
} 
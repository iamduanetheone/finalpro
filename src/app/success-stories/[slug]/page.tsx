import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// export const dynamic = 'force-dynamic'; // Keep this commented out for now, may not be needed after downgrade

// Import success stories data
import { successStories } from '@/components/PortfolioNew';

// Define params type
type Props = {
  params: {
    slug: string;
  };
};

// Export a function to generate static paths for all success stories
export async function generateStaticParams() {
  return successStories.map((story) => ({
    slug: story.link.split('/').pop(),
  }));
}

export default async function SuccessStoryPage({ params }: Props) {
  // Find the success story that matches the slug
  const slug = params.slug;
  // console.log("Slug:", slug); // Remove console log

  const story = successStories.find(
    (s) => s.link === `/success-stories/${slug}`
  );

  // If no story is found, return 404
  if (!story) {
    notFound();
  }


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Success Stories
            </Link>
          </div>

          {/* Category badge */}
          <div className={`inline-flex items-center rounded-full bg-gradient-to-r ${story.gradientFrom} ${story.gradientTo} text-white px-3 py-1 text-sm font-medium mb-6`}>
            {story.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl mb-6">
            {story.title}
          </h1>

          {/* Client info card */}
          <div className="bg-slate-50 rounded-xl p-6 mb-10 border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-slate-700">Client</h3>
                <div className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-slate-700">{story.client}</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700">Project Duration</h3>
                <div className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-700">{story.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-none mb-16">
            <h2 className="text-slate-800 text-2xl font-bold mb-4 mt-6">Overview</h2>
            <p className="text-slate-700 mb-6">{story.description}</p>
            
            <h2 className="text-slate-800 text-2xl font-bold mb-4 mt-6">The Challenge</h2>
            <p className="text-slate-700 mb-6">
              Our client, a {story.client}, approached us with a clear objective: {story.category === "Academic Writing" ? 
                "to produce high-quality academic content that would meet rigorous standards and achieve excellent results." :
                story.category === "Academic Research" ? 
                "to develop comprehensive research materials that would demonstrate mastery of the subject and methodology." :
                "to create compelling professional materials that would effectively position them for career advancement."
              }
            </p>
            <p className="text-slate-700 mb-6">
              {story.detailedDescription}
            </p>

            <h2 className="text-slate-800 text-2xl font-bold mb-4 mt-6">Our Approach</h2>
            <p className="text-slate-700 mb-6">
              We implemented a tailored approach that addressed the specific needs of the client:
            </p>
            <ul className="list-disc pl-6 mb-6">
              {story.skills.map((skill, index) => (
                <li key={index} className="text-slate-700 mb-2"><strong className="text-slate-800 font-semibold">{skill}</strong>: We applied specialized expertise in this area to ensure optimal results.</li>
              ))}
            </ul>
            
            <p className="text-slate-700 mb-6">
              The project was completed over a period of {story.duration}, with regular client consultation and feedback integration throughout the process.
            </p>

            <h2 className="text-slate-800 text-2xl font-bold mb-4 mt-6">Results</h2>
            <p className="text-slate-700 mb-6">
              Our collaboration yielded exceptional outcomes for the client:
            </p>
          </div>

          {/* Results metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {story.metrics.map((metric, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
                <div className={`text-3xl font-bold bg-gradient-to-r ${story.gradientFrom} ${story.gradientTo} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="text-slate-700 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Skills and expertise */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Skills & Expertise Applied</h2>
            <div className="flex flex-wrap gap-2">
              {story.skills.map((skill, index) => (
                <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-slate-50 to-sky-50 rounded-2xl p-8 mb-16 relative">
            <svg className="absolute text-sky-200 fill-current w-16 h-16 top-6 left-6 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="relative z-10">
              <p className="text-lg text-slate-700 italic mb-6">
                "The {story.category === "Academic Writing" ? "academic writing" : 
                  story.category === "Academic Research" ? "research paper" : "professional document"} 
                services provided by Academic Excellence exceeded my expectations. The {story.category === "Career Services" ? 
                  "career documents" : "academic work"} were meticulously crafted and tailored to my specific needs, 
                resulting in {story.category === "Career Services" ? 
                  "multiple interview opportunities and career advancement" : 
                  "excellent grades and academic recognition"}."
              </p>
              <div className="font-semibold text-slate-800">{story.client}</div>
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Our team of expert {story.category === "Academic Writing" || story.category === "Academic Research" ? 
                "academic writers" : "career professionals"} is ready to help you succeed. 
              Get in touch today to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-a-quote" 
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                Request a Quote
              </Link>
              <Link 
                href="/#contact" 
                className="inline-block bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-lg border border-slate-300 transition-all shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
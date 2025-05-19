import { Metadata } from 'next';
import SEOChecklistTool from '@/components/SEOChecklistTool';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Free SEO Content Checklist for Beginners - Dempsey Copywriter",
  description: "Use this interactive SEO content checklist to ensure your content is fully optimized before publishing. Track your progress with our completion score.",
  keywords: "SEO checklist, content optimization, SEO for beginners, content writing checklist",
  alternates: {
    canonical: 'https://www.dempseycopywriter.com/seo-checklist-tool',
  },
  openGraph: {
    title: "Free SEO Content Checklist Tool for Beginners",
    description: "Use this interactive SEO content checklist to ensure your content is fully optimized before publishing. Track your progress with our completion score.",
    type: "website",
    url: "https://www.dempseycopywriter.com/seo-checklist-tool",
    images: [
      {
        url: "/seo-checklist-tool.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Content Checklist Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Content Checklist Tool",
    description: "Interactive tool to optimize your content for SEO before publishing",
    images: ["/seo-checklist-tool.jpg"],
    creator: "@dempseycopy"
  }
};

export default function SEOChecklistToolPage() {
  // Tool schema data for structured data
  const toolSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SEO Content Checklist Tool",
    "description": "Interactive checklist to ensure your content is fully optimized for search engines before publishing.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Dempsey",
      "url": "https://www.dempseycopywriter.com"
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Add structured data */}
      <Script id="tool-schema" type="application/ld+json">
        {JSON.stringify(toolSchemaData)}
      </Script>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-24 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              FREE INTERACTIVE TOOL
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-sky-700">
              Ultimate SEO Content Checklist
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Ensure your content is fully optimized for search engines with this interactive checklist. 
              Track your progress and improve your content's SEO potential before publishing.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xl mr-2">📝</span>
                <span className="text-slate-700">28+ SEO checkpoints</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xl mr-2">🔄</span>
                <span className="text-slate-700">Auto-save progress</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xl mr-2">📊</span>
                <span className="text-slate-700">Get scored results</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xl mr-2">📱</span>
                <span className="text-slate-700">Share via URL</span>
              </div>
            </div>
            
            <div className="inline-block animate-bounce bg-white p-2 rounded-full shadow-lg mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* How To Use Section */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="mr-2 text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              How to Use This Tool
            </h2>
            <ol className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm mr-3 flex-shrink-0">1</span>
                <span>Check off each item as you complete it for your content</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm mr-3 flex-shrink-0">2</span>
                <span>Rate how well you've implemented each item (1-5 stars)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm mr-3 flex-shrink-0">3</span>
                <span>See your completion percentage and quality score</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm mr-3 flex-shrink-0">4</span>
                <span>Save your progress, share via URL, or export as CSV</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-indigo-700 py-6 px-8">
              <h2 className="text-2xl font-bold text-white">SEO Content Checklist</h2>
              <p className="text-sky-100 text-sm">Track your SEO content optimization progress</p>
            </div>
            <div className="p-6 md:p-8">
              <SEOChecklistTool />
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Tips Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Expert SEO Content Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Research Before You Write</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Always start with thorough keyword research and study what's already ranking. Understand search intent and what users really want to know.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Structure Matters</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Use clear headers, short paragraphs, and break up text with lists and visuals. Good structure improves readability and SEO performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">User Experience First</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Create content that genuinely helps your audience. Better user experience leads to longer time on page and better rankings.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">Track & Improve</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Use analytics to see how your content performs. Be ready to update and improve content based on performance data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none"></circle>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Professional SEO Copywriting?
            </h2>
            <p className="text-sky-100 mb-8 text-lg">
              If you'd like help creating SEO-optimized content that ranks and converts, 
              I can help you implement all these checklist items and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-sky-700 font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-sky-700"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer note */}
      <div className="text-center py-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Dempsey Copywriter | All saved data is stored locally in your browser</p>
      </div>
    </main>
  );
} 
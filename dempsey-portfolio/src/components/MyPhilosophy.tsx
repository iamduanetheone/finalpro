import Link from 'next/link';

// Icons for philosophy cards
const PhilosophyIcons = {
  datadriven: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  storytelling: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  results: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
};

export default function MyPhilosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          My SEO Copywriting Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Data-Driven */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-sky-50 text-sky-600 mb-5">
              {PhilosophyIcons.datadriven}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Data-Driven Insights</h3>
            <p className="text-slate-600 leading-relaxed">
              I don&apos;t just write; I analyze. <strong className="font-semibold">Keyword research</strong>, competitor analysis, and performance data form the backbone of every content strategy, ensuring we target the right audience with the right message.
            </p>
          </div>
          
          {/* Card 2: Storytelling */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-amber-50 text-amber-600 mb-5">
              {PhilosophyIcons.storytelling}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Storytelling that Connects</h3>
            <p className="text-slate-600 leading-relaxed">
              Beyond keywords, I focus on weaving compelling <strong className="font-semibold">storytelling</strong> that resonates with your audience, build <strong className="font-semibold">trust</strong>, and foster brand loyalty. SEO gets them there, storytelling keeps them engaged.
            </p>
          </div>
          
          {/* Card 3: Results-Oriented */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-emerald-50 text-emerald-600 mb-5">
              {PhilosophyIcons.results}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Results-Oriented Approach</h3>
            <p className="text-slate-600 leading-relaxed">
              My ultimate goal is to deliver tangible results – increased <strong className="font-semibold">organic traffic</strong>, higher search rankings, better engagement, and ultimately, more <strong className="font-semibold">conversions</strong>. Your success is my success.
            </p>
          </div>
          
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            If this aligns with what your business needs, let&apos;s talk.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            Let&apos;s Boost Your SEO
          </Link>
        </div>
        
      </div>
    </section>
  );
} 
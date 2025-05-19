import Link from 'next/link';

// Icons for philosophy cards
const PhilosophyIcons = {
  quality: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  personalized: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  integrity: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
};

export default function MyPhilosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Quality */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-sky-50 text-sky-600 mb-5">
              {PhilosophyIcons.quality}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Excellence in Quality</h3>
            <p className="text-slate-600 leading-relaxed">
              We are committed to delivering work of the highest standard. Every paper, dissertation, and resume we create undergoes <strong className="font-semibold">rigorous quality checks</strong> to ensure it meets academic requirements and professional standards.
            </p>
          </div>
          
          {/* Card 2: Personalized Approach */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-amber-50 text-amber-600 mb-5">
              {PhilosophyIcons.personalized}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Personalized Approach</h3>
            <p className="text-slate-600 leading-relaxed">
              We understand that each client has unique needs. Our team works closely with you to develop <strong className="font-semibold">tailored solutions</strong> that address your specific academic challenges or career goals, ensuring personalized attention throughout the process.
            </p>
          </div>
          
          {/* Card 3: Academic Integrity */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center border border-slate-100">
            <div className="p-4 rounded-full bg-emerald-50 text-emerald-600 mb-5">
              {PhilosophyIcons.integrity}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">Integrity & Confidentiality</h3>
            <p className="text-slate-600 leading-relaxed">
              We uphold the highest standards of <strong className="font-semibold">academic integrity</strong> and maintain strict <strong className="font-semibold">confidentiality</strong> with all client information and work. Your trust is paramount to us, and we are committed to ethical practices in all our services.
            </p>
          </div>
          
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-6">
            Ready to experience the difference our values make in your academic and career journey?
          </p>
          <a
            href="#contact"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            Start Your Success Journey Today
          </a>
        </div>
        
      </div>
    </section>
  );
} 
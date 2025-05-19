import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-2/3 lg:w-3/5 order-2 md:order-1">
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-lg border border-slate-100">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800 text-center md:text-left">
                About Our Services
              </h2>
              <div className="w-20 h-1 bg-sky-500 mb-8 mx-auto md:mx-0"></div>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  <strong className="font-semibold text-slate-800">Welcome to Academic Excellence, your trusted partner in academic and career advancement.</strong> Our mission is to provide comprehensive support services that help students achieve academic success and professionals advance their careers with expertly crafted documents and personalized guidance.
                </p>
                <h3 className="text-xl font-semibold text-sky-700 pt-2">Our Approach</h3>
                <p>
                  We believe in a personalized approach to every project, understanding that each client has unique needs and goals. Our team of experienced academic writers, researchers, and career specialists work closely with you to deliver tailored solutions that exceed expectations and help you achieve your objectives.
                </p>
                <blockquote className="p-4 my-6 border-l-4 border-sky-500 bg-sky-50 shadow-sm rounded-r-md">
                  <p className="text-lg text-slate-600 italic">
                    &ldquo;We are committed to academic integrity and professional excellence, providing high-quality services that empower our clients to reach their full potential in their academic and professional journeys.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Whether you need assistance with a complex research paper, dissertation guidance, or a professionally crafted resume that stands out to employers, our team is ready to help you succeed.
                </p>
                <p>
                  Our services are designed to support, not replace, your own work and growth. We provide the tools, expertise, and guidance you need to excel in your academic and professional endeavors.
                </p>
              </div>
              <div className="mt-10 text-center md:text-left">
                <a 
                  href="#contact"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                >
                  📚 Ready to succeed? Let's get started!
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-2/5 order-1 md:order-2 flex justify-center flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/dempsey1.png" 
                alt="Academic Excellence Team" 
                width={320}
                height={320}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
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
                A Little About Me
              </h2>
              <div className="w-20 h-1 bg-sky-500 mb-8 mx-auto md:mx-0"></div>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  <strong className="font-semibold text-slate-800">Hello! I&apos;m Dempsey, your dedicated SEO Copywriter.</strong> My mission? To transform your website into a powerful magnet for your ideal clients by crafting content that not only ranks high on search engines but also resonates deeply and drives conversions.
                </p>
                <h3 className="text-xl font-semibold text-sky-700 pt-2">My Approach</h3>
                <p>
                  For years, I&apos;ve been fascinated by the intersection of compelling storytelling and strategic SEO. I&apos;ve seen firsthand how the right words, optimized effectively, can elevate a brand from obscurity to authority. It&apos;s not just about inserting keywords; it&apos;s about understanding your audience&apos;s intent, your unique business goals, and weaving them into a narrative that captivates, educates, and persuades.
                </p>
                <blockquote className="p-4 my-6 border-l-4 border-sky-500 bg-sky-50 shadow-sm rounded-r-md">
                  <p className="text-lg text-slate-600 italic">
                    &ldquo;I believe that great SEO copywriting is a blend of art and science – the creativity to engage and the analytical insight to ensure your message reaches those who need to hear it most.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Partner with me, and let&apos;s create content that doesn&apos;t just get seen, but gets results.
                </p>
                <p>
                  When I&apos;m not immersed in the world of content strategy and search algorithms, you might find me exploring local hiking trails. This helps me bring a fresh perspective to every project!
                </p>
              </div>
              <div className="mt-10 text-center md:text-left">
                <Link 
                  href="#contact"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                >
                  👋 Ready to boost your site? Let&apos;s Chat!
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-2/5 order-1 md:order-2 flex justify-center flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/dempsey1.png" 
                alt="Dempsey - SEO Copywriter" 
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
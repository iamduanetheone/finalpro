import Hero from "@/components/Hero"; // Import the Hero component
import AboutMe from "@/components/AboutMe"; // Import the AboutMe component
import MyPhilosophy from "@/components/MyPhilosophy"; // Import MyPhilosophy
import ServicesOffered from "@/components/ServicesOffered"; // Import ServicesOffered
import PortfolioNew from "@/components/PortfolioNew"; // Import the new Portfolio component
import Testimonials from "@/components/Testimonials"; // Import Testimonials
import MyProcess from "@/components/MyProcess"; // Import MyProcess
import BlogTeaser from "@/components/BlogTeaser"; // Import BlogTeaser as a Server Component
import Resources from "@/components/Resources"; // Import Resources
import ContactMe from "@/components/ContactMe"; // Import ContactMe
import FAQ from "@/components/FAQ"; // Import FAQ
import WhySEOMatters from "@/components/WhySEOMatters"; // Import the benefits component

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe /> {/* Our team section */}
      <MyPhilosophy /> {/* Core values section */}
      <ServicesOffered /> {/* Academic and career services */}
      <PortfolioNew /> {/* Academic and career success stories */}
      <Testimonials /> {/* Client testimonials */}
      <MyProcess /> {/* How we work together */}
      <BlogTeaser /> {/* Academic and career resources */}
      <Resources /> {/* Downloadable resources */}
      <ContactMe /> {/* Contact section */}
      <FAQ /> {/* Frequently asked questions */}
      <WhySEOMatters /> {/* Benefits of our services */}
      {/* Other sections will go here later */}
    </>
  );
}

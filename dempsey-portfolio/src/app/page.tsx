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
import WhySEOMatters from "@/components/WhySEOMatters"; // Import WhySEOMatters

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe /> {/* Add the AboutMe section */}
      <MyPhilosophy /> {/* Add MyPhilosophy section */}
      <ServicesOffered /> {/* Add ServicesOffered section */}
      <PortfolioNew /> {/* Using new Portfolio component */}
      <Testimonials /> {/* Add Testimonials section */}
      <MyProcess /> {/* Add MyProcess section */}
      <BlogTeaser /> {/* Add BlogTeaser section with real blog posts */}
      <Resources /> {/* Add Resources section */}
      <ContactMe /> {/* Add ContactMe section */}
      <FAQ /> {/* Add FAQ section */}
      <WhySEOMatters /> {/* Add WhySEOMatters section */}
      {/* Other sections will go here later */}
    </>
  );
}

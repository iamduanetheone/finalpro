"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// WhatsApp Icon SVG Component (can be moved to a separate file if needed)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5 fill-current" // Smaller size for header button
  >
    <path
      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.3-8.5-96.8-24.6l-7.1-4.2-71.7 18.8 19.3-68.6-4.7-7.5c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54s54 81.1 54 130.4c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    />
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // WhatsApp configuration (should match WhatsAppButton.tsx)
  const phoneNumber = '19736927346'; // Replace with your actual WhatsApp number
  const defaultMessage = "Hello! I'm interested in your academic and career services.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Samples', href: '/samples', isPage: true },
    { name: 'Contact', href: 'contact' }
  ];

  // Function to get the correct navigation URL based on current page
  const getNavUrl = (href: string, isPage = false) => {
    // If this is a direct page URL, return it as is
    if (isPage) {
      return href;
    }
    // If we're on the homepage, use anchor links
    if (isHomePage) {
      return `#${href}`;
    }
    // If we're on another page, link back to homepage with the anchor
    return `/#${href}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent backdrop-blur-sm bg-white/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors duration-300"
            >
              <span>
                <span className="text-sky-600">Academic</span> Excellence
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavUrl(item.href, item.isPage)}
                className="px-3 py-2 relative text-slate-700 hover:text-sky-600 font-medium transition-colors duration-300 group"
              >
                <span>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </span>
              </Link>
            ))}
            {/* WhatsApp Button */}
            <Link 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 shadow-sm hover:shadow flex items-center space-x-2"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </Link>
            {/* Consultation Button */}
            <Link 
              href="/get-a-quote" 
              className="ml-2 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors duration-300 shadow-sm hover:shadow"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-sky-600 rounded-md"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 my-1.5 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavUrl(item.href, item.isPage)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            {/* WhatsApp Button - Mobile */}
            <Link 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 mt-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 text-center flex items-center justify-center space-x-2"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
              <span>WhatsApp Us</span>
            </Link>
            {/* Consultation Button - Mobile */}
            <Link 
              href="/get-a-quote" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 mt-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors duration-300 text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
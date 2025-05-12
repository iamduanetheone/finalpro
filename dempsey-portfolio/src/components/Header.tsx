"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Process', href: 'process' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' }
  ];

  // Function to get the correct navigation URL based on current page
  const getNavUrl = (href: string) => {
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
                <span className="text-sky-600">Dempsey</span> | SEO Copywriter
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavUrl(item.href)}
                className="px-3 py-2 relative text-slate-700 hover:text-sky-600 font-medium transition-colors duration-300 group"
              >
                <span>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </span>
              </Link>
            ))}
            <Link 
              href="/get-a-quote" 
              className="ml-3 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors duration-300 shadow-sm hover:shadow"
            >
              Get a Quote
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
                href={getNavUrl(item.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/get-a-quote" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 mt-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors duration-300 text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
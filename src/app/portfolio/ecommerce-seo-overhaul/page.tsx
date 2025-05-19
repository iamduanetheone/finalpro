"use client";

import React from 'react';
import CaseStudy from '@/components/CaseStudy';

export default function EcommerceSEOOverhaulPage() {
  return (
    <CaseStudy
      title="Ecommerce SEO Overhaul"
      subtitle="Increasing organic traffic by 187% and revenue by 142% for an online retailer"
      heroImage={{
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        alt: "Ecommerce analytics dashboard showing growth"
      }}
      challenge={<>
        <p>
          An established ecommerce retailer in the home goods sector was struggling with declining organic traffic and conversion rates despite having over 5,000 products and a decade of online presence.
        </p>
        <p>
          Their website had accumulated numerous technical SEO issues over the years, including:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>Duplicate content across multiple category and product pages</li>
          <li>Poor site architecture with inefficient crawl paths</li>
          <li>Slow page load times (average 6.7 seconds on mobile)</li>
          <li>Missing or poorly optimized meta tags</li>
          <li>Keyword cannibalization across major category pages</li>
          <li>Non-optimized product descriptions (many duplicated from manufacturers)</li>
        </ul>
        <p className="mt-4">
          These issues resulted in poor search visibility, high bounce rates, and declining sales from organic search channels.
        </p>
      </>}
      approach={<>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">1. Comprehensive Technical SEO Audit</h3>
            <p className="mb-2">
              I conducted a thorough technical analysis using Screaming Frog, Google Search Console, and custom crawlers to identify:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Crawlability issues and server errors</li>
              <li>Redirect chains and broken links</li>
              <li>URL structure problems</li>
              <li>XML sitemap errors</li>
              <li>Page speed bottlenecks</li>
              <li>Mobile usability issues</li>
              <li>Structured data implementation gaps</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">2. Content & On-Page SEO Evaluation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analyzed all product and category pages for content quality</li>
              <li>Identified thin content issues and duplicate product descriptions</li>
              <li>Evaluated meta title and description effectiveness</li>
              <li>Conducted keyword cannibalization analysis</li>
              <li>Assessed internal linking structure and anchor text distribution</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">3. Strategic SEO Implementation Plan</h3>
            <p className="mb-2">
              Based on the audit findings, I developed a comprehensive 12-week implementation plan with clear priorities:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Week 1-3: Technical Foundation</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Fixed critical server errors and redirect chains</li>
                  <li>Implemented proper canonical tags across duplicate content</li>
                  <li>Restructured URL hierarchy for logical product categorization</li>
                  <li>Optimized XML sitemaps and robots.txt</li>
                </ul>
              </li>
              <li>
                <strong>Week 4-7: Speed & Mobile Optimization</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Implemented image compression and lazy loading</li>
                  <li>Minimized render-blocking resources</li>
                  <li>Enabled browser caching and GZIP compression</li>
                  <li>Improved mobile responsiveness and tap target sizing</li>
                </ul>
              </li>
              <li>
                <strong>Week 8-10: Content Enhancement</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Rewritten 200+ unique product descriptions for top-selling items</li>
                  <li>Created detailed buying guides for major product categories</li>
                  <li>Developed enhanced category page content with relevant keywords</li>
                  <li>Fixed title tags and meta descriptions across the site</li>
                </ul>
              </li>
              <li>
                <strong>Week 11-12: Structured Data & Analytics</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Implemented schema markup for products, reviews, and FAQs</li>
                  <li>Set up enhanced ecommerce tracking in Google Analytics</li>
                  <li>Created custom SEO dashboard for ongoing monitoring</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </>}
      results={<>
        <div className="space-y-8">
          <p className="text-lg">
            Over the 6 months following the SEO overhaul, the client experienced significant improvements:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">+187%</div>
              <div className="font-medium">Organic Traffic</div>
              <p className="text-sm text-gray-500 mt-2">Year-over-year increase in visitors from search</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">+142%</div>
              <div className="font-medium">Organic Revenue</div>
              <p className="text-sm text-gray-500 mt-2">Increase in sales from organic search channels</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">+64%</div>
              <div className="font-medium">Conversion Rate</div>
              <p className="text-sm text-gray-500 mt-2">Improvement in organic traffic conversion rate</p>
            </div>
          </div>
          
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-bold">Additional Performance Improvements:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Page Speed:</strong> Reduced average load time from 6.7s to 2.3s on mobile</li>
              <li><strong>Keyword Rankings:</strong> 320+ new first-page rankings for valuable commercial terms</li>
              <li><strong>Crawl Efficiency:</strong> 87% reduction in crawl errors reported in Google Search Console</li>
              <li><strong>Rich Results:</strong> Gained rich snippets for products and FAQs in search results</li>
              <li><strong>User Engagement:</strong> Bounce rate decreased by 23%, average session duration increased by 40%</li>
            </ul>
          </div>
        </div>
      </>}
      testimonial={{
        quote: "The SEO overhaul transformed our online presence. Not only did we see dramatic improvements in traffic and revenue, but we now have a clean, optimized site that will continue to perform well for years to come.",
        author: "Michael Reynolds",
        position: "Ecommerce Director"
      }}
    />
  );
} 
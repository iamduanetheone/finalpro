"use client";

import React from 'react';
import CaseStudy from '@/components/CaseStudy';

export default function LocalBusinessCaseStudyPage() {
  return (
    <CaseStudy
      title="Local Business SEO Strategy"
      subtitle="Boosting leads by 94% for a regional service provider"
      heroImage={{
        url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        alt: "Local business growth chart"
      }}
      challenge={<>
        <p>
          A local HVAC company was struggling to generate leads and compete with larger regional providers. With 15 years of experience and excellent service, they were frustrated by their lack of online visibility.
        </p>
        <p>
          After analyzing their online presence, I identified several key challenges:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>Outdated website with poor mobile experience</li>
          <li>Almost no organic visibility for key service-related keywords</li>
          <li>Incomplete and inconsistent local business listings</li>
          <li>No Google Business Profile optimization</li>
          <li>Minimal online reviews (only 7 Google reviews with a 3.6 average rating)</li>
          <li>No content strategy to showcase expertise</li>
          <li>Poor tracking of lead sources and conversion metrics</li>
        </ul>
      </>}
      approach={<>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">1. Local SEO Foundation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Performed a complete audit of their Google Business Profile</li>
              <li>Implemented a NAP (Name, Address, Phone) consistency strategy across all online directories</li>
              <li>Created and optimized listings on 25+ local business directories</li>
              <li>Developed a geographically-targeted keyword strategy focusing on service areas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">2. Website Optimization</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Restructured the website architecture with clear service silos</li>
              <li>Created location-specific service pages optimized for "near me" searches</li>
              <li>Implemented schema markup for local business, services, and reviews</li>
              <li>Improved mobile responsiveness and page load speed</li>
              <li>Added clear call-to-action elements on all pages</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">3. Content Development</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed a content calendar focusing on seasonal HVAC topics</li>
              <li>Created comprehensive service pages with detailed information</li>
              <li>Published bi-weekly blog posts addressing common customer questions</li>
              <li>Produced location-specific content for each target neighborhood</li>
              <li>Created an emergency HVAC troubleshooting guide to attract urgent searches</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">4. Review Management Strategy</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Implemented an email follow-up system for collecting customer reviews</li>
              <li>Created a review response protocol for both positive and negative reviews</li>
              <li>Trained staff on properly asking customers for reviews</li>
              <li>Set up text message review requests for post-service follow-ups</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">5. Local Link Building</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secured memberships in local business associations</li>
              <li>Sponsored community events to earn local press coverage and backlinks</li>
              <li>Created relationships with complementary businesses for referrals</li>
              <li>Published guest articles in local online publications</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">6. Google Ads Integration</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed a targeted Google Ads campaign for immediate visibility</li>
              <li>Created service-specific landing pages for PPC traffic</li>
              <li>Implemented call tracking to measure ad performance</li>
              <li>Gradually shifted budget from ads to organic as SEO results improved</li>
            </ul>
          </div>
        </div>
      </>}
      results={<>
        <div className="space-y-6">
          <p className="text-lg">
            Within 6 months of implementing this strategy, the client achieved remarkable results:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">+94%</div>
              <div className="font-medium">Lead Generation</div>
              <p className="text-sm text-gray-500 mt-2">Increase in qualified service inquiries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">+138%</div>
              <div className="font-medium">Organic Traffic</div>
              <p className="text-sm text-gray-500 mt-2">Growth in website visitors from local searches</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="font-medium">Google Star Rating</div>
              <p className="text-sm text-gray-500 mt-2">Up from 3.6 with 68 new reviews</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Additional Achievements:</h3>
          
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Local Pack Visibility:</strong> Achieved local pack (map) rankings for 25+ high-value keywords including "emergency HVAC repair," "AC installation," and "furnace replacement"
            </li>
            <li>
              <strong>Conversion Rate:</strong> Website contact form submissions increased from 2.1% to 4.7%
            </li>
            <li>
              <strong>Phone Calls:</strong> 112% increase in tracked phone calls from organic search
            </li>
            <li>
              <strong>Featured Snippets:</strong> Captured 3 featured snippets for common HVAC questions
            </li>
            <li>
              <strong>Cost Per Acquisition:</strong> Reduced CPA by 42% compared to previous marketing efforts
            </li>
            <li>
              <strong>Service Area Expansion:</strong> Successfully expanded into 2 neighboring cities with dedicated landing pages and local SEO
            </li>
          </ul>
        </div>
      </>}
      testimonial={{
        quote: "The local SEO campaign transformed our business. We went from struggling to find new customers to having to hire two new technicians to handle the increased demand. The ROI has been incredible.",
        author: "James Wilson",
        position: "Owner, Wilson HVAC Services"
      }}
    />
  );
} 
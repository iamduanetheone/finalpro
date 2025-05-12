"use client";

import React from 'react';
import CaseStudy from '@/components/CaseStudy';

export default function LocalBusinessCaseStudyPage() {
  // Background Content
  const backgroundContent = (
    <div>
      <p>
        A well-established local service provider with over 15 years of operation was struggling to generate leads from their outdated website. Despite having an excellent reputation and a loyal customer base, their online presence didn't reflect their expertise or effectively communicate their value proposition.
      </p>
      <p>
        The business owner approached me after noticing declining website engagement and hearing from customers that they had difficulty finding information on their website. Additionally, they weren't ranking well for important local search terms, leading to missed opportunities with potential customers searching online.
      </p>
      <p>
        I was tasked with completely revamping their website copy to better communicate their services, highlight their unique value proposition, and improve their local SEO presence—all while maintaining the approachable, community-focused brand voice they had cultivated over the years.
      </p>
    </div>
  );

  // Challenges Content
  const challengesContent = (
    <div>
      <ol className="space-y-4">
        <li>
          <strong>Outdated Website Copy:</strong>
          <ul className="mt-2">
            <li>Generic, jargon-heavy service descriptions that failed to communicate benefits.</li>
            <li>Unfocused homepage that didn't clearly communicate what the business did or who they served.</li>
            <li>Inconsistent messaging and tone across different pages.</li>
          </ul>
        </li>
        <li>
          <strong>Poor Local SEO Presence:</strong>
          <ul className="mt-2">
            <li>Minimal use of location-based keywords throughout the site.</li>
            <li>No optimization for "near me" search terms.</li>
            <li>Lack of structured data for local business information.</li>
          </ul>
        </li>
        <li>
          <strong>Weak Value Proposition:</strong>
          <ul className="mt-2">
            <li>Unique selling points were buried in dense paragraphs of text.</li>
            <li>No clear differentiation from competitors in the area.</li>
            <li>Limited social proof despite having many satisfied customers.</li>
          </ul>
        </li>
        <li>
          <strong>High Bounce Rate:</strong>
          <ul className="mt-2">
            <li>Key information was difficult to find, leading to user frustration.</li>
            <li>Call-to-action buttons were inconsistent and often unclear.</li>
            <li>Service pages lacked detail needed for decision-making.</li>
          </ul>
        </li>
        <li>
          <strong>Disorganized Information Architecture:</strong>
          <ul className="mt-2">
            <li>Critical information was buried deep within the site.</li>
            <li>Service categories were confusing and overlapped.</li>
            <li>Contact information was not prominently displayed.</li>
          </ul>
        </li>
      </ol>
    </div>
  );

  // Approach Content
  const approachContent = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">1. Comprehensive Content Audit</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Conducted a full inventory of existing website content.</li>
          <li>Analyzed Google Analytics data to identify high-bounce and high-exit pages.</li>
          <li>Reviewed customer feedback for insights about information gaps.</li>
          <li>Assessed competitor websites to identify differentiation opportunities.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">2. Local Keyword Research</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Performed location-specific keyword research using SEMrush and Google Keyword Planner.</li>
          <li>Identified high-volume, low-competition local search terms.</li>
          <li>Created a keyword map for each service page and geographic area served.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">3. Brand Voice Development</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Conducted interviews with the business owner and staff to capture their unique personality.</li>
          <li>Created a comprehensive brand voice guide with tone parameters and language preferences.</li>
          <li>Developed messaging pillars that aligned with company values and customer needs.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">4. Strategic Content Planning</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Restructured the site architecture for intuitive navigation and clear information hierarchy.</li>
          <li>Developed a content strategy for each page with primary/secondary goals.</li>
          <li>Created a conversion path blueprint to guide visitors through the site.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">5. Copywriting & Optimization</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            Rewritten all website copy with a focus on:
            <ul className="list-circle pl-5 mt-2 space-y-1">
              <li>Clear, benefit-driven service descriptions</li>
              <li>Compelling unique selling propositions</li>
              <li>Strategic local keyword integration</li>
              <li>Scannable formatting with descriptive headers</li>
            </ul>
          </li>
          <li>Crafted a powerful homepage that immediately communicated who they serve and what problems they solve.</li>
          <li>Developed service pages with comprehensive information, pricing transparency, and clear next steps.</li>
          <li>Created an "Areas We Serve" page with location-specific content for each neighborhood.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">6. Social Proof Integration</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Added strategically placed customer testimonials relevant to each service.</li>
          <li>Created case study snippets highlighting successful customer outcomes.</li>
          <li>Incorporated trust badges, certifications, and community involvement.</li>
          <li>Developed a review generation strategy to build ongoing social proof.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">7. Conversion Optimization</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Implemented clear, consistent call-to-action buttons throughout the site.</li>
          <li>Created multiple contact points (phone, form, chat) based on user preferences.</li>
          <li>Added FAQ sections addressing common customer concerns and objections.</li>
          <li>Ensured contact information was visible on every page.</li>
        </ul>
      </div>
    </div>
  );

  // Results Content
  const resultsContent = (
    <div>
      <div className="mb-8">
        <p className="font-medium mb-4">Within 3 months of launching the new website copy, the client experienced:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-sky-600 mb-2">43%</div>
            <p className="text-slate-700">Decrease in bounce rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-sky-600 mb-2">67%</div>
            <p className="text-slate-700">Increase in contact form submissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-sky-600 mb-2">5.2x</div>
            <p className="text-slate-700">Increase in time on site</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-slate-800 mb-4">Local SEO Improvements:</h4>
        <ul className="space-y-2">
          <li>Rankings for primary local keywords improved from beyond page 3 to first page positions 1-5.</li>
          <li>Google Business Profile saw 215% increase in "Get Directions" clicks.</li>
          <li>Local pack appearances increased for 17 important search terms.</li>
          <li>Organic traffic from within a 25-mile radius increased by 94%.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-slate-800 mb-4">Business Impact:</h4>
        <ul className="space-y-2">
          <li>Lead quality improved significantly, with prospects having better understanding of services.</li>
          <li>Close rate on website-generated leads increased from 23% to 41%.</li>
          <li>Average project value from website leads increased by 28%.</li>
          <li>Time spent explaining services to prospects decreased by approximately 15 minutes per call.</li>
        </ul>
      </div>
    </div>
  );

  // Tools Content
  const toolsContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">Google Analytics</h4>
        <p className="text-slate-600">User behavior analysis and conversion tracking</p>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">SEMrush</h4>
        <p className="text-slate-600">Local keyword research and competitor analysis</p>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">Hotjar</h4>
        <p className="text-slate-600">Heatmaps and user recordings</p>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">Google Search Console</h4>
        <p className="text-slate-600">Search performance tracking</p>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">BrightLocal</h4>
        <p className="text-slate-600">Local SEO tracking and citation management</p>
      </div>
      <div className="bg-white p-4 rounded shadow-sm">
        <h4 className="font-bold text-sky-700">UsabilityHub</h4>
        <p className="text-slate-600">User testing for navigation and content clarity</p>
      </div>
    </div>
  );

  // Lessons Content
  const lessonsContent = (
    <div>
      <ul className="space-y-4">
        <li>
          <strong>Local relevance matters more than keyword density.</strong> Strategic location references that sound natural performed better than forced keyword usage.
        </li>
        <li>
          <strong>Clarity beats cleverness.</strong> Simple, clear explanations of services outperformed creative but vague messaging.
        </li>
        <li>
          <strong>Service details reduce friction.</strong> Comprehensive service information built trust and reduced the number of clarification questions.
        </li>
        <li>
          <strong>Customer language is essential.</strong> Using the exact phrases customers use to describe their problems improved engagement and conversions.
        </li>
      </ul>
    </div>
  );

  // Conclusion Content
  const conclusionContent = (
    <div>
      <p>
        This project demonstrated that effective website copywriting for local businesses isn't just about incorporating keywords—it's about creating a compelling narrative that speaks directly to local customers while clearly communicating value.
      </p>
      <p>
        By restructuring the content to prioritize user needs and adding strategic local SEO elements, we transformed an outdated website into a powerful lead generation tool that accurately reflected the quality of service the business provides to its community.
      </p>
    </div>
  );

  return (
    <CaseStudy
      title="Local Business Website Copy Revamp"
      category="Website Content"
      duration="4 Weeks"
      industry="Local Service Provider"
      backgroundContent={backgroundContent}
      challengesContent={challengesContent}
      approachContent={approachContent}
      resultsContent={resultsContent}
      toolsContent={toolsContent}
      lessonsContent={lessonsContent}
      conclusionContent={conclusionContent}
      heroImage="/images/case-studies/local-business.jpg"
    />
  );
} 
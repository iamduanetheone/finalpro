"use client";

import React from 'react';
import CaseStudy from '@/components/CaseStudy';

export default function EcommerceSeoOverhaulPage() {
  // Background Content
  const backgroundContent = (
    <div>
      <p>
        The client, an established direct-to-consumer e-commerce brand, had a high-quality product line but lacked visibility in search engines. Despite offering competitive pricing and fast shipping, their organic traffic was stagnating, and conversions were low.
      </p>
      <p>
        My role was to design and execute a <strong>holistic SEO and content strategy</strong> to boost organic traffic, enhance user experience, and increase conversions—without relying on paid ads. This required addressing both technical and content-based shortcomings while aligning SEO with the brand's sales goals.
      </p>
    </div>
  );

  // Challenges Content
  const challengesContent = (
    <div>
      <ol className="space-y-4">
        <li>
          <strong>Lack of Keyword Strategy:</strong>
          <ul className="mt-2">
            <li>The site targeted broad, competitive keywords but neglected long-tail, high-intent search terms.</li>
            <li>No keyword mapping across the product catalog or blog.</li>
          </ul>
        </li>
        <li>
          <strong>Thin & Duplicate Content:</strong>
          <ul className="mt-2">
            <li>Many product descriptions were generic, copied from manufacturers, and not optimized for search or conversions.</li>
          </ul>
        </li>
        <li>
          <strong>Underperforming Blog Content:</strong>
          <ul className="mt-2">
            <li>Blog posts lacked structure, keyword integration, and strategic purpose.</li>
            <li>Few internal links and no topical clusters.</li>
          </ul>
        </li>
        <li>
          <strong>Technical SEO Gaps:</strong>
          <ul className="mt-2">
            <li>Missing meta tags, broken links, poor URL structures, and unoptimized images slowed down the site.</li>
            <li>Mobile performance was especially weak, leading to high bounce rates.</li>
          </ul>
        </li>
        <li>
          <strong>Conversion Issues:</strong>
          <ul className="mt-2">
            <li>Calls to action were inconsistent across product pages.</li>
            <li>No clear value proposition above the fold, resulting in cart abandonment.</li>
          </ul>
        </li>
      </ol>
    </div>
  );

  // Approach Content
  const approachContent = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">1. Technical SEO Audit & Fixes</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Conducted a full crawl using Screaming Frog, Google Search Console, and PageSpeed Insights.</li>
          <li>Fixed broken links, redirected outdated URLs, and implemented lazy loading for images.</li>
          <li>Added structured data (Product, Breadcrumb, Review schema) for enhanced SERP visibility.</li>
          <li>Worked with the dev team to improve Core Web Vitals, especially <strong>Largest Contentful Paint</strong> and <strong>Cumulative Layout Shift</strong>.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">2. Keyword Research & Mapping</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Performed in-depth research using Ahrefs and SEMrush.</li>
          <li>
            Segmented keywords into:
            <ul className="list-circle pl-5 mt-2 space-y-1">
              <li><strong>Transactional keywords</strong> for product and category pages.</li>
              <li><strong>Informational keywords</strong> for blog content to drive top-of-funnel traffic.</li>
            </ul>
          </li>
          <li>Created a keyword map aligning primary, secondary, and LSI keywords across all pages.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">3. Content Optimization & Rewrite</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            Rewritten 80+ product descriptions with a focus on:
            <ul className="list-circle pl-5 mt-2 space-y-1">
              <li>Unique, benefit-driven copy</li>
              <li>Feature-to-benefit transformations</li>
              <li>Keyword density optimized without keyword stuffing</li>
            </ul>
          </li>
          <li>Introduced persuasive language and microcopy for faster decision-making.</li>
          <li>Added FAQs, use cases, and product comparisons to improve content depth and semantic relevance.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">4. Blog Content Strategy</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Developed a <strong>pillar-cluster content model</strong>, starting with 5 core topics based on buyer intent.</li>
          <li>Created SEO briefs for each article including H1-H3 structure, keyword targets, internal linking targets, and content goals.</li>
          <li>Added CTAs to convert blog readers into email subscribers or buyers.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-700 mb-3">5. Conversion Optimization</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Added trust signals (reviews, security badges, return policy) near CTAs.</li>
          <li>Improved CTA button placement and copy (e.g., "Get Yours Now" vs. "Buy").</li>
          <li>A/B tested layout and headlines across several product categories to identify best performers.</li>
        </ul>
      </div>
    </div>
  );

  // Results Content
  const resultsContent = (
    <div className="text-slate-700">
      <p className="text-lg md:text-xl text-center mb-10">
        The strategic overhaul yielded significant improvements across key performance indicators:
      </p>

      {/* Graphical Summary of Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h4 className="text-xl font-semibold text-purple-700 mb-3">Page 1 Keyword Rankings</h4>
            <div className="text-5xl font-extrabold text-purple-600 mb-4">+300%</div>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
              <div className="bg-purple-500 h-3 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">Explosive growth in visibility for target search terms (from ~15 to 60+).</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h4 className="text-xl font-semibold text-teal-700 mb-3">Time on Site (Avg)</h4>
            <div className="text-5xl font-extrabold text-teal-600 mb-4">+89%</div>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
              <div className="bg-teal-500 h-3 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">Users engaged more deeply with the improved content (1:42 to 3:15 min).</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h4 className="text-xl font-semibold text-sky-700 mb-3">Monthly Organic Traffic</h4>
            <div className="text-5xl font-extrabold text-sky-600 mb-4">+70%</div>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
              <div className="bg-sky-500 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">Significant increase in qualified visitors from search (~12k to ~20.4k).</p>
        </div>
      </div>

      {/* Detailed Table - a h4 heading could be added here if desired, e.g. "Detailed Performance Breakdown" */}
      <h4 className="text-xl font-semibold text-sky-800 mb-6 text-center md:text-left">Detailed Performance Breakdown</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-slate-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">Metric</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">Before</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">After</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-700">Monthly Organic Traffic</td>
              <td className="py-4 px-4 text-slate-600">~12,000</td>
              <td className="py-4 px-4 text-slate-600">~20,400</td>
              <td className="py-4 px-4 font-bold text-green-600">+70%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-700">Organic Conversion Rate</td>
              <td className="py-4 px-4 text-slate-600">1.8%</td>
              <td className="py-4 px-4 text-slate-600">2.6%</td>
              <td className="py-4 px-4 font-bold text-green-600">+45%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-700">Page 1 Keyword Rankings</td>
              <td className="py-4 px-4 text-slate-600">~15</td>
              <td className="py-4 px-4 text-slate-600">60+</td>
              <td className="py-4 px-4 font-bold text-green-600">+300%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-700">Average Bounce Rate</td>
              <td className="py-4 px-4 text-slate-600">65%</td>
              <td className="py-4 px-4 text-slate-600">47%</td>
              <td className="py-4 px-4 font-bold text-green-600">-28%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-700">Time on Site (Avg)</td>
              <td className="py-4 px-4 text-slate-600">1 min 42 sec</td>
              <td className="py-4 px-4 text-slate-600">3 min 15 sec</td>
              <td className="py-4 px-4 font-bold text-green-600">+89%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Tools Content
  const toolsContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        [
          { name: "Ahrefs", description: "Competitive keyword analysis and backlink monitoring" },
          { name: "Screaming Frog SEO Spider", description: "Site crawling and technical issue discovery" },
          { name: "Surfer SEO", description: "Content structure and NLP optimization" },
          { name: "Google Search Console", description: "Keyword performance tracking and indexing" },
          { name: "Google Analytics", description: "Behavior flow and conversion insights" },
          { name: "Hotjar", description: "Heatmap and scroll map insights for UX improvements" },
        ].map((tool) => (
          <div key={tool.name} className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-sky-700 text-lg mb-2">{tool.name}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>
          </div>
        ))
      }
    </div>
  );

  // Lessons Content
  const lessonsContent = (
    <div>
      <ul className="space-y-4">
        <li>
          <strong>SEO is not just about keywords—it's about intent</strong>. Aligning product pages with what users <em>actually</em> search for changed the game.
        </li>
        <li>
          <strong>Content depth matters.</strong> Google rewards pages that demonstrate topical authority and solve user problems better than competitors.
        </li>
        <li>
          <strong>Site speed is non-negotiable.</strong> Fixing mobile performance and LCP issues led to lower bounce rates and better rankings.
        </li>
        <li>
          <strong>Copy and SEO must coexist.</strong> You don't need to sacrifice conversion-focused messaging for keyword optimization—they complement each other when done right.
        </li>
      </ul>
    </div>
  );

  // Conclusion Content
  const conclusionContent = (
    <div>
      <p>
        This project is a prime example of how strategic SEO and conversion copywriting—when executed in tandem—can revitalize an underperforming e-commerce brand. It wasn't about stuffing keywords or publishing endless blog posts. It was about being intentional, data-driven, and customer-focused.
      </p>
    </div>
  );

  return (
    <CaseStudy
      title="E-commerce SEO Overhaul"
      category="SEO & Content Strategy"
      duration="6 Months"
      industry="E-commerce (Consumer Goods)"
      backgroundContent={backgroundContent}
      challengesContent={challengesContent}
      approachContent={approachContent}
      resultsContent={resultsContent}
      toolsContent={toolsContent}
      lessonsContent={lessonsContent}
      conclusionContent={conclusionContent}
      heroImage="/images/case-studies/ecommerce-seo.jpg"
    />
  );
} 
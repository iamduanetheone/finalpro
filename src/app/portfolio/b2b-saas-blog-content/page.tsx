"use client";

import React from 'react';
import CaseStudy from '@/components/CaseStudy';

export default function B2BSaaSBlogContentPage() {
  return (
    <CaseStudy
      title="B2B SaaS Blog Content Strategy"
      subtitle="Driving 215% increase in organic traffic and 38% more qualified leads"
      heroImage={{
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        alt: "Laptop with analytics dashboard showing content performance"
      }}
      challenge={<>
        <div>
          <p>
            A growing B2B SaaS company in the project management space was struggling to generate organic traffic and attract qualified leads. Despite having a robust product offering, they lacked a strategic approach to content marketing and SEO.
          </p>
          <p>
            Their existing blog consisted of sporadic posts without keyword research or strategic direction. As a result, they were missing valuable opportunities to rank for high-intent search terms relevant to their ideal customer profile.
          </p>
          <p>
            I was brought in to develop and execute a <strong>comprehensive blog content strategy</strong> that would establish the brand as a thought leader in their niche, drive organic traffic, and create a sustainable pipeline of qualified leads.
          </p>
        </div>
        
        <div>
          <ol className="space-y-4">
            <li>
              <strong>No Content Strategy:</strong>
              <ul className="mt-2">
                <li>Blog posts were published without a clear editorial calendar or strategic direction.</li>
                <li>Content topics were chosen based on internal preferences rather than SEO opportunity or audience needs.</li>
              </ul>
            </li>
            <li>
              <strong>Limited SEO Knowledge:</strong>
              <ul className="mt-2">
                <li>The marketing team lacked expertise in keyword research and on-page optimization.</li>
                <li>Existing content wasn't optimized for search intent or target keywords.</li>
              </ul>
            </li>
            <li>
              <strong>Poor Content Structure:</strong>
              <ul className="mt-2">
                <li>Blog posts lacked proper formatting, headers, and scannable elements.</li>
                <li>No consistent voice or style guide for content creation.</li>
              </ul>
            </li>
            <li>
              <strong>Insufficient Conversion Paths:</strong>
              <ul className="mt-2">
                <li>Blog posts didn't include strategic CTAs aligned with the reader's stage in the buyer's journey.</li>
                <li>No lead magnets or content upgrades to capture email addresses.</li>
              </ul>
            </li>
            <li>
              <strong>Lack of Content Promotion:</strong>
              <ul className="mt-2">
                <li>No systematic approach to promoting blog content after publication.</li>
                <li>Minimal internal linking structure between related content pieces.</li>
              </ul>
            </li>
          </ol>
        </div>
      </>}
      approach={<div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">1. Comprehensive Content Audit</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Analyzed existing blog content for SEO value, quality, and alignment with business goals.</li>
            <li>Identified underperforming content that needed to be updated or pruned.</li>
            <li>Cataloged content gaps and opportunities based on competitor analysis.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">2. Keyword Research & Content Mapping</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Conducted extensive keyword research targeting different stages of the buyer's journey.</li>
            <li>Created a content map organizing topics into thematic clusters around primary keywords.</li>
            <li>Prioritized content creation based on search volume, competition, and business value.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">3. Content Calendar Development</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Developed a 6-month editorial calendar with strategic content pillars.</li>
            <li>
              Created detailed content briefs for each planned article with:
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>Primary and secondary keywords</li>
                <li>Recommended H1-H3 structure</li>
                <li>Key points to cover and questions to answer</li>
                <li>Internal linking opportunities</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">4. Content Creation & Optimization</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Wrote in-depth, authoritative content pieces (1,500-2,500 words) for each target keyword.</li>
            <li>
              Optimized all content for both search engines and reader engagement with:
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>Compelling titles and meta descriptions</li>
                <li>Strategic keyword placement without sacrificing readability</li>
                <li>Scannable formatting with subheadings, bullet points, and visual breaks</li>
                <li>Custom graphics and data visualizations</li>
              </ul>
            </li>
            <li>Developed a consistent brand voice that blended expertise with approachability.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">5. Strategic Conversion Paths</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Designed stage-appropriate CTAs for each piece of content.</li>
            <li>Created content upgrades (templates, checklists, guides) to capture email addresses.</li>
            <li>Implemented exit-intent popups with relevant lead magnets.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-700 mb-3">6. Promotion & Distribution</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Developed a systematic content promotion workflow for each new publication.</li>
            <li>Implemented a strategic internal linking structure between related content.</li>
            <li>Established content distribution channels (newsletters, social media, industry forums).</li>
          </ul>
        </div>
      </div>}
      results={<div className="text-slate-700">
        <p className="text-lg md:text-xl text-center mb-10">
          Within <strong>6 months</strong> of implementing the new content strategy, the client saw transformative results:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h4 className="text-xl font-semibold text-sky-700 mb-3">Organic Blog Traffic</h4>
              <div className="text-5xl font-extrabold text-sky-600 mb-4">+215%</div>
              <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                <div className="bg-sky-500 h-3 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">A dramatic surge in search engine visibility and user engagement.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-center text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="text-6xl font-extrabold text-amber-500 mb-2">24</div>
            <h4 className="text-xl font-semibold text-amber-600 mb-1">New First-Page Rankings</h4>
            <p className="text-sm text-slate-500 leading-relaxed">For high-intent, competitive industry keywords.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-3">Blog-Generated Leads</h4>
              <div className="text-5xl font-extrabold text-green-600 mb-4">+38%</div>
              <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">A substantial increase in qualified prospects from content efforts.</p>
          </div>
        </div>
      </div>}
      testimonial={{
        quote: "The content strategy transformed our blog from a basic company resource into a lead-generating machine. Within a year, our blog became our second-highest source of qualified leads.",
        author: "Sarah Chen",
        position: "Head of Marketing"
      }}
    />
  );
} 
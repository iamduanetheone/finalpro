import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Essential SEO Tools for Copywriters - Dempsey Copywriter",
  description: "A comprehensive list of the best tools for keyword research, content optimization, and tracking SEO performance to improve your copywriting.",
  keywords: "SEO tools, copywriting tools, keyword research, content optimization, SEO tracking",
};

// Tool interface
interface Tool {
  name: string;
  description: string;
  features: string[];
  freeTrial: string;
  pricing: string;
  bestFor: string;
  url: string;
}

// Category interface
interface ToolCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  bgClass: string;
  borderClass: string;
  iconBgClass: string;
  iconTextClass: string;
  tools: Tool[];
}

// SEO tools organized by category
const toolCategories: ToolCategory[] = [
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    description: 'These tools help you find the right keywords to target in your content, understand search volume, and analyze keyword difficulty.',
    icon: '🔍',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-indigo-600',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    iconBgClass: 'bg-blue-100',
    iconTextClass: 'text-blue-700',
    tools: [
      {
        name: 'Ahrefs',
        description: 'Comprehensive SEO toolset with powerful keyword research features, competitive analysis, and backlink analysis.',
        features: [
          'Keyword Explorer with extensive data',
          'Content Gap analysis',
          'SERP analysis',
          'Keyword difficulty metrics'
        ],
        freeTrial: '7-day trial for $7',
        pricing: 'Plans start at $99/month',
        bestFor: 'Advanced SEO professionals and agencies',
        url: 'https://ahrefs.com/'
      },
      {
        name: 'SEMrush',
        description: 'All-in-one marketing toolkit with excellent keyword research capabilities and competitor analysis.',
        features: [
          'Keyword Magic Tool',
          'Keyword difficulty evaluation',
          'Organic traffic insights',
          'Competitor keyword analysis'
        ],
        freeTrial: 'Limited free plan available',
        pricing: 'Plans start at $119.95/month',
        bestFor: 'Digital marketers who need comprehensive data',
        url: 'https://www.semrush.com/'
      },
      {
        name: 'Ubersuggest',
        description: 'Neil Patel\'s affordable keyword research tool that provides search volume, SEO difficulty, and content ideas.',
        features: [
          'Keyword suggestions and ideas',
          'Keyword difficulty scores',
          'Content ideas generator',
          'Domain overview'
        ],
        freeTrial: 'Limited free searches per day',
        pricing: 'Plans start at $29/month or $290/year',
        bestFor: 'Beginners and small businesses with limited budgets',
        url: 'https://neilpatel.com/ubersuggest/'
      },
      {
        name: 'Moz Keyword Explorer',
        description: 'Part of Moz Pro that helps discover and prioritize the best keywords for your content.',
        features: [
          'Keyword suggestions',
          'SERP analysis',
          'Priority scoring',
          'Keyword grouping'
        ],
        freeTrial: '30-day free trial',
        pricing: 'Moz Pro plans start at $99/month',
        bestFor: 'SEO professionals who want reliable metrics',
        url: 'https://moz.com/explorer'
      },
      {
        name: 'KeywordTool.io',
        description: 'Uses Google Autocomplete to generate hundreds of relevant keyword suggestions.',
        features: [
          'Keyword suggestions from multiple search engines',
          'Questions, prepositions, and comparisons',
          'Language and location-specific results',
          'No sign-up required for basic use'
        ],
        freeTrial: 'Free basic version',
        pricing: 'Pro plans start at $69/month',
        bestFor: 'Marketers looking for alternative keyword ideas',
        url: 'https://keywordtool.io/'
      },
      {
        name: 'KWFinder',
        description: 'User-friendly keyword research tool with accurate difficulty scores and SERP analysis.',
        features: [
          'Long-tail keyword finder',
          'Accurate difficulty scoring',
          'Local keyword research',
          'SERP analysis'
        ],
        freeTrial: '10-day free trial',
        pricing: 'Plans start at $29.90/month',
        bestFor: 'SEO beginners and intermediate users',
        url: 'https://kwfinder.com/'
      }
    ]
  },
  {
    id: 'content-optimization',
    title: 'Content Optimization',
    description: 'These tools help you optimize your content for search engines, improve readability, and ensure you\'re meeting SEO best practices.',
    icon: '📝',
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-teal-600',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    iconBgClass: 'bg-emerald-100',
    iconTextClass: 'text-emerald-700',
    tools: [
      {
        name: 'Surfer SEO',
        description: 'Data-driven content optimization tool that analyzes top-ranking pages and provides real-time guidelines for content creation.',
        features: [
          'Content Editor with real-time scoring',
          'SERP Analyzer',
          'Content planner for topic clusters',
          'NLP-enhanced guidelines'
        ],
        freeTrial: 'No free trial, but offers a 7-day money-back guarantee',
        pricing: 'Plans start at $59/month',
        bestFor: 'Content creators who want to rank higher with optimized content',
        url: 'https://surferseo.com/'
      },
      {
        name: 'Clearscope',
        description: 'AI-powered content optimization platform that helps you create comprehensive content that ranks well in search engines.',
        features: [
          'Content grading based on relevance',
          'Term suggestions for topical coverage',
          'Readability metrics',
          'Content performance tracking'
        ],
        freeTrial: 'Demo available upon request',
        pricing: 'Plans start at $170/month',
        bestFor: 'Professional content teams and agencies',
        url: 'https://www.clearscope.io/'
      },
      {
        name: 'MarketMuse',
        description: 'AI content planning and optimization platform that helps you create authoritative content.',
        features: [
          'Content briefs',
          'Content scoring',
          'Topic modeling',
          'Competitive analysis'
        ],
        freeTrial: 'Free limited plan available',
        pricing: 'Custom pricing based on needs',
        bestFor: 'Enterprise content teams focused on topical authority',
        url: 'https://www.marketmuse.com/'
      },
      {
        name: 'Grammarly',
        description: 'Writing assistant that helps improve the clarity, engagement, and delivery of your content.',
        features: [
          'Grammar and spelling checks',
          'Tone adjustments',
          'Readability scoring',
          'Plagiarism detection (premium)'
        ],
        freeTrial: 'Free version available with basic features',
        pricing: 'Premium plans start at $12/month',
        bestFor: 'All writers who want to improve their content quality',
        url: 'https://www.grammarly.com/'
      },
      {
        name: 'Hemingway Editor',
        description: 'Free web and desktop app that highlights complex sentences and common errors to help you improve your writing.',
        features: [
          'Readability scoring',
          'Sentence complexity analysis',
          'Passive voice detection',
          'Adverb usage recommendations'
        ],
        freeTrial: 'Free online version',
        pricing: 'Desktop app is a one-time $19.99 purchase',
        bestFor: 'Writers looking to simplify their content and improve readability',
        url: 'https://hemingwayapp.com/'
      },
      {
        name: 'Frase',
        description: 'AI-powered content optimization and research tool to help create high-ranking content.',
        features: [
          'Content briefs',
          'AI writing assistant',
          'SERP analysis',
          'Question research'
        ],
        freeTrial: '7-day free trial',
        pricing: 'Plans start at $44.99/month',
        bestFor: 'Content creators who need research and optimization in one tool',
        url: 'https://www.frase.io/'
      }
    ]
  },
  {
    id: 'performance-tracking',
    title: 'Performance Tracking & Analytics',
    description: 'These tools help you track your content\'s performance, monitor rankings, and measure the impact of your SEO efforts.',
    icon: '📊',
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-purple-600',
    bgClass: 'bg-violet-50',
    borderClass: 'border-violet-200',
    iconBgClass: 'bg-violet-100',
    iconTextClass: 'text-violet-700',
    tools: [
      {
        name: 'Google Search Console',
        description: 'Free Google tool that helps you monitor, maintain, and troubleshoot your site\'s presence in Google search results.',
        features: [
          'Search performance monitoring',
          'Index coverage issues',
          'Core Web Vitals insights',
          'Rich results status'
        ],
        freeTrial: 'Completely free',
        pricing: 'Free',
        bestFor: 'Everyone with a website, essential for SEO monitoring',
        url: 'https://search.google.com/search-console'
      },
      {
        name: 'Google Analytics',
        description: 'Free analytics service that tracks and reports website traffic, user behavior, and conversion data.',
        features: [
          'Traffic source analysis',
          'User behavior tracking',
          'Conversion tracking',
          'Content performance metrics'
        ],
        freeTrial: 'Completely free',
        pricing: 'Free (GA4), Enterprise solutions available',
        bestFor: 'All website owners who want to understand user behavior',
        url: 'https://analytics.google.com/'
      },
      {
        name: 'Databox',
        description: 'Business analytics platform that pulls all your data into one place for easier tracking and reporting.',
        features: [
          'Custom dashboards',
          'Integrations with 70+ tools',
          'Automated reporting',
          'Goal tracking'
        ],
        freeTrial: 'Free plan available with limitations',
        pricing: 'Paid plans start at $59/month',
        bestFor: 'Marketers who need consolidated data from multiple sources',
        url: 'https://databox.com/'
      },
      {
        name: 'Rank Tracker by SEO PowerSuite',
        description: 'Desktop software that allows you to track rankings across different search engines, devices, and locations.',
        features: [
          'Unlimited keyword tracking',
          'Local and mobile rank tracking',
          'Competitor rank tracking',
          'Ranking progress reports'
        ],
        freeTrial: 'Free version with limited features',
        pricing: 'Professional license starts at $299 (one-time)',
        bestFor: 'SEO professionals who need comprehensive rank tracking',
        url: 'https://www.link-assistant.com/rank-tracker/'
      },
      {
        name: 'Accuranker',
        description: 'Cloud-based rank tracking tool known for its accuracy and refresh speed.',
        features: [
          'Daily rank updates',
          'On-demand rankings refresh',
          'Share of voice metrics',
          'Advanced competitor tracking'
        ],
        freeTrial: '14-day free trial',
        pricing: 'Plans start at $99/month',
        bestFor: 'Agencies and businesses needing frequent rank updates',
        url: 'https://www.accuranker.com/'
      },
      {
        name: 'Hotjar',
        description: 'Behavior analytics and user feedback tool that helps you understand how users interact with your content.',
        features: [
          'Heatmaps',
          'Visitor recordings',
          'Conversion funnels',
          'Feedback polls and surveys'
        ],
        freeTrial: 'Free basic plan',
        pricing: 'Plus plans start at $32/month',
        bestFor: 'Understanding user engagement with your content',
        url: 'https://www.hotjar.com/'
      }
    ]
  },
  {
    id: 'research-tools',
    title: 'Research & Productivity',
    description: 'These tools help you conduct research, organize your work, and improve your productivity as an SEO copywriter.',
    icon: '🔎',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-200',
    iconBgClass: 'bg-amber-100',
    iconTextClass: 'text-amber-700',
    tools: [
      {
        name: 'AnswerThePublic',
        description: 'Visual keyword research tool that shows questions, prepositions, and comparisons related to your search terms.',
        features: [
          'Question-based keyword suggestions',
          'Visual data representations',
          'Export options for results',
          'Comparison terms identification'
        ],
        freeTrial: 'Limited free searches per day',
        pricing: 'Pro plans start at $99/month',
        bestFor: 'Content planners looking for question-focused content ideas',
        url: 'https://answerthepublic.com/'
      },
      {
        name: 'BuzzSumo',
        description: 'Content research tool that discovers the most-shared content and influential publishers in your niche.',
        features: [
          'Content performance analysis',
          'Influencer identification',
          'Content trends monitoring',
          'Backlink analysis'
        ],
        freeTrial: 'Limited free searches',
        pricing: 'Plans start at $99/month',
        bestFor: 'Content marketers looking for trending topics and influencers',
        url: 'https://buzzsumo.com/'
      },
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, project management, documents, and collaboration.',
        features: [
          'Customizable workspace',
          'Content calendar templates',
          'Project management',
          'Collaboration features'
        ],
        freeTrial: 'Free personal plan available',
        pricing: 'Personal Pro starts at $4/month, Team plan at $8/user/month',
        bestFor: 'Writers and teams who need to organize content production',
        url: 'https://www.notion.so/'
      },
      {
        name: 'Trello',
        description: 'Visual project management tool that uses boards, lists, and cards to organize workflow.',
        features: [
          'Kanban boards',
          'Task management',
          'Deadline tracking',
          'Team collaboration'
        ],
        freeTrial: 'Free plan available',
        pricing: 'Standard plan starts at $5/user/month',
        bestFor: 'Visual content planning and editorial calendars',
        url: 'https://trello.com/'
      },
      {
        name: 'Evernote',
        description: 'Note-taking app that helps capture, organize, and share ideas across devices.',
        features: [
          'Web clipper',
          'Note organization',
          'Document scanning',
          'Cross-device syncing'
        ],
        freeTrial: 'Free basic plan',
        pricing: 'Personal plan starts at $7.99/month',
        bestFor: 'Research collection and note organization',
        url: 'https://evernote.com/'
      },
      {
        name: 'Google Trends',
        description: 'Free tool that explores search interest for terms over time and by region.',
        features: [
          'Search trend analysis',
          'Regional interest comparison',
          'Related topics and queries',
          'Seasonal trend identification'
        ],
        freeTrial: 'Completely free',
        pricing: 'Free',
        bestFor: 'Identifying trending topics and seasonal interest patterns',
        url: 'https://trends.google.com/'
      }
    ]
  },
  {
    id: 'ai-writing-tools',
    title: 'AI Writing Assistants',
    description: 'These AI-powered tools help streamline content creation, generate ideas, and enhance your writing efficiency.',
    icon: '🤖',
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-pink-600',
    bgClass: 'bg-rose-50',
    borderClass: 'border-rose-200',
    iconBgClass: 'bg-rose-100',
    iconTextClass: 'text-rose-700',
    tools: [
      {
        name: 'ChatGPT',
        description: 'Conversational AI that can help with drafting content, generating ideas, and answering research questions.',
        features: [
          'Content ideation',
          'Drafting assistance',
          'Question answering',
          'Summarization capabilities'
        ],
        freeTrial: 'Free plan available',
        pricing: 'Plus plan at $20/month',
        bestFor: 'Writers who need versatile AI assistance and brainstorming help',
        url: 'https://chat.openai.com/'
      },
      {
        name: 'Jasper AI',
        description: 'AI writing assistant designed specifically for marketing copy and content creation.',
        features: [
          'SEO-friendly content generation',
          'Template library for various content types',
          'Brand voice customization',
          'Integration with SurferSEO'
        ],
        freeTrial: '7-day free trial',
        pricing: 'Plans start at $39/month',
        bestFor: 'Marketing teams and content creators who need polished AI content',
        url: 'https://www.jasper.ai/'
      },
      {
        name: 'Copy.ai',
        description: 'AI copywriting tool that generates marketing copy for various formats and purposes.',
        features: [
          'Blog post generation',
          'Social media content',
          'Email templates',
          'Product descriptions'
        ],
        freeTrial: 'Free plan with limited words',
        pricing: 'Pro plan starts at $36/month',
        bestFor: 'Marketers who need quick copy generation for multiple formats',
        url: 'https://www.copy.ai/'
      },
      {
        name: 'Wordtune',
        description: 'AI writing companion that helps rephrase and improve your sentences and paragraphs.',
        features: [
          'Sentence rewriting',
          'Tone adjustments',
          'Length control',
          'Word choice suggestions'
        ],
        freeTrial: 'Free plan with limited rewrites',
        pricing: 'Premium plans start at $9.99/month',
        bestFor: 'Writers who want to refine existing content rather than generate from scratch',
        url: 'https://www.wordtune.com/'
      },
      {
        name: 'Rytr',
        description: 'Affordable AI writing assistant for blog posts, emails, ads, and social media content.',
        features: [
          'Multiple use cases',
          'Various language and tone options',
          'SEO analyzer integration',
          'Plagiarism checker'
        ],
        freeTrial: 'Free plan with limited characters',
        pricing: 'Unlimited plan at $29/month',
        bestFor: 'Budget-conscious writers and small businesses',
        url: 'https://rytr.me/'
      }
    ]
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO Tools',
    description: 'These tools help identify and fix technical issues that could impact your site\'s search performance and content visibility.',
    icon: '⚙️',
    gradientFrom: 'from-sky-400',
    gradientTo: 'to-cyan-600',
    bgClass: 'bg-sky-50',
    borderClass: 'border-sky-200',
    iconBgClass: 'bg-sky-100',
    iconTextClass: 'text-sky-700',
    tools: [
      {
        name: 'Screaming Frog SEO Spider',
        description: 'Website crawler that helps you improve onsite SEO by extracting data and identifying issues.',
        features: [
          'Site auditing',
          'Broken link checking',
          'Redirect analysis',
          'Metadata evaluation'
        ],
        freeTrial: 'Free version for up to 500 URLs',
        pricing: 'Paid license is £149/year',
        bestFor: 'SEO professionals performing technical audits',
        url: 'https://www.screamingfrog.co.uk/seo-spider/'
      },
      {
        name: 'GTmetrix',
        description: 'Performance monitoring tool that tests how well your pages load and provides actionable recommendations.',
        features: [
          'Page speed analysis',
          'Core Web Vitals reports',
          'Performance monitoring',
          'Optimization recommendations'
        ],
        freeTrial: 'Free basic testing',
        pricing: 'Pro plans start at $99/month',
        bestFor: 'Optimizing page loading speed for better user experience and SEO',
        url: 'https://gtmetrix.com/'
      },
      {
        name: 'Sitebulb',
        description: 'Website crawler and auditing tool with visual reports and actionable insights.',
        features: [
          'Technical SEO audits',
          'Content audits',
          'Internal link analysis',
          'Visual data presentation'
        ],
        freeTrial: '14-day free trial',
        pricing: 'Plans start at $13.75/month',
        bestFor: 'Technical SEO audits with visual reporting',
        url: 'https://sitebulb.com/'
      },
      {
        name: 'PageSpeed Insights',
        description: 'Google tool that measures the performance of a page on both mobile and desktop devices.',
        features: [
          'Core Web Vitals measurement',
          'Performance scoring',
          'Mobile and desktop analysis',
          'Optimization suggestions'
        ],
        freeTrial: 'Completely free',
        pricing: 'Free',
        bestFor: 'Quick page performance checks and improvement recommendations',
        url: 'https://pagespeed.web.dev/'
      }
    ]
  }
];

export default function SEOToolsListPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Essential Tools for SEO Copywriters
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            A comprehensive collection of my favorite tools for keyword research, content optimization, and tracking performance to help you create more effective SEO content.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {toolCategories.map(category => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className={`px-4 py-2 ${category.bgClass} rounded-full shadow-sm border ${category.borderClass} ${category.iconTextClass} hover:shadow-md transition-all duration-300`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </a>
            ))}
          </div>
        </div>

        {/* Tool Categories */}
        <div className="space-y-16 mb-16">
          {toolCategories.map(category => (
            <section 
              key={category.id}
              id={category.id}
              className="scroll-mt-24"
            >
              <div className="mb-8">
                <div className={`inline-flex items-center ${category.bgClass} ${category.iconTextClass} px-4 py-2 rounded-full mb-4`}>
                  <span className="mr-2 text-2xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>
                <p className="text-slate-600 max-w-4xl mt-3">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, index) => (
                  <div 
                    key={tool.name}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group relative"
                  >
                    {/* Top accent bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo}`}></div>
                    
                    <div className="p-6 flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-xl font-bold text-slate-800 group-hover:${category.iconTextClass} transition-colors`}>
                          {tool.name}
                        </h3>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${category.iconBgClass} ${category.iconTextClass}`}>
                          <span className="text-xl">{category.icon}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-5 text-sm leading-relaxed">{tool.description}</p>
                      
                      <div className="mb-5">
                        <h4 className={`text-sm font-semibold text-slate-700 mb-2 flex items-center ${category.iconTextClass}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Key Features
                        </h4>
                        <ul className="text-sm text-slate-600 space-y-1.5 pl-5 list-none">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${category.iconTextClass} mr-2 mt-0.5 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className={`${category.bgClass} p-3 rounded-lg`}>
                          <span className="block text-slate-500 text-xs uppercase tracking-wide mb-1">Free Trial</span>
                          <span className="font-medium text-slate-700">{tool.freeTrial}</span>
                        </div>
                        <div className={`${category.bgClass} p-3 rounded-lg`}>
                          <span className="block text-slate-500 text-xs uppercase tracking-wide mb-1">Pricing</span>
                          <span className="font-medium text-slate-700">{tool.pricing}</span>
                        </div>
                      </div>
                      
                      <div className={`text-sm ${category.bgClass} p-3 rounded-lg border-l-2 ${category.borderClass}`}>
                        <span className="block text-slate-500 text-xs uppercase tracking-wide mb-1">Best For</span>
                        <span className="font-medium text-slate-700">{tool.bestFor}</span>
                      </div>
                    </div>
                    
                    <div className="px-6 py-4 bg-gradient-to-r from-white to-white border-t border-slate-100">
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${category.iconTextClass} hover:underline font-medium text-sm flex items-center transition-all duration-300 group-hover:translate-x-1`}
                      >
                        Visit Website
                        <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sky-100 to-indigo-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Need help with your SEO content strategy?
            </h2>
            <p className="text-slate-600 mb-6">
              I can help you implement these tools effectively and create an SEO content strategy that drives real results for your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 
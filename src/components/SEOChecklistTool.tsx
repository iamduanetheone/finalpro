'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'technical' | 'content' | 'onpage' | 'offpage';
}

const SEOChecklistTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const checklistItems: ChecklistItem[] = [
    {
      id: 'meta-title',
      title: 'Meta Title',
      description: 'Ensure your page has a unique, descriptive title tag under 60 characters.',
      category: 'onpage'
    },
    {
      id: 'meta-description',
      title: 'Meta Description',
      description: 'Create a compelling meta description under 160 characters that includes your target keyword.',
      category: 'onpage'
    },
    {
      id: 'h1-tag',
      title: 'H1 Tag',
      description: 'Include one H1 tag on the page that contains your primary keyword.',
      category: 'onpage'
    },
    {
      id: 'keyword-placement',
      title: 'Keyword Placement',
      description: 'Use your target keyword in the first 100 words of content.',
      category: 'content'
    },
    {
      id: 'image-alt-text',
      title: 'Image Alt Text',
      description: 'Add descriptive alt text to all images that includes relevant keywords when appropriate.',
      category: 'onpage'
    },
    {
      id: 'mobile-friendly',
      title: 'Mobile Friendly',
      description: 'Ensure your page is responsive and works well on mobile devices.',
      category: 'technical'
    },
    {
      id: 'page-speed',
      title: 'Page Speed',
      description: 'Optimize page load time to under 3 seconds.',
      category: 'technical'
    },
    {
      id: 'internal-links',
      title: 'Internal Links',
      description: 'Include relevant internal links to other pages on your site.',
      category: 'onpage'
    },
    {
      id: 'external-links',
      title: 'External Links',
      description: 'Link to high-authority external sources when relevant.',
      category: 'offpage'
    },
    {
      id: 'schema-markup',
      title: 'Schema Markup',
      description: 'Implement appropriate schema markup for your content type.',
      category: 'technical'
    }
  ];

  const getProgress = (category?: string) => {
    const items = category 
      ? checklistItems.filter(item => item.category === category)
      : checklistItems;
    
    const checked = items.filter(item => checkedItems[item.id]).length;
    return (checked / items.length) * 100;
  };
  
  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const onSubmit = (data: any) => {
    setUrl(data.url);
    setSubmitted(true);
  };
  
  const categories = [
    { id: 'technical', label: 'Technical SEO' },
    { id: 'content', label: 'Content' },
    { id: 'onpage', label: 'On-Page SEO' },
    { id: 'offpage', label: 'Off-Page SEO' }
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">SEO Checklist Tool</h1>
        <p className="text-xl text-gray-600">
          Evaluate your website's SEO health with this comprehensive checklist
        </p>
      </motion.div>
      
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                id="url"
                type="url"
                placeholder="https://example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('url', { 
                  required: 'URL is required',
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: 'Please enter a valid URL'
                  }
                })}
              />
              {errors.url && (
                <p className="mt-1 text-sm text-red-600">{errors.url.message as string}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Check Your SEO
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your SEO Checklist for {url}</h2>
              <div className="flex items-center">
                <div className="h-4 w-24 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${getProgress()}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium">
                  {Math.round(getProgress())}% Complete
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map(category => (
                <div key={category.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold">{category.label}</h3>
                    <div className="flex items-center">
                      <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${getProgress(category.id)}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs">
                        {Math.round(getProgress(category.id))}%
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {checklistItems
                      .filter(item => item.category === category.id)
                      .map(item => (
                        <li 
                          key={item.id}
                          className={`p-2 rounded cursor-pointer transition duration-200 ${
                            checkedItems[item.id] ? 'bg-green-100' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className="flex items-start gap-2">
                            <input
                              type="checkbox"
                              id={item.id}
                              checked={!!checkedItems[item.id]}
                              onChange={() => {}}
                              className="mt-1"
                            />
                            <div>
                              <label 
                                htmlFor={item.id}
                                className={`font-medium cursor-pointer ${
                                  checkedItems[item.id] ? 'line-through text-green-700' : ''
                                }`}
                              >
                                {item.title}
                              </label>
                              <p className={`text-sm mt-1 ${
                                checkedItems[item.id] ? 'text-green-600' : 'text-gray-600'
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Check Another URL
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SEOChecklistTool; 
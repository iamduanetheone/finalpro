"use client";

import { useState, useEffect } from 'react';

// Define checklist item type
interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  rating: number; // 0-5 rating scale
}

// Define checklist section type
interface ChecklistSection {
  id: string;
  title: string;
  emoji: string;
  items: ChecklistItem[];
}

// Update the type for shared item
interface SharedItem {
  id: string;
  checked: boolean;
  rating: number;
}

// Update the type for shared section
interface SharedSection {
  id: string;
  items: SharedItem[];
}

// Initial checklist data
const initialSections: ChecklistSection[] = [
  {
    id: 'pre-writing',
    title: 'Pre-Writing Stage',
    emoji: '📝',
    items: [
      { id: 'pre-1', text: 'Target Keyword Identified (Primary + Secondary)', checked: false, rating: 0 },
      { id: 'pre-2', text: 'Search Intent Understood (Informational, Transactional, Navigational)', checked: false, rating: 0 },
      { id: 'pre-3', text: 'Competitor Pages Analyzed', checked: false, rating: 0 },
      { id: 'pre-4', text: 'Content Angle Chosen (e.g., unique approach or value-add)', checked: false, rating: 0 },
      { id: 'pre-5', text: 'Content Outline Created (with H1, H2s, H3s)', checked: false, rating: 0 },
    ],
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    emoji: '✍️',
    items: [
      { id: 'writing-1', text: 'Keyword in Title (H1)', checked: false, rating: 0 },
      { id: 'writing-2', text: 'Keyword in First 100 Words', checked: false, rating: 0 },
      { id: 'writing-3', text: 'Keyword Density is Natural (0.5–2%)', checked: false, rating: 0 },
      { id: 'writing-4', text: 'Synonyms & LSI Keywords Used', checked: false, rating: 0 },
      { id: 'writing-5', text: 'H2s & H3s Used for Structure', checked: false, rating: 0 },
      { id: 'writing-6', text: 'Short Paragraphs & Sentences', checked: false, rating: 0 },
      { id: 'writing-7', text: 'Bullet Points / Numbered Lists', checked: false, rating: 0 },
      { id: 'writing-8', text: 'Engaging Introduction and CTA', checked: false, rating: 0 },
      { id: 'writing-9', text: 'Internal Links Added (to your own site)', checked: false, rating: 0 },
      { id: 'writing-10', text: 'External Links Added (to high-authority sources)', checked: false, rating: 0 },
      { id: 'writing-11', text: 'No Duplicate Content', checked: false, rating: 0 },
    ],
  },
  {
    id: 'content-quality',
    title: 'Content Quality',
    emoji: '🧠',
    items: [
      { id: 'quality-1', text: 'Answer Common User Questions', checked: false, rating: 0 },
      { id: 'quality-2', text: 'Covers Topic Comprehensively', checked: false, rating: 0 },
      { id: 'quality-3', text: 'Factually Accurate & Well-Researched', checked: false, rating: 0 },
      { id: 'quality-4', text: 'Original, Not AI-only / Copied', checked: false, rating: 0 },
      { id: 'quality-5', text: 'Grammar & Spelling Checked', checked: false, rating: 0 },
    ],
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    emoji: '🔍',
    items: [
      { id: 'onpage-1', text: 'SEO Title (60 characters max, includes keyword)', checked: false, rating: 0 },
      { id: 'onpage-2', text: 'Meta Description (155 characters max, includes keyword)', checked: false, rating: 0 },
      { id: 'onpage-3', text: 'Slug is Clean & Includes Keyword (e.g., /seo-checklist)', checked: false, rating: 0 },
      { id: 'onpage-4', text: 'Image Alt Text Includes Keyword', checked: false, rating: 0 },
      { id: 'onpage-5', text: 'Optimized Images (compressed and sized properly)', checked: false, rating: 0 },
      { id: 'onpage-6', text: 'Use of Schema Markup (if applicable)', checked: false, rating: 0 },
      { id: 'onpage-7', text: 'Canonical URL Set (if needed)', checked: false, rating: 0 },
    ],
  },
];

export default function SEOChecklistTool() {
  // Initialize checklist sections with stored data or default
  const [sections, setSections] = useState<ChecklistSection[]>(initialSections);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [qualityScore, setQualityScore] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  
  // Load saved data from localStorage on component mount
  useEffect(() => {
    const loadSavedChecklist = () => {
      if (typeof window !== 'undefined') {
        // Check for URL parameter first
        if (window.location.hash) {
          try {
            const encodedData = window.location.hash.substring(1); // Remove the # character
            const decodedData = decodeURIComponent(encodedData);
            const parsedData = JSON.parse(atob(decodedData));
            
            // Handle both old and new format of shared data
            if (Array.isArray(parsedData) && parsedData.length > 0) {
              if (parsedData[0].items && parsedData[0].items[0].hasOwnProperty('rating')) {
                // New format with ratings
                const updatedSections = [...initialSections].map(section => {
                  const sharedSection = parsedData.find((s: SharedSection) => s.id === section.id);
                  if (sharedSection) {
                    return {
                      ...section,
                      items: section.items.map(item => {
                        const sharedItem = sharedSection.items.find((i: SharedItem) => i.id === item.id);
                        if (sharedItem) {
                          return {
                            ...item,
                            checked: sharedItem.checked,
                            rating: sharedItem.rating || 0
                          };
                        }
                        return item;
                      })
                    };
                  }
                  return section;
                });
                setSections(updatedSections);
              } else {
                // Old format without ratings, just checked state
                setSections(parsedData);
              }
            } else {
              // Older format or invalid data
              setSections(parsedData);
            }
            return; // Skip loading from localStorage if URL data exists
          } catch (error) {
            console.error('Failed to parse checklist data from URL', error);
          }
        }

        // Fall back to localStorage
        const savedData = localStorage.getItem('seoChecklist');
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData);
            setSections(parsedData);
          } catch (error) {
            console.error('Failed to parse saved checklist data', error);
          }
        }
      }
    };
    
    loadSavedChecklist();
  }, []);
  
  // Calculate total score whenever sections change
  useEffect(() => {
    const totalItems = sections.reduce((total, section) => total + section.items.length, 0);
    const checkedItems = sections.reduce(
      (total, section) => total + section.items.filter(item => item.checked).length,
      0
    );
    
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    setCompletionPercentage(percentage);
    
    // Calculate quality score (average rating of all rated items)
    const ratedItems = sections.reduce(
      (total, section) => total + section.items.filter(item => item.rating > 0).length,
      0
    );
    
    const totalRating = sections.reduce(
      (total, section) => total + section.items.reduce((sum, item) => sum + item.rating, 0),
      0
    );
    
    const avgRating = ratedItems > 0 ? Math.round((totalRating / ratedItems) * 20) : 0; // Convert 0-5 scale to percentage
    setQualityScore(avgRating);
    
    // Save to localStorage whenever sections change (after initial load)
    const saveToLocalStorage = () => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('seoChecklist', JSON.stringify(sections));
        showSavingIndicator();
      }
    };
    
    saveToLocalStorage();
  }, [sections]);
  
  // Show saving indicator briefly
  const showSavingIndicator = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  // Debug checked state and ensure proper section updates
  useEffect(() => {
    // Log state when debugging
    console.log('Current sections state:', sections);
  }, [sections]);

  // Enhanced checkbox change handler to ensure consistent behavior
  const handleCheckboxChange = (sectionId: string, itemId: string) => {
    setSections(prevSections => {
      const updatedSections = prevSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map(item => {
              if (item.id === itemId) {
                // Toggle the checked state
                const newChecked = !item.checked;
                // Reset rating if unchecking
                const newRating = newChecked ? item.rating : 0;
                return { ...item, checked: newChecked, rating: newRating };
              }
              return item;
            }),
          };
        }
        return section;
      });
      return updatedSections;
    });
  };

  // Handle reset all checkboxes - updated to use custom modal
  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setSections(initialSections);
    setShowResetModal(false);
  };

  // Determine score color
  const getScoreColor = () => {
    if (completionPercentage < 50) return 'text-red-500';
    if (completionPercentage < 80) return 'text-amber-500';
    return 'text-green-500';
  };

  // Get status message based on percentage
  const getStatusMessage = () => {
    if (completionPercentage < 50) return 'Needs work! Keep going.';
    if (completionPercentage < 80) return 'Good progress! Almost there.';
    if (completionPercentage < 100) return 'Very good! Just a few more items.';
    return 'Perfect! Your content is fully optimized.';
  };

  // Animated progress circle
  const CircleProgress = ({ percentage }: { percentage: number }) => {
    // Set the custom property value for the progress circle
    useEffect(() => {
      const progressPath = document.querySelector('.progress-circle-path');
      if (progressPath) {
        (progressPath as HTMLElement).style.setProperty('--progress', `${percentage}`);
      }
    }, [percentage]);

    return (
      <div className="relative w-32 h-32">
        <svg className="progress-circle w-full h-full" viewBox="0 0 100 100">
          <circle className="progress-circle-bg" cx="50" cy="50" r="46" />
          <circle 
            className="progress-circle-path" 
            cx="50" 
            cy="50" 
            r="46" 
            stroke={
              percentage < 50 ? '#EF4444' : 
              percentage < 80 ? '#F59E0B' : 
              '#10B981'
            }
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-4xl font-bold ${getScoreColor()}`}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  // Custom checkbox with animation
  const AnimatedCheckbox = ({ 
    checked, 
    id, 
    onChange 
  }: { 
    checked: boolean; 
    id: string; 
    onChange: () => void 
  }) => {
    return (
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only" // Hide the actual input but keep it accessible
        />
        <label 
          htmlFor={id}
          className="flex items-center justify-center w-5 h-5 border-2 rounded border-slate-300 cursor-pointer"
        >
          {checked && (
            <svg 
              className="w-4 h-4 text-sky-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            >
              <path 
                className="checkmark-animation" 
                d="M5 13l4 4L19 7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </label>
      </div>
    );
  };

  // Handle rating change
  const handleRatingChange = (sectionId: string, itemId: string, rating: number) => {
    setSections(prevSections => {
      return prevSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map(item => {
              if (item.id === itemId) {
                // Only check the item if it's being rated
                const newChecked = rating > 0 ? true : item.checked;
                return { ...item, rating, checked: newChecked };
              }
              return item;
            }),
          };
        }
        return section;
      });
    });
  };

  // Star rating component
  const StarRating = ({ 
    rating, 
    onChange,
    id
  }: { 
    rating: number; 
    onChange: (rating: number) => void;
    id: string;
  }) => {
    const stars = [1, 2, 3, 4, 5];
    
    return (
      <div className="flex space-x-1 ml-2">
        {stars.map(star => (
          <button
            key={`${id}-star-${star}`}
            type="button"
            onClick={() => onChange(star === rating ? 0 : star)} // Toggle off if clicking same star
            className="focus:outline-none"
            aria-label={`Rate ${star} of 5`}
          >
            <svg 
              className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-slate-300'}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  // Generate CSV file for download
  const generateCSV = () => {
    // CSV header
    let csv = 'Section,Item,Checked,Rating (1-5)\n';
    
    // Add each item to CSV
    sections.forEach(section => {
      section.items.forEach(item => {
        const row = [
          `"${section.title}"`,
          `"${item.text}"`,
          item.checked ? 'Yes' : 'No',
          item.rating.toString()
        ];
        csv += row.join(',') + '\n';
      });
    });
    
    return csv;
  };
  
  // Download results as CSV
  const handleDownloadCSV = () => {
    const csv = generateCSV();
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `seo-checklist-results-${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Updated print/export function to include ratings
  const handlePrintReport = () => {
    const reportWindow = window.open('', '_blank');
    if (!reportWindow) {
      alert('Pop-up blocked. Please allow pop-ups to print the report.');
      return;
    }
    
    // Create a styled report
    reportWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>SEO Content Checklist Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #0369a1;
            border-bottom: 2px solid #0369a1;
            padding-bottom: 10px;
          }
          h2 {
            margin-top: 20px;
            color: #0369a1;
          }
          ul {
            list-style-type: none;
            padding-left: 10px;
          }
          li {
            margin-bottom: 12px;
            padding-left: 25px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          li:before {
            content: "☐";
            position: absolute;
            left: 0;
          }
          li.checked:before {
            content: "☑";
          }
          .score {
            font-size: 24px;
            font-weight: bold;
            color: ${
              completionPercentage < 50 ? '#ef4444' : 
              completionPercentage < 80 ? '#f59e0b' : 
              '#10b981'
            };
          }
          .meta {
            color: #666;
            font-style: italic;
            margin-bottom: 20px;
          }
          .section {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #f8fafc;
            border-radius: 8px;
          }
          .rating {
            display: inline-flex;
            margin-left: 10px;
            color: #f59e0b;
            font-weight: bold;
          }
          .item-text {
            flex: 1;
            ${'' /* Ensure text wraps properly */}
            margin-right: 10px;
          }
          .scores-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
            margin-bottom: 20px;
          }
          .score-box {
            padding: 15px;
            border-radius: 8px;
            background-color: #f0f9ff;
            flex: 1;
            text-align: center;
          }
          .score-label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #0369a1;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          @media print {
            body {
              padding: 0;
            }
            button {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <h1>SEO Content Checklist Report</h1>
        <div class="meta">Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
        
        <div class="scores-container">
          <div class="score-box">
            <div class="score-label">Completion Score</div>
            <div class="score">${completionPercentage}%</div>
            <div>${completionPercentage < 50 ? 'Needs work' : completionPercentage < 80 ? 'Good progress' : 'Excellent'}</div>
          </div>
          <div class="score-box">
            <div class="score-label">Quality Score</div>
            <div class="score" style="color: ${
              qualityScore < 50 ? '#ef4444' : 
              qualityScore < 80 ? '#f59e0b' : 
              '#10b981'
            };">${qualityScore}%</div>
            <div>${qualityScore < 50 ? 'Needs improvement' : qualityScore < 80 ? 'Good quality' : 'Excellent quality'}</div>
          </div>
        </div>
        
        <button onclick="window.print(); return false;" style="padding: 8px 16px; background: #0369a1; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px;">Print Report</button>
        
        ${sections.map(section => `
          <div class="section">
            <h2>${section.emoji} ${section.title}</h2>
            <ul>
              ${section.items.map(item => `
                <li class="${item.checked ? 'checked' : ''}">
                  <span class="item-text">${item.text}</span>
                  ${item.rating > 0 ? `<span class="rating">${'★'.repeat(item.rating)}${'☆'.repeat(5-item.rating)}</span>` : ''}
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
        
        <div class="footer">
          <p>Generated by the SEO Content Checklist Tool at dempseycopywriter.com</p>
        </div>
      </body>
      </html>
    `);
    
    reportWindow.document.close();
  };

  // Generate sharable URL with encoded checklist state
  const generateShareableUrl = () => {
    const currentUrl = window.location.href.split('#')[0]; // Get URL without hash
    
    // Make sure to include all data including ratings
    const dataToShare = sections.map(section => ({
      id: section.id,
      items: section.items.map(item => ({
        id: item.id,
        checked: item.checked,
        rating: item.rating
      }))
    }));
    
    const encodedData = btoa(JSON.stringify(dataToShare));
    const shareableUrl = `${currentUrl}#${encodeURIComponent(encodedData)}`;
    
    setShareUrl(shareableUrl);
    setShowShareModal(true);
  };

  // Copy the URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Reset confirmation modal component with keyboard handling
  const ResetConfirmationModal = () => {
    if (!showResetModal) return null;
    
    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowResetModal(false);
        }
      };
      
      // Focus the cancel button when modal opens
      const cancelButton = document.getElementById('reset-cancel-button');
      if (cancelButton) {
        cancelButton.focus();
      }
      
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, []);
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={(e) => {
          // Close when clicking the backdrop (outside the modal)
          if (e.target === e.currentTarget) {
            setShowResetModal(false);
          }
        }}
        role="dialog"
        aria-labelledby="reset-modal-title"
        aria-describedby="reset-modal-description"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4 animate-fade-in">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <h3 id="reset-modal-title" className="text-xl font-bold text-slate-800 mb-2">Reset All Progress?</h3>
            <p id="reset-modal-description" className="text-slate-600">
              This will clear all your checklist progress and ratings. This action cannot be undone.
            </p>
          </div>
          
          <div className="flex justify-center space-x-3">
            <button
              id="reset-cancel-button"
              onClick={() => setShowResetModal(false)}
              className="px-5 py-2 rounded-lg bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Cancel
            </button>
            <button
              onClick={confirmReset}
              className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Update the share modal with the same accessibility improvements
  const ShareModal = () => {
    if (!showShareModal) return null;
    
    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowShareModal(false);
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, []);
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowShareModal(false);
          }
        }}
        role="dialog"
        aria-labelledby="share-modal-title"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4 animate-fade-in">
          <h3 id="share-modal-title" className="text-xl font-bold text-slate-800 mb-4">Share Your Checklist</h3>
          <p className="text-slate-600 mb-4">
            Copy this link to share your current checklist progress with others:
          </p>
          
          <div className="flex items-center mb-5">
            <input 
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 p-2 border border-slate-300 rounded-l-md text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <button
              onClick={copyToClipboard}
              className="bg-sky-600 text-white px-4 py-2 rounded-r-md hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Copy
            </button>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={() => setShowShareModal(false)}
              className="bg-slate-200 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Quality Score Circle Progress
  const QualityScoreCircle = ({ percentage }: { percentage: number }) => {
    // Set the custom property value for the progress circle
    useEffect(() => {
      const progressPath = document.querySelector('.quality-circle-path');
      if (progressPath) {
        (progressPath as HTMLElement).style.setProperty('--progress', `${percentage}`);
      }
    }, [percentage]);

    const getQualityColor = () => {
      if (percentage === 0) return '#94a3b8'; // slate-400 for no ratings yet
      if (percentage < 50) return '#ef4444'; // red-500
      if (percentage < 80) return '#f59e0b'; // amber-500
      return '#10b981'; // green-500
    };

    return (
      <div className="relative w-20 h-20">
        <svg className="progress-circle w-full h-full" viewBox="0 0 100 100">
          <circle className="progress-circle-bg" cx="50" cy="50" r="46" />
          <circle 
            className="quality-circle-path progress-circle-path" 
            cx="50" 
            cy="50" 
            r="46" 
            stroke={getQualityColor()}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xl font-bold ${
            percentage === 0 ? 'text-slate-400' :
            percentage < 50 ? 'text-red-500' : 
            percentage < 80 ? 'text-amber-500' : 
            'text-green-500'
          }`}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  // Calculate section-specific metrics
  const getSectionMetrics = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return { completion: 0, quality: 0 };
    
    const totalItems = section.items.length;
    const checkedItems = section.items.filter(item => item.checked).length;
    const completion = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    
    const ratedItems = section.items.filter(item => item.rating > 0).length;
    const totalRating = section.items.reduce((sum, item) => sum + item.rating, 0);
    const quality = ratedItems > 0 ? Math.round((totalRating / ratedItems) * 20) : 0; // Convert 0-5 scale to percentage
    
    return { completion, quality };
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Share Modal */}
      <ShareModal />
      
      {/* Reset Confirmation Modal */}
      <ResetConfirmationModal />
      
      <div className="sticky top-4 z-10 mb-8 bg-white rounded-xl shadow-lg p-6 border border-sky-100">
        <div className="flex items-center justify-end mb-1 h-6">
          {isSaving && (
            <span className="text-sm text-slate-500 animate-fade-in-out">
              Saving progress...
            </span>
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">SEO Content Evaluation</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-center">
              <div>
                <p className="text-sm text-slate-500">Completion</p>
                <p className={`text-xl font-bold ${getScoreColor()}`}>{completionPercentage}%</p>
                <p className="text-xs text-slate-500">{getStatusMessage()}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Quality Rating</p>
                <p className={`text-xl font-bold ${
                  qualityScore === 0 ? 'text-slate-400' :
                  qualityScore < 50 ? 'text-red-500' : 
                  qualityScore < 80 ? 'text-amber-500' : 
                  'text-green-500'
                }`}>{qualityScore}%</p>
                <p className="text-xs text-slate-500">
                  {qualityScore === 0 ? 'Add ratings to see score' : 
                   qualityScore < 50 ? 'Needs improvement' : 
                   qualityScore < 80 ? 'Good quality' : 
                   'Excellent quality'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={handlePrintReport}
                className="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-lg text-white text-sm font-medium transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                </svg>
                Export Report
              </button>
              
              <button 
                onClick={handleDownloadCSV}
                className="py-2 px-4 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download CSV
              </button>
              
              <button 
                onClick={generateShareableUrl}
                className="py-2 px-4 bg-amber-500 hover:bg-amber-600 rounded-lg text-slate-900 text-sm font-medium transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                Share Checklist
              </button>
              
              <button 
                onClick={handleReset}
                className="py-2 px-4 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700 text-sm font-medium transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Reset All
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <div className="flex items-center space-x-2">
              <CircleProgress percentage={completionPercentage} />
              {qualityScore > 0 && (
                <QualityScoreCircle percentage={qualityScore} />
              )}
            </div>
            <p className="text-xs text-center mt-2 text-slate-500">
              {qualityScore > 0 ? 'Completion & Quality Scores' : 'Completion Score'}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((section) => {
          const { completion, quality } = getSectionMetrics(section.id);
          
          return (
            <div key={section.id} className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-sky-700 flex items-center">
                  <span className="mr-2 text-2xl">{section.emoji}</span> {section.title}
                </h3>
                
                <div className="flex items-center mt-2 sm:mt-0 space-x-4">
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">Completion</div>
                    <div className={`text-sm font-bold ${
                      completion < 50 ? 'text-red-500' : 
                      completion < 100 ? 'text-amber-500' : 
                      'text-green-500'
                    }`}>
                      {completion}%
                    </div>
                  </div>
                  
                  {quality > 0 && (
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">Quality</div>
                      <div className={`text-sm font-bold ${
                        quality < 50 ? 'text-red-500' : 
                        quality < 80 ? 'text-amber-500' : 
                        'text-green-500'
                      }`}>
                        {quality}%
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <AnimatedCheckbox
                        id={item.id}
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(section.id, item.id)}
                      />
                      <label 
                        htmlFor={item.id} 
                        className={`ml-3 text-base ${item.checked ? 'text-slate-500' : 'text-slate-700'}`}
                      >
                        {item.text}
                      </label>
                    </div>
                    
                    {/* Always render the rating component but conditionally show it */}
                    <div className={`pl-8 ${item.checked ? 'block' : 'hidden'}`}>
                      <div className="flex items-center">
                        <span className="text-xs text-slate-500 mr-2">How well implemented:</span>
                        <StarRating
                          id={item.id}
                          rating={item.rating}
                          onChange={(rating) => handleRatingChange(section.id, item.id, rating)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        <p>Use this checklist to evaluate how well you've implemented SEO best practices in your content.</p>
        <p>Your progress and ratings are automatically saved in your browser.</p>
      </div>
    </div>
  );
} 
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DOMPurify from 'dompurify';

// Define the form validation schema with zod
const contactSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  access_key: z.string(),
  subject: z.string(),
  from_name: z.string(),
  botcheck: z.boolean().optional(),
});

// Type for our form data
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
      access_key: '1819e0c5-32c6-4c90-94a9-a48cf1b4993a',
      subject: 'New Contact Form Submission from Your Portfolio',
      from_name: 'Dempsey Portfolio Website',
    },
  });
  
  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Sanitize user input
      const sanitizedData = {
        ...data,
        firstName: DOMPurify.sanitize(data.firstName),
        lastName: DOMPurify.sanitize(data.lastName),
        email: DOMPurify.sanitize(data.email),
        company: data.company ? DOMPurify.sanitize(data.company) : '',
        message: DOMPurify.sanitize(data.message),
      };
      
      // Create FormData object
      const formData = new FormData();
      Object.entries(sanitizedData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (key === 'botcheck') {
            // For the honeypot: if boolean false (human), send empty string. If boolean true (bot), send "true".
            formData.append(key, value ? 'true' : '');
          } else {
            formData.append(key, value.toString());
          }
        } else if (value === undefined && key === 'botcheck') {
           // If botcheck is undefined (e.g. if not present in form data for some reason)
           // still append it as an empty string to be safe for honeypot.
           formData.append(key, '');
        }
      });
      
      // Send the form data
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const responseData = await response.json();
      
      if (responseData.success) {
        setSubmitStatus('success');
        // Reset form
        reset();
      } else {
        console.error('Error submitting form:', DOMPurify.sanitize(JSON.stringify(responseData)));
        setSubmitStatus('error');
      }
    } catch (error) {
      // Sanitize error message before logging
      const errorMessage = error instanceof Error 
        ? DOMPurify.sanitize(error.message) 
        : 'Unknown error occurred';
      console.error('Error submitting form:', errorMessage);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalidSubmit = (errors: any) => {
    console.error("Contact form validation failed:", errors);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            Let&apos;s Create <span className="text-sky-600">Content that Converts</span>
          </h2>
          <p className="text-center text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Ready to elevate your online presence with SEO content that drives results? I'm here to help you achieve your goals.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div 
              className="md:col-span-2 bg-gradient-to-br from-sky-600 to-blue-700 text-white p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white/90">Email</p>
                    <a href="mailto:hello@dempseycopywriter.com" className="text-white hover:text-sky-200 transition-colors">
                      hello@dempseycopywriter.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white/90">Phone</p>
                    <a href="tel:+18001234567" className="text-white hover:text-sky-200 transition-colors">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white/90">Response Time</p>
                    <p className="text-white">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/dempseycopy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="Twitter">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/dempseycopywriter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="LinkedIn">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-3 bg-white p-8 rounded-xl shadow-xl border border-slate-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg">
                  <p className="font-medium">Thank you for reaching out!</p>
                  <p>Your message has been received. I'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                  <p className="font-medium">Something went wrong!</p>
                  <p>There was an error submitting your message. Please try again or email me directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6">
                {/* Hidden fields */}
                <input type="hidden" {...register('access_key')} />
                <input type="hidden" {...register('subject')} />
                <input type="hidden" {...register('from_name')} />
                <input type="checkbox" className="hidden" style={{ display: 'none' }} {...register('botcheck')} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name <span className="text-red-500">*</span></label>
                    <input 
                      id="firstName" 
                      autoComplete="given-name" 
                      className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm ${errors.firstName ? 'border-red-500' : 'border-slate-300'}`}
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      id="lastName" 
                      autoComplete="family-name" 
                      className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm ${errors.lastName ? 'border-red-500' : 'border-slate-300'}`}
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    id="email" 
                    autoComplete="email" 
                    className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company (Optional)</label>
                  <input 
                    id="company" 
                    autoComplete="organization" 
                    className="block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm"
                    {...register('company')}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <select 
                      id="projectType"  
                      className="block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm bg-white"
                      {...register('projectType')}
                    >
                      <option value="">Select a project type</option>
                      <option value="blog">Blog Content</option>
                      <option value="website">Website Copy</option>
                      <option value="email">Email Campaigns</option>
                      <option value="strategy">Content Strategy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Budget Range</label>
                    <select 
                      id="budget"
                      className="block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm bg-white"
                      {...register('budget')}
                    >
                      <option value="">Select a budget range</option>
                      <option value="small">Less than $1,000</option>
                      <option value="medium">$1,000 - $5,000</option>
                      <option value="large">$5,000 - $10,000</option>
                      <option value="enterprise">$10,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell me about your project and goals..."
                    className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 text-sm ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold py-3 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  <span className="text-red-500">*</span> Required fields. Your information is kept confidential and never shared with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
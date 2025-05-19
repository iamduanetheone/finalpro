"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DOMPurify from 'dompurify';

// Define the form validation schema with zod
const quoteSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  website: z.string().optional(),
  serviceType: z.string().min(1, { message: "Please select a service" }),
  projectDetails: z.string().min(20, { message: "Please provide more details (at least 20 characters)" }),
  access_key: z.string(),
  subject: z.string(),
  from_name: z.string(),
  botcheck: z.boolean().optional(),
});

// Type for our form data
type QuoteFormData = z.infer<typeof quoteSchema>;

// const WEB3FORMS_ACCESS_KEY = '85d6bb9f-3752-479d-8c3a-01e6ceab29d6'; // Removed hardcoded key

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      website: '',
      serviceType: '',
      projectDetails: '',
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_FALLBACK_ACCESS_KEY', // Use environment variable
      subject: 'New Service Quote Request from Duane Copywriter Website',
      from_name: 'Duane Copywriter Website - Quote Request',
    },
  });

  // Validate the access key is correctly set
  useEffect(() => {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_FALLBACK_ACCESS_KEY' || accessKey.includes('YOUR_ACCESS_KEY_HERE')) {
      console.error('CRITICAL: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not properly configured! Form submissions will likely fail.');
      // Optionally, set an error state here to inform the user on the UI
    } else {
      console.log('Web3Forms access key is properly configured via environment variable.');
    }
  }, []);

  // Form submission handler
  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      console.log("Form submission started with data:", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        serviceType: data.serviceType,
        access_key: data.access_key,
      });
      
      // Sanitize user input
      const sanitizedData = {
        ...data,
        firstName: DOMPurify.sanitize(data.firstName),
        lastName: DOMPurify.sanitize(data.lastName),
        email: DOMPurify.sanitize(data.email),
        company: data.company ? DOMPurify.sanitize(data.company) : '',
        website: data.website ? DOMPurify.sanitize(data.website) : '',
        serviceType: DOMPurify.sanitize(data.serviceType),
        projectDetails: DOMPurify.sanitize(data.projectDetails),
      };
      
      // Create FormData object (recommended by Web3Forms)
      const formData = new FormData();
      
      // Add all form fields to formData
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
      
      console.log("Sending request to Web3Forms API...");
      
      // Send the form data using FormData approach
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      console.log("Response status:", response.status);
      
      if (response.ok) {
        const responseData = await response.json();
        console.log("API response:", responseData);
        
        if (responseData.success) {
          console.log("Form submitted successfully!");
          setSubmissionStatus('success');
          // Reset form
          reset();
        } else {
          console.error('Error response from API:', responseData);
          setSubmissionStatus('error');
        }
      } else {
        console.error('HTTP error:', response.status, response.statusText);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Invalid submission handler for debugging
  const onInvalidSubmit = (errors: any) => {
    console.error("Form validation failed:", errors);
    // You can also iterate and log individual errors if needed:
    // for (const field in errors) {
    //   if (errors.hasOwnProperty(field)) {
    //     console.log(`Error in field ${field}: ${errors[field]?.message}`);
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-6">
      {/* Hidden fields */}
      <input type="hidden" {...register('access_key')} />
      <input type="hidden" {...register('subject')} />
      <input type="hidden" {...register('from_name')} />
      <input type="checkbox" className="hidden" style={{ display: 'none' }} {...register('botcheck')} />
      
      {/* Submission Status Messages (Hidden by default) */}
      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-300 rounded-lg">
          Thank you! Your quote request has been submitted successfully. We&apos;ll be in touch soon with a customized service quote.
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-300 rounded-lg">
          Oops! Something went wrong. Please try submitting the form again or contact us directly.
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
            <input 
              id="firstName" 
              autoComplete="given-name" 
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md ${errors.firstName ? 'border-red-500' : 'border-slate-300'}`}
              placeholder="e.g., Jane" 
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
            <input 
              id="lastName" 
              autoComplete="family-name" 
              className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md ${errors.lastName ? 'border-red-500' : 'border-slate-300'}`}
              placeholder="e.g., Doe" 
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <input 
            id="email" 
            autoComplete="email" 
            className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
            placeholder="you@example.com" 
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">Institution / Organization</label>
            <input 
              id="company" 
              autoComplete="organization" 
              className="mt-1 block w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md" 
              placeholder="e.g., University of Example"
              {...register('company')}
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-1.5">Current Document URL (if applicable)</label>
            <input 
              id="website" 
              autoComplete="url" 
              className="mt-1 block w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md"
              placeholder="Link to your draft or current document" 
              {...register('website')}
            />
            {errors.website && (
              <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed <span className="text-red-500">*</span></label>
          <div className="relative mt-1">
            <select 
              id="serviceType" 
              className={`appearance-none block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm bg-white placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md ${errors.serviceType ? 'border-red-500' : 'border-slate-300'}`}
              {...register('serviceType')}
            >
              <option value="">Select service type</option>
              <option value="essay">Essay Writing / Editing</option>
              <option value="research-paper">Research Paper</option>
              <option value="dissertation">Dissertation / Thesis</option>
              <option value="case-study">Academic Case Study</option>
              <option value="literature-review">Literature Review</option>
              <option value="resume">Resume Writing / Optimization</option>
              <option value="cv">CV Development</option>
              <option value="cover-letter">Cover Letter</option>
              <option value="linkedin">LinkedIn Profile Optimization</option>
              <option value="personal-statement">Personal Statement</option>
              <option value="admission-essay">Admission Essay</option>
              <option value="other">Other (please specify)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-slate-700 mb-1.5">Project Details <span className="text-red-500">*</span></label>
          <textarea 
            id="projectDetails" 
            rows={6} 
            className={`mt-1 block w-full px-4 py-2.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-700 sm:text-sm placeholder-slate-400 transition-shadow duration-150 ease-in-out hover:shadow-md ${errors.projectDetails ? 'border-red-500' : 'border-slate-300'}`}
            placeholder="Please provide details about your project including: deadline, word count, formatting requirements, type of document needed, etc."
            {...register('projectDetails')}
          ></textarea>
          {errors.projectDetails && (
            <p className="mt-1 text-sm text-red-600">{errors.projectDetails.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            {isSubmitting ? 'Submitting...' : 'Request Quote'}
          </button>
          <p className="text-xs text-slate-500 text-center mt-3">
            We will respond with a personalized quote within 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
} 
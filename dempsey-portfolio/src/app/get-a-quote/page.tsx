import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

// Define metadata for this page
export const metadata: Metadata = {
  title: "Get a Quote | SEO Copywriting Services by Dempsey",
  description: "Request a personalized quote for expert SEO copywriting services tailored to your unique business needs.",
  alternates: {
    canonical: 'https://www.dempseycopywriter.com/get-a-quote',
  },
  openGraph: {
    title: "Get a Free Quote | SEO Copywriting Services",
    description: "Request a personalized quote for expert SEO copywriting services tailored to your unique business needs. Quick response within 24-48 hours.",
    type: "website",
    url: "https://www.dempseycopywriter.com/get-a-quote",
    images: [
      {
        url: "/quote-page.jpg",
        width: 1200,
        height: 630,
        alt: "Request an SEO Copywriting Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote | SEO Copywriting Services",
    description: "Request a personalized quote for expert SEO copywriting services tailored to your unique business needs.",
    images: ["/quote-page.jpg"],
    creator: "@dempseycopy"
  }
};

export default function GetAQuotePage() {
  return (
    <section className="py-16 md:py-24 pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-sky-100 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get a Free Quote for Your Project
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to elevate your content and boost your SEO? Fill out the form below to tell me about your project, and I&apos;ll get back to you with a personalized quote within 24-48 hours.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-slate-200">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
} 
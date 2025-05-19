// This is a Server Component to properly use metadata API

import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientNav from "@/components/ClientNav";
import ClientFooter from "@/components/ClientFooter";
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

// Font setup
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Duane - Expert SEO Copywriter | Compelling Content That Converts",
  description: "Elevate your online presence with expert SEO copywriting services that drive traffic and convert visitors into customers. Portfolio featuring case studies, process, and results.",
  metadataBase: new URL('https://www.duanecopywriter.com'),
  keywords: "SEO copywriter, SEO content writing, conversion copywriting, SEO strategy, website content, blog writing, content marketing",
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Duane - Expert SEO Copywriter | Compelling Content That Converts",
    description: "Elevate your online presence with expert SEO copywriting services that drive traffic and convert visitors into customers.",
    type: "website",
    url: "https://www.duanecopywriter.com",
    siteName: "Duane SEO Copywriter",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duane SEO Copywriter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duane - Expert SEO Copywriter",
    description: "Elevate your online presence with expert SEO copywriting services that drive traffic and convert visitors into customers.",
    creator: "@duanecopy",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: 'https://www.duanecopywriter.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Website and organization schema data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Duane SEO Copywriter",
    "url": "https://www.duanecopywriter.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.duanecopywriter.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Duane SEO Copywriter",
    "url": "https://www.duanecopywriter.com",
    "logo": "https://www.duanecopywriter.com/logo.png",
    "description": "Expert SEO copywriting services that drive traffic and convert visitors into customers.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "email": "hello@duanecopywriter.com",
    "telephone": "+18001234567",
    "priceRange": "$$",
    "sameAs": [
      "https://twitter.com/duanecopy",
      "https://www.linkedin.com/in/duanecopywriter"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "geoRadius": "10000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans flex flex-col min-h-screen bg-white`}>
        <ClientNav />
        <main className="flex-grow">
          {children}
        </main>
        <ClientFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}

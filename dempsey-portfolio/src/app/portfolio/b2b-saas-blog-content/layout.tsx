import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "B2B SaaS Blog Content Strategy Case Study | Dempsey SEO Copywriter",
  description: "How I developed a content strategy that increased organic traffic by 215% and generated 38% more leads for a B2B SaaS company.",
  alternates: {
    canonical: 'https://www.dempseycopywriter.com/portfolio/b2b-saas-blog-content',
  },
  openGraph: {
    title: "B2B SaaS Blog Content Strategy Case Study | Dempsey SEO Copywriter",
    description: "How I developed a content strategy that increased organic traffic by 215% and generated 38% more leads for a B2B SaaS company.",
    type: "article",
    url: "https://www.dempseycopywriter.com/portfolio/b2b-saas-blog-content",
    images: [
      {
        url: "/case-studies/b2b-saas-results.jpg",
        width: 1200,
        height: 630,
        alt: "B2B SaaS Content Strategy Results",
      },
    ],
  },
};

export default function B2BSaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
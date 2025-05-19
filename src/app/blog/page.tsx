import Link from 'next/link';
import { getAllPosts } from './test-sanity'; // Import the fetching function
import { urlFor } from '@/sanity/lib/image'; // Import urlFor for images
import Image from 'next/image'; // Import Next.js Image component
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from 'next';

// Define metadata for this page
export const metadata: Metadata = {
  title: "SEO Copywriting Blog | Dempsey",
  description: "Expert insights on SEO copywriting, content strategy, and digital marketing to help your business grow online.",
  alternates: {
    canonical: 'https://www.dempseycopywriter.com/blog',
  },
};

// Define a type for your posts
interface MainImageObjectForList {
  asset?: SanityImageSource; // The core reference or asset object
  alt?: string; // Alt text directly on the mainImage object if fetched
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  categories?: Array<{ _id: string; title: string }>;
  author?: { name: string; image?: SanityImageSource };
  mainImage?: MainImageObjectForList; // Use the new specific type
  // imageUrl?: string; // Cleaned up: This was in dummy data, should be derived from mainImage
  // category?: string; // Cleaned up: This was in dummy data, should be derived from categories array
  // date?: string;    // Cleaned up: This was in dummy data, should be derived from publishedAt
}

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  // Helper to format date if needed
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric' 
    });
  };

  return (
    <section className="py-16 md:py-24 pt-28 md:pt-32 bg-gradient-to-b from-sky-50 to-slate-100 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Dempsey&apos;s SEO Insights
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Your go-to resource for the latest in SEO, copywriting, and content strategy. Dive into actionable tips, industry trends, and expert advice.
          </p>
        </header>

        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
              <article 
                key={post._id} 
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 border border-slate-100 overflow-hidden"
              >
                {/* Robust check for mainImage and its asset property */}
                {post.mainImage && 
                 typeof post.mainImage === 'object' && 
                 'asset' in post.mainImage && 
                 post.mainImage.asset && (
                  <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden">
                    <Image 
                      src={urlFor(post.mainImage).width(256).height(192).fit('max').auto('format').url()}
                      alt={post.mainImage.alt || post.title || 'Blog post image'} 
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {post.categories && post.categories[0] && (
                       <div className="absolute top-2 right-2 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {post.categories[0].title}
                      </div>
                    )}
                  </div>
                )}
                <h2 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-sky-600 transition-colors duration-300">
                  <Link href={`/blog/${post.categories && post.categories[0] ? `${post.categories[0].title.toLowerCase()}/` : ''}${post.slug.current}`}>{post.title}</Link>
                </h2>
                {post.publishedAt && (
                  <p className="text-sm text-slate-500 mb-3">{formatDate(post.publishedAt)}</p>
                )}
                {post.excerpt && (
                  <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
                )}
                <Link
                  href={`/blog/${post.categories && post.categories[0] ? `${post.categories[0].title.toLowerCase()}/` : ''}${post.slug.current}`}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold self-start text-sm group/link transition-colors duration-300"
                >
                  <span>
                    Read More 
                    <span className="inline-block ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-600">No posts found. Check back soon!</p>
        )}

        {/* Basic Pagination (Example - keep as is or implement fully later) */}
        {posts && posts.length > 0 && (
          <div className="mt-16 text-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                Previous
              </a>
              <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-4 py-2 border border-sky-500 bg-sky-50 text-sm font-medium text-sky-600">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                Next
              </a>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
} 
import { getPostBySlug } from '../test-sanity'; // Adjusted import path
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText, PortableTextReactComponents, PortableTextProps } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from 'next';

// Define a type for your single post
interface PostPageProps {
  params: {
    slug: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

interface Author {
  name: string;
  image?: SanityImageSource;
}

interface Category {
  _id: string;
  title: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextProps['value']; // Use type from PortableTextProps
  categories?: Category[];
  author?: Author;
  mainImage?: SanityImageSource;
}

// Helper to get the actual slug from path params
function getSlugFromParams(slugArray: string[]): string {
  // If the path is /blog/category/slug, return the slug (last element)
  // If the path is /blog/slug, also return the slug (only element)
  return slugArray[slugArray.length - 1];
}

// Generate metadata for the post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const slug = getSlugFromParams(params.slug);
  
  // Fetch the post
  const post = await getPostBySlug(slug);
  
  // If post doesn't exist, return default metadata
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  // Construct the canonical URL with category if available
  const categoryPath = post.categories && post.categories[0] 
    ? `${post.categories[0].title.toLowerCase()}/` 
    : '';
  const canonicalUrl = `https://www.dempseycopywriter.com/blog/${categoryPath}${slug}`;
  
  // Return metadata with post-specific details
  return {
    title: `${post.title} | SEO Copywriting Blog`,
    description: post.excerpt || `Read about ${post.title} in our SEO copywriting blog.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title} in our SEO copywriting blog.`,
      type: 'article',
      url: canonicalUrl,
      images: post.mainImage ? [
        {
          url: urlFor(post.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    }
  };
}

const ptComponents: Partial<PortableTextReactComponents> = {
  // Existing components...
};

// Helper to format date if needed
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric' 
  });
};

export default async function PostPage({ params }: PostPageProps) {
  const slug = getSlugFromParams(params.slug);
  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    notFound(); // Triggers the not-found page if post isn't found
  }

  // Rest of the component remains the same
  return (
    <div className="bg-slate-50 min-h-screen">
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl lg:max-w-4xl">
          
          <div className="mb-8 text-center lg:text-left">
             <Link 
               href="/blog" 
               className="inline-flex items-center text-sky-600 hover:text-sky-700 group mb-6 text-md font-medium"
             >
                <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">←</span>
                Back to All Articles
            </Link>
          </div>

          <header className="mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight text-center">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 text-sm text-slate-500 mb-8">
              <div className="flex items-center justify-center">
                <span className="mr-1">🗓️</span> 
                <span>Published on {formatDate(post.publishedAt)}</span>
              </div>
              {post.author && (
                <div className="flex items-center justify-center">
                  {post.author.image && typeof post.author.image === 'object' && 'asset' in post.author.image && post.author.image.asset ? (
                    <Image
                      src={urlFor(post.author.image).width(24).height(24).fit('crop').auto('format').url()}
                      alt={post.author.name || 'Author image'}
                      width={24}
                      height={24}
                      className="rounded-full mr-2"
                    />
                  ) : (
                    <span className="mr-1">👤</span>
                  )}
                  <span>By {post.author.name}</span>
                </div>
              )}
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.categories.map(category => (
                  <Link 
                    key={category._id} 
                    href={`/blog/category/${category.title.toLowerCase()}`}
                    className="bg-sky-100 text-sky-700 px-3 py-1.5 text-xs font-semibold rounded-full hover:bg-sky-200 transition-colors duration-200 shadow-sm"
                  >
                      {category.title.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {post.mainImage && (
            <div className="relative w-full aspect-[16/9] mb-12 md:mb-16 rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).auto('format').url()}
                // Check if mainImage is an object and has alt property
                alt={(typeof post.mainImage === 'object' && 'alt' in post.mainImage && post.mainImage.alt as string) || post.title || 'Blog post main image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
            </div>
          )}
          
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-xl">
            {post.body && (
              <div className="prose prose-lg lg:prose-xl max-w-none 
                            prose-headings:text-slate-800 prose-a:text-sky-600 hover:prose-a:text-sky-700
                            prose-blockquote:border-sky-500 prose-blockquote:bg-sky-50/70
                            prose-ul:list-disc prose-ol:list-decimal
                            prose-strong:font-semibold prose-strong:text-slate-700 
                            prose-em:italic prose-em:text-slate-600
                            prose-code:bg-sky-100 prose-code:text-sky-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                            prose-li:marker:text-sky-600">
                <PortableText value={post.body} components={ptComponents} />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
} 
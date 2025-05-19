import { getPostBySlug } from '../test-sanity'; // Adjusted import path
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { PortableText, PortableTextReactComponents, PortableTextProps } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from 'next';
import Script from 'next/script';
// import { CalendarDaysIcon, UserCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'; // Removed heroicons

// Define a type for your single post
interface PostPageProps {
  params: {
    slug: string;
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

// Corrected MainImage interface
interface MainImageObject {
  asset?: SanityImageSource; // The core reference or asset object
  alt?: string;
  // SanityImageSource itself can be complex, so we focus on what we query
}

interface SeoGroup {
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImageSource; // This can be a direct image reference
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  _updatedAt: string;
  excerpt?: string;
  body?: PortableTextProps['value'];
  categories?: Category[];
  author?: Author;
  mainImage?: MainImageObject; // Use the corrected MainImageObject type
  seoGroup?: SeoGroup;
}

// Helper function to check for valid image asset
const isValidImage = (image: MainImageObject | SanityImageSource | undefined | null): image is (MainImageObject & { asset: { _ref: string } }) | (SanityImageSource & { asset: { _ref: string } }) => {
  return !!(image && typeof image === 'object' && 'asset' in image && image.asset && typeof (image.asset as any)._ref === 'string');
};

const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).fit('max').auto('format').url()}
            alt={value.alt || 'Blog content image'}
            width={value.asset.metadata?.dimensions?.width || 800} // Use actual width if available
            height={value.asset.metadata?.dimensions?.height || 600} // Use actual height if available
            className="w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-500 mt-2 p-2 bg-slate-50 rounded-b-lg">
              {value.caption}
            </figcaption>
          )}
        </div>
      );
    },
    // Consider adding a code block component if needed
    // code: ({ value }) => <pre data-language={value.language}><code>{value.code}</code></pre>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = value?.href && !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value?.href} rel={rel} className="text-sky-600 hover:text-sky-700 underline decoration-sky-600/50 hover:decoration-sky-700 transition-all duration-200">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-slate-700">{children}</strong>,
    em: ({ children }) => <em className="italic text-slate-600">{children}</em>,
    code: ({ children }) => <code className="bg-sky-100 text-sky-700 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-12 mb-6 leading-tight">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl lg:text-4xl font-semibold text-slate-800 mt-10 mb-5 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl lg:text-3xl font-medium text-slate-800 mt-8 mb-4 leading-snug">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl lg:text-2xl font-medium text-slate-700 mt-6 mb-3 leading-snug">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sky-500 pl-6 py-3 my-8 text-lg italic text-slate-600 bg-sky-50/70 rounded-r-md shadow-sm">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc list-outside space-y-2 my-6 ml-6 text-slate-700 text-lg leading-relaxed">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside space-y-2 my-6 ml-6 text-slate-700 text-lg leading-relaxed">{children}</ol>,
    li: ({ children }) => <li className="pb-1">{children}</li>,
    normal: ({ children }) => <p className="text-lg text-slate-700 my-6 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc list-outside space-y-3 my-6 ml-6 text-slate-700 text-lg leading-relaxed">{children}</ul>,
    number: ({children}) => <ol className="list-decimal list-outside space-y-3 my-6 ml-6 text-slate-700 text-lg leading-relaxed">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="pb-1 pl-2">{children}</li>,
    number: ({children}) => <li className="pb-1 pl-2">{children}</li>,
  }
};

// Helper to format date if needed
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric' 
  });
};

// Generate metadata for the post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const post: Post | null = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  const metaTitle = post.seoGroup?.ogTitle || post.title;
  const metaDescription = post.seoGroup?.metaDescription || post.excerpt || `Read about ${post.title} in our SEO copywriting blog.`;
  const ogDescription = post.seoGroup?.ogDescription || metaDescription;

  let ogImageUrl: string | undefined;
  let ogImageAlt = metaTitle; // Default alt text

  if (isValidImage(post.seoGroup?.ogImage)) {
    ogImageUrl = urlFor(post.seoGroup!.ogImage!).width(1200).height(630).url();
  } else if (isValidImage(post.mainImage)) {
    ogImageUrl = urlFor(post.mainImage).width(1200).height(630).url();
    ogImageAlt = post.mainImage.alt || metaTitle; // Use mainImage.alt if available
  }

  return {
    title: `${metaTitle} | SEO Copywriting Blog`,
    description: metaDescription,
    alternates: {
      canonical: `https://www.dempseycopywriter.com/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: ogDescription,
      type: 'article',
      url: `https://www.dempseycopywriter.com/blog/${slug}`,
      images: ogImageUrl ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        }
      ] : undefined,
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postDate = new Date(post.publishedAt).toISOString();
  const modifiedDate = new Date(post._updatedAt).toISOString(); // Use _updatedAt for dateModified

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoGroup?.metaDescription || post.excerpt || `Read about ${post.title} in our SEO copywriting blog.`,
    "image": isValidImage(post.mainImage) ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
    "author": post.author ? {
      "@type": "Person",
      "name": post.author.name,
      // Consider adding "url": "URL_TO_AUTHOR_PAGE_IF_EXISTS"
      "url": "https://www.dempseycopywriter.com" // Placeholder or site URL
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": "Dempsey SEO Copywriter",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dempseycopywriter.com/logo.png"
      }
    },
    "datePublished": postDate,
    "dateModified": modifiedDate, // Updated to use modifiedDate
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.dempseycopywriter.com/blog/${slug}`
    },
    "keywords": post.categories ? post.categories.map(cat => cat.title).join(', ') : "SEO copywriting"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Add the structured data for this blog post */}
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl lg:max-w-4xl">
          
          <div className="mb-8 text-center lg:text-left">
             <Link 
               href="/blog" 
               className="inline-flex items-center text-sky-600 hover:text-sky-700 group mb-6 text-md font-medium"
             >
                {/* <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" /> */}
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
                {/* <CalendarDaysIcon className="w-5 h-5 mr-2 text-sky-600" /> */}
                <span className="mr-1">🗓️</span> 
                <span>Published on {formatDate(post.publishedAt)}</span>
              </div>
              {post.author && (
                <div className="flex items-center justify-center">
                  {isValidImage(post.author.image) ? (
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

          {isValidImage(post.mainImage) && (
            <div className="relative w-full aspect-[16/9] mb-12 md:mb-16 rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).fit('max').auto('format').url()}
                alt={post.mainImage.alt || post.title || 'Blog post main image'}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
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

// Optional: If you want to statically generate paths at build time
// export async function generateStaticParams() {
//   const posts = await getAllPosts(); // You'll need getAllPosts here, or a similar function that just gets slugs
//   return posts.map((post) => ({ slug: post.slug.current }));
// } 
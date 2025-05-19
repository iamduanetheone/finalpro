import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Define Post interface based on Sanity schema
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  categories?: Array<{ _id: string; title: string }>;
  mainImage?: SanityImageSource;
}

// Function to fetch the latest posts
async function getLatestPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    categories[]->{
      _id,
      title
    },
    mainImage
  }`);
  return posts;
}

// Helper to format date
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric' 
  });
}

export default async function BlogTeaser() {
  // Fetch the latest posts
  const posts = await getLatestPosts();

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Academic & Career Success Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div 
                key={post._id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 border border-slate-100 relative"
              >
                <div className="h-2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-t-lg absolute top-0 left-0 right-0"></div>
                
                {post.mainImage && typeof post.mainImage === 'object' && 'asset' in post.mainImage && post.mainImage.asset && (
                  <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                    <Image 
                      src={urlFor(post.mainImage).width(400).height(200).url()} 
                      alt={post.title || 'Blog post image'}
                      fill
                      className="object-cover"
                    />
                    {post.categories && post.categories[0] && (
                      <div className="absolute top-2 right-2 bg-sky-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                        {post.categories[0].title}
                      </div>
                    )}
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3 text-sky-700 mt-4">
                  <Link
                    href={`/blog/${post.categories && post.categories[0] ? `${post.categories[0].title.toLowerCase()}/` : ''}${post.slug.current}`}
                    className="hover:text-sky-600 transition-colors duration-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-500 mb-3">{formatDate(post.publishedAt)}</p>
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">{post.excerpt || 'Read this article for academic and career advancement insights...'}</p>
                <Link
                  href={`/blog/${post.categories && post.categories[0] ? `${post.categories[0].title.toLowerCase()}/` : ''}${post.slug.current}`}
                  className="text-sky-600 hover:text-sky-800 font-semibold self-start text-sm group flex items-center"
                >
                  <span>
                    Read More 
                    <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-slate-600">Academic and career resources coming soon! Check back later for insightful content.</p>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md"
          >
            Explore All Resources
          </Link>
        </div>
      </div>
    </section>
  );
} 
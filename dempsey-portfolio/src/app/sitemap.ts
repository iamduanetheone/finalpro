import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client'; // Adjust path if necessary

interface Post {
  slug: {
    current: string;
  };
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.dempseycopywriter.com'; // Make sure this is your correct base URL

  // Fetch all post slugs and their last modification date
  const posts: Post[] = await client.fetch(`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
    "slug": slug.current,
    _updatedAt
  }`);

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt).toISOString(),
    changeFrequency: 'weekly' as 'weekly', // Or 'daily' if you post very frequently
    priority: 0.7,
  }));

  // Add other static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(), // Or a specific date for your homepage
      changeFrequency: 'monthly' as 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(), // Or a specific date
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date().toISOString(), // Or a specific date
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    // Add any other important static pages here
    // e.g., /portfolio, /about, etc.
  ];

  return [...staticPages, ...postUrls];
} 
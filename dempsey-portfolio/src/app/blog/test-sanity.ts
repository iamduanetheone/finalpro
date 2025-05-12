import { client } from '../../sanity/lib/client';

export async function getAllPosts() {
  const posts = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    categories[]->{
      _id,
      title
    },
    "author": author->{name, image},
    mainImage
  }`);
  
  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      _id,
      title,
      slug,
      body,
      publishedAt,
      _updatedAt,
      excerpt,
      categories[]->{
        _id,
        title
      },
      "author": author->{name, image},
      mainImage {
        asset,
        alt
      },
      seoGroup {
        metaDescription,
        ogTitle,
        ogDescription,
        ogImage
      }
    }`,
    { slug }
  );
  
  return post;
}

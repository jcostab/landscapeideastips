import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return data.draft !== true;
  });
  
  const sortedPosts = posts.sort((a, b) => 
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Landscape Ideas Tips',
    description: 'Practical Australian landscape and garden tips for lawns, beds, hedges, and seasonal care',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-AU</language>`,
  });
}

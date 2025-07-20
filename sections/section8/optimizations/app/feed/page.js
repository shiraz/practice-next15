import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

export async function generateMetadata(config) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  const postString = numberOfPosts === 1 ? 'post' : 'posts';
  return {
    title: `Browse all our ${numberOfPosts} ${postString}!`,
    description: 'Browse all our posts',
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

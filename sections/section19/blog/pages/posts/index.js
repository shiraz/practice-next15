import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

export default function Posts(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

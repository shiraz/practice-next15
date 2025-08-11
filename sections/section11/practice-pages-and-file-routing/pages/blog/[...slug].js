import React from 'react';
import { useRouter } from 'next/router';

export default function BlogPosts() {
  const router = useRouter();
  console.log(router.query);
  return <div>Blog Posts</div>;
}

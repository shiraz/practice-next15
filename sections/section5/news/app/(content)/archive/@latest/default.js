import React from 'react';

import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

export default async function LatestNews() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

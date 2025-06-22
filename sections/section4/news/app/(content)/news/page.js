import React from 'react';

import NewsList from '@/components/NewsList';
import { DUMMY_NEWS } from '@/constants/dummy-news';

export default function News() {
  return (
    <>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

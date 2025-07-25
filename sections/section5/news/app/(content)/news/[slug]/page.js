import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

// import { DUMMY_NEWS } from '@/constants/dummy-news';
import { getNewsItem } from '@/lib/news';

export default async function NewsArticle({ params }) {
  const { slug } = params;
  // const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

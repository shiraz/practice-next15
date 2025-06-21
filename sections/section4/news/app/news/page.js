import Link from 'next/link';
import React from 'react';

export default function News() {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href={`/news/article-1`}>News Article 1</Link>
        </li>
        <li>
          <Link href={`/news/article-2`}>News Article 2</Link>
        </li>
        <li>
          <Link href={`/news/article-3`}>News Article 3</Link>
        </li>
      </ul>
    </>
  );
}

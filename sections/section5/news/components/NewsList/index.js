import Link from 'next/link';
import { memo } from 'react';

const NewsList = memo(function NewsList({ news }) {
  if (!news || news.length === 0) {
    return <p>No news available.</p>;
  }

  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img 
              src={`/images/news/${newsItem.image}`} 
              alt={newsItem.title}
              loading="lazy"
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default NewsList;

import NewsList from '@/components/NewsList';

export default async function News() {
  const response = await fetch('http://localhost:8080/news');
  const news = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  return (
    <>
      <h1>News</h1>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news available.</p>
      )}
    </>
  );
}

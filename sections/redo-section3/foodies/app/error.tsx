'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Sorry, an unexpected error has occurred. Please try again later.</p>
    </main>
  );
}

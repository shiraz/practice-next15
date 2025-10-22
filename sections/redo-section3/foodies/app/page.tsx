import Link from 'next/link';

import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <p>Let's get started</p>
        <p>
          <Link href="/about">About Us</Link>
        </p>
      </main>
    </div>
  );
}

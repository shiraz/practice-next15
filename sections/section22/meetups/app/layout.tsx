import type { Metadata } from 'next';

import Layout from '@/components/layout/Layout';

import './globals.css';

export const metadata: Metadata = {
  title: 'React Meetups',
  description: 'A Next.js app for managing React meetups',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

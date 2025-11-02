import type { Metadata } from 'next';

import MainHeader from '@/components/MainHeader';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Foodies App',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}

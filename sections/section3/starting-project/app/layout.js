import './globals.css';

// Adds metadata to the site without the need to add the head tag.
export const metadata = {
  title: 'Next.js 15 App',
  description: 'Your Next.js 15 App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

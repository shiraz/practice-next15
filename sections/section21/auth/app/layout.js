import Layout from '../components/layout/layout';

import '../styles/globals.css';

function RootLayout({ children }) {
  return (
    <Layout>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Layout>
  );
}

export default RootLayout;

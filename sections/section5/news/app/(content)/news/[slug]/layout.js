import React from 'react';

export default function NewsArticleLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

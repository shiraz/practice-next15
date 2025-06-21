import React from 'react';

export default function NewsArticle({ params }) {
  const { id } = params;
  return <h1>{`News Article - ${id}`}</h1>;
}

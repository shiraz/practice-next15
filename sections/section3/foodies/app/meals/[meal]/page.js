import React from 'react';

export default function Meal({ params }) {
  const { meal } = params;
  return (
    <div>
      <h1>Meal</h1>
      <p>{meal}</p>
    </div>
  );
}

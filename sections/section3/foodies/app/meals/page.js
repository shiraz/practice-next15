import Link from 'next/link';
import React from 'react';

export default function Meals() {
  return(
    <div>
        <h1>Meals</h1>
        <p><Link href="/meals/meal-1">Meal 1</Link></p>
    </div>
  );
}

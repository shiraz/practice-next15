import Link from 'next/link';
import { Suspense } from 'react';

import MealsGrid from '@/components/Meals/MealsGrid';
import { getMeals } from '@/lib/meals';

import classes from './page.module.css';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the scrumptious meals shared by our eclectic community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

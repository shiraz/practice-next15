import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMealBySlug } from '@/libs/meals';
import classes from '@/styles/pages/meal-detail.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  return {
    title: 'Meal Details',
    description: meal.summary,
  };
}

export default async function MealDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} width={400} height={300} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
        <p className={classes.ingredients}>
          <h2>Ingredients</h2>
        </p>
      </main>
    </>
  );
}

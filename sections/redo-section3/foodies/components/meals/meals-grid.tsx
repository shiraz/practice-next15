import MealItem from './meal-item';

import type { Meal } from '@/types/meal';

import classes from '@/styles/components/meals-grid.module.css';

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

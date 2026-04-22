import sql from 'better-sqlite3';

import { Meal } from '@/types/meal';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const stmt = db.prepare('SELECT * FROM meals');
  return stmt.all() as Meal[];
}

export function getMealBySlug(slug: string) {
  const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
  return stmt.get(slug) as Meal;
}
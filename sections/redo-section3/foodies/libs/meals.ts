import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import type { Meal, NewMeal } from '@/types/meal';

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

export async function saveMeal(meal: NewMeal): Promise<Meal> {
  const slug = slugify(meal.title, { lower: true, strict: true });
  const instructions = xss(meal.instructions);
  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}-${Date.now()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error('Failed to save image');
    }
  });
  stream.end();

  const mealToSave = {
    ...meal,
    slug,
    instructions,
    image: `/images/${fileName}`,
  };

  db.prepare(
    'INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)'
  ).run(mealToSave);

  return getMealBySlug(slug);
}

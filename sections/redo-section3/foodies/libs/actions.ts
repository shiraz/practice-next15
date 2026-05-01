'use server';

import { redirect } from 'next/navigation';

import isString from './isString';
import { saveMeal } from './meals';
import type { Meal } from '@/types/meal';

export async function shareMeal(formData: FormData) {
  const title = formData.get('title');

  if (!isString(title)) {
    throw new Error('Invalid title');
  }

  const creatorEmail = formData.get('email');
  if (!isString(creatorEmail)) {
    throw new Error('Invalid creator email');
  }

  const summary = formData.get('summary');
  const instructions = formData.get('instructions');
  const image = formData.get('image');
  const creator = formData.get('name');

  const meal: Meal = {
    title: isString(title) ? title : '',
    summary: isString(summary) ? summary : '',
    instructions: isString(instructions) ? instructions : '',
    image: image instanceof File ? image : new File([], ''),
    creator: isString(creator) ? creator : '',
    creator_email: creatorEmail,
  };

  await saveMeal(meal);

  redirect(`/meals`);
}

'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import isString from './isString';
import { saveMeal } from './meals';
import type { NewMeal } from '@/types/meal';

/** True when the field is missing, not a string, or only whitespace. */
const isInvalidText = (value: unknown): boolean =>
  !isString(value) || value.trim() === '';

export type ShareMealState = {
  message: string | null;
};

export async function shareMeal(
  _prevState: ShareMealState,
  formData: FormData,
): Promise<ShareMealState> {
  const title = formData.get('title');

  if (isInvalidText(title)) {
    return {
      message: 'Invalid title',
    };
  }

  const creatorEmail = formData.get('email');
  if (!isString(creatorEmail) || !creatorEmail.includes('@')) {
    return {
      message: 'Invalid creator email',
    };
  }

  const summary = formData.get('summary');
  const instructions = formData.get('instructions');
  const image = formData.get('image');
  const creator = formData.get('name');

  if (isInvalidText(summary)) {
    return {
      message: 'Invalid summary',
    };
  }

  if (isInvalidText(instructions)) {
    return {
      message: 'Invalid instructions',
    };
  }

  if (isInvalidText(creator)) {
    return {
      message: 'Invalid creator',
    };
  }

  const meal: NewMeal = {
    title: isString(title) ? title : '',
    summary: isString(summary) ? summary : '',
    instructions: isString(instructions) ? instructions : '',
    image: image instanceof File ? image : new File([], ''),
    creator: isString(creator) ? creator : '',
    creator_email: creatorEmail,
  };

  await saveMeal(meal);
  revalidatePath('/meals', 'layout');

  redirect(`/meals`);
}

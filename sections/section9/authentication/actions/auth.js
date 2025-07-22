'use server';

import { redirect } from 'next/navigation';

import { createUser } from '@/lib/user';
import { hashUserPassword } from '@/lib/hash';

export async function signup(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email address detected.';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }

  // Store in the DB.
  const hashedPwd = hashUserPassword(password);

  try {
    createUser(email, hashedPwd);
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'This email address is already in use.',
        },
      };
    }
    throw error;
  }

  redirect('/training');
}

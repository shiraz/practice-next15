'use server';

import { createUser } from '@/lib/user';
import { hashUserPassword } from '@/lib/hash';

export async function signup(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email || !email.includes('@')) {
    errors.email = 'Invalid email address detected.';
  }

  if (!password || password.trim.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      ...prevState,
      errors: errors,
    };
  }

  // Store in the DB.
  const hashedPwd = hashUserPassword(password);
  createUser(email, hashedPwd);
}

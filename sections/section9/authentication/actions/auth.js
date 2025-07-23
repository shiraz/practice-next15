'use server';

import { redirect } from 'next/navigation';

import { createAuthSession } from '@/lib/auth';
import { hashUserPassword, verifyPassword } from '@/lib/hash';
import { createUser, getUserByEmail } from '@/lib/user';

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
    const { lastInsertRowid: id } = createUser(email, hashedPwd);
    await createAuthSession(id);
    redirect('/training');
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
}

export async function login(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: 'No user found with this email address.',
      },
    };
  }

  const isValidPwd = verifyPassword(existingUser.password, password);

  if (!isValidPwd) {
    return {
      errors: {
        password: 'Incorrect password detected.',
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect('/training');
}

export async function auth(mode, prevState, formData) {
  if (mode === 'login') {
    return login(prevState, formData);
  }

  return signup(prevState, formData);
}
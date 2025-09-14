import { insertUserToDB } from '../../../../lib/db';

export async function POST(request) {
  const data = await request.json();
  const { email, password } = data;

  if (!email || !email.includes('@')) {
    return Response.json(
      { message: 'Invalid input - email should be valid.' },
      { status: 422 }
    );
  }

  if (!password || password.trim().length < 7) {
    return Response.json(
      {
        message:
          'Invalid input - password should also be at least 7 characters long.',
      },
      { status: 422 }
    );
  }

  try {
    const result = await insertUserToDB(email, password);

    if (result.code === 422) {
      return Response.json({ message: result.message }, { status: 422 });
    }

    return Response.json(
      { message: 'Created user!', userId: result.insertedId },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error creating user:', err);
    return Response.json(
      { message: 'User creation failed.' },
      { status: 500 }
    );
  }
}

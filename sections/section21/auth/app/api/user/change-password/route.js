import { getServerSession } from 'next-auth/next';

import { getUserByEmail, updateUserPassword } from '../../../../lib/db';
import { verifyPassword } from '../../../../lib/auth';

export async function PATCH(req) {
  const session = await getServerSession();

  if (!session) {
    return Response.json({ message: 'Not authenticated!' }, { status: 401 });
  }

  const email = session.user.email;

  if (!email) {
    return Response.json({ message: 'No user email found!' }, { status: 404 });
  }

  const request = await req.json();
  const oldPwd = request.oldPassword;
  const newPwd = request.newPassword;

  const user = await getUserByEmail(email);

  if (!user) {
    return Response.json({ message: 'User not found.' }, { status: 404 });
  }

  const currentPwd = user.password;
  const isVerified = await verifyPassword(oldPwd, currentPwd);

  if (!isVerified) {
    return Response.json({ message: 'Invalid password.' }, { status: 403 });
  }

  const result = await updateUserPassword(email, newPwd);

  if (!result) {
    return Response.json(
      { message: 'Could not update password.' },
      { status: 500 }
    );
  }

  return Response.json({ message: 'Password updated!' }, { status: 200 });
}

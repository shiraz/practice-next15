import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../../lib/auth';
import { getUserByEmail } from '../../../../lib/db';

const handler = NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, pwd } = credentials;

        if (!email || !email.includes('@')) {
          throw new Error('Invalid input - email should be valid.');
        }

        const user = await getUserByEmail(email);

        if (!user) {
          throw new Error(`No user found with the given email, ${email}`);
        }

        const isValid = await verifyPassword(pwd, user.password);

        if (!isValid) {
          throw new Error('Login failed. Please check the credentials.');
        }

        return {
          email: user.email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
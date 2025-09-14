import { hash } from 'bcryptjs';

export async function hashPassword(pwd) {
  const hashedPwd = await hash(pwd, 12);
  return hashedPwd;
}

import { compare, hash } from 'bcryptjs';

export async function hashPassword(pwd) {
  const hashedPwd = await hash(pwd, 12);
  return hashedPwd;
}

export async function verifyPassword(pwd, hashedPwd) {
  const isValid = await compare(pwd, hashedPwd);
  return isValid;
}

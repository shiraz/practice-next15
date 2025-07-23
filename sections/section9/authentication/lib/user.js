import db from './db.js';

export function createUser(email, password) {
  const result = db
    .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    .run(email, password);
  return result;
}

export function getUserByEmail(email) {
  const result = db
    .prepare('SELECT * FROM users WHERE email = ?')
    .get(email);
  return result;
}
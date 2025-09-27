import { MongoClient } from 'mongodb';

import { hashPassword } from './auth';

export async function getClientAndDB() {
  const user = process.env.MONGODB_USER;
  const pwd = process.env.MONGODB_PWD;

  try {
    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${pwd}@cluster0.j5jsogq.mongodb.net/next-auth?retryWrites=true&w=majority&appName=Cluster0`
    );

    const db = client.db();
    return { client, db };
  } catch (err) {
    console.error('Failed to connect to the Next-Auth MongoDB.', err);
    throw err;
  }
}

export async function getUserByEmail(email) {
  const { client, db } = await getClientAndDB();
  const existingUser = await db.collection('users').findOne({ email });
  client.close();
  return existingUser;
}

export async function insertUserToDB(email, pwd) {
  const { client, db } = await getClientAndDB();

  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    client.close();
    return { code: 422, message: 'User exists already!' };
  }

  const user = {
    email,
    password: await hashPassword(pwd),
  };

  const result = await db.collection('users').insertOne(user);
  client.close();
  return result;
}

export async function updateUserPassword(email, newPwd) {
  const { client, db } = await getClientAndDB();

  const hashedPassword = await hashPassword(newPwd);

  const result = await db
    .collection('users')
    .updateOne({ email }, { $set: { password: hashedPassword } });

  client.close();
  return result;
}

import { MongoClient } from 'mongodb';

export async function getClientAndDB() {
  const user = process.env.MONGODB_USER;
  const pwd = process.env.MONGODB_PWD;

  try {
    const client = await MongoClient.connect(
      `mongodb+srv://${user}:${pwd}@cluster0.j5jsogq.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0`
    );

    const db = client.db();
    return { client, db };
  } catch (err) {
    console.error('Failed to connect to the database.', err);
    throw err;
  }
}

export async function insertMessageToDB(message) {
  const { client, db } = await getClientAndDB();
  const result = await db.collection('messages').insertOne(message);
  client.close();
  return result;
}

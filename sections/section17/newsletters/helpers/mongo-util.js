import { MongoClient } from 'mongodb';

export async function getClientAndDB(dbName) {
  const user = process.env.MONGODB_USER;
  const pwd = process.env.MONGODB_PWD;

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${pwd}@cluster0.j5jsogq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
  );

  const db = client.db();

  return { client, db };
}

export async function insertDocument(dbName, collection, document) {
  const { client, db } = await getClientAndDB(dbName);
  const result = await db.collection(collection).insertOne(document);
  client.close();
  return result;
}

export async function getAllDocuments(dbName, collection, sort, filter = {}) {
  const { client, db } = await getClientAndDB(dbName);
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  client.close();
  return documents;
}

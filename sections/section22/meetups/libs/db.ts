import { Db, InsertOneResult, MongoClient, ObjectId } from 'mongodb';

import type MeetupData from '@/types/MeetupData';

interface MeetupWithId extends MeetupData {
  id: string; // Converted from _id for frontend
}

interface DatabaseConnection {
  client: MongoClient;
  db: Db;
}

export async function getClientAndDB(): Promise<DatabaseConnection> {
  const user = process.env.MONGODB_USER;
  const pwd = process.env.MONGODB_PWD;

  if (!user || !pwd) {
    throw new Error('Missing MongoDB credentials');
  }

  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${pwd}@cluster0.j5jsogq.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0`
  );

  const db = client.db();
  return { client, db };
}

export async function insertMeetup(meetupData: MeetupData): Promise<InsertOneResult<MeetupData>> {
  const { client, db } = await getClientAndDB();
  const result = await db.collection<MeetupData>('meetups').insertOne(meetupData);
  client.close();
  console.info('Meetup inserted successfully', result);
  return result;
}

export async function getAllMeetups(): Promise<MeetupWithId[]> {
  const { client, db } = await getClientAndDB();
  const meetups = await db.collection<MeetupData>('meetups').find().toArray();
  client.close();
  
  // Convert _id to id and exclude _id from response
  return meetups.map(({ _id, ...meetup }) => ({
    ...meetup,
    id: _id.toString()
  }));
}

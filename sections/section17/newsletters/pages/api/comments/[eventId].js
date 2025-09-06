import { insertDocument, getAllDocuments } from '../../../helpers/mongo-util';

export default async function handler(req, res) {
  const { eventId } = req.query;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument('events', 'comments', comment);
    } catch (err) {
      res.status(500).json({ message: 'Inserting comment failed!' });
      return;
    }

    comment._id = result.insertedId;

    console.log(comment);
    res.status(201).json({ message: 'Comment added!', comment });
  }

  if (req.method === 'GET') {
    // const dummyList = [
    //   {
    //     id: 'c1',
    //     email: 'test@test.com',
    //     name: 'Test Name',
    //     text: 'Test Comment',
    //   },
    //   {
    //     id: 'c1',
    //     email: 'test2@test.com',
    //     name: 'Test Name 2',
    //     text: 'Test Comment 2',
    //   },
    // ];

    const comments = await getAllDocuments(
      'events',
      'comments',
      { _id: -1 },
      { eventId: eventId }
    );

    res.status(200).json({ comments: comments });
  }
}

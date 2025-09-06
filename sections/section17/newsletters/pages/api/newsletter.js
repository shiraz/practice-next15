import { insertDocument } from '../../helpers/mongo-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (
      !email ||
      !email.includes('@') ||
      !email.includes('.') ||
      email.trim().length < 7
    ) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let result;

    try {
      result = await insertDocument('newsletter', 'emails', { email: email });
    } catch (err) {
      res.status(500).json({ message: 'Inserting data in emails failed!' });
      return;
    }

    console.log('Email saved', email);
    res.status(201).json({ message: 'Signed up!' });
  }
}

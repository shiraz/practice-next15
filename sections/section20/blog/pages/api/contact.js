import { insertMessageToDB } from '../../helpers/mongo-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body;

    // Basic validation
    if (
      !email ||
      !email.includes('@') ||
      !message ||
      message.trim() === '' ||
      !name ||
      name.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input detected.' });
      return;
    }

    const newMessage = {
      email,
      message,
      name,
    };

    let result;

    try {
      result = await insertMessageToDB(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    res
      .status(201)
      .json({ message: 'Message sent successfully!', message: newMessage });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

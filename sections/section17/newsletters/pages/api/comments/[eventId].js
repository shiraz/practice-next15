export default function handler(req, res) {
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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(comment);
    res.status(201).json({ message: 'Comment added!', comment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        email: 'test@test.com',
        name: 'Test Name',
        text: 'Test Comment',
      },
      {
        id: 'c1',
        email: 'test2@test.com',
        name: 'Test Name 2',
        text: 'Test Comment 2',
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

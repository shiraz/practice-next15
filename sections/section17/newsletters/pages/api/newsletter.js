export default function handler(req, res) {
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

    console.log('Email saved', email);
    res.status(201).json({ message: 'Signed up!' });
  }
}

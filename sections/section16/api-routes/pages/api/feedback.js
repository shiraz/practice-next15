import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export default function handler(req, res) {
  if (req?.method === 'POST') {
    const { email, feedback } = req?.body || {};

    console.log('Email:', email);
    console.log('Feedback:', feedback);

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text: feedback,
    };

    // Store in a file.
    const filePath = buildFeedbackPath();
    // Read the file.
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    // Update the existing JSON object in the file.
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });// GET
  }
}

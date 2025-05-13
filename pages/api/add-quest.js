import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { newQuest } = req.body;
      const filePath = path.join(process.cwd(), 'pages/components', 'quests.json');
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      existingData.quests.push(newQuest);
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
      res.status(201).json({ message: 'Quest added successfully' });
    } catch (error) {
      console.error('Error adding quest:', error);
      res.status(500).json({ error: 'Failed to add quest' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
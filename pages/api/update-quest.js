import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { questId, newCompletionStatus } = req.body;
      const filePath = path.join(process.cwd(), 'pages/components', 'quests.json');
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (questId - 1 === -1) {
        return res.status(404).json({ error: `Quest not found ${questId - 1}, ${questId}` });
      }
      existingData.quests[questId - 1].complete = newCompletionStatus;
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
      res.status(200).json({ message: 'Quest completion status updated successfully' });
    } catch (error) {
      console.error('Error updating quest completion status:', error);
      res.status(500).json({ error: 'Failed to update quest completion status serv' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
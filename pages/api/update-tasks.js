// pages/api/update-tasks.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { task, value } = req.body;
      const filePath = path.join(process.cwd(), 'pages/components', 'tasks.json');
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      existingData.tasks[task] = value;
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
      res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Failed to update task' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
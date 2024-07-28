const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, content: 'This is a sample note' },
  { id: 2, content: 'This is another note' }
];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    content: req.body.content
  };
  notes.push(newNote);
  res.json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  notes = notes.filter(note => note.id !== noteId);
  res.status(204).end();
});

const PORT = 7070;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
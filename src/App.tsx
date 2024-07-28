import React, { useEffect, useState } from 'react';
import { getNotes, addNote, deleteNote } from './services/noteService';
import './App.css';

interface Note {
  id: number;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    if (newNote.trim()) {
      try {
        await addNote(newNote);
        setNewNote('');
        fetchNotes();
      } catch (error) {
        console.error('Failed to add note:', error);
      }
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Notes</h1>
      <div className="input-container">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a note"
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <button className="refresh-button" onClick={fetchNotes}>Refresh</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}
            <button className="delete-button" onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
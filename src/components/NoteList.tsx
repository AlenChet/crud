import React from 'react';
import { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
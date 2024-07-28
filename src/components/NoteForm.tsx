import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter note"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
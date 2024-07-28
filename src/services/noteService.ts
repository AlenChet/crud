import axios from 'axios';

const API_URL = 'http://localhost:7070/notes';

export const getNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addNote = async (content: string) => {
  const response = await axios.post(API_URL, { id: 0, content });
  return response.data;
};

export const deleteNote = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
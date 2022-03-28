import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

export const UpdateMovie = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (id === '' || id === '') {
        return;
      }
      const docRef = doc(db, 'movies', id);
      await updateDoc(docRef, { name });
      setId('');
      setName('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h4>UpdateMovie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Movie id: </label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label htmlFor="name">Movie name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update movie</button>
      </form>
    </div>
  );
};

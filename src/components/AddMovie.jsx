import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { moviesCollectionRef } from '../lib/firestore.collections';

export const AddMovie = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (name === '') {
        return;
      }
      await addDoc(moviesCollectionRef, { name });
      setName('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h4>AddMovie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Movie name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add movie</button>
      </form>
    </div>
  );
};

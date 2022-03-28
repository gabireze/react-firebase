import { useEffect, useState } from 'react';
import { doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { moviesCollectionRef } from '../lib/firestore.collections';
import { db } from '../lib/init-firebase';

export const RealtimeListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
      setMovies(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, 'movies', id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h4>RealtimeListMovies</h4>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.data.name} ({movie.id})
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import { moviesCollectionRef } from '../lib/firestore.collections';
import { db } from '../lib/init-firebase';

export const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const getMovies = async () => {
    try {
      const querySnapshot = await getDocs(moviesCollectionRef);
      const movies = querySnapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setMovies(movies);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, 'movies', id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h4>ListMovies</h4>
      <button onClick={() => getMovies()}>Refresh movies</button>
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

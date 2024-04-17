import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <h2>Movies Screen</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesScreen;

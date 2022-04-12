import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Components/Search';
import MoviesWrapper from '../Components/MoviesWrapper';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=50', { signal: abortController.signal })
      .then((data) => setMovies(data.data.data.movies))
      .catch(console.log);

    return () => abortController.abort();
  }, []);

  return (
    <div className="container">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MoviesWrapper movies={movies} />
    </div>
  );
}

export default Home;

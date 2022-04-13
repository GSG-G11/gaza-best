import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Search from '../Components/Search';
import MoviesWrapper from '../Components/MoviesWrapper';
import MovieContext from '../Contexts';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const { setLoading } = useContext(MovieContext);

  useEffect(() => {
    const abortController = new AbortController();

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=50', { signal: abortController.signal })
      .then((data) => {
        setMovies(data.data.data.movies);
        setLoading(false);
      })
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

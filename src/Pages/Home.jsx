import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Search from '../Components/Search';
import MoviesWrapper from '../Components/MoviesWrapper';
import MovieContext from '../Contexts';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieFound, setMovieFound] = useState(true);
  const { setLoading } = useContext(MovieContext);

  useEffect(() => {
    const abortController = new AbortController();

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=50', { signal: abortController.signal })
      .then((data) => {
        setMovies(data.data.data.movies);
        setLoading(false);
      });

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${searchTerm}`, { signal: abortController.signal })
      .then((data) => {
        setLoading(false);
        if (!data.data.data.movies) {
          setMovieFound(false);
          return;
        }
        setMovies(data.data.data.movies);
        setMovieFound(true);
      });

    return () => abortController.abort();
  }, [searchTerm]);

  return (
    <div className="container">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MoviesWrapper movies={movies} movieFound={movieFound} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;

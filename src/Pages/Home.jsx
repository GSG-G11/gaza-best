import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, MoviesWrapper, Container } from '../Components';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieFound, setMovieFound] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = `https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${searchTerm}`;
    const cancelTokenSource = axios.CancelToken.source();

    axios.get(api, { cancelToken: cancelTokenSource.token })
      .then((data) => {
        setLoading(false);
        if (!data.data.data.movies) {
          setMovieFound(false);
          return;
        }
        setMovies(data.data.data.movies);
        setMovieFound(true);
      });

    return () => cancelTokenSource.cancel();
  }, [searchTerm]);

  return (
    <Container>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setLoading={setLoading}
      />
      <MoviesWrapper
        movies={movies}
        movieFound={movieFound}
        searchTerm={searchTerm}
        loading={loading}
      />
    </Container>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search, MoviesWrapper, Container, ScrollUp,
} from '../Components';

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
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        setAppear(true);
      } else {
        setAppear(false);
      }
    });
  }, []);
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
      { appear && <ScrollUp />}
    </Container>
  );
}

export default Home;

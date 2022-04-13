import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Background } from './Components';
import { Home, Movie, NotFound } from './Pages';
import MovieContext from './Contexts';

function App() {
  const [movieId, setMovieId] = useState(0);
  const [loading, setLoading] = useState(true);
  const movieMemo = useMemo(() => ({
    movieId, setMovieId, loading, setLoading,
  }), [loading]);

  return (
    <MovieContext.Provider value={movieMemo}>
      <Router>
        <Nav />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={movieId ? <Movie movieId={movieId} /> : <NotFound />} />
        </Routes>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;

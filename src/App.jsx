import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Background } from './Components';
import { Home, Movie, NotFound } from './Pages';
import MovieContext from './Contexts';

function App() {
  const [movie, setMovie] = useState({});
  const movieMemo = useMemo(() => ({ movie, setMovie }), []);

  return (
    <MovieContext.Provider value={movieMemo}>
      <Router>
        <Nav />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={movie.name ? <Movie /> : <NotFound />} />
        </Routes>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;

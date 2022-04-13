import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Background } from './Components';
import { Home, Movie, NotFound } from './Pages';
import MovieContext from './Contexts';

function App() {
  const [movie, setMovie] = useState(0);
  const movieMemo = useMemo(() => ({ movie, setMovie }), []);

  return (
    <MovieContext.Provider value={movieMemo}>
      <Nav />
      <Background />
      {/* <ScrollUp /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie movie={movie} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MovieContext.Provider>
  );
}

export default App;

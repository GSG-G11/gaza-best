import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Background, ScrollUp } from './Components';
import { Home, Movie, NotFound } from './Pages';
import MovieContext from './Contexts';

function App() {
  const [movie, setMovie] = useState(0);
  const [appear, setAppear] = useState(false);
  const movieMemo = useMemo(() => ({ movie, setMovie }), []);

  const toggleScrollBtn = () => {
    if (window.scrollY >= 50) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollBtn);
    return () => window.removeEventListener('scroll', toggleScrollBtn);
  }, []);

  return (
    <MovieContext.Provider value={movieMemo}>
      <Nav />
      <Background />
      <ScrollUp appear={appear} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie movie={movie} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MovieContext.Provider>
  );
}

export default App;

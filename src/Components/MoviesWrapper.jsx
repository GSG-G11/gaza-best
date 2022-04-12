import React from 'react';
import propTypes from 'prop-types';

function MoviesWrapper(props) {
  const { movies } = props;

  return (
    <>
      {
        movies.map((movie) => (
          <div key={movie.title}>
            <span>{movie.title}</span>
          </div>
        ))
      }
    </>
  );
}

MoviesWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movies: propTypes.array.isRequired,
};

export default MoviesWrapper;

import React from 'react';
import PropTypes from 'prop-types';

function MovieNotFound({ movie }) {
  return (
    <div className="movie-not-found">
      <span>
        {movie}
        {' '}
      </span>
      was not found in our database
    </div>
  );
}

MovieNotFound.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieNotFound;

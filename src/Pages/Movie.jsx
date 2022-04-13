import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  const { movieId } = props;

  return (
    <div>{movieId}</div>
  );
}

Movie.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Movie;

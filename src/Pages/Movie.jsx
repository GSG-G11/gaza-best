import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  const { movie } = props;

  console.log(movie);

  return (
    <div>hello, world</div>
  );
}

Movie.propTypes = {
  movie: PropTypes.objectOf().isRequired,
};

export default Movie;

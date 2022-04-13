/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Loader from './Loader';
import MovieNotFound from './MovieNotFound';

function MoviesWrapper(props) {
  const {
    movies, movieFound, searchTerm, loading,
  } = props;

  return (
    <div className="cards">
      {
        !loading
          ? movieFound
            ? movies.map((movie) => <Card key={movie.id} movieInfo={movie} />)
            : <MovieNotFound movie={searchTerm} />
          : <Loader />
      }
    </div>
  );
}

MoviesWrapper.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf()),
  movieFound: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

MoviesWrapper.defaultProps = {
  movies: [],
};

export default MoviesWrapper;

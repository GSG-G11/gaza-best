/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Loader from './Loader';
import MovieNotFound from './MovieNotFound';
import MovieContext from '../Contexts';

function MoviesWrapper(props) {
  const { movies, movieFound, searchTerm } = props;
  const { loading } = useContext(MovieContext);

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
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  movieFound: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default MoviesWrapper;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Loader from './Loader';
import MovieContext from '../Contexts';

function MoviesWrapper(props) {
  const { movies } = props;
  const { loading } = useContext(MovieContext);

  return (
    <div className="cards">
      {
        !loading
          ? movies.map((movie) => <Card key={movie.id} movieInfo={movie} />)
          : <Loader />
      }
    </div>
  );
}

MoviesWrapper.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default MoviesWrapper;

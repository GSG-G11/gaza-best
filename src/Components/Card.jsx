import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import MovieContext from '../Contexts';
import defaultPoster from '../Assets/Images/default-photo.jpg';

function Card({ movieInfo }) {
  const {
    title_english: titleEnglish,
    title,
    medium_cover_image: image,
    imdb_code: imdb,
    year,
    rating,
    genres,
    id,
  } = movieInfo;

  const navigate = useNavigate();
  const { setMovieId } = useContext(MovieContext);

  return (
    <div className="card-top">
      <div className="card">
        <img src={image} onError={(e) => { e.target.src = `${defaultPoster}`; }} alt="title" />
        <div className="txt">
          <i className="fas fa-star star" />
          <div className="rating-wrap">
            <span className="rate">{`${rating ? `${rating} / 10` : 'Not Rated Yet'}`}</span>
          </div>
          <div className="genres">
            {genres.map((genre) => <span key={genre}>{genre}</span>)}
          </div>
          <Button
            className="download"
            onClick={() => {
              setMovieId(id);
              navigate('/movie');
            }}
          >
            Details
          </Button>
        </div>
      </div>
      <div className="info">
        <div className="footer">
          <a className="title" href={`https://www.imdb.com/title/${imdb}`} target="_blank" title={title} rel="noreferrer">
            {titleEnglish.length ? titleEnglish : title}
          </a>
          <p className="year">{year}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  movieInfo: PropTypes.objectOf().isRequired,
  title_english: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  imdb_code: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;

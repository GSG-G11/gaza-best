import React from 'react';
import propTypes from 'prop-types';

function Card(props) {
  const {
    title_english: title, medium_cover_image: image, year, rating, genres,
  } = props;

  return (
    <div className="card-top">
      <div className="card">
        <img src={image} alt="title" />
        <div className="txt">
          <i className="fas fa-star star" />
          <div className="rating-wrap">
            <span className="rate">{`${rating || 'Not Rated Yet'}`}</span>
          </div>
          <div className="genres">
            {genres.map((genre) => <span key={genre}>genre</span>)}
          </div>
          {/*  */}
        </div>
      </div>

    </div>
  );
}

Card.prototype = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  rating: propTypes.any.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Card;

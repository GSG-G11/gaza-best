import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from '../Components';
import defaultPoster from '../Assets/Images/default-photo.jpg';

function Movie({ movie }) {
  const {
    id,
    large_cover_image: image,
    title,
    year,
    genres,
    torrents,
    rating,
    summary,
    yt_trailer_code: trailerCode,
  } = movie;

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate('/');
  }, []);

  return (
    <div className="movie-details-page">
      <Container>
        <div className="image-download">
          <img src={image} alt={title} onError={(e) => { e.target.src = defaultPoster; }} />
          <div className="image-btns">
            <a href={torrents && torrents[0].url}>Download</a>
            <a href={`https://www.youtube.com/watch?v=${trailerCode}`} target="_blank" rel="noreferrer">Watch Trailer</a>
          </div>
        </div>
        <div className="movie-details">
          <h2>{title}</h2>
          <div className="stats">
            <p>{year}</p>
            <p>{genres && genres.join(' / ')}</p>
          </div>
          <div className="movie-details__info-footer">
            <p className="available-in">
              <span>Available in: </span>
              <span className="links">
                {torrents && torrents.map((torrent) => (
                  <a className="quality-link" href={torrent.url}>
                    {torrent.quality}
                    .WEB
                  </a>
                ))}
              </span>
            </p>
            <p className="movie-details__info-footer__ratings">
              <span>Rating:</span>
              {' '}
              {rating || 'Not Rated Yet'}
            </p>
            <p className="movie-details__info-footer__story">
              <span>Story:</span>
              {' '}
              {summary || 'Summary Not Available Yet'}
            </p>
          </div>
        </div>
      </Container>
      <Link to="/" className="go-to-home">Home</Link>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    large_cover_image: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    yt_trailer_code: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    torrents: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
  }),
};

Movie.defaultProps = {
  movie: {},
};

export default Movie;

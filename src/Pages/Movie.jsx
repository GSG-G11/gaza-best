import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  const { movie } = props;
  const {
    medium_cover_image: image,
    title,
    year,
    genres,
    torrents,
    rating,
    summary,
    yt_trailer_code: trailerCode,
  } = movie;

  return (
    <div className="container">
      <div className="image-download">
        <img src={image} alt={title} />
        <a href={torrents[0].url}>Download</a>
        <a href={`https://www.youtube.com/watch?v=${trailerCode}`}>Watch Trailer</a>
      </div>
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{genres.join(' / ')}</p>
        <div>
          <p>Available in :</p>
          { torrents.map((torrent) => (
            <a href={torrent.url}>
              {torrent.quality}
            </a>
          ))}
          <p>{rating}</p>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.objectOf().isRequired,
};

export default Movie;

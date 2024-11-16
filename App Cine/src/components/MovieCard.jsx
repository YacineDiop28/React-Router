import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text"><strong>Rating: {movie.rating} / 10</strong></p>
        <a href={`/movies/${movie.title}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
};

export default MovieCard;

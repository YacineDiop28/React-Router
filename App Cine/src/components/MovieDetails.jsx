// MovieDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <h2>Movie not found</h2>;
    }

    return (
        <div className="movie-details-page">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>

            {/* Bande-annonce intégrée */}
            <div className="trailer-container">
                <iframe
                    width="560"
                    height="315"
                    src={movie.trailerURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Bouton pour retourner à la page d'accueil */}
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default MovieDetails;

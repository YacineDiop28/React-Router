// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
            posterURL: 'https://example.com/inception.jpg',
            rating: 8.8,
            trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
        },
        {
            id: 2,
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            posterURL: 'https://example.com/interstellar.jpg',
            rating: 8.6,
            trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E'
        },
        // Ajoutez d'autres films ici
    ]);

    return (
        <Router>
            <div className="app">
                <h1>My Movie Collection</h1>
                <Routes>
                    {/* Route pour la page d'accueil avec la liste de films */}
                    <Route path="/" element={<MovieList movies={movies} />} />
                    
                    {/* Route pour la page de description d'un film */}
                    <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

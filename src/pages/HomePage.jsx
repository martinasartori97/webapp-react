import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function HomePage() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:3001/api/movies`)
            .then((response) => response.json())
            .then((data) => setMovies(data.movies))

            .catch((error) => console.error("Errore:", error));
    }, []);



    return (

        <div className="container">
            <h1 className="my-4">home</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {
                    movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">director: {movie.director}</p>
                                    <p className="card-text">genre: {movie.genre}</p>
                                    <p className="card-text">release_year: {movie.release_year}</p>
                                    <p className="card-text">abstract: {movie.abstract}</p>
                                    <p className="card-text">image: {movie.image}</p>
                                    <p className="card-text">created_at: {movie.created_at}</p>
                                    <p className="card-text">updated_at: {movie.updated_at}</p>
                                    <Link to={`/films/${movie.id}`} className="btn btn-primary">
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )





}
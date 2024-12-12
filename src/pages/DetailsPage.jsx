import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
const movies = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2010,
        abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        image: null,
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        release_year: 1972,
        abstract: "The story of a powerful Italian-American crime family and their struggles.",
        image: null,
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    },
    {
        id: 3,
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance",
        release_year: 1997,
        abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
        image: null,
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    },
    {
        id: 4,
        title: "The Matrix",
        director: "The Wachowskis",
        genre: "Action",
        release_year: 1999,
        abstract: "A hacker discovers the truth about his reality and his role in the war against its controllers.",
        image: null,
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    },
    {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2014,
        abstract: "A team of explorers travels through a wormhole in space to save humanity.",
        image: null,
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    }
];

export default function DetailsPage() {

    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <p>Film non trovato.</p>;
    }
    return (
        <div className="container">
            <h1 className="my-4">{movie.title}</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Director: {movie.director}</h5>
                    <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                    <p className="card-text"><strong>Release Year:</strong> {movie.release_year}</p>
                    <p className="card-text"><strong>Abstract:</strong> {movie.abstract}</p>
                    <p className="card-text"><strong>Created At:</strong> {new Date(movie.created_at).toLocaleDateString()}</p>
                    <p className="card-text"><strong>Updated At:</strong> {new Date(movie.updated_at).toLocaleDateString()}</p>
                    {/* Se hai l'immagine, puoi aggiungere un'immagine */}
                    {movie.image && <img src={movie.image} alt={movie.title} />}
                </div>
            </div>
        </div>
    );
}





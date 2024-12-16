import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';



export default function DetailsPage() {

    const { id } = useParams();

    console.log(id);

    const [movie, setMovie] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:3001/api/movies/${id}`)
            .then(response => response.json())
            .then(data => { setMovie(data.movie) })

            .catch(err => console.log("Errore:", err));
    }, [id]);


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
                    {movie.image && <img src={movie.image} alt={movie.title} />}
                </div>
            </div>
        </div>


    );



}




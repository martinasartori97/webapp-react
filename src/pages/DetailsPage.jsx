import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader"



export default function DetailsPage() {

    const { id } = useParams();

    const { loading, setLoading } = useContext(GlobalContext)

    console.log(id);

    const [movie, setMovie] = useState(null);
    const [review, setReview] = useState("")

    useEffect(() => {

        setLoading(true);

        fetch(`http://localhost:3001/api/movies/${id}`)
            .then(response => response.json())
            .then(data => { setMovie(data.movie) })
            .catch(err => console.log("Errore:", err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (review) {
            console.log("Recensione inviata:", review);
            setReview("");
        }
    };


    if (!movie) {
        return <p>Film non trovato.</p>;
    }
    return (
        <>
            {loading ? <Loader /> : (
                <>
                </>
            )}





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


                {/* form per le recensioni */}
                <div className="mt-5">
                    <h3>Leave a Review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                rows="3"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                </div>
            </div>

        </>
    );



}





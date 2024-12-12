import { Link } from 'react-router-dom';
export default function HomePage() {



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

    return (

        <div className="container">
            <h1 className="my-4">home</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {
                    movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.titolo}</h5>
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
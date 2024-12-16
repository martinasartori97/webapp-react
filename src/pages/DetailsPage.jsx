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








// const ReviewForm = ({ onSubmit }) => {
//     const [formData, setFormData] = useState({ name: '', vote: '', text: '' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.name && formData.vote && formData.text) {
//             onSubmit(formData);
//             setFormData({ name: '', vote: '', text: '' });
//         } else {
//             alert('compila tutti i campi.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Nome:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Inserisci il tuo nome"
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="vote">Voto (1-5):</label>
//                 <input
//                     type="number"
//                     id="vote"
//                     name="vote"
//                     value={formData.vote}
//                     onChange={handleChange}
//                     min="1"
//                     max="5"
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="text">Recensione:</label>
//                 <textarea
//                     id="text"
//                     name="text"
//                     value={formData.text}
//                     onChange={handleChange}
//                     placeholder="Scrivi la tua recensione..."
//                     rows="4"
//                     required
//                 />
//             </div>
//             <button type="submit">Invia Recensione</button>
//         </form>
//     );
// };



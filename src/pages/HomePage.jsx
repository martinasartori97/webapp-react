export default function HomePage() {



    const movies = [
        {
            id: 1,
            titolo: "Pulp Fiction",
            regista: "Quentin Tarantino",
            anno: 1994
        },
        {
            id: 2,
            titolo: "Il Padrino",
            regista: "Francis Ford Coppola",
            anno: 1972
        },
        {
            id: 3,
            titolo: "Inception",
            regista: "Christopher Nolan",
            anno: 2010
        },
        {
            id: 4,
            titolo: "Fight Club",
            regista: "David Fincher",
            anno: 1999
        },
        {
            id: 5,
            titolo: "Matrix",
            regista: "Lana Wachowski, Lilly Wachowski",
            anno: 1999
        },
        {
            id: 6,
            titolo: "C'era una volta in America",
            regista: "Sergio Leone",
            anno: 1984
        },
        {
            id: 7,
            titolo: "Forrest Gump",
            regista: "Robert Zemeckis",
            anno: 1994
        },
        {
            id: 8,
            titolo: "Il Cavaliere Oscuro",
            regista: "Christopher Nolan",
            anno: 2008
        },
        {
            id: 9,
            titolo: "La La Land",
            regista: "Damien Chazelle",
            anno: 2016
        },
        {
            id: 10,
            titolo: "Parasite",
            regista: "Bong Joon-ho",
            anno: 2019
        }
    ];

    return (

        <div className="container">
            <h1 className="my-4">home</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {
                    movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.titolo}</h5>
                                    <p className="card-text">Regista: {movie.regista}</p>
                                    <p className="card-text">Anno: {movie.anno}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )





}
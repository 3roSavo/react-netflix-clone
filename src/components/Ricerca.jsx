const Ricerca = (props) => {


    return (
        <div>
            {props.films === undefined &&
                <div className=" text-light mb-4">
                    <h3 className="text-light">Risultati ricerca<i className="bi bi-search icons ms-3 fs-4"></i></h3>
                    Nessun risultato :(
                </div>
            }

            {props.films !== undefined &&
                <div>
                    {props.films.length > 0 && <h3 className="text-light mb-3">Risultati ricerca<i className="bi bi-search icons ms-3 fs-4"></i></h3>}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mb-4">
                        {props.films.map((movie) => {
                            return (
                                <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                                    <img
                                        className="img-fluid"
                                        style={{ cursor: "pointer", height: "300px" }}
                                        src={movie.Poster}
                                        alt="movie-cover"
                                    />
                                    <p className="text-light mt-2" style={{ fontSize: "18px" }}>{movie.Title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    )
}
export default Ricerca
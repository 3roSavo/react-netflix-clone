const Ricerca = (props) => {


    return (
        <div>
            {props.films === undefined && <div className=" text-light mb-4">Nessun risultato :(</div>}

            {props.films !== undefined && <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
                {props.films.map((movie) => {
                    return (
                        <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                            <img
                                className="img-fluid"
                                src={movie.Poster}
                                alt="movie-cover"
                            />
                            <h6 className="text-light">{movie.Title}</h6>
                        </div>
                    );
                })}
            </div>}
        </div>
    )
}
export default Ricerca
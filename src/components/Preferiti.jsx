/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";

class Preferiti extends Component {
  state = {
    iMieiPreferiti: {
      Search: [],
    },
    isLoading: true,
    isError: false,
  };

  getMyFavorites = () => {
    fetch("http://www.omdbapi.com/?apikey=846ed30e&s=star%20wars")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((array) => {
        console.log(array);
        this.setState({
          iMieiPreferiti: array,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.getMyFavorites();
  }

  render() {
    return (
      <>

        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {this.state.isError && (
          <div>
            <Alert variant="danger" className="text-center bg-danger">
              Errore nel caricamento dei film
            </Alert>
          </div>
        )}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.iMieiPreferiti.Search.map((movie) => {
            return (
              <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                <img
                  className="img-fluid"
                  src={movie.Poster}
                  alt="movie picture"
                />
                <h6 className="text-light">{movie.Title}</h6>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Preferiti;

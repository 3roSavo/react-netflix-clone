import { Component } from "react";

class Preferiti extends Component {
  state = {
    iMieiPreferiti: {
      Search: [],
    },
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getMyFavorites();
  }

  render() {
    return (
      <>
        <h4>Preferiti</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.iMieiPreferiti.Search.map((movie) => {
            return (
              <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                <img
                  className="img-fluid"
                  src={movie.Poster}
                  alt="movie picture"
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Preferiti;

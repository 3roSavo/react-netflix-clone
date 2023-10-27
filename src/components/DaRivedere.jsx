import { Component } from "react";

class DaRivedere extends Component {
  state = {
    iMieiDaRivedere: {
      Search: [],
    },
  };

  getMyRewatch = () => {
    fetch("http://www.omdbapi.com/?apikey=846ed30e&s=lord%20of%20the%20rings")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((obj) => {
        console.log(obj);
        this.setState({
          iMieiDaRivedere: obj,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getMyRewatch();
  }

  render() {
    return (
      <>
        <h4>Da rivedere</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.iMieiDaRivedere.Search.map((movie) => {
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
export default DaRivedere;

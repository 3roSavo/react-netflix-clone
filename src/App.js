import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ricerca from "./components/Ricerca";
import CaroselloFilm from "./components/CaroselloFilm";
import { useState } from "react";

function App() {


  const [searchedFilms, setSearchedFilm] = useState([])

  const setFilmsFunction = (array) => {
    setSearchedFilm(array)
  }


  return (
    <>
      {/* ------------------------------------------------------------------------------------------navbar qui -------------------------------------- */}

      <Navbar NetflixLogo={logo} filmsFunction={setFilmsFunction} />

      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>

        {/* Qui inserirò le 3 sezioni di film -------------------------------------------------------------------------*/}

        <Ricerca films={searchedFilms} />

        <h4>Preferiti</h4>
        {/*<Preferiti />*/}
        <CaroselloFilm urlSearch={"star%20wars"} number={"one"} />

        <h4>Da rivedere</h4>
        {/*<DaRivedere />*/}
        <CaroselloFilm urlSearch={"lord%20of%20the%20rings"} number={"two"} />

        <h4>Cult</h4>
        {/*<Cult />*/}
        <CaroselloFilm urlSearch={"back%20to%20the%20future"} number={"three"} />

        {/* Qui inserirò il footer ------------------------------------------------------------------------------------*/}

        <Footer />
      </div>
    </>
  );
}

export default App;

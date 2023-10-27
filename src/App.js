import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import Preferiti from "./components/Preferiti";
import DaRivedere from "./components/DaRivedere";
import Cult from "./components/Cult";

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f !important" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              style={{ width: "100px", height: "55px" }}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  My List
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </div>
        </div>
      </nav>
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

        {/* Qui inserirò le 3 sezioni di film */}

        <Preferiti />
        <DaRivedere />
        <Cult />

        {/* Qui inserirò le 3 sezioni di film */}

        <footer>
          <div className="row justify-content-center mt-5">
            <div className="col col-6">
              <div className="row">
                <div className="col mb-2">
                  <i className="bi bi-facebook footer-icon me-2"></i>
                  <i className="bi bi-instagram footer-icon me-2"></i>
                  <i className="bi bi-twitter-x footer-icon me-2"></i>
                  <i className="bi bi-youtube footer-icon"></i>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Audio and Subtitles
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Media Center
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Privacy
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Contact us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Audio Description
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Investor Relations
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Legal Notices
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Help Center
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Jobs
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Cookie Preferences
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">
                          Gift Cards
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Terms of Use
                        </a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">
                          Corporate Information
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2">
                  <button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3"
                  >
                    Service Code
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2 mt-2 copyright">
                  © 1997-2023 Netflix, Inc.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

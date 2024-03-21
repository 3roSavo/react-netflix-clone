import { useState } from "react";

const Navbar = (props) => {


  const [visible, setVisible] = useState(false)

  const [searchBar, setSearchBar] = useState("")

  const getFilm = () => {


    if (searchBar !== undefined && searchBar !== "") {

      fetch("http://www.omdbapi.com/?apikey=846ed30e&s=" + searchBar.replace(/ /g, "%20"), {    // logica trasformazione spazio in %20
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            return response.json()
              .then(errorData => { throw new Error(errorData.message) })
          }
        })
        .then(data => {
          props.filmsFunction(data.Search)
        })
        .catch(err => alert(err))
    }

  }



  return (
    <nav
      className="navbar navbar-expand-lg bg-dark position-fixed w-100 z-3 shadow-lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f !important" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={props.NetflixLogo}
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
                Profile
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {visible &&
              <form
                className=""
                onSubmit={(e) => {
                  e.preventDefault()
                  setVisible(false)
                  getFilm()
                }}
              >
                <input type="text"
                  id="input-search"
                  style={{ maxWidth: "180px" }}
                  placeholder="Titolo film/serieTV"
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                  autoFocus
                >
                </input>
              </form>
            }
            {!visible && <i className="bi bi-search icons" onClick={() => { setVisible(true) }}></i>}
            <div id="kids" className="fw-bold icons">
              KIDS
            </div>
            <i className="bi bi-bell icons mx-2"></i>
            <i className="bi bi-person-circle icons ms-2 me-3"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

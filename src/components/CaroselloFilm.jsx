import React, { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";

class CaroselloFilm extends Component {
    state = {
        iMieiPreferiti: {
            Search: [],
        },
        isLoading: true,
        isError: false,
    };

    componentDidMount() {
        this.getMyFavorites();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.iMieiPreferiti.Search !== this.state.iMieiPreferiti.Search) {
            this.addAdditionalSlides()
        }
    }

    getMyFavorites = () => {
        fetch("http://www.omdbapi.com/?apikey=846ed30e&s=" + this.props.urlSearch)
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

    // logica per far scorrere un elemento alla volta nel carosello con immagini multiple per slide https://www.codeply.com/p/0CWffz76Q9
    addAdditionalSlides = () => {
        let items = document.querySelectorAll(`.carousel-${this.props.number} .carousel-item`)

        //----------------------------------------------------logica  carosello
        items.forEach((el) => {
            let minPerSlide = 6
            // per i vari breakpoint semplicemente nascondo gli elementi superflui con display property in CSS
            // anzichè gestire minPerSlide ad ogni breakpoint
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    next = items[0]
                    //così facendo il carosello ricomincierà dal primo elemento quando avrà finito le slide
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    };

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

                {this.state.iMieiPreferiti.Search.length !== 0 && (
                    <div id={"recipeCarousel-" + this.props.number} className={"carousel slide carousel-" + this.props.number} /*data-bs-ride="carousel" data-bs-interval="10000"*/>
                        <div className="carousel-inner" role="listbox">
                            {this.state.iMieiPreferiti.Search.map((item, index) => (
                                <div className={"carousel-item justify-content-center justify-content-sm-start" + (index === 0 ? " active" : "")} key={index}>
                                    <div className="col-6 col-sm-4 col-md-3 col-xl-2  bg-transparent px-1 border-0">
                                        <div className="" >
                                            <img src={item.Poster} className="img-settings" alt="foto-carosello" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev w-auto" href={"#recipeCarousel-" + this.props.number} role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next w-auto" href={"#recipeCarousel-" + this.props.number} role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                )}
            </>
        );
    }
}

export default CaroselloFilm;

import { Container, Row, Col, Placeholder, Alert } from "react-bootstrap";
import "./Cards.css";
import { Component } from "react";

class Cards extends Component {
  state = {
    movies: [], // Stato iniziale vuoto
    isLoading: false, // Stato di caricamento
    error: null, // Stato per gli errori
  };

  componentDidMount() {
    const { searchQuery } = this.props;
    this.setState({ isLoading: true, error: null });

    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=bb9f5bdb`)
      .then((resp) => resp.json())
      .then((data) => {
        // Gestione errori specifica per la risposta di OMDB
        if (data.Response === "False") {
          throw new Error(data.Error || "Errore nella risposta");
        }
        this.setState({
          movies: (data.Search || []).slice(0, 6), // Prendo solo i primi 6 film
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
        this.setState({
          isLoading: false,
          error: error.message || "Errore durante il fetch",
        });
      });
  }

  render() {
    const { isLoading, movies, error } = this.state;

    if (isLoading) {
      return (
        <div>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
        </div>
      );
    }

    return (
      <Container fluid className="px-4">
        <h4>{this.props.title}</h4>

        {/* Se c'è un errore, mostra l'Alert */}
        {error && (
          <Alert key="danger" variant="danger">
            {error}{" "}
            <span className="errorCustom fw-bold text-dark">
              La preghiamo di ricontrollare i dati da lei messi o di riprovare più tardi.
            </span>
          </Alert>
        )}

        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 gx-2">
          {movies.map((movie) => (
            <Col key={movie.imdbID} className="colFilms mb-3 text-center">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Cards;

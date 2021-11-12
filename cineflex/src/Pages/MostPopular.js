import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';
import '../sass/custom.scss';

export const MostPopular = () => {
    const [movies, setMovies] = useState([]);

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US`
    )
    .then((res) => res.json())
    .then((data) => {
        if (!data.errors) {
            setMovies(data.results);   
        }else{
              <Alert variant="danger">Error</Alert>
        }
    })
    return (
        <Container fluid className="movie-container">
            <h1 className="page-title">Popular Movies</h1>
                {movies && (
                   <Row>
                       {movies.map(movieresults => (
                            <Col className="movie-grid" key={movieresults.id}>
                                <MovieCard movieresults={movieresults}/>
                            </Col>
                        ))}
                   </Row>       
                )}
        </Container>
    )
}

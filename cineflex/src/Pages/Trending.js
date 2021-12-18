import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';

export const Trending = () => {
    //const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [trending, setTrending] = useState([]);

    /*fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&region=GB`
    )
    .then((res) => res.json())
    .then((data) => {
        if (!data.errors) {
            setTrending(data.results);   
        }else{
            <Alert variant="danger">Error</Alert>
        }
    })*/

    return (
        <Container fluid className="movie-container">
            <h1 className="page-title">Trending</h1>
            {trending && (
                <Row>
                   {trending.map(movieresults => (
                        <Col className="movie-grid" key={movieresults.id}>
                            <MovieCard movieresults={movieresults}/>
                        </Col>
                    ))}
                </Row>    
            )}
        </Container>
    )
}

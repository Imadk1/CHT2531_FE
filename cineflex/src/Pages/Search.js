import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { Alert, Col, Row, ListGroup, Container } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';

export const Search = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(true);
    // eslint-disable-next-line
    const [sayt, setSayt] = useState([]);
    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&query=${e.target.value}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setSayt(data.results);   
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&query=${e.target.value}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setMovies(data.results);   
            }else{
                <Alert variant="danger">Error</Alert>
            }
        });
        setShow((s) => !s)
    }

    const saytShow = e => {
        setShow((s) => !s)
    }
    
    return (
        <div>
            <div className="search-container">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my-4">
                    <form onSubmit={onSubmit} value={query}>
                        <div className="search"> <i className="fa fa-search" onClick={saytShow}></i> 
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search for a movie..." 
                                onChange={onChange}
                                onClick={saytShow}
                            /> 
                            {sayt.length > 0 && (
                                <ListGroup className="sayt" style={{ display: show ? "block" : "none" }}>
                                    {sayt.map(suggestions => (
                                        <ListGroup.Item action type="submit" onClick={onSubmit} value={query}>
                                            {suggestions.title}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}

                            <button type="submit" onClick={onSubmit} value={query} className="search-button btn btn-primary">Search</button> 
                        </div>
                    </form>
                    
                </div>
            </div>
            </div>
            <Container fluid className="movie-grid">
                 {movies.length > 0 && (
                   <Row>
                       {movies.map(movieresults => (
                        <Col className="movie-grid" key={movieresults.id}>
                            <MovieCard movieresults={movieresults}/>
                        </Col>
                        ))}
                   </Row>    
                 )}
            </Container>
        </div>
        
        
    )
}

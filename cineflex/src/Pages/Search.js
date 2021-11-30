import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Row, ListGroup } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';

export const Search = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    //const [sayt, setSayt] = useState([]);
    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        /*fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&query=${e.target.value}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setSayt(data.results);   
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })*/
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
        })
    }
    
    return (
        <div>
            <div className="search-container">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my-4">
                    <form onSubmit={onSubmit} value={query}>
                        <div className="search"> <i className="fa fa-search"></i> 
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search for a movie..." 
                                onChange={onChange}
                            /> 
                            <button type="submit" onClick={onSubmit} value={query} className="search-button btn btn-primary">Search</button> 
                        </div>
                    </form>
                    
                </div>
            </div>
            </div>
            <div className="movie-grid" >
                 {movies.length > 0 && (
                   <Row>
                       {movies.map(movieresults => (
                        <Col className="movie-grid" key={movieresults.id}>
                            <MovieCard movieresults={movieresults}/>
                        </Col>
                        ))}
                   </Row>    
                 )}
            </div>
        </div>
        
        
    )
}

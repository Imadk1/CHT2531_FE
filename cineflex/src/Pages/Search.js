import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Row, Container } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';
import {CustomPagination} from '../Components/CustomPagination';


export const Search = () => {
    const [page, setPage] = useState (1);
    const [numPage, setNumPage] = useState ();
    const [movies, setMovies] = useState([]);
    const location = useLocation();    
  
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}&language=en-US&include_adult=false&query=${location.state}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setMovies(data.results);   
                console.log(location.state)
                setNumPage(data.total_pages)
            }else{
                <Alert variant="danger">Error</Alert>
            }
        });
     // eslint-disable-next-line
    }, [page])
    
    return (
        <div>
            <Container fluid className="mt">
                <h1 className='page-title'>Results for '{location.state}'</h1>
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
            <CustomPagination setPage={setPage} numOfPages={numPage} />

        </div>
        
        
    )
}

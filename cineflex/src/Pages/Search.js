import React, {useState, useEffect} from 'react';
import {useLocation, useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Row, Container, Form, Nav } from 'react-bootstrap';
import { MovieCard } from '../Components/MovieCard';
import {CustomPagination} from '../Components/CustomPagination';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
    const [page, setPage] = useState (1);
    const [numPage, setNumPage] = useState ();
    const [results, setResults] = useState([]);
    let [query, setQuery] = useState("")
    const history = useHistory();
    const location = useLocation();   

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}&language=en-US&include_adult=false&query=${location.state}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setResults(data.results);   
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
                <h3 className='page-title'>Results for '{location.state}'</h3>
                
                <div className="search-container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my-4">
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <div className='search'>
                                <input
                                    type='search'
                                    placeholder='Search for a film'
                                    className='form-control me-2'
                                    aria-label='Search for a movie'
                                    onChange={e => setQuery(e.target.value)} 
                                    onKeyPress={(e) => {
                                        if (e.nativeEvent.charCode === 13) {
                                        history.push({ pathname: `/search`, state: `${query}` });
                                        }
                                    }}
                                />
                                <Nav.Link 
                                    as={NavLink} 
                                    exact={true} 
                                    to={{pathname:`/search`, state: `${query}` }} 
                                    className="search-button center btn btn-primary"
                                    >
                                    <FontAwesomeIcon icon={faSearch}/>
                                </Nav.Link>   
                            </div>             
                        </Form>                 
                        </div>
                    </div>
                </div>
                 {results.length > 0 && (
                   <Row>
                       {results.map(movie => (
                        <Col className="movie-grid" key={movie.id}>
                            <MovieCard movie={movie}/>
                        </Col>
                        ))}
                   </Row>    
                 )}
            </Container>
            <CustomPagination setPage={setPage} numOfPages={numPage} />

        </div>
        
        
    )
}

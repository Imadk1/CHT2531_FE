import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ResultsCard } from './ResultsCard.js';

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=falsw&query=${e.target.value}`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                setResults(data.results);   
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    }
    return (
        <div>
            <Container>
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my-4">
                    <div className="search"> <i className="fa fa-search"></i> 
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search for a movie or series..." 
                        value={query}
                        onChange={onChange}
                    /> 
                    <button className="btn btn-primary">Search</button> </div>
                </div>
            </div>
            {results.length > 0 && (
                   <Row>
                       {results.map(searchresults => (
                       <Col className="my-4" key={searchresults.id}>
                           <ResultsCard searchresults={searchresults}/>
                       </Col>
                   ))}
                   </Row>    
            )}
            </Container>
        </div>
        
        
    )
}

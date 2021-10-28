import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ResultsCard } from './ResultsCard.js';

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const API_KEY = "5f341eaa0aa02576b669b37838e5126c";
    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&query=${e.target.value}`
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
                <Container>
                    <Row>
                        {results.map(searchresults => (
                        <Col className="my-4" key={searchresults.id}>
                            <ResultsCard searchresults={searchresults}/>
                        </Col>
                    ))}
                    </Row>    
                </Container> 
            )}
        </div>
        
        
    )
}

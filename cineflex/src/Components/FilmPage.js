import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import placeholder from '../Assets/Placeholder.jpg'

import { Alert, Container } from 'react-bootstrap';

export const FilmPage = () => {
    const [details, setDetails] = useState([]);
    const [genres, setGenres] = useState([]);
    const [companies, setCompanies] = useState([]);
    const location = useLocation();    

    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/${location.state}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=release_dates,videos`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setDetails(data);  
                setGenres(data.genres); 
                setCompanies(data.production_companies); 
                console.log(data.genres[0].name)
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    }, [])
    

    return (
        <Container fluid className="movie-container">
            <h3>{details.title}</h3>
            <p>{details.overview}</p>
            <p>{details.runtime}</p>
            {details.poster_path ? (
                <img className="poster" 
                src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} 
                alt= {details.title}
               />
            ) : (
                <img className="poster"
                 src={placeholder} 
                 alt= {details.title}
                />
            )}
            <div>
                {genres && (
                    <div>
                        {genres.map(genreName => (
                        <p  key={genreName.id}>
                            {genreName.name}
                        </p>
                    ))}
                    </div>
                )}
            </div>
            <div>
                {companies && (
                    <div>
                        {companies.map(companyName => (
                        <p  key={companyName.id}>
                            {companyName.name}
                        </p>
                    ))}
                    </div>
                )}
            </div>
        </Container>
    )
}
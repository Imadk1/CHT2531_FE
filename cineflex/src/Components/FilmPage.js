import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare} from '@fortawesome/free-solid-svg-icons'

import '../sass/custom.scss';

import { Alert, Container } from 'react-bootstrap';

export const FilmPage = () => {
    const [details, setDetails] = useState([]);
    const [genres, setGenres] = useState([]);
    const [trailer, setTrailer] = useState();
    const location = useLocation();    

    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/${location.state}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=release_dates,videos`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(location.state)
                console.log(data)
                setDetails(data);  
                setGenres(data.genres); 
                setTrailer(data.videos.results[0]?.key)
                console.log(data.genres[0].name)
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    }, [])
    

    return (
        <div>
            <Container fluid className="details-content" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
            <div className="details-content__poster-container mx-5"> 
                <img className="poster" 
                    src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} 
                    alt= {details.title}
                />
                
            </div>
            <div className="details-content__info">
                <div className="header mb-1">
                    <h3 className="title">{details.title}</h3>
                    <div className="rating translate-left rounded-pill mx-3">
                        <FontAwesomeIcon icon={faStar} className="star"/>
                         {details.vote_average}
                    </div>
                </div>
                {genres && (
                    <div className="genres-container">
                        {genres.map(genreName => (
                        <p className="genres" key={genreName.id}>
                            {genreName.name}
                        </p>
                    ))}
                    </div>
                )}
                <p className="description">{details.overview}</p>
                <div className="card-btn">
                    <Button className="trailer-btn" variant="secondary" target="__blank" href={`https://www.youtube.com/watch?v=${trailer}`}><FontAwesomeIcon icon={faPlay} /> Trailer</Button>
                    <div className="icons">
                        <a href className="details icon-btn mx-2"><FontAwesomeIcon icon={faHeart} /></a>
                        <a href className="details icon-btn  mx-2"><FontAwesomeIcon icon={faShare} /> </a>
                    </div>
                </div>
            </div>
            
            </Container>
        </div>

    )
}
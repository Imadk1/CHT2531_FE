import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import { Button, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from "react-helmet";

import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const FilmPage = () => {
    const [details, setDetails] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState();
    const location = useLocation();    

    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/${location.state}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=release_dates,videos,credits,watch/providers`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(location.state)
                console.log(data)
                setDetails(data);  
                setGenres(data.genres); 
                setCast(data.credits.cast); 
                setTrailer(data.videos.results[0]?.key)
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    // eslint-disable-next-line
    }, [])
    

    return (
        <div>
             <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div className="details-bg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}></div>
                <div className="details-content">
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
            </div>
            <div className='cast-container'>
                {cast && (
                    <div className="cast-container__content">
                        {cast.slice(0,15).map(castName => (
                            <Nav.Link as={NavLink} exact={true} to={{pathname:`/cast/${castName.id}`, state: castName.id }} className="hidden-link" >                
                            <div className="cast-container__card" key={castName.id}>
                                <div className="cast-container__profile">
                                    <img className="cast-container__img"
                                    src={`https://image.tmdb.org/t/p/w500/${castName.profile_path}`}
                                    alt= {castName.name}
                                    />
                                </div>
                                <div className="cast-container__name">
                                    <h6 className="name mobile-text">{castName.name}</h6>
                                </div>
                            </div>
                           </Nav.Link>
                        ))}
                    </div>
                )}
                
            </div>
        </div>

    )
}
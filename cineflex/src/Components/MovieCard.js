import React, {useState} from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import {Button, Alert, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';

export const MovieCard = ({movieresults}) => {
    const [trailer, setTrailer] = useState();

    fetch(`https://api.themoviedb.org/3/movie/${movieresults.id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((data) => {
        if (!data.errors) {
            setTrailer(data.results[0]?.key);   
        }else{
            <Alert variant="danger">Error</Alert>
        }
    })

    return (
        <div className="movie-card">
            <div className="poster-container">
                <span className="rating translate-middle rounded-pill">
                    <FontAwesomeIcon icon={faStar} className="star"/>
                    {movieresults.vote_average}
                </span>
            {movieresults.poster_path ? (
                <Nav.Link as={NavLink} exact={true} to={{pathname:`/film/${movieresults.id}`, state: movieresults.id }} className="hidden-link" >                
                <img className="poster" 
                src={`https://image.tmdb.org/t/p/w300${movieresults.poster_path}`} 
                alt= {movieresults.title}
               />
               </Nav.Link>
            ) : (
                <img className="poster"
                 src={placeholder} 
                 alt= {movieresults.title}
                />
            )}
            </div>
            <div className="content-container">
                <h2 className="title mobile-text">{movieresults.title}</h2>
                <p className="desc mobile-text">{movieresults.release_date}</p>
                <div className="card-btn">
                    <Button className="btn btn-secondary watch-btn" target="__blank" href={`https://www.youtube.com/watch?v=${trailer}`}><FontAwesomeIcon icon={faPlay} /> Trailer</Button>
                    <div className="icons">
                        <a href className="icon-btn"><FontAwesomeIcon icon={faHeart} /></a>
                        <a href className="icon-btn"><FontAwesomeIcon icon={faShare} /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

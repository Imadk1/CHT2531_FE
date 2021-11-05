import React, {useState} from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import {Button, Alert} from 'react-bootstrap'
import '../sass/custom.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

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
            {movieresults.poster_path ? (
                <img className="poster" 
                src={`https://image.tmdb.org/t/p/w300${movieresults.poster_path}`} 
                alt= {movieresults.title}
               />
            ) : (
                <img className="poster"
                 src={placeholder} 
                 alt= {movieresults.title}
                />
            )}
            <b className="title">{movieresults.title}</b>
            <span className="rating">
                <FontAwesomeIcon icon={faStar} className="star"/>
                {movieresults.vote_average}
            </span>
            <div className="card-btn">
                <Button className="btn btn-secondary watch-btn" target="__blank" href={`https://www.youtube.com/watch?v=${trailer}`}><FontAwesomeIcon icon={faPlay} /> Trailer</Button>
                <div className="icons">
                    <a href className="icon-btn"><FontAwesomeIcon icon={faHeart} /> </a>
                    <a href className="icon-btn"><FontAwesomeIcon icon={faShare} /> </a>
                </div>
            </div>
        </div>
    )
}

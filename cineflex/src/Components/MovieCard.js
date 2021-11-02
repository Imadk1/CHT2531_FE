import React from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import {Button} from 'react-bootstrap'
import '../sass/custom.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

export const MovieCard = ({movieresults}) => {
    
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
                <Button className="btn btn-secondary watch-btn"><FontAwesomeIcon icon={faPlay} /> Watch Trailer</Button>
                <div className="icons">
                    <a href className="icon-btn"><FontAwesomeIcon icon={faHeart} /> </a>
                    <a href className="icon-btn"><FontAwesomeIcon icon={faShare} /> </a>
                </div>
            </div>
        </div>
    )
}

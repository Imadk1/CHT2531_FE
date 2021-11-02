/*import React from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import '../sass/custom.scss'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

export const ResultsCard = ({searchresults}) => {    
    return (
        <div className="movie-card">
            {searchresults.poster_path ? (
                <img className="poster" 
                src={`https://image.tmdb.org/t/p/w300${searchresults.poster_path}`} 
                alt= {searchresults.title}
               />
            ) : (
                <img className="poster"
                 src={placeholder} 
                 alt= {searchresults.name}
                />
            )}
            <b className="title">{searchresults.title}</b>
            <span className="rating">
                <FontAwesomeIcon icon={faStar} className="star"/>
                {searchresults.vote_average}
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
}*/

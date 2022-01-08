import React from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

export const ScrollCard = ({movieresults}) => {
    
    return (
        <div className="scroll-card center">
            <div className="scroll-card__poster">
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
            <div className="scroll-card__title">
                <h6 className="title">{movieresults.title}</h6>
            </div>
        </div>
    )
}

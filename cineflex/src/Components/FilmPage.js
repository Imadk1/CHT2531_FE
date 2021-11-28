import React from 'react'
import { Container } from 'react-bootstrap';

export const FilmPage = (detailsId) => {
    return (
        <div className="movie-container">
            <h1>Film</h1>
            <h1>{detailsId}</h1>
        </div>
    )
}

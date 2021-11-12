import React from 'react'
import { Container } from 'react-bootstrap';
import '../sass/custom.scss';
import { MovieCarousel } from '../Components/MovieCarousel';

export const Home = () => {
    return (
        <div>
            <MovieCarousel />
        </div>
    )
}

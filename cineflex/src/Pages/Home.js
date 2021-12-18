import React from 'react'
import '../sass/custom.scss';
import { MovieCarousel } from '../Components/MovieCarousel';
import { Upcoming } from '../Components/Upcoming';

export const Home = () => {

    return (
        <div>
            <MovieCarousel />
            <Upcoming />
        </div>
    )
}

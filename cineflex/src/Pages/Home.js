import React from 'react'
import '../sass/custom.scss';
import { MovieCarousel } from '../Components/MovieCarousel';
import { Upcoming } from '../Components/Upcoming';
import { NowPlaying } from '../Components/NowPlaying';

export const Home = () => {

    return (
        <div className='mt'>
            <MovieCarousel />
            <NowPlaying />
            <Upcoming />
        </div>
    )
}

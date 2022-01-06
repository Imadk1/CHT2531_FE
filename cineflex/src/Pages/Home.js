import React from 'react'
import '../sass/custom.scss';
import { MovieCarousel } from '../Components/MovieCarousel';
import { Upcoming } from '../Components/Upcoming';
import { NowPlaying } from '../Components/NowPlaying';
import { SearchBar } from '../Components/SearchBar';

export const Home = () => {

    return (
        <div>
            <SearchBar />
            <MovieCarousel />
            <NowPlaying />
            <Upcoming />
        </div>
    )
}

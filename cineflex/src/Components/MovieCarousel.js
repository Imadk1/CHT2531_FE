import React, {useState} from 'react'
import { Carousel, Alert } from 'react-bootstrap';
import '../sass/custom.scss';

export const MovieCarousel = () => {
    const [index, setIndex] = useState(0);
    const [hero, setHero] = useState([]);

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US`
    )
    .then((res) => res.json())
    .then((data) => {
        if (!data.errors) {
            setHero(data.results);   
        }else{
              <Alert variant="danger">Error</Alert>
        }
    });

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        {hero.slice(0,5).map (heroitems=>
            <Carousel.Item key={heroitems.id}>
            <img
            className="img-carousel"
            src={`https://image.tmdb.org/t/p/original/${heroitems.backdrop_path}`} 
            alt={heroitems.title}
            />
            <Carousel.Caption>
            <h3>{heroitems.title}</h3>
            <p>{heroitems.overview}</p>
            </Carousel.Caption>
            </Carousel.Item>
        )}
        </Carousel>
    );
}

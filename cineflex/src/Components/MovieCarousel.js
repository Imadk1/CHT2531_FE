import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap';
import '../sass/custom.scss';

export const MovieCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="img-carousel"
            src="https://www.themoviedb.org/t/p/original/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img-carousel"
            src="https://www.themoviedb.org/t/p/original/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img-carousel"
            src="https://www.themoviedb.org/t/p/original/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

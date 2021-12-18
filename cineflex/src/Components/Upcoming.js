import React, {useState} from 'react'
import { Alert } from 'react-bootstrap';
import { ScrollCard } from './ScrollCard';

export const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=GB`
    )
    .then((res) => res.json())
    .then((data) => {
        if (!data.errors) {
            setUpcoming(data.results);   
        }else{
            <Alert variant="danger">Error</Alert>
        }
    });

    return (
        <div className="cast-container">
                <h3>Upcoming</h3>
                {upcoming && (
                   <div className='scroller' >
                       {upcoming.slice(0,15).map(movieresults => (
                            <ScrollCard movieresults={movieresults} key={movieresults.id}/>
                        ))}
                   </div>       
                )}
        </div>
    )
}

import React, {useState,useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import { ScrollCard } from './ScrollCard';

export const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    
    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=GB`
        )
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                setNowPlaying(data.results);   
            }else{
                <Alert variant="danger">Error</Alert>
            }
        });
    // eslint-disable-next-line
    }, [])

    return (
        <div className="scroll-container films">
                <h4>Now Playing</h4>
                {nowPlaying && (
                   <div className='scroller' >
                       {nowPlaying.slice(0,15).map(movieresults => (
                            <ScrollCard movieresults={movieresults} key={movieresults.id}/>
                        ))}
                   </div>       
                )}
        </div>
    )
}

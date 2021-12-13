import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import { Alert } from 'react-bootstrap';

export const CastPage = () => {
    const [person, setPerson] = useState([]);
    const location = useLocation(); 

    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/person/${location.state}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=movie_credits`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(location.state)
                console.log(data)
                setPerson(data);  
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="movie-container">
                <h1>{location.state}</h1>
                <h1>{person.name}</h1>
                <div className="poster-container mx-5"> 
                    <img className="poster" 
                    src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`} 
                    alt= {person.name}
                    />
                </div>
            </div>
            
        </div>
    )
}

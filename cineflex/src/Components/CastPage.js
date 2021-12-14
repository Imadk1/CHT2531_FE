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
            <div className="person-info">
                <div className="person-info_poster"> 
                    <img className="poster" 
                    src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`} 
                        alt= {person.name}
                    />
                </div>
                <div className="person-info__details">
                    <h2 className='title'>{person.name}</h2>
                    <div className='personal'>
                        <div className='dob'>
                            <span>D.O.B</span>
                            <p>{person.birthday}</p>
                        </div>
                        <div className='place-of-birth'>
                            <span>Place of birth</span>
                            <p>{person.place_of_birth}</p>
                        </div>
                    </div>
                    <h5>Biography</h5>
                    <p>{person.biography}</p>
                </div>
            </div>
            
        </div>
    )
}

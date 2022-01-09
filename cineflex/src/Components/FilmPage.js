import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import { Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faHeart, faShare} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from "react-helmet";
import { ScrollCard } from './ScrollCard';
import placeholder from '../Assets/Cast-P.png'
import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const FilmPage = () => {
    const [details, setDetails] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState();
    const [recommendations, setRecommendations] = useState([]);
    const [watch, setWatch] = useState([]);
    const location = useLocation();    
    const [certification, setCertification] = useState([]);

    
    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/${location.state}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=release_dates,videos,credits,recommendations&region=GB`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(location.state)
                console.log(data)
                setDetails(data); 
                setGenres(data.genres); 
                setCast(data.credits.cast); 
                setTrailer(data.videos.results[0]?.key)
                setRecommendations(data.recommendations.results)
                setCertification((data.release_dates.results.filter(x=>x.iso_3166_1==="GB")[0].release_dates[0]?.certification))
                //console.log((data.credits.crew.filter(x=>x.known_for_department==="Directing")))
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    // eslint-disable-next-line
    }, [])
    
    useEffect( () => { 
        fetch(`https://api.themoviedb.org/3/movie/${location.state}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.errors) {
                console.log(data)
                setWatch(data.results.GB.flatrate)
            }else{
                <Alert variant="danger">Error</Alert>
            }
        })
    // eslint-disable-next-line
    }, [])
    

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div className='details-container mt' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
                <div className="details-content">
                    <div className="details-content__poster-container mx-5"> 
                        <img className="poster" 
                            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} 
                            alt= {details.title}
                        />
                    </div>
                    <div className="details-content__info">
                        <div className="header center mb-1">
                            <h3 className="title">{details.title}</h3>
                            <div className='film-att center'>
                                <div className='certification-container center'>
                                    <p className='certification'>{certification}</p>
                                </div>
                                <div className="rating center translate-left rounded-pill mx-3">
                                    <FontAwesomeIcon icon={faStar} className="star"/>
                                    {details.vote_average}
                                </div>
                            </div>
                        </div>
                        {genres && (
                            <div className="genres-container">
                                {genres.slice(0,3).map(genreName => (
                                <p className="genres" key={genreName.id}>
                                    {genreName.name}
                                </p>
                            ))}
                            </div>
                        )}
                        <p className="description">{details.overview}</p>
                        <div className="card-btn">
                            <div className="icons center">
                                <a className="details icon-btn me-2" target="__blank" href={`https://www.youtube.com/watch?v=${trailer}`}><FontAwesomeIcon className='play' icon={faPlay} /> Trailer</a>
                                <a href className="details icon-btn mx-2"><FontAwesomeIcon icon={faHeart} /></a>
                                <a href className="details icon-btn  mx-2"><FontAwesomeIcon icon={faShare} /> </a>
                            </div>
                        </div>
                        <div className='watch-icons scroller-container'>  
                        <h5>Where To Watch</h5>
                        {watch && (
                            <div className='scroller'>
                                {watch.map(watchProvider => (
                                    <img 
                                        className='watch-icons__logo' 
                                        src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path}`}
                                        alt= {watchProvider.provider_name}
                                    />
                                ))}
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='scroll-container'>
                <h4>Cast</h4>
                {cast && (
                    <div className="scroll-container__content scroller">
                        {cast.slice(0,22).map(castName => (
                            <Nav.Link as={NavLink} exact={true} to={{pathname:`/cast/${castName.id}`, state: castName.id }} className="hidden-link" >                
                            <div className="scroll-container__card" key={castName.id}>
                                <div className="scroll-container__profile">
                                    {castName.profile_path ? (
                                        <img className="scroll-container__img"
                                        src={`https://image.tmdb.org/t/p/w500/${castName.profile_path}`}
                                        alt= {castName.name}
                                        />
                                    ) : (
                                        <img className="scroll-container__img"
                                        src={placeholder}
                                        alt= {castName.name}
                                    />
                                    )}
                                </div>
                                <div className="scroll-container__name">
                                    <h6>{castName.name}</h6>
                                    <p>{castName.character}</p>
                                </div>
                            </div>
                           </Nav.Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="scroll-container films">
                <h4>Recommended</h4>
                {recommendations && (
                   <div className='scroller' >
                       {recommendations.slice(0,15).map(movieresults => (
                            <ScrollCard movieresults={movieresults} key={movieresults.id}/>
                        ))}
                   </div>       
                )}
            </div>
        </div>

    )
}
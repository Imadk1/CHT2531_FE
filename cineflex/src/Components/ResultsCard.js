import Button from '@restart/ui/esm/Button'
import React from 'react'
import placeholder from '../Assets/Placeholder.jpg'
import '../sass/custom.scss'

export const ResultsCard = ({searchresults}) => {    
    return (
        <div className="movie-card">
            {searchresults.poster_path ? (
                <img className="poster" 
                src={`https://image.tmdb.org/t/p/w300${searchresults.poster_path}`} 
                alt= {searchresults.title}
               />
            ) : (
                <img className="poster"
                 src={placeholder} 
                 alt= {searchresults.name}
                />
            )}
            <b className="title">{searchresults.title}</b>
            <span className="rating">
                {searchresults.vote_average}
            </span>
            <Button className="btn btn-secondary">Add to watch list</Button>
        </div>
        /*<Card>
            {searchresults.poster_path ? (
                <Card.Img 
                src={`https://image.tmdb.org/t/p/w300${searchresults.poster_path}`} 
                alt= {searchresults.title}
               />
            ) : (
                <Card.Img
                 src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" 
                 alt= {searchresults.name}
                />
            )}
            <Card.Body>
                
                <Card.Subtitle className="results-title">
                    {searchresults.title }
                </Card.Subtitle>
                <Card.Text className="results-rating">
                    {searchresults.vote_average }
                </Card.Text>
            </Card.Body>
        </Card>*/
    )
}

import React from 'react'
import { Card } from 'react-bootstrap'
import '../sass/custom.scss'

export const ResultsCard = ({searchresults}) => {    
    return (
        <Card>
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
        </Card>
    )
}

import React from 'react'
import { Card } from 'react-bootstrap'
import '../sass/custom.scss'

export const ResultsCard = ({searchresults}) => {
    
    return (
        <Card style={{ width: '300px' }}>
            {searchresults.poster_path ? (
                <Card.Img variant="top" 
                src={`https://image.tmdb.org/t/p/w500${searchresults.poster_path}`} 
                alt= {searchresults.title}
               />
            ) : (
                <Card.Img variant="top" 
                 src={`https://image.tmdb.org/t/p/w500${searchresults.profile_path}`} 
                 alt= {searchresults.name}
                />
            )}
            <Card.Body>
                {searchresults.title ? (
                    <Card.Subtitle className="results-title">
                        {searchresults.title }
                    </Card.Subtitle>
                ) : (
                    <Card.Subtitle className="results-title">
                        {searchresults.name }
                    </Card.Subtitle>
                )}
                <Card.Text className="results-rating">
                {searchresults.vote_average }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

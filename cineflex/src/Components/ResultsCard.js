import React from 'react'
import { Card } from 'react-bootstrap'

export const ResultsCard = ({searchresults}) => {
    return (
        <Card style={{ width: '18rem' }}>
            {searchresults.poster_path ? (
                <Card.Img variant="top" 
                src={`https://image.tmdb.org/t/p/w200${searchresults.poster_path}`} 
                alt= {searchresults.title}
               />
            ) : (
                <Card.Img variant="top" 
                 src={`https://image.tmdb.ord/t/p/w200${searchresults.poster_path}`} 
                 alt= {searchresults.title}
                />
            )}
            <Card.Body>
                <Card.Subtitle>{searchresults.title}</Card.Subtitle>
                <Card.Text>
                {searchresults.vote_average }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

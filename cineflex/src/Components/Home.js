import React from 'react'
import { Search } from './Search';
import { Container } from 'react-bootstrap';
import '../sass/custom.scss';

export const Home = () => {
    return (
        <Container fluid>
            <Search />
        </Container>
    )
}

import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo-white.svg'
import {Link} from 'react-router-dom';
import '../sass/custom.scss';

export const NavBar = () => {
    return (
        <header>
            <Navbar className="dark" collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className="nav-logo" src={logo} alt="Logo"></img>
                </Navbar.Brand>                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="nav-item mx-2" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="nav-item mx-2" as={Link} to="/films">Films</Nav.Link>
                    <Nav.Link className="nav-item mx-2" as={Link} to="/series">Series</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

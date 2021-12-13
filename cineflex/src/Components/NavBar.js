import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo-white.svg'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <header>
            <Navbar className="dark" fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img className="nav-logo" src={logo} alt="Logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="nav-item mx-2" as={NavLink} exact={true} activeClassName='is-active' to="/">Home</Nav.Link>
                    <Nav.Link className="nav-item mx-2" as={NavLink} activeClassName='is-active' to="/trending">Trending</Nav.Link>
                    <Nav.Link className="nav-item mx-2" as={NavLink} activeClassName='is-active' to="/popular">Most Popular</Nav.Link>
                    <Nav.Link className="nav-item mx-2" as={NavLink} activeClassName='is-active' to="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

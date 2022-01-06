import React, {useState} from 'react'
import {Navbar, Nav, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo-white.svg'
import {NavLink, useHistory} from 'react-router-dom';

export const NavBar = () => {
    let [query, setQuery] = useState("")
    const history = useHistory();

    return (
        <header>
            <Navbar className="dark shadow" fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Container className='py-2'>
                    <Navbar.Brand as={NavLink} className='c-logo' to="/">
                        <img className="nav-logo" src={logo} alt="Logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className='d-flex search-bar' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type='search'
                                placeholder='Search for a film'
                                className='form-control me-2'
                                aria-label='Search for a movie'
                                onChange={e => setQuery(e.target.value)} 
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.charCode === 13) {
                                      history.push({ pathname: `/search`, state: `${query}` });
                                    }
                                }}
                            />
                            <i className="fa fa-search"></i>
                            <Nav.Link 
                                as={NavLink} 
                                exact={true} 
                                to={{pathname:`/search`, state: `${query}` }} 
                                className="search-button center btn btn-primary"
                                >
                                Search
                            </Nav.Link>                
                        </Form> 
                        <Nav className='ms-auto'>
                            <Nav.Link className="nav-item me-1" as={NavLink} exact={true} activeClassName='is-active' to="/">Home</Nav.Link>
                            <Nav.Link className="nav-item me-1" as={NavLink} activeClassName='is-active' to="/now_playing">Now Playing</Nav.Link>
                            <Nav.Link className="nav-item me-1" as={NavLink} activeClassName='is-active' to="/top_rated">Top Rated</Nav.Link>
                            <Nav.Link className="nav-item me-1" as={NavLink} activeClassName='is-active' to="/popular">Most Popular</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

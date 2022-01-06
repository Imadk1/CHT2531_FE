import React, {useState} from 'react'
import '../sass/custom.scss';
import {Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useHistory} from 'react-router-dom';

export const SearchBar = () => {
    let [query, setQuery] = useState("")
    const history = useHistory();

    return (
        <div className="search-container">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 my-5">
                    <div className="search"> <i className="fa fa-search"></i> 
                        <Form className='d-flex mx-auto' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type='search'
                                placeholder='Search'
                                className='form-control'
                                aria-label='Search'
                                onChange={e => setQuery(e.target.value)} 
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.charCode === 13) {
                                      history.push({ pathname: `/search`, state: `${query}` });
                                    }
                                }}
                            />
                            <Nav.Link 
                                as={NavLink} 
                                exact={true} 
                                to={{pathname:`/search`, state: `${query}` }} 
                                className="search-button center btn btn-primary"
                                >
                                Search
                            </Nav.Link>                
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

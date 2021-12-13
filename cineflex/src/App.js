import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NavBar} from './Components/NavBar';
import { Home } from './Pages/Home';
import { Trending } from './Pages/Trending';
import { MostPopular } from './Pages/MostPopular';
import { Search } from './Pages/Search';
import {FilmPage} from './Components/FilmPage';
import {CastPage} from './Components/CastPage'
import './sass/custom.scss';

function App() {
  return (
   <Router forceRefresh={true}>
     <NavBar />

     <Switch>
        <Route forceRefresh={true} exact path="/">
           <Home />
        </Route>
        <Route exact path="/trending">
           <Trending />
        </Route>
        <Route exact path="/popular">
           <MostPopular />
        </Route>
        <Route exact path="/search">
           <Search />
        </Route>
        <Route exact path="/film/:id">
           <FilmPage />
        </Route>
        <Route exact path="/cast/:id">
           <CastPage />
        </Route>

     </Switch>
   </Router>

  );
}

export default App;

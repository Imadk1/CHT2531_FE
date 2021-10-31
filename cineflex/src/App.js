import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NavBar} from './Components/NavBar';
import { Home } from './Components/Home';
import { Trending } from './Components/Trending';
import { MostPopular } from './Components/MostPopular';
import { Search } from './Components/Search';
import './App.css';

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

     </Switch>
   </Router>

  );
}

export default App;

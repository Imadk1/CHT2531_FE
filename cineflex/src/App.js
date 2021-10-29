import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NavBar} from './Components/NavBar';
import { Home } from './Components/Home';
import { Films } from './Components/Films';
import { Series } from './Components/Series';
import './App.css';

function App() {
  return (
   <Router forceRefresh={true}>
     <NavBar />

     <Switch>
        <Route forceRefresh={true} exact path="/">
           <Home />
        </Route>
        <Route exact path="/films">
           <Films />
        </Route>
        <Route exact path="/series">
           <Series />
        </Route>

     </Switch>
   </Router>

  );
}

export default App;

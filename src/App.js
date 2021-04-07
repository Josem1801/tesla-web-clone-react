import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ModelS from './ModelS';
import ModelX from './ModelX';
import Model3 from './Model3';
import ModelY from './ModelY';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/model-s'>
          <Header/>
          <ModelS/>
        </Route>
        <Route exact path='/model-3'>
          <Header/>
          <Model3/>
        </Route>
        <Route path='/model-x'>
          <Header/>
          <ModelX/>
        </Route>
        <Route path='/model-y'>
          <Header/>
          <ModelY/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

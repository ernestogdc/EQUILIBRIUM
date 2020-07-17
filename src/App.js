import React, { useState } from 'react';
import History from './views/History';
import P404 from './views/P404';
import Login from './components/Login';
import Home from './views/Home';
import Newopp from './views/Newopp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/newopp">
          <Newopp />
        </Route>
        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

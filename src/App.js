import React from 'react';
import History from './views/History';
import P404 from './views/P404';
import Login from './components/Login';
import Home from './views/Home';
import Newopp from './views/Newopp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const auth = {
  isAuthenticated: false,
  authenticate() {
    auth.isAuthenticated = true;
  },
  signout() {
    auth.isAuthenticated = false;
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

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
          <Route exact path="/newopp/:op/:tipo">
            <Newopp />
          </Route>
          <Route path="*">
            <P404></P404>
          </Route>
        <PrivateRoute path="/protected">
        </PrivateRoute>
      </Switch>
    </Router>

  );
}

export default App;

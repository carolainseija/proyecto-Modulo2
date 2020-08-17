import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import {Login} from './pages/Login';
import {CreatorPlayList} from './pages/CreatorPlayList';
import {PlaylistNoLogin} from './pages/PlaylistNoLogin';


export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Router path="/PlaylistNoLogin">
          <PlaylistNoLogin />  
          </Router>
          <Route path="/CreatePlayList">
            <CreatorPlayList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


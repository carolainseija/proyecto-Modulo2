import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";

import {Login} from './Components/Login/Login';
import {CreatorPlayList} from './Components/PlayList/CreatorPlayList';
import {PlaylistNoLogin} from './pages/PlaylistNoLogin';

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Router path="/PlaylistNoLogin">
          <PlaylistNoLogin />  
          </Router>
          <Route path="/PlayList">
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

export default App;
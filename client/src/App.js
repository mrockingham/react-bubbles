import React, { useState } from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'


import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
    <div className="App">
      
      <div className='AppBody'>
      <h1 className='AppTitle'>Bubbles!!!!</h1>
      
      </div>
<Switch>
  <PrivateRoute exact path='/protected' component={BubblePage} />
  <Route path='/login' component= {Login}/>
  <Route component={Login} />

</Switch>

    </div>
  </Router>

  );
}

export default App;

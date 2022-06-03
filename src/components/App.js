import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";

import Home from "./Home"
import Schedule from "./Schedule"
import ModifyActivity from "./ModifyActvity"

function App() {

  useEffect(()=>{
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((data) => console.log(data));
  },[]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/modify">
          <ModifyActivity />
        </Route>
      </Switch>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

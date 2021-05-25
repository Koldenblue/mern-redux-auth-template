import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <div className="App" data-testid='App'>
      <Router>
        <Switch>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

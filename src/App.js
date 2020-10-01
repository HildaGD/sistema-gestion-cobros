import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login'
import Home from './containers/Home'

function App() {
  return (
    <Router>
       <div>
        <div className="App">
      
        </div>
        <Switch>
          <Route exact path='/'component={Login} />
          <Route exact path='/Home'component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

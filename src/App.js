import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login'
import Home from './containers/Home'
import AddUser from './containers/AddUser'
import AddUser from './containers/EditUser'
import PrivateRoute from './shared/PrivateRoute'

function App() {
  return (
    <Router>
       <div>
        <div className="App">
  </div>
        <Switch>
          <Route exact path='/'component={Login} />
          <PrivateRoute exact path='/Home'component={Home} />
          <PrivateRoute exact path='/AddUser'component={AddUser} /> 
          <PrivateRoute exact path='/AddUser'component={EditUser} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './shared/PrivateRoute'
import Login from './containers/Login'
import Home from './containers/Home'
import AddUser from './containers/AddUser'
import EditUser from './containers/EditUser'
import ListUsers from './containers/ListUser'


function App() {
  return (
    <Router>
       <div>
        <div className="App">
  </div>
        <Switch>
          <Route exact path='/'component={Login} />
          <PrivateRoute exact path='/Home'component={Home} />
          <Route exact path='/AddUser'component={AddUser} /> 
          <Route exact path='/EditUser'component={EditUser} /> 
          <Route exact path='/ListUsers'component={ListUsers} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

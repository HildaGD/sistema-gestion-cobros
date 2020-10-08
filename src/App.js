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
import ViewUser from './containers/ViewUser'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <div>
          <div className="App">
          </div>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/Home' component={Home} />
            <Route exact path='/AddUser' component={AddUser} />
            <Route exact path='/EditUser' component={EditUser} />
            <Route exact path='/ListUsers' component={ListUsers} />
            <Route exact path='/ViewUser' component={ViewUser} />
          </Switch>
        </div>


      </Router>

      {/* <Footer /> */}
    </div>

  );
}

export default App;

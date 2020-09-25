import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './containers/Navbar'

function App() {
  return (
    <Router>
       <div>
        <div className="App">
          <Navbar></Navbar>
        </div>
        {/* <Switch>
          <Route exact path='/'component={AstrologyPictureOfDay} />
          <Route exact path='/favoritePictures'component={FavoritePictures} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;

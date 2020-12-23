import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';

import HeroSection from './components/HeroSection';

function App({handleLogout}) {
  return (
    <>
    <Router>
      <button onClick={handleLogout}>Logout</button>
      <Navbar/>
      <Home/>
      {/* <Switch >
        <Route exact path='/' component = {Home}></Route>
      </Switch> */}
    </Router>
    </>
  );
}

export default App;
// result : https://fattijenishbek.github.io/Final-Project-Library-web-/
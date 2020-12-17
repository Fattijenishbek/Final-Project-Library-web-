import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
      <Switch >
        <Router exact path='/' component = {Home}></Router>
      </Switch>
    </Router>
    </>
  );
}

export default App;

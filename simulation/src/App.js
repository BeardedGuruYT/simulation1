import React, { Component } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Router from './components/Router';

export default class App extends Component {


  render() {
    return (
      <div>
      <header><h1>SHELFIE</h1></header>
          <Link to='/shelfA'>Shelf A</Link>
          <Link to='/shelfB'>Shelf B</Link>
          <Link to='/shelfC'>Shelf C</Link>
          <Link to='/shelfD'>Shelf D</Link>   
          {Router}         
      </div>
    );
  }
}



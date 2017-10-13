import React, { Component } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Router from './components/Router';
import logo from './Images/logo.png';
import Home from './components/Home'

export default class App extends Component {


  render() {
    return (
      <div>
      <header className='h_background'>
        <div className='all_h_content'>
        <img src={logo}alt='logo' className='logo_image' />
        <div className="h_text">SHELFIE</div>
        </div>
       </header>
          <Link to='/home'>Home</Link>
          <Link to='/shelfA'>Shelf A</Link>
          <Link to='/shelfB'>Shelf B</Link>
          <Link to='/shelfC'>Shelf C</Link>
          <Link to='/shelfD'>Shelf D</Link> 
          {Router}         
      </div>
    );
  }
}



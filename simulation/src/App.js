import React, { Component } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import Router from './components/Router';
import logo from './Images/logo.png';
//import Home from './components/Home'

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='h_background'>
          <div className='all_h_content'>
          <img src={logo}alt='logo' className='logo_image' />
          <div className="h_text">SHELFIE</div>
          </div>
        </header>
          <Link to='/'>Home</Link>
          {Router}   
             
      </div>
    );
  }
}



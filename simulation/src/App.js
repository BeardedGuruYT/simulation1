import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super()

    this.state = {

    }
  }
  

handleClick(){
  
}

  render() {
    return (
      <div>
        <header><h1>SHELFIE</h1></header>
        <button className='shelfA' onClick={ (e) => this.handleClick(e.target.value)}>Shelf A</button>
        <button className='shelfB'>Shelf B</button>
        <button className='shelfC'>Shelf C</button>
        <button className='shelfD'>Shelf D</button>
      </div>
      
    );
  }
}

export default App;

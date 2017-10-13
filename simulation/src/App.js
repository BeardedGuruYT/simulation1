import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  

handleClick(){

}

  render() {
    return (
      <div>
        <button className='shelfA' onClick={ (e) => this.handleClick(e.target.value)}>Shelf A</button>
        <button className='shelfB'>Shelf B</button>
        <button className='shelfC'>Shelf C</button>
        <button className='shelfD'>Shelf D</button>
      </div>
      
    );
  }
}

export default App;

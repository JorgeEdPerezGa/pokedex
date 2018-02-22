import React, { Component } from 'react';
import PokemonList from '../../containers/PokemonList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='aplicacion'>
        <div className='App'>
          <h1 className='header'> POKéDEX </h1>
        </div>
        <PokemonList />
      </div>
    );
  }
}

export default App;

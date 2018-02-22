import React, { Component } from 'react';
import './App.css';
import * as helper from '../../helper';
import { connect } from 'react-redux';
import { addPokemonTypes } from '../../actions';
import FakeContainer from '../../containers/FakeContainer/';
import PokemonList from '../../containers/PokemonList';

class App extends Component {
  async componentDidMount() {
    const fetchType = await helper.fetchType();
    return this.props.addPokemonTypes(fetchType);
  }

  render() {
    console.log(this.props.pokemonType);
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


const mapStateToProps = (state) => ({
  pokemonType: state.pokemonType
})

const mapDispatchToProps = (dispatch) => ({
  addPokemonTypes: (pokemonType) => dispatch(addPokemonTypes(pokemonType))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

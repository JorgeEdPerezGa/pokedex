import React, { Component } from 'react';
import './App.css';
import * as helper from '../../helper';
import { connect } from 'react-redux';
import { addPokemonTypes } from '../../actions';
import FakeContainer from '../../containers/FakeContainer/';

class App extends Component {
  async componentDidMount() {
    const fetchType = await helper.fetchType();
    return this.props.addPokemonTypes(fetchType);
  }

  render() {
    return (
      <div className='App'>
      <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPokemonTypes: (pokemonType) => dispatch(addPokemonTypes(pokemonType))
})

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes, { shape, func, string } from 'prop-types';
import * as helper from '../../helper';
import { addPokemonTypes } from '../../actions';
import PokemonCard from '../../components/PokemonCard';
import './style.css';


class PokemonList extends Component {

  displayTypes = () => {
    return this.props.pokemonTypes.map(type => {
      return <PokemonCard
        key={type.id}
        type={type}
        displayPokemon={this.displayPokemon}
      />
    })
  }

  displayPokemon = async (pokemon) => {
    const fetchPokemon = await helper.fetchPokemon(pokemon);
    console.log(fetchPokemon);
  }

  render() {
    return (
      <section className="pokemon-list">
      {!this.props.pokemonTypes[0] ?
      <div className="loading-pokemon"></div> :
      <div>
        {this.displayTypes()}
      </div>}
      </section>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemonTypes: store.pokemonTypes
})


// PokemonList.propTypes = {
//   // fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

export default connect(mapStateToProps)(PokemonList);

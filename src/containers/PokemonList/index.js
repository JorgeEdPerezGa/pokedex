import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as helper from '../../helper';
import { addPokemonTypes, addPokemonGroup } from '../../actions';
import PokemonCard from '../../components/PokemonCard';
import Pokemon from '../../components/Pokemon';
import './style.css';


class PokemonList extends Component {

  displayTypes = () => {
    return this.props.pokemonTypes.map(type => {
      return <PokemonCard
        key={type.id}
        type={type}
        getPokemonGroup={this.getPokemonGroup}
      />
    })
  }

  displayPokemon = () => {
    return this.props.pokemonGroup.map(pokemon => {
      console.log(pokemon);
      return <div className="single-pokemon">
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} kg</p>
        <img className="image" src={pokemon.sprites.front_default}/>
      </div>
    })
  }

  getPokemonGroup = async (pokemon) => {
    const fetchPokemon = await helper.fetchPokemon(pokemon);
    this.props.addPokemonGroup(fetchPokemon)
  }

  render() {
    return (
      <section>
      {!this.props.pokemonTypes[0] ?
      <div className="loading-pokemon"></div> :
      <div className="pokemon-list">
        <div className="pokemon-types">{this.displayTypes()}</div>
        <div className="pokemon-group">{this.displayPokemon()}</div>
      </div>}
      </section>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemonTypes: store.pokemonTypes,
  pokemonGroup: store.pokemonGroup
});

const mapDispatchToProps = (dispatch) => ({
  addPokemonGroup: (pokemon) => dispatch(addPokemonGroup(pokemon))
});

PokemonList.propTypes = {
  pokemonTypes: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

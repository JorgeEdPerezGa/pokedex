import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes, { shape, func, string } from 'prop-types';
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
      return <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight}</p>
        <img src={pokemon.sprites.front_default}/>
      </div>
    })
  }

  getPokemonGroup = async (pokemon) => {
    const fetchPokemon = await helper.fetchPokemon(pokemon);
    this.props.addPokemonGroup(fetchPokemon)
  }

  render() {
    return (
      <section className="pokemon-list">
      {!this.props.pokemonTypes[0] ?
      <div className="loading-pokemon"></div> :
      <div>
        {this.displayTypes()}
        {this.displayPokemon()}
      </div>}
      </section>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemonTypes: store.pokemonTypes,
  pokemonGroup: store.pokemonGroup
})

const mapDispatchToProps = (dispatch) => ({
  addPokemonGroup: (pokemon) => dispatch(addPokemonGroup(pokemon))
})

// PokemonList.propTypes = {
//   // fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

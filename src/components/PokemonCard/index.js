import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonCard extends Component {

  render() {
    return  (
      <div>
        <article
          className="pokemon-card"
          onClick={() => {this.props.getPokemonGroup(this.props.type.pokemon)}}>
          <p className="type-title">{this.props.type.name}</p>
        </article>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  pokemonGroup: store.pokemonGroup
})

export default connect(mapStateToProps)(PokemonCard);

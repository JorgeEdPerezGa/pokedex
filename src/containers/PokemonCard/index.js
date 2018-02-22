import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PokemonCard extends Component {

  render() {
    return  (
      <div>
        <article
          className="pokemon-card"
          onClick={() => {
            this.props.getPokemonGroup(this.props.type.pokemon);
          }}>
          <p className="type-title">{this.props.type.name}</p>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemonGroup: store.pokemonGroup
});

PokemonCard.propTypes = {
  getPokemonGroup: PropTypes.func,
  type: PropTypes.object
};

export default connect(mapStateToProps)(PokemonCard);

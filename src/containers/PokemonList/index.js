import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes, { shape, func, string } from 'prop-types';
import * as helper from '../../helper';
import { addPokemonTypes } from '../../actions';
import PokemonCard from '../../components/PokemonCard';


class PokemonList extends Component {

  displayTypes = () => {
    return this.props.pokemonTypes.map(type => {
      return <PokemonCard type={type}/>
    })
  }

  render() {
    return (
      <div>
        {this.displayTypes()}
      </div>
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
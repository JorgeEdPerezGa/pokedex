import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes, { shape, func, string } from 'prop-types';
import * as helper from '../../helper';
import { addPokemonTypes } from '../../actions';


class PokemonList extends Component {

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.fakeAction()
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  pokemonType: store.pokemonType
})


// PokemonList.propTypes = {
//   // fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

export default connect(mapStateToProps)(PokemonList);

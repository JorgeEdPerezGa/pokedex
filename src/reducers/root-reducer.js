import { combineReducers } from 'redux';
import pokemonTypes from './pokemonTypes';
import pokemonGroup from './pokemonGroup';

const rootReducer = combineReducers({
  pokemonTypes,
  pokemonGroup
});

export default rootReducer;

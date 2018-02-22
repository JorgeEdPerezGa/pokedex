import { pokemonTypes } from './pokemonTypes';
import * as actions from '../actions';

describe( 'pokemonTypes', () => {
  it('should return a default state', () => {
    const expected = [];
    const action = actions.addPokemonTypes;
    expect(pokemonTypes([], action)).toEqual(expected);
  });
});

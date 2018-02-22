import { pokemonTypes } from './pokemonTypes';
import * as actions from '../actions';

describe( 'pokemonTypes', () => {
  it('should return a default state', () => {
    const expected = [];
    const action = actions.addPokemonTypes;
    expect(pokemonTypes([], action)).toEqual(expected);
  });

  it('should return state with array of pokemon types', () => {
    const mockPokemonTypes = [1, 2, 3];
    const action = actions.addPokemonTypes(mockPokemonTypes);
    const expected = mockPokemonTypes;

    expect(pokemonTypes([], action)).toEqual(expected);
  });
});

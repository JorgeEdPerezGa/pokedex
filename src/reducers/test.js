import { pokemonTypes } from './pokemonTypes';
import { pokemonGroup } from './pokemonGroup';
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

describe('pokemonGroup', () => {
  it('should return a defaut state', () => {
    const expected = [];
    const action = actions.addPokemonGroup;
    expect(pokemonGroup([], action)).toEqual(expected);
  });

  it('should return a state with an array of specific pokemon', () => {
    const mockGroup = [1, 2, 3];
    const action = actions.addPokemonGroup(mockGroup);
    const expected = mockGroup;

    expect(pokemonGroup([], action)).toEqual(expected);
  });
});

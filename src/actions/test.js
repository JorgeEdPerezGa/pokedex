import * as actions from './index';

describe('actions', () => {

  describe('addPokemonTypes', () => {

    it('should return a type of ADD_POKEMON_TYPES with an array of pokemon', () => {
      const pokemonTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const expected = {
        type: "ADD_POKEMON_TYPES",
        pokemonTypes
      };

      expect(actions.addPokemonTypes(pokemonTypes)).toEqual(expected);
    });
  });

  describe('addPokemonGroup', () => {

    it('should return a type of ADD_POKEMON_GROUP with an array of pokemon', () => {
      const pokemonGroup = ['pokeon 1', 'pokemon 2', 'pokemon 3'];
      const expected = {
        type: "ADD_POKEMON_GROUP",
        pokemonGroup
      };

      expect(actions.addPokemonGroup(pokemonGroup)).toEqual(expected);
    });
  });
});

export const pokemonTypes = (state=[], action) => {
  switch (action.type) {
  case 'ADD_POKEMON_TYPES':
    return [...state, ...action.pokemonTypes]
  default:
    return state;
  }
};

export default pokemonTypes;

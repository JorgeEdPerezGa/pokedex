export const pokemonGroup = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON_GROUP':
      return action.pokemonGroup;
    default:
      return state;
  }
};

export default pokemonGroup

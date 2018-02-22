const pokemonTypes = (state=[], action) => {
  switch (action.type) {
  case 'ADD_TYPE':
    return [...state, action.pokemonTypes]
  default:
    return state;
  }
};

export default pokemonTypes;

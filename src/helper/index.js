export const fetchType = async() => {
  try {
    const fetchType = await fetch('http://localhost:3001/types');
    if (fetchType.status > 299) {
      throw new Error('could not fetch type');
    } else {
      return await fetchType.json();
    }
  }  catch (error) {
    throw error;
  }
};

export const fetchPokemon = (pokemon) => {
  const fetchPokemon = pokemon.map(async(num) => {
    const url = `http://localhost:3001/pokemon/${num}`;
    const fetchPokemon = await fetch(url);
    return await fetchPokemon.json();
  });
  return Promise.all(fetchPokemon);
};

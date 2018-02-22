export const fetchType = async() => {
  const fetchTypeData = await fetch('http://localhost:3001/types');
  return await fetchTypeData.json();
};

export const fetchPokemon = (pokemon) => {
  const fetchPokemon = pokemon.map(async(num) => {
    const url = `http://localhost:3001/pokemon/${num}`;
    const fetchPokemon = await fetch(url);
    return await fetchPokemon.json();
  });
  return Promise.all(fetchPokemon);
};

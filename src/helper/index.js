export const fetchType = async() => {
  const fetchTypeData = await fetch('http://localhost:3001/types');
  return await fetchTypeData.json();
}

export const fetchPokemon = (pokemon) => {
  const fetchPokemon = pokemon.map(async(num) => {
    const fetchPokemon = await fetch(`http://localhost:3001/pokemon/${num}`);
    const pokemon = await fetchPokemon.json();
    return pokemon;
  })
  return Promise.all(fetchPokemon)
}

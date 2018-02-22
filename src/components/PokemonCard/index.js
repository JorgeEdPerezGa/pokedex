import React from 'react';

const PokemonCard = ({type, displayPokemon}) => {
  return (
    <article
      className="pokemon-card"
      onClick={() => {displayPokemon()}}>
      <p>{type.name}</p>
    </article>
  )
}

export default PokemonCard;

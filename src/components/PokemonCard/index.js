import React from 'react';

const PokemonCard = ({type}) => {
  return (
    <article className="pokemon-card">
      <p>{type.name}</p>
    </article>
  )
}

export default PokemonCard;

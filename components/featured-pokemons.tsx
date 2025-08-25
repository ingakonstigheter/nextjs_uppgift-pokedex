import React from "react";
import PokemonCard from "./pokemon-card";

function FeaturedPokemons() {
  const pokemonId = "3";
  return (
    <div className="grid grid-cols-4 ">
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
    </div>
  );
}

export default FeaturedPokemons;

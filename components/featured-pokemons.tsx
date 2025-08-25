import React from "react";
import PokemonCard from "./pokemon-card";

function FeaturedPokemons() {
  const pokemonId = "3";
  return (
    <div className="flex gap-4 justify-center">
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
    </div>
  );
}

export default FeaturedPokemons;

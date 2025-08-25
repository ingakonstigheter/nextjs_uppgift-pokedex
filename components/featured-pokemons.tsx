import React from "react";
import PokemonCard from "./pokemon-card";

function FeaturedPokemons() {
  const pokemonId = "3";
  return (
    <div className="flex gap-8 justify-center p-10">
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
      <PokemonCard pokemonId={`${pokemonId}`}></PokemonCard>
    </div>
  );
}

export default FeaturedPokemons;

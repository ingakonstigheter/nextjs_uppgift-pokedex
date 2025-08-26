import PokemonList from "@/components/pokemon-list";
import { fetchPokemon } from "@/lib/data/pokemon";
import React from "react";

export default async function PokeDex() {
  const pokemon = await fetchPokemon("9");

  return (
    <div>
      <h1>Pokedex</h1>

      <div className="">
        <PokemonList></PokemonList>
      </div>
    </div>
  );
}

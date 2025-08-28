import React from "react";
import PokemonCard from "./pokemon-card";
import { uniqueRandomNumbers } from "@/lib/util";
import { fetchPokemon } from "@/lib/data/pokemon";

export default async function PokemonList() {
  const TOTAL_NUMBERS = 4;
  const MAX_NUMBER = 1025;
  const randomNumbers = uniqueRandomNumbers(TOTAL_NUMBERS, MAX_NUMBER);
  const pokemon = await fetchPokemon("1");

  return (
    <div className="flex gap-8 justify-center p-10">
      <PokemonCard pokemonIdentification={"1"}></PokemonCard>
    </div>
  );
}

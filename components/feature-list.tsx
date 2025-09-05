import React from "react";
import { uniqueRandomNumbers } from "@/lib/util";
import PokemonCard from "./pokemon-card";
import { MAX_POKEMON } from "@/lib/constants";

export default async function FeatureList() {
  const randomNumbers = uniqueRandomNumbers(4, MAX_POKEMON);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto [grid-template-rows:repeat(5_1fr)] px-2 h-full">
      {randomNumbers.map((id) => (
        <PokemonCard key={id} id={id.toString()}></PokemonCard>
      ))}
    </div>
  );
}

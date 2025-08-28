import React from "react";
import { uniqueRandomNumbers } from "@/lib/util";
import PokemonCard from "./pokemon-card";

export default async function FeatureList() {
  const randomNumbers = uniqueRandomNumbers(4, 1025);
  return (
    <div className="flex gap-8 justify-center p-10">
      {randomNumbers.map((id) => (
        <PokemonCard
          key={id}
          pokemonIdentification={id.toString()}></PokemonCard>
      ))}
    </div>
  );
}

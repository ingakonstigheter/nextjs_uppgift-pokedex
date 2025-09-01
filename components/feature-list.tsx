import React from "react";
import { uniqueRandomNumbers } from "@/lib/util";
import PokemonCard from "./pokemon-card";
import { MAX_POKEMON } from "@/lib/constants";

export default async function FeatureList() {
  const randomNumbers = uniqueRandomNumbers(4, MAX_POKEMON);
  return (
    <div className="grid grid-flow-row bg-amber-200 w-fit md:grid-cols-2 lg:grid-flow-col gap-4 [grid-template-rows:repeat(5_1fr)] p-4">
      {randomNumbers.map((id) => (
        <PokemonCard key={id} id={id.toString()}></PokemonCard>
      ))}
    </div>
  );
}

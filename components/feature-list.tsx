import React from "react";
import PokemonCard from "./pokemon-card";
import { uniqueRandomNumbers } from "@/lib/util";

export default async function FeatureList() {
  const TOTAL_NUMBERS = 4;
  const MAX_NUMBER = 1025;
  const randomNumbers = uniqueRandomNumbers(TOTAL_NUMBERS, MAX_NUMBER);
  console.dir(randomNumbers);

  return (
    <div className="flex gap-8 justify-center p-10">
      {/*       <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard>
      <PokemonCard></PokemonCard> */}
    </div>
  );
}

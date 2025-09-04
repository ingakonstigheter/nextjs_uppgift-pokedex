import React, { Suspense } from "react";
import RandomButton from "./random-button";
import PokemonCard from "./pokemon-card";

export default async function Hero({ id }: { id: string }) {
  return (
    <article className="flex flex-col gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
      <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
        Gotta catch`em all!
      </h1>

      <p className="text-center text-white text-xl">
        Discover, search and explore the amazing world of Pokémon. <br /> Find
        your favourite and learn about their stats.
      </p>
      <div className="m-auto">
        <RandomButton></RandomButton>

        <div className="grid gap-4 [grid-template-rows:repeat(5_1fr)] ">
          <Suspense fallback="Catching pokemon...">
            <PokemonCard id={`${id}`}></PokemonCard>
          </Suspense>
        </div>
      </div>
    </article>
  );
}

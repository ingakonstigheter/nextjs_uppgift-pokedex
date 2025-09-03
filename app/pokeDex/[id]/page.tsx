import { fetchPokemon } from "@/lib/data/pokemon";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";
import TypeBadges from "@/components/type-badges";
import { PokemonFull } from "@/lib/interfaces";
import StatusTable from "@/components/status-table";
import NameLink from "@/components/poke-link";
import { MAX_POKEMON, SMALLEST_ID } from "@/lib/constants";
import PagnationButton from "@/components/pagnation-button";

function GetPokemon({ pokemon }: { pokemon: PokemonFull }) {
  return (
    <article className="grid w-[80ch] p-4 [grid-template-rows:auto_1fr] gap-4 [grid-template-cols:1fr_1fr] bg-white rounded shadow">
      <div className="flex justify-center gap-4 col-span-2">
        <h1 className="text-5xl">
          <NameLink id={pokemon.id.toString()} name={pokemon.name}></NameLink>
        </h1>
        <p className="text-5xl">{`#${String(pokemon.id).padStart(4, "0")}`}</p>
      </div>
      <div className="row-start-2 col-span-2 flex flex-col gap-4">
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
            alt={pokemon.name}
            height={96}
            width={96}
            className="m-auto"></Image>
          <TypeBadges types={pokemon.types}></TypeBadges>
        </div>
        <div className="">
          <StatusTable status={pokemon.stats}></StatusTable>
        </div>
      </div>
    </article>
  );
}

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id) {
    if (parseInt(id) < SMALLEST_ID || parseInt(id) >= MAX_POKEMON) {
      return notFound();
    }
  }

  const prevPokeId = parseInt(id) - 1;
  const nextPokeId = parseInt(id) + 1;

  const prevPokeRef = `${prevPokeId}`;
  const nextPokeRef = `${nextPokeId}`;
  const prevDisplay = parseInt(id) === SMALLEST_ID ? false : true;
  const nextDisplay = parseInt(id) === MAX_POKEMON ? false : true;

  const pokemon: PokemonFull = await fetchPokemon(id);
  if (!pokemon) return notFound();

  return (
    <div className="justify-center min-h-dvh place-items-center bg-gradient-to-r from-blue-100 to-purple-100 p-4 flex">
      <Suspense fallback="Loading...">
        <PagnationButton
          cn="self-start"
          href={prevPokeRef}
          prompt={`#${prevPokeId.toString().padStart(4, "0")}`}
          display={prevDisplay}></PagnationButton>
        <div className="col-span-2">
          <GetPokemon pokemon={pokemon}></GetPokemon>
        </div>
        <PagnationButton
          cn="self-start"
          href={nextPokeRef}
          prompt={`#${nextPokeId.toString().padStart(4, "0")}`}
          display={nextDisplay}></PagnationButton>
      </Suspense>
    </div>
  );
}

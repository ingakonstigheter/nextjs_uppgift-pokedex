import {
  fetchAllPokemon,
  fetchPokemon,
  fetchPokemons,
} from "@/lib/data/pokemon";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";
import TypeBadges from "@/components/type-badges";
import { PokemonFull } from "@/lib/interfaces";
import StatusTable from "@/components/status-table";
import NameLink from "@/components/poke-link";
import { MAX_POKEMON, SMALLEST_ID } from "@/lib/constants";
import PagnationButton from "@/components/pagnation-button";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const allPokemonsShortList = await fetchAllPokemon();

  const allPokemonsFull = await fetchPokemons(allPokemonsShortList);
  return allPokemonsFull.map((pokemon) => ({
    slug: pokemon.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (id) {
    if (
      Number.isNaN(parseInt(id)) ||
      parseInt(id) < SMALLEST_ID ||
      parseInt(id) > MAX_POKEMON
    ) {
      return {
        title: `Pokedex - Not Found`,
        description: `No such Pokemon`,
      };
    }
    const pokemon: PokemonFull = await fetchPokemon(id);
    return {
      title: `Pokedex - ${pokemon.name}`,
      description: `Information about ${pokemon.name}`,
    };
  }
  return {
    title: `Pokedex - Not Found`,
    description: `No such Pokemon`,
  };
}

function GetPokemon({ pokemon }: { pokemon: PokemonFull }) {
  return (
    <article className="grid p-4 gap-4 bg-white rounded shadow border-8">
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
    if (
      Number.isNaN(parseInt(id)) ||
      parseInt(id) < SMALLEST_ID ||
      parseInt(id) > MAX_POKEMON
    ) {
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
    <div className=" min-h-full bg-gradient-to-r from-blue-100 to-purple-100 p-4 flex mx-auto justify-center gap-2">
      <Suspense fallback="Loading...">
        <PagnationButton
          cn="self-start"
          href={prevPokeRef}
          prompt={`#${prevPokeId.toString().padStart(4, "0")}`}
          display={prevDisplay}></PagnationButton>
        <div className="min-w-100">
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

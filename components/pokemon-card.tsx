import React from "react";
import Image from "next/image";
import pokeTypeColors from "@/lib/poke-type-colors.json";
import TypeBadges from "./type-badges";
import { fetchPokemon } from "@/lib/data/pokemon";
import { PokemonFull } from "@/lib/interfaces";
import StatusTable from "./status-table";
import { MAX_POKEMON, SMALLEST_ID } from "@/lib/constants";
import { notFound } from "next/navigation";
import PokeLink from "./poke-link";

export default async function PokemonCard({ id }: { id: string | undefined }) {
  /* Returns not found if id over/under the intervall of pokemons pre fetching */
  if (id) {
    if (parseInt(id) < SMALLEST_ID || parseInt(id) >= MAX_POKEMON) {
      return notFound();
    }
  }

  const pokemon: PokemonFull | undefined = id
    ? await fetchPokemon(id)
    : undefined;

  if (!pokemon) {
    return null;
  }

  const mainType = pokemon.types[0].type.name;
  const color = pokeTypeColors[mainType as keyof typeof pokeTypeColors];

  return (
    <article className="border-4 rounded w-[264px] h-[396] border-[#637CCE] shadow p-4 bg-[#F0FDFF] grid grid-rows-subgrid row-span-5 gap-1">
      {/* Name */}
      <h1 className="mx-auto text-3xl row-start-3">
        <PokeLink id={pokemon.id.toString()} name={pokemon.name}></PokeLink>
      </h1>

      {/* Image */}
      <figure
        className="w-[100px] border-4 rounded-full flex m-auto p-1 row-start-1"
        style={{ borderColor: color }}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
          alt={`${pokemon.name}`}
          height={96}
          width={96}
          className="object-contain"></Image>
      </figure>

      {/* number id */}
      <p
        className="rounded-xl w-min px-1 text-white font-bold m-auto row-start-2"
        style={{
          backgroundColor: color,
        }}>
        {`#${String(pokemon.id).padStart(4, "0")}`}
      </p>

      {/* type badges */}
      <TypeBadges types={pokemon.types}></TypeBadges>

      {/* status table */}
      <StatusTable status={pokemon.stats.slice(0, 3)}></StatusTable>
    </article>
  );
}

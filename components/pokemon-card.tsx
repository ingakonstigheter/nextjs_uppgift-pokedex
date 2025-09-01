import React from "react";
import Image from "next/image";
import pokeTypeColors from "@/lib/pokeTypeColors.json";
import TypeBadges from "./type-badges";
import { fetchPokemon } from "@/lib/data/pokemon";
import { PokemonFull } from "@/lib/interfaces";
import StatusTable from "./status-table";
import NameLink from "./name-link";
import { MAX_POKEMON } from "@/lib/constants";
import { notFound } from "next/navigation";

export default async function PokemonCard({ id }: { id: string | undefined }) {
  if (id) {
    if (parseInt(id) < 0 || parseInt(id) > MAX_POKEMON) {
      return notFound();
    }
  }

  const pokemon: PokemonFull | undefined = id
    ? await fetchPokemon(id)
    : undefined;
  if (!pokemon) {
    return null;
  }
  const color =
    pokeTypeColors[pokemon.types[0].type.name as keyof typeof pokeTypeColors];

  return (
    <article className="border-4 rounded w-[264px] h-[396] border-[#637CCE] shadow p-4 bg-[#F0FDFF] grid grid-rows-subgrid row-span-5 gap-1">
      <h1 className="mx-auto text-2xl">
        <NameLink pokemon={pokemon}></NameLink>
      </h1>
      <figure
        className="w-[100px] border-4 rounded-full flex m-auto p-1"
        style={{ borderColor: color }}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
          alt={`${pokemon.name}`}
          height={96}
          width={96}
          className="object-contain"></Image>
      </figure>
      <p
        className="rounded-xl w-min px-1 text-white font-bold m-auto"
        style={{
          backgroundColor: color,
        }}>
        {`#${String(pokemon.id).padStart(4, "0")}`}
      </p>
      <TypeBadges types={pokemon.types}></TypeBadges>

      <StatusTable status={pokemon.stats.slice(0, 3)}></StatusTable>
    </article>
  );
}

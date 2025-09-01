import { fetchPokemon } from "@/lib/data/pokemon";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import TypeBadges from "@/components/type-badges";
import { PokemonFull } from "@/lib/interfaces";
import StatusTable from "@/components/status-table";
import NameLink from "@/components/name-link";
import { MAX_POKEMON } from "@/lib/constants";

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pokemon: PokemonFull = await fetchPokemon(id);

  if (!pokemon) return notFound();

  return (
    <article className="grid grid-cols-1 md:grid-cols-2  max-w-[80ch] m-auto">
      <div>
        <div className="flex justify-center gap-4">
          <h1 className="text-5xl">
            <NameLink pokemon={pokemon}></NameLink>
          </h1>
          <p className="text-5xl">
            {" "}
            {`#${String(pokemon.id).padStart(4, "0")}`}
          </p>
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
          alt={pokemon.name}
          height={96}
          width={96}
          className="m-auto"></Image>
        <TypeBadges types={pokemon.types}></TypeBadges>
      </div>

      <StatusTable status={pokemon.stats}></StatusTable>
    </article>
  );
}

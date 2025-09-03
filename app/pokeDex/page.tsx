import {
  fetchAllPokemon,
  fetchAllPokemonOfType,
  fetchPokemons,
} from "@/lib/data/pokemon";
import React, { Suspense } from "react";
import Search from "@/components/search";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TypeBadges from "@/components/type-badges";
import TypeRadio from "@/components/type-option";
import PokeLink from "@/components/poke-link";
import { PokemonFull } from "@/lib/interfaces";

function PokemonList({ pokemons }: { pokemons: PokemonFull[] }) {
  return (
    <Table className="grid">
      <TableBody className="grid mx-auto max-h-dvh overflow-y-auto scroll-auto md:w-2/3 lg:w-1/2 grid-cols-[repeat(4_1fr)]">
        {pokemons.map((pokemon) => (
          <TableRow
            key={pokemon.id}
            className="grid odd:bg-[#F0FDFF] grid-cols-subgrid col-span-4">
            {/* id */}
            <TableCell className="grid content-center text-2xl">{`#${String(pokemon.id).padStart(4, "0")}`}</TableCell>

            {/* name */}
            <TableCell className="grid content-center text-3xl">
              <PokeLink
                id={pokemon.id.toString()}
                name={pokemon.name}></PokeLink>
            </TableCell>

            {/* image */}
            <TableCell>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
                alt={`${pokemon.name}`}
                height={96}
                width={96}></Image>
            </TableCell>

            {/* type/s */}
            <TableCell className="grid content-center">
              <TypeBadges types={pokemon.types}></TypeBadges>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query = "", type = "" } = await searchParams;
  let pokemonsData = await fetchAllPokemon();
  /* if type filter by type */
  if (type !== "") {
    const pokemonsOfType = await fetchAllPokemonOfType(type);

    pokemonsData = pokemonsData.filter((pokemon) =>
      pokemonsOfType.some((pokeOfType) => pokeOfType.name === pokemon.name)
    );
  }
  /* if query filter by query */
  if (query !== "") {
    pokemonsData = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  const pokemonsFull = await fetchPokemons(pokemonsData);

  return (
    <section className="grid grid-rows-[auto_auto_1fr] min-h-dvh place-items-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <h2 className="text-center text-5xl">Pokedex</h2>

      <div className="p-10 grid ">
        <Search></Search>

        <TypeRadio></TypeRadio>
      </div>

      <Suspense fallback="Loading...">
        <PokemonList pokemons={pokemonsFull}></PokemonList>
      </Suspense>
    </section>
  );
}

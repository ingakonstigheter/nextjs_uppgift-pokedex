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
import TypeRadio, { PokemonTypesShort } from "@/components/type-option";
import NameLink from "@/components/name-link";
import { PokemonShort } from "@/lib/interfaces";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query = "", type = "" } = await searchParams;
  const pokemonsData = await fetchAllPokemon();

  if (type) {
    const pokemonsOfType = await fetchAllPokemonOfType(type);
    return;
    const filteredPokemons = pokemonsData.filter((pokemon) =>
      pokemonsOfType.includes((poke) => poke.name === pokemon.name)
    );
    pokemonsData.length = 0;
    filteredPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }
  /* 
  if (query) {
    const allPokemons = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    pokemonsData.length = 0;
    allPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }

  const pokemonsFull = await fetchPokemons(pokemonsData);
 */
  /*
  const { query = "", type = "" } = await searchParams;
  let pokemonsData: PokemonShort[] | PokemonTypesShort[] = [];
   pokemonsData = await fetchAllPokemon();

  if (type) {
    const pokemonsOfType = await fetchAllPokemonOfType(type);
    const filteredPokemons = pokemonsData.filter((pokemon) =>
      pokemonsOfType.some((p) => p.pokemon.name === pokemon.name)
    );
    pokemonsData.length = 0;
    filteredPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }
  return;
  if (query) {
    const allPokemons = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    pokemonsData.length = 0;
    allPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }

  const pokemonsFull = await fetchPokemons(pokemonsData);
 */ /* 
  const { query = "", type = "" } = await searchParams;

  let pokemons: PokemonShort[] | PokemonTypesShort[] = [];
  if (type !== "") {
    pokemons = (await fetchAllPokemonOfType(type)) as PokemonTypesShort[];
  } else {
    pokemons = (await fetchAllPokemon()) as PokemonShort[];
  }
  if (query !== "") {
    const allPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    pokemons.length = 0;
    allPokemons.forEach((pokemon) => pokemons.push(pokemon));
  }

  const pokemonsFull = await fetchPokemons(pokemons);
 */
  return (
    <section className="grid grid-rows-[auto_auto_1fr] min-h-dvh place-items-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <h2 className="text-center text-5xl">Pokedex</h2>
      <div className="p-10 grid ">
        <Search></Search>
        <TypeRadio></TypeRadio>
      </div>
      <Table className="grid mb-auto">
        <TableBody className="grid mx-auto max-h-dvh overflow-y-auto scroll-auto md:w-2/3 lg:w-1/2 grid-cols-[repeat(4_1fr)]">
          {pokemonsFull.map((pokemon) => (
            <TableRow
              key={pokemon.id}
              className="grid odd:bg-[#F0FDFF] grid-cols-subgrid col-span-4">
              <TableCell className="grid content-center text-2xl">{`#${String(pokemon.id).padStart(4, "0")}`}</TableCell>
              <TableCell className="grid content-center text-3xl">
                <NameLink pokemon={pokemon}></NameLink>
              </TableCell>
              <TableCell>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
                  alt={`${pokemon.name}`}
                  height={96}
                  width={96}></Image>
              </TableCell>
              <TableCell className="grid content-center">
                <TypeBadges types={pokemon.types}></TypeBadges>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

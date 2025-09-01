import {
  fetchAllPokemon,
  fetchAllPokemonOfType,
  fetchPokemons,
} from "@/lib/data/pokemon";
import React from "react";
import Search from "@/components/search";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TypeBadges from "@/components/type-badges";
import TypeRadio, { PokemonTypesShort } from "@/components/type-option";
import NameLink from "@/components/name-link";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query = "", type = "" } = await searchParams;

  //fetch all pokemons
  const pokemonsData = await fetchAllPokemon();
  if (type) {
    const pokemonsOfType = await fetchAllPokemonOfType(type);
    const filteredPokemons = pokemonsData.filter((pokemon) =>
      pokemonsOfType.some((p) => p.pokemon.name === pokemon.name)
    );
    pokemonsData.length = 0;
    filteredPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }

  if (query) {
    //filter pokemons based on search params
    const allPokemons = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    pokemonsData.length = 0;
    allPokemons.forEach((pokemon) => pokemonsData.push(pokemon));
  }
  const pokemonsFull = await fetchPokemons(pokemonsData);

  return (
    <div className="grid">
      <h2 className="text-center text-2xl">Pokedex</h2>
      <div className="p-10 grid m-auto">
        <Search></Search>
        <TypeRadio></TypeRadio>
      </div>

      <Table className="w-full lg:w-1/2 mx-auto grid  max-h-[100px] ">
        <TableBody className="grid grid-cols-[repeat(4_1fr)] m-auto">
          {pokemonsFull.map((pokemon) => (
            <TableRow
              key={pokemon.id}
              className="grid odd:bg-[#F0FDFF] grid-cols-subgrid col-span-4">
              <TableCell className="grid content-center">{`#${String(pokemon.id).padStart(4, "0")}`}</TableCell>
              <TableCell className="grid content-center">
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
    </div>
  );
}

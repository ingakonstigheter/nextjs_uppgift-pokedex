import { fetchAllPokemon, fetchPokemons } from "@/lib/data/pokemon";
import React from "react";
import Search from "@/components/search";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TypeBadges from "@/components/type-badges";
export default async function PokeDex() {
  const pokemonsShort = await fetchAllPokemon();
  const pokemonsFull = await fetchPokemons(pokemonsShort);
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="p-10 justify-center flex">
        <Search></Search>
        <input type="checkbox" name="" id="" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pokemonsFull.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>
                <Link href={""}>{pokemon.name.toUpperCase()}</Link>
              </TableCell>
              <TableCell>
                <figure>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
                    alt={`${pokemon.name}`}
                    height={100}
                    width={100}
                    className=" rounded-full"></Image>
                </figure>
              </TableCell>
              <TableCell>
                <TypeBadges types={pokemon.types}></TypeBadges>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

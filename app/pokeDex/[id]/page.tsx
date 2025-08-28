import { Button } from "@/components/ui/button";
import { fetchPokemon } from "@/lib/data/pokemon";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import TypeBadges from "@/components/type-badges";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon: PokemonFull = await fetchPokemon(id);

  if (!pokemon) return notFound();

  return (
    <div>
      <Link href={"/pokedex/"} className="bg-red-300">
        <Button>Back</Button>
      </Link>

      <h1 className="text-center">{pokemon.name.toUpperCase()}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
        alt={pokemon.name}
        height={300}
        width={300}></Image>
      <TypeBadges types={pokemon.types}></TypeBadges>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>{pokemon.stats[0].stat.name.toUpperCase()}</TableHead>
            <TableCell>{pokemon.stats[0].base_stat}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{pokemon.stats[1].stat.name.toUpperCase()}</TableHead>
            <TableCell>{pokemon.stats[1].base_stat}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{pokemon.stats[2].stat.name.toUpperCase()}</TableHead>
            <TableCell>{pokemon.stats[2].base_stat}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

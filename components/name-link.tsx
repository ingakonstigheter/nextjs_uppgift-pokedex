import { PokemonFull } from "@/lib/interfaces";
import Link from "next/link";
import React from "react";

export default function NameLink({ pokemon }: { pokemon: PokemonFull }) {
  return (
    <Link href={`pokedex/${pokemon.id}`} className="capitalize">
      {pokemon.name}
    </Link>
  );
}

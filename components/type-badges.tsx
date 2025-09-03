import React from "react";
import pokeTypeColors from "@/lib/poke-type-colors.json";
import { PokemonTypes } from "@/lib/interfaces";
import Link from "next/link";

export default function TypeBadges({ types }: { types: PokemonTypes[] }) {
  return (
    <div className="flex gap-2 justify-center">
      {types.map((type, index) => {
        return (
          <Link
            key={index}
            className="px-2 capitalize w-min h-min rounded-xl font-bold text-white"
            style={{
              backgroundColor:
                pokeTypeColors[type.type.name as keyof typeof pokeTypeColors],
            }}
            href={`/pokedex/?type=${type.type.name}`}>
            {type.type.name}
          </Link>
        );
      })}
    </div>
  );
}

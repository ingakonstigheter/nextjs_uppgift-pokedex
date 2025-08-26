import React from "react";
import pokeTypeColors from "@/lib/pokeTypeColors.json";
import { capitalizeFirstLetter } from "@/lib/util";

export default function TypeBadges({ types }: { types: PokemonTypes[] }) {
  return (
    <div className="flex gap-0.5">
      {types.map((type, index) => {
        return (
          <p
            key={index}
            className="px-3 rounded-xl font-bold text-white"
            style={{
              backgroundColor:
                pokeTypeColors[type.type.name as keyof typeof pokeTypeColors],
            }}>
            {capitalizeFirstLetter(type.type.name)}
          </p>
        );
      })}
    </div>
  );
}

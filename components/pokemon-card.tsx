import React from "react";
import Image from "next/image";
import pokeTypeColors from "@/lib/pokeTypeColors.json";
import TypeBadges from "./type-badges";
import { capitalizeFirstLetter } from "@/lib/util";

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const firstType = pokemon.types[0].type.name;
  const color = pokeTypeColors[firstType as keyof typeof pokeTypeColors];

  return (
    <article className="border-4 rounded-xl border-[#637CCE] shadow max-w-[300px] max-h-[450] pt-8 pb-4 px-8 bg-[#F0FDFF] inline-grid gap-1 place-items-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
        alt={`${pokemon.name}`}
        height={200}
        width={200}
        className="border-4 p-3 rounded-full"
        style={{ borderColor: color }}></Image>
      <p
        className="rounded-xl px-0.5 text-white font-bold"
        style={{
          backgroundColor: color,
        }}>
        {`#${String(pokemon.id).padStart(4, "0")}`}
      </p>
      <h1 className="text-2xl">{"Bulbasaur"}</h1>
      <TypeBadges types={pokemon.types}></TypeBadges>
      <table className="text-left w-full font-bold border-collapse">
        <tbody>
          <tr>
            <th>{`${pokemon.stats[0].stat.name.toUpperCase()}`}</th>
            <td className="text-right">{`${pokemon.stats[0].base_stat}`}</td>
          </tr>
          <tr>
            <th>{`${capitalizeFirstLetter(pokemon.stats[1].stat.name)}`}</th>
            <td className="text-right">{`${pokemon.stats[1].base_stat}`}</td>
          </tr>
          <tr>
            <th>{`${capitalizeFirstLetter(pokemon.stats[2].stat.name)}`}</th>
            <td className="text-right">{`${pokemon.stats[2].base_stat}`}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default PokemonCard;

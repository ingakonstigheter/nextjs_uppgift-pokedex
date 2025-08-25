import React from "react";
import Image from "next/image";
import pokeTypeColors from "@/lib/pokeTypeColors.json";

function PokemonCard({ pokemonId }: { pokemonId: string }) {
  //const pokemon: Pokemon = await fetachAllPokemon();
  const type = "grass";
  const color = pokeTypeColors[type as keyof typeof pokeTypeColors];
  return (
    <article className="border-4 rounded-xl border-sky-700 max-w-[300px] max-h-[450] pt-8 pb-4 px-8 bg-background inline-grid gap-1 place-items-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`}
        alt={""}
        height={200}
        width={200}
        className="border-4 p-3 rounded-full"
        style={{ borderColor: color }}></Image>
      <p className="rounded-xl px-0.5" style={{ backgroundColor: color }}>
        #001
      </p>
      <h1 className="text-2xl">{"Bulbasaur"}</h1>
      <p
        className="px-3 rounded-xl font-bold text-white"
        style={{ backgroundColor: color }}>
        Grass
      </p>
      <table className="text-left w-full font-bold border-collapse">
        <tr>
          <th>HP</th>
          <td className="text-right">50</td>
        </tr>
        <tr>
          <th>Attack</th>
          <td className="text-right">50</td>
        </tr>
        <tr>
          <th>Defense</th>
          <td className="text-right">50</td>
        </tr>
      </table>
    </article>
  );
}

export default PokemonCard;

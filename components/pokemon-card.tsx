import React from "react";
import Image from "next/image";

function PokemonCard({ pokemonId }: { pokemonId: string }) {
  //const pokemon: Pokemon = await fetachAllPokemon();
  return (
    <article className="border-4 rounded-xl border-sky-700 max-w-[200px] max-h-[400] p-2 px-8 inline-grid place-items-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`}
        alt={""}
        height={200}
        width={200}
        className="border-4 p-1 border-blue-700 rounded-full"></Image>
      <h1 className="text-2xl">{"Bulbasaur"}</h1>
      <p>#001</p>
      <p>Grass</p>
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

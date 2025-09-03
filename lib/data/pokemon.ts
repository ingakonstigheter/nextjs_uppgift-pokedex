import { PokemonTypesShort } from "@/components/type-option";
import { MAX_POKEMON } from "../constants";
import { PokemonFull, PokemonShort } from "../interfaces";

export async function fetchPokemon(id: string): Promise<PokemonFull> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error("Pokemon escaped, there was a problem");
    }

    return await response.json();
  } catch (e: any) {
    throw {
      status: e.status,
      message: e.statusText || "Network error",
    };
  }
}

export async function fetchPokemons(
  list: PokemonShort[]
): Promise<PokemonFull[]> {
  try {
    const results = await Promise.all(
      list.map((pokemon) => fetchPokemon(pokemon.name))
    );
    
    return results;
  } catch (e: any) {
    throw {
      status: e.status,
      message: e.statusText || "Network error",
    };
  }
}

export async function fetchAllPokemon(): Promise<PokemonShort[]> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${MAX_POKEMON}`
    );

    if (!response.ok) {
      throw new Error("There was a problem, the pokemon's escaped, ");
    }

    const data = await response.json();
    return data.results;
  } catch (e: any) {
    throw {
      status: e.status,
      message: e.statusText || "Network erorr",
    };
  }
}

export async function fetchAllPokemonOfType(
  type: string
): Promise<PokemonShort[]> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

    if (!response.ok) {
      throw new Error("There was a problem, the pokemon's escaped, ");
    }

    const data = await response.json();

    return data.pokemon.map((item: { pokemon: PokemonShort }) => item.pokemon);
  } catch (e: any) {
    throw {
      status: e.status,
      message: e.statusText || "Network erorr",
    };
  }
}

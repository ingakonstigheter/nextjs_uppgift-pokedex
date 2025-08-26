export async function fetchPokemon(pokemon: string) {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const result: Pokemon = await (await response).json();

  return result;
}
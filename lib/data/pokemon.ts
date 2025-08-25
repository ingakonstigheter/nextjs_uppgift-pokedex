export async function fetachAllPokemon() {
  const response = fetch("https://pokeapi.co/api/v2/pokemon/1");
  const result: Pokemon = await (await response).json();


  return result;
}

import FeatureList from "@/components/feature-list";
import PokemonCard from "@/components/pokemon-card";
import RandomButton from "@/components/random-button";
import Search from "@/components/search";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { random = "" } = await searchParams;
  const searchResult: number[] = [];
  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Gotta catch 'em all!
        </h1>
        <p className="text-center text-white text-xl">
          Discover, search and explore the amazing world of Pokémon. Find
          <br /> your favourite and learn about their stats.
        </p>
        <RandomButton></RandomButton>
        <PokemonCard pokemonIdentification={`${random}`}></PokemonCard>
      </section>
      <div className="p-10 justify-center flex">
        <Search></Search>
      </div>
      <article className="bg-gradient-to-r from-blue-100 to-purple-100 p-10">
        <h2 className="text-3xl text-center">Featured Pokemons</h2>
        <FeatureList></FeatureList>
      </article>

      <div>
        {searchResult.map((id) => (
          <PokemonCard pokemonIdentification={id.toString()}></PokemonCard>
        ))}
      </div>
    </main>
  );
}

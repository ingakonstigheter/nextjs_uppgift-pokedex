import FeatureList from "@/components/feature-list";
import SearchForm from "@/components/search-form";
import Image from "next/image";

export default async function Home() {
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
        <button className="btn-primary">
          <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
          Random Pokémon
        </button>
      </section>
      <section className="p-10 justify-center flex">
        <SearchForm></SearchForm>
      </section>
      <article className="bg-gradient-to-r from-blue-100 to-purple-100 p-10">
        <h2 className="text-3xl text-center">Featured Pokemons</h2>
        <FeatureList></FeatureList>
      </article>
    </main>
  );
}

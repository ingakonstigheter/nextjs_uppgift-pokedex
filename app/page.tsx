import FeatureList from "@/components/feature-list";
import Hero from "@/components/hero";
import Search from "@/components/search";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Pokedex - start",
  description: "Homepage that displays random Pokemons, Search and show the original 151 pokemons and their stats",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { random = "" } = await searchParams;

  return (
    <>
      <Hero id={random}></Hero>

      <section className="p-10 justify-center flex">
        <Search></Search>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 grid gap-4 y-center p-8">
        <h2 className="text-5xl text-center">Featured Pokemons</h2>

        <Suspense fallback="Loading...">
          <FeatureList></FeatureList>
        </Suspense>
      </section>
    </>
  );
}

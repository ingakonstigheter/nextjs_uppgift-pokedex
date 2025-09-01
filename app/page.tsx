import FeatureList from "@/components/feature-list";
import Hero from "@/components/hero";
import Search from "@/components/search";
import { Suspense } from "react";

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

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 justify-center">
        <h2 className="text-3xl text-center">Featured Pokemons</h2>
        <Suspense>
          <FeatureList></FeatureList>
        </Suspense>
      </section>
    </>
  );
}

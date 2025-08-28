import { Button } from "@/components/ui/button";
import { fetchPokemon } from "@/lib/data/pokemon";
import { Main } from "next/document";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon: PokemonFull = await fetchPokemon(id);

  if (!pokemon) return notFound();

  return (
    <div>
      <Link href={"/pokedex/"}>
        <Button>Back</Button>
      </Link>
    </div>
  );
}

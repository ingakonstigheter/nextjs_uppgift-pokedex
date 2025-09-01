"use client";
import { POKEMON_TYPES } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export interface PokemonTypesShort {
  [x: string]: any;
  name: string;
  url: string;
}

export default function TypeOption() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((queryString: string) => {
    const params = new URLSearchParams(searchParams);

    if (queryString) {
      params.set("type", queryString);
    } else {
      params.delete("type");
    }
    replace(`/pokedex?${params}`);
  }, 600);

  return (
    <div>
      <label htmlFor="typeSelect">Filter by type</label>
      <select
        name="type-select"
        id="typeSelect"
        defaultValue={searchParams.getAll("type")?.toString()}
        onChange={(e) => handleChange(e.target.value)}
        className="text-center">
        <option value="">all</option>
        {POKEMON_TYPES.map((type, index) => (
          <option
            key={index}
            value={type.name}
            id={type.name}
            className="text-center">
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

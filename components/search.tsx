"use client";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((queryString: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("random");

    if (queryString !== "") {
      params.set("query", queryString);
    } else {
      params.delete("query");
    }

    replace(`/pokedex?${params}`);
  }, 600);

  return (
    <div className="grid w-[400px] items-center gap-2 relative">
      <label className="sr-only" htmlFor="search">
        Search
      </label>

      <Input
        type="text"
        placeholder="Search for a Pokemon"
        id="search"
        className="shadow bg-white"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}

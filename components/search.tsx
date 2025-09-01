"use client";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ deleteQuery }: { deleteQuery?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((queryString: string) => {
    const params = new URLSearchParams(searchParams);
    if (deleteQuery) {
      params.delete(deleteQuery);
    }
    if (queryString) {
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
        className="shadow"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Button
        type="submit"
        variant="outline"
        className="absolute right-0 size-6 m-2 bg-blue-500">
        <figure>
          <CiSearch className="text-white" />
        </figure>
      </Button>
    </div>
  );
}

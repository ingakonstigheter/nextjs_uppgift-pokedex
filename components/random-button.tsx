"use client";
import React from "react";
import Image from "next/image";
import { randomNumber } from "@/lib/util";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MAX_POKEMON } from "@/lib/constants";

export default function RandomButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (queryString: string) => {
    const params = new URLSearchParams(searchParams);

    if (queryString) {
      params.set("random", queryString);
    } else {
      params.delete("random");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="hidden"
          name="random"
          defaultValue={searchParams.get("random")?.toString()}
        />

        <button
          className="btn-primary"
          type="submit"
          onClick={() => handleClick(randomNumber(MAX_POKEMON).toString())}>
          <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
          Random Pokémon
        </button>
      </div>
    </>
  );
}

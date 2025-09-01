import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="h-[345px] bg-[#2D2D2D] grid justify-center">
      <Link href={"/"} className="flex self-center ">
        <p className="text-4xl font-bold text-transparent text-center bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text] ">
          PokeDex
        </p>
      </Link>
      <p className="text-center text-2xl text-white">
        Explore the world of Pokemon
      </p>
    </footer>
  );
}

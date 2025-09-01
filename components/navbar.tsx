import Link from "next/link";
import React from "react";

const links = [
  { promt: "Home", url: "/" },
  { promt: "PokeDex", url: "/pokedex" },
];

export default function Navbar() {
  return (
    <nav className="flex align-center">
      <Link href={"/"} className="flex">
        <h1 className="text-4xl font-bold text-transparent self-center bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text] ">
          PokeDex
        </h1>
      </Link>
      <ul className="flex gap-2 ml-auto mt-auto p-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="m-2 text-2xl p-4 hover:underline focus:underline">
              {link.promt}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import React from "react";

const links = [
  { promt: "Home", url: "/" },
  { promt: "PokeDex", url: "/pokedex" },
];

export default function Navbar() {
  return (
    <nav className="flex">
      <Link href={"/"}>
        <h1 className=" text-xl font-bold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          PokeDex
        </h1>
      </Link>{" "}
      <ul className="flex gap-2 ml-auto mt-auto">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="m-2 hover:underline focus:underline">
              {link.promt}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Start</Link>
        </li>
        <li>
          <Link href={"/pokedex"}>PokeDex</Link>
        </li>
      </ul>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PokeLink({ id, name }: { name: string; id: string }) {
  const pathname = usePathname();
  let path = `pokedex/${id}`;
  /* if same page ref to top */
  if (pathname === `/pokedex/${id}`) {
    path = "#";
  }
  return (
    <Link href={path} className="capitalize">
      {name}
    </Link>
  );
}

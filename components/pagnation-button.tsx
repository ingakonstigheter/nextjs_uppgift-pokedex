import { PagnationProps } from "@/lib/interfaces";
import Link from "next/link";
import React from "react";

export default function PagnationButton({
  cn,
  href,
  prompt,
  display,
}: PagnationProps) {
  if (!display) {
    return (
      <p className={`p-4 font-bold text-2xl bg-white rounded shadow ${cn}`}>
        #####
      </p>
    );
  }
  return (
    <Link
      className={`p-4 font-bold text-2xl bg-white rounded shadow  hover:ring-4 hover:ring-blue-300 focus:ring-4 focus:ring-blue-300 ${cn}`}
      href={href}>
      {prompt}
    </Link>
  );
}

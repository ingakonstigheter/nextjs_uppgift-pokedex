import { PagnationProps } from "@/lib/interfaces";
import Link from "next/link";
import React from "react";

export default function PagnationButton({
  cn,
  href,
  prompt,
  display,
}: PagnationProps) {
  if (!display) return null;

  return (
    <Link className={`p-4 font-bold text-2xl rounded shadow ${cn}`} href={href}>
      {prompt}
    </Link>
  );
}

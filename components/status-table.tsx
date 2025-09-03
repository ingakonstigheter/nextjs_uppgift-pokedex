import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";
import { StatusInfo } from "@/lib/interfaces";

export default function StatusTable({ status }: { status: StatusInfo[] }) {
  return (
    <Table className="text-left font-bold mx-auto max-w-[50ch]">
      <TableBody>
        {status.map((item, index) => (
          <TableRow key={index}>
            <TableHead className="font-bold">{`${item.stat.name.toUpperCase()}`}</TableHead>

            <TableCell className="text-right">{`${item.base_stat}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

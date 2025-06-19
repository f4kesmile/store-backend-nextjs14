"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Produk",
  },
  {
    accessorKey: "phone",
    header: "No. Hp",
  },
  {
    accessorKey: "address",
    header: "Alamat",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Harga",
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal",
  },
];

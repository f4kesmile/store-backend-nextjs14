"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Order (${data.length})`}
        description="Atur Order untuk Toko"
      />
      <Separator />
      <DataTable data={data} columns={columns} searchKey="products" />
    </>
  );
};

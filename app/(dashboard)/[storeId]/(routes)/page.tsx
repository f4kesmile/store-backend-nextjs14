import db from "@/lib/db";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const resolvedParams = await params;
  const store = await db.store.findFirst({
    where: {
      id: resolvedParams.storeId,
    },
  });

  if (!store) {
    return <div>Toko tidak ditemukan.</div>;
  }

  return <div>Active Store: {store.name}</div>;
};

export default DashboardPage;

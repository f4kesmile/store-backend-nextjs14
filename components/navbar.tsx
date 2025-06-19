import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "@/lib/db";

interface NavbarProps {
  currentStoreId?: string;
}

const Navbar = async ({ currentStoreId }: NavbarProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await db.store.findMany({
    where: { userId },
  });

  // Cari store yang dipilih berdasarkan currentStoreId, kalau ada
  const currentStore = stores.find((store) => store.id === currentStoreId);

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="text-white mr-6">
          {currentStore ? `Store: ${currentStore.name}` : "No Store Selected"}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

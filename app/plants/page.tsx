import InventoryTable from "@/components/InventoryTable";
import { stackServerApp } from "@/stack";
import { SignIn } from "@stackframe/stack";

export default async function PlantsPage() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <div>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full">
            <InventoryTable />
          </div>
        </div>
      ) : (
        <div className="mt-20 flex items-center justify-center">
          <SignIn />
        </div>
      )}
    </div>
  );
}

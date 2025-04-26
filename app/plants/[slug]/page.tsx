import { getPlantById } from "@/app/actions/plants-action";
import PlantCard from "./PlantCard";
import { stackServerApp } from "@/stack";
import { SignIn } from "@stackframe/stack";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const [id] = slug.split("--");
  const plant = await getPlantById(id);

  return {
    title: plant?.name ?? "Plant Details",
    description: plant?.description ?? "Plant details page",
  };
}

export default async function PlantPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [id] = slug.split("--");
  const user = await stackServerApp.getUser();
  const plant = await getPlantById(id);

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-full">
        <PlantCard plant={plant} />
      </div>
    </div>
  );
}

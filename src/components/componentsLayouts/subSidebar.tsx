import { ComponentVariation } from "@/types/components/types";
import Link from "next/link";

export default async function SubSideBar({
  variations,
}: {
  variations: ComponentVariation[];
}) {
  return (
    <aside
      className="w-64 pt-16 h-screen overflow-y-auto bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="py-4 px-3">
        {variations ? (
          <aside>
            {variations?.map((variation) => (
              <Link key={variation.id} href={`#${variation.id}`}>
                <p className="text-white">{variation.name}</p>
              </Link>
            ))}
          </aside>
        ) : (
          <div>No Component variations Found</div>
        )}
      </div>
    </aside>
  );
}

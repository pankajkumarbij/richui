import getComponents from "@/utils/components/getComponents";
import Link from "next/link";

export default async function SideBar() {
  const components = await getComponents();

  return (
    <aside
      className="w-64 h-screen pt-16 overflow-y-auto bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="py-4 px-3">
        {components ? (
          <ul className="space-y-2">
            {components.map((component) => (
              <li key={component.name}>
                <Link href={`/components/${component.id}`}>
                  <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {component.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>No Component List Found</div>
        )}
      </div>
    </aside>
  );
}

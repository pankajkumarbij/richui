import SubSideBar from "@/components/componentsLayouts/subSidebar";
import getComponentByName from "@/utils/components/getComponentByName";

export default async function ComponentByName({
  params,
}: {
  params: { component: string };
}) {
  const componentData = await getComponentByName(params.component);

  return (
    <div>
      {componentData ? (
        <div className="flex">
          <main className="flex-1 pt-16 overflow-y-auto h-screen border-x border-gray-600 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-white">
            <div className="py-4 px-3">
              <h1>{componentData.name}</h1>
              <p>{componentData.description}</p>
              {componentData.variations ? (
                <aside className="w-64">
                  {componentData.variations?.map((variation) => (
                    <div
                      className="pt-16"
                      key={variation.id}
                      id={variation.id}
                    >
                      <p>{variation.name}</p>
                    </div>
                  ))}
                </aside>
              ) : (
                <div>No Component variations Found</div>
              )}
            </div>
          </main>
          <SubSideBar variations={componentData.variations} />
        </div>
      ) : (
        <div>Component Data not found</div>
      )}
    </div>
  );
}

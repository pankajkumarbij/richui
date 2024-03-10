import SubSideBar from "@/components/componentsLayouts/subSidebar";
import ShowCode from "@/components/renderComponents/showCode";
import ComponentsCode from "@/mappings/componentsCode";
import componentsUI from "@/mappings/componentsUI";
import getComponentByName from "@/utils/components/getComponentByName";

export default async function ComponentByName({
  params,
}: {
  params: { component: string };
}) {
  const componentData = await getComponentByName(params.component);

  return (
    <div className="w-full border">
      {componentData ? (
        <div className="flex">
          <main className="flex-1 pt-16 overflow-y-auto h-screen border-x border-gray-600 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-white">
            <div className="py-4 px-3">
              <h1>{componentData.name}</h1>
              <p>{componentData.description}</p>
              {componentData.variations ? (
                <div>
                  {componentData.variations?.map((variation) => {
                    const Component = componentsUI[variation.id];
                    const ComponentCode = ComponentsCode[variation.id];
                    if (!Component) {
                      return (
                        <div key={variation.id} id={variation.id}>
                          Component not found
                        </div>
                      );
                    }
                    return (
                      <div
                        className="pt-16"
                        key={variation.id}
                        id={variation.id}
                      >
                        <p>{variation.name}</p>
                        <Component />
                        <ShowCode code={ComponentCode} />
                      </div>
                    );
                  })}
                </div>
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

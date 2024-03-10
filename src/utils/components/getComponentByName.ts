import { ComponentType } from "@/types/components/types";
import getComponents from "./getComponents";

export default async function getComponentByName(
  name: string
): Promise<ComponentType | undefined> {
  try {
    const components: ComponentType[] | undefined = await getComponents();

    const componentData = components?.find((component) => component.id === name);
    return componentData;
  } catch (error) {
    console.error("Failed to fetch component for " + name + " :", error);
  }
}

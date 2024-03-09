import { Component } from "@/types/components/types";
import getComponents from "./getComponents";

export default async function getComponentByName(
  name: string
): Promise<Component | undefined> {
  try {
    const components: Component[] | undefined = await getComponents();

    const componentData = components?.find((component) => component.id === name);
    return componentData;
  } catch (error) {
    console.error("Failed to fetch component for " + name + " :", error);
  }
}

import { Component } from "@/types/components/types";

export default async function getComponents(): Promise<
  Component[] | undefined
> {
  try {
    const response = await fetch("http://localhost:3000/data/components.json", {
      method: "GET",
    });
    const data: Component[] = await response.json();

    // Sort the components alphabetically by name
    const sortedComponents = data.sort((a, b) => a.name.localeCompare(b.name));
    return sortedComponents;
  } catch (error) {
    console.error("Failed to fetch components:", error);
  }
}

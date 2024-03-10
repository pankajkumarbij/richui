export interface ComponentVariationType {
  id: string;
  name: string;
  description: string;
}

export interface ComponentType {
  id: string;
  name: string;
  description: string;
  variations: ComponentVariationType[];
}

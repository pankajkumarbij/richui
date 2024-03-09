export interface ComponentVariation {
  id: string;
  name: string;
  description: string;
}

export interface Component {
  id: string;
  name: string;
  href: string;
  description: string;
  variations: ComponentVariation[];
}

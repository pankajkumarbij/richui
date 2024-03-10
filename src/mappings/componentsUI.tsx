import ContainedButtons from "../components/allComponents/buttons/containedButtons";
import OutlinedButtons from "../components/allComponents/buttons/outlinedButtons";
import PillButtons from "../components/allComponents/buttons/pillButtons";
import { ComponentUIType } from "../types/componentsMapping/UI/types";

const ComponentsMapping: ComponentUIType = {
  outlinedButtons: OutlinedButtons,
  containedButtons: ContainedButtons,
  pillButtons: PillButtons,
};

export default ComponentsMapping;

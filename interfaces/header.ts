import { DualTextFieldsData } from "@/components/dashboard/dual-text-field";

export interface HeaderData {
  title: string;
  subtitle: string;
  links: DualTextFieldsData;
  stats: DualTextFieldsData;
}

export const headerInitialState: HeaderData = {
  title: "",
  subtitle: "",
  links: [
    {
      id: 1,
      value1: "",
      value2: "",
    },
  ],
  stats: [
    {
      id: 1,
      value1: "",
      value2: "",
    },
  ],
};

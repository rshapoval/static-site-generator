import { DualTextFieldsData } from "@/components/dashboard/dual-text-field";

export interface FeatureData {
  label: string;
  title: string;
  subtitle: string;
  features: DualTextFieldsData;
}

export const featureInitialState: FeatureData = {
  label: "",
  title: "",
  subtitle: "",
  features: [
    {
      id: 1,
      value1: "",
      value2: "",
    },
  ],
};

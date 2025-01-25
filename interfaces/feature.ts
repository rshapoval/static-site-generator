import { TripleTextFieldsData } from "@/components/dashboard/triple-text-field";

export interface FeatureData {
  label: string;
  title: string;
  subtitle: string;
  features: TripleTextFieldsData;
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
      value3: "",
    },
  ],
};

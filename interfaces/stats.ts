import { DualTextFieldsData } from "@/components/dashboard/dual-text-field";

export interface StatsData {
  stats: DualTextFieldsData;
}

export const statsInitialState: StatsData = {
  stats: [
    {
      id: 1,
      value1: "",
      value2: "",
    },
  ],
};

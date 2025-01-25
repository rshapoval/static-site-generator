import { TripleTextFieldsData } from "@/components/dashboard/triple-text-field";

export interface TeamData {
  title: string;
  subtitle: string;
  team: TripleTextFieldsData;
}

export const teamInitialState: TeamData = {
  title: "",
  subtitle: "",
  team: [
    {
      id: 1,
      value1: "",
      value2: "",
      value3: "",
    },
  ],
};

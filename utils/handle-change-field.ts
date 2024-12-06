import { LandingData } from "@/interfaces/landing";
import { ChangeEvent } from "react";

export const createSectionChangeHandler = (
  sectionKey: keyof LandingData,
  data: LandingData,
  setData: (newData: LandingData) => void,
) => {
  return (fieldKey: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setData({
      ...data,
      [sectionKey]: {
        ...data[sectionKey],
        [fieldKey]: value,
      },
    });
  };
};

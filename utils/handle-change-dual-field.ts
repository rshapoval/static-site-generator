import { DualTextFieldsData } from "@/components/dashboard/dual-text-field";
import { LandingData } from "@/interfaces/landing";

export const handleChangeDualField = (
  sectionKey: keyof LandingData,
  data: LandingData,
  setData: (newData: LandingData) => void,
) => {
  return (fieldKey: string) => (newData: DualTextFieldsData) => {
    setData({
      ...data,
      [sectionKey]: {
        ...data[sectionKey],
        [fieldKey]: newData,
      },
    });
  };
};

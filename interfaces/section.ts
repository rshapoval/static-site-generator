import { LandingData } from "./landing";

export interface SectionProps {
  data: LandingData;
  setData: (newData: LandingData) => void;
}

import { PageData } from "./page";

export interface SectionProps {
  data: PageData;
  setData: (newData: PageData) => void;
}

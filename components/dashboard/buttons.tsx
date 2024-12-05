import Link from "next/link";

import { LANDING_SLUG } from "@/constants/constants";
import { initialState, PageData } from "@/interfaces/page";

interface ButtonsProps {
  setData: (newData: PageData) => void;
}

export default function Buttons({ setData }: ButtonsProps) {
  const clearData = () => {
    setData(initialState);
  };

  return (
    <div className="ml-auto">
      <Link
        className="button inline-block mr-2 bg-sky-600"
        href={`/${LANDING_SLUG}`}
      >
        Show preview
      </Link>
      <button className="button mr-2 bg-green-600" type="button">
        Export site
      </button>
      <button className="button bg-red-600" type="button" onClick={clearData}>
        Clear all fields
      </button>
    </div>
  );
}

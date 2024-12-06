import Link from "next/link";
import { useState } from "react";

import { LANDING_SLUG } from "@/constants/constants";
import { landingInitialState, LandingData } from "@/interfaces/landing";
import ConfirmationModal from "./confirmation-modal";

interface ButtonsProps {
  setData: (newData: LandingData) => void;
}

export default function Buttons({ setData }: ButtonsProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const clearData = () => {
    setData(landingInitialState);
    setModalOpen(false);
  };

  return (
    <>
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
        <button
          className="button bg-red-600"
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Clear all fields
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={clearData}
        title="Clear All Fields"
        message="Are you sure you want to clear all fields?"
      />
    </>
  );
}

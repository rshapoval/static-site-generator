import Link from "next/link";

import { LANDING_SLUG } from "@/constants/constants";

export default function Buttons() {
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
      <button className="button bg-red-600" type="button">
        Clear all fields
      </button>
    </div>
  );
}

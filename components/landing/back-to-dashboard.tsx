import Link from "next/link";

import { DASHBOARD_SLUG } from "@/constants/constants";

export default function BackToDashboard() {
  return (
    <Link
      className="z-10 fixed bottom-10 left-10 inline-flex p-1 bg-white rounded border-2 border-sky-400 hover:shadow-lg"
      href={`/${DASHBOARD_SLUG}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="shrink-0 size-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
      Back to dashboard
    </Link>
  );
}

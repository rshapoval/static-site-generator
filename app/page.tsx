import { DASHBOARD_SLUG } from "@/constants/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2 pt-40 text-center">
      <h1 className="flex justify-center items-center mb-40 text-xl font-medium text-left md:text-4xl md:leading-snug">
        Welcome to
        <br /> Static Site Generator{" "}
        <span className="ml-2 text-5xl md:text-7xl">🐱‍💻</span>
      </h1>
      <Link
        className="text-xl underline hover:no-underline md:text-2xl"
        href={`/${DASHBOARD_SLUG}`}
      >
        Dashboard
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}

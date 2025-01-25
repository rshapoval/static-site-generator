import { useEffect, useState } from "react";
import Image from "next/image";
import { landingInitialState, LandingData } from "@/interfaces/landing";
import { fetchData } from "@/services/page";

export default function TeamSection() {
  const [data, setData] = useState<LandingData>(landingInitialState);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      {/* <!-- Tailwind CSS Team Sections Start --> */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data["team"]["title"]}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {data["team"]["subtitle"]}
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {data["team"]["team"].map((item) => (
              <li key={item["id"]}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={item["value1"]}
                    width="80"
                    height="80"
                    alt={`${item["value2"]} image`}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {item["value2"]}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {item["value3"]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- Tailwind CSS Team Sections End --> */}
    </>
  );
}

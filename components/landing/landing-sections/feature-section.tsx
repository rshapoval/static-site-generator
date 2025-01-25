import { useEffect, useState } from "react";
import Image from "next/image";
import { landingInitialState, LandingData } from "@/interfaces/landing";
import { fetchData } from "@/services/page";

export default function FeatureSection() {
  const [data, setData] = useState<LandingData>(landingInitialState);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      {/* <!-- Tailwind CSS Feature Sections Start --> */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              {data["feature"]["label"]}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data["feature"]["title"]}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {data["feature"]["subtitle"]}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {data["feature"]["features"].map((item) => (
                <div key={item["id"]} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Image
                        className="h-6 w-6 rounded-full"
                        src={item["value1"]}
                        width="16"
                        height="16"
                        alt={`${item["value2"]} image`}
                      />
                    </div>
                    {item["value2"]}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {item["value3"]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* <!-- Tailwind CSS Feature Sections End --> */}
    </>
  );
}

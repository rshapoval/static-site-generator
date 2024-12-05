"use client";

import { useEffect, useState } from "react";
import { initialState, PageData } from "../../interfaces/page";
import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import Buttons from "@/components/dashboard/buttons";
import HeroSection from "@/components/dashboard/landing-sections/hero-section";
import { fetchData, savePage } from "@/services/page-service";

const BREADCRUMBS_LINKS = [{ text: "Dashboard" }];

export default function Dashboard() {
  const [data, setData] = useState<PageData>(initialState);

  const handleSave = async () => {
    await savePage(data);
  };

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <Breadcrumbs links={BREADCRUMBS_LINKS} />
        <Buttons setData={setData} />
      </div>
      <hr />
      <div className="text-md">
        <HeroSection data={data} setData={setData} />
      </div>
      <button
        className="button mt-5 px-5 py-2 bg-green-600"
        type="button"
        onClick={handleSave}
      >
        Save page
      </button>
    </>
  );
}

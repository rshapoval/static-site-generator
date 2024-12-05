"use client";

import Breadcrumbs from "@/components/dashboard/breadcrumbs";
import Buttons from "@/components/dashboard/buttons";
import HeroSection from "@/components/dashboard/landing-sections/hero-section";

const BREADCRUMBS_LINKS = [{ text: "Dashboard" }];

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <Breadcrumbs links={BREADCRUMBS_LINKS} />
        <Buttons />
      </div>
      <hr />
      <div className="text-lg">
        <HeroSection />
      </div>
    </>
  );
}

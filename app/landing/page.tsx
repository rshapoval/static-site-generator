"use client";

import BackToDashboard from "@/components/landing/back-to-dashboard";
import HeroSection from "@/components/landing/landing-sections/hero-section";
import HeaderSection from "@/components/landing/landing-sections/header-section";
import FeatureSection from "@/components/landing/landing-sections/feature-section";
import StatsSection from "@/components/landing/landing-sections/stats-section";
import TeamSection from "@/components/landing/landing-sections/team-sections";
import ContactSection from "@/components/landing/landing-sections/contact-section";
import FooterSection from "@/components/landing/landing-sections/footer-section";

export default function Landing() {
  return (
    <>
      <BackToDashboard />
      <HeroSection />
      <HeaderSection />
      <FeatureSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

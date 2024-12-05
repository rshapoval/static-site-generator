"use client";

import BackToDashboard from "@/components/landing/back-to-dashboard";
import HeroSection from "@/components/landing/hero-section";
import HeaderSection from "@/components/landing/header-section";
import FeatureSection from "@/components/landing/feature-section";
import StatsSection from "@/components/landing/stats-section";
import TeamSection from "@/components/landing/team-sections";
import ContactSection from "@/components/landing/contact-section";
import FooterSection from "@/components/landing/footer-section";

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

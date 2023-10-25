import Image from "next/image";

"use client"

import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/HeroSection";
import FeaturedCompany from "./components/FeaturedCompany";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedCompany />
    </MainLayout>
  );
}

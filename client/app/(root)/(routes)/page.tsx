import Image from "next/image";

"use client"
import HeroSection from "@/app/components/HeroSection";
import FeaturedCompany from "@/app/components/FeaturedCompany";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCompany />
    </>
  );
}
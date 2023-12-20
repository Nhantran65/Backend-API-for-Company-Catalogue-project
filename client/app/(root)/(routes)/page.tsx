import Image from "next/image";

"use client"
import HeroSection from "@/app/components/HeroSection";
import FeaturedCompany from "@/app/components/FeaturedCompany";
import Testimonial from "@/app/components/Testimonial";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCompany />
      <Testimonial />
    </>
  );
}
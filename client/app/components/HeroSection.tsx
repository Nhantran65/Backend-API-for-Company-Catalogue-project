import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative bg-blue-600 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Welcome to Companies Catalogue
            </h1>
            <p className="mb-4 text-lg text-gray-200">
              Discover stories and experiences from internships and alumni at
              various IT companies.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 py-3 rounded">
              Explore Companies
            </button>
          </div>

          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mt-10 md:mt-0">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <Image src={'https://source.unsplash.com/1600x900/?ITcompany'} alt="IT Internship" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

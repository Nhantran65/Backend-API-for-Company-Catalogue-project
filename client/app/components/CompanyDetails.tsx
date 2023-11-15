"use client";

import Image from "next/image";

import React from "react";


const CompanyDetails =  ({ data: company, stories }: { data: any; stories: any[] }) => {
 
  console.log(stories)

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex md:items-start mb-8">
        <div className="relative w-full md:w-64 h-64 mb-4 md:mb-0 md:mr-8">
          <Image
            src={`https://source.unsplash.com/1600x900/?${company.industry}`}
            layout="fill"
            objectFit="cover"
            alt={`${company.name} Logo`}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{company.name}</h2>
          <p className="text-gray-500 mb-4">{company.description}</p>
          <p className="text-sm text-gray-400 mb-2">
            Location: {company.location}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Industry: {company.industry}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Established: {company.established}
          </p>
           <p className="text-sm text-gray-400 mb-2">Employees: {company.other_details.Employee_Count}</p>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Stories & Experiences</h3>
        <ul className="space-y-4">
          {stories.map((story) => (
            <li key={story.story_id} className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
              <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{story.content}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">Posted on: {story.date_posted}</p>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">{story.likes} likes</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;
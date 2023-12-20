"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
  website: string;
  industry: string;
  established: string; // or Date
  other_details: string; // or a more specific type
  Employee_Count: any;
}

interface Story {
  id: number;
  companyId: number;
  userId: number;
  title: string;
  content: string;
  posted: string;
  likes: number;
  status: "pending" | "published";
}

const CompanyDetails = () => {
  const [companyfromBackend, setCompanyfromBackend] = useState<Company>();
  const [stories, setStories] = useState<Story[]>([]);
  const params = useParams();

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        if (!companyfromBackend) {
          const res = await axios.get(`/api/company/${params.companyId}`);
          setCompanyfromBackend(res.data);
        }
      } catch (error: any) {
        console.log("request from client side ", error.message);
      }
    };
    fetchCompany();
  }, [params.companyId, companyfromBackend, stories]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(`/api/company/${params.companyId}/stories`);
        setStories(res.data[0]);
      } catch (error) {
        console.error("Error fetching stories: ", error);
      }
    };

    if (params.companyId) {
      fetchStories();
    }
  }, [params.companyId]);

  if (!companyfromBackend) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="md:flex md:items-start mb-8">
          <div className="relative w-full md:w-64 h-64 mb-4 md:mb-0 md:mr-8">
            <Image
              src={`https://source.unsplash.com/1600x900/?${companyfromBackend.industry}`}
              layout="fill"
              objectFit="cover"
              alt={`${companyfromBackend.name} Logo`}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {companyfromBackend.name}
            </h2>
            <p className="text-gray-500 mb-4">
              {companyfromBackend.description}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Location: {companyfromBackend.location}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Industry: {companyfromBackend.industry}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Established: {formatDate(companyfromBackend.established)}
            </p>
            {/* <p className="text-sm text-gray-400 mb-2">
              Employees: {companyfromBackend.other_details.Employee_Count}
            </p> */}
            <a
              href={companyfromBackend.website}
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
              <li
                key={story.id}
                className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{story.content}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    Posted on: {formatDate(story.posted)}
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">
                      {story.likes} likes
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;

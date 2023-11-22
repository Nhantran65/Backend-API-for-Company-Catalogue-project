"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import ComanyInfo from "./components/ComanyInfo";
import CompanyHeader from "./components/CompanyHeader";
import axios from "axios";
import Spinner from "@/app/components/Spinner";
export interface ICompany {
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

export interface IStory {
  id: number;
  companyId: number;
  userId: number;
  title: string;
  content: string;
  posted: string;
  likes: number;
  status: "pending" | "published";
}
const CompanyIdPage = () => {
  const [companyfromBackend, setCompanyfromBackend] = useState<ICompany>();
  const [stories, setStories] = useState<IStory[]>([]);
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
        console.log(res.data[0]);

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
    <div>
      {/* <CompanyDetails /> */}
      <CompanyHeader
        data={companyfromBackend}
      />
      <ComanyInfo  data={companyfromBackend}/>
    </div>
  );
};

export default CompanyIdPage;

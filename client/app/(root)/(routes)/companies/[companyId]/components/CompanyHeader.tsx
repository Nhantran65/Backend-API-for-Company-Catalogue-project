import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { ICompany } from "../page";
import { Verified } from "lucide-react";

interface CompanyHeaderProps {
  data: ICompany;
}
const CompanyHeader = ({ data }: CompanyHeaderProps) => {
  return (
    <div>
      <>
        <Heading title={data.name} subTitle={data.location} />
        <div className="w-full h-[60vh] overflow-hidden rounded-xl relative ">
          <Image
            alt="Image"
            src={`https://source.unsplash.com/900x600/?${data.industry}`}
            fill
            className="object-cover w-full"
          />
          <div className="absolute top-5 right-5">
            <Verified className="w-8 h-8 text-white bg-sky-500" />
          </div>
        </div>
      </>
    </div>
  );
};

export default CompanyHeader;

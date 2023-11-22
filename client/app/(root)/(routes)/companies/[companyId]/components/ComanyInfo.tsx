import React from "react";
import { ICompany } from "../page";

interface CompanyInfoProps {
  data: ICompany;
}
const ComanyInfo = ({ data }: CompanyInfoProps) => {
  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
                    text-xl font-semibold flex flex-row items-center gap-2
                
                "
        >
          {/* <div>Hosted by {user?.name}</div>
              <Avatar src={user?.image} /> */}
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{data.industry}</div>
          <div>Established: {formatDate(data.established)}</div>
          <div>{data.website}</div>
        </div>
      </div>
      <hr />
      {/* {category && (
            <ListingCategory
                icon = {category.icon}
                label = {category.label}
                description= {category.description}
            />
          )} */}

      <hr />
      <div className="text-lg font-light text-neutral-500">{data.description}</div>

      <hr />
    </div>
  );
};

export default ComanyInfo;

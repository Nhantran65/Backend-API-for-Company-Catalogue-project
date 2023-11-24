import React from "react";
import { IStory } from "./StoryList";
import { formatDate } from "../(root)/(routes)/companies/[companyId]/components/ComanyInfo";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { HoverCardContent } from "@radix-ui/react-hover-card";
interface StoryProps {
  data: IStory;
}
const Story = ({ data }: StoryProps) => {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        {" "}
        {/* Updated this line */}
        <div className="flex items-center space-x-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant={"link"}>
                <Avatar className="h-12 w-12">
                  {" "}
                  {/* Increased avatar size for better visibility */}
                  <AvatarImage
                    src={`https://source.unsplash.com/900x600/?${data.first_name}`}
                    alt="Avatar"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col ml-4">
                  {" "}
                  {/* Added ml-4 for spacing */}
                  <p className="text-sm font-medium leading-none">
                    {data.first_name}
                  </p>
                  <p className="text-sm text-gray-500">{data.email}</p>
                </div>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4 rounded-lg shadow-md mr-12">
              {" "}
              {/* Added padding and shadow for the hover card */}
              <div className="flex items-center space-x-4">

                <div className="flex flex-col">
                  {" "}
                  {/* Stack content vertically */}
                  <h4 className="text-sm font-semibold">
                    @{data.first_name.toLowerCase()}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {`${data.role}.`}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div>
          <p className="font-medium text-gray-600">{formatDate(data.posted)}</p>
        </div>
      </div>
      
    </>
  );
};

export default Story;

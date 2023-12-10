import React from "react";
import { formatDate } from "../(root)/(routes)/companies/[companyId]/components/ComanyInfo";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Story, User } from "@prisma/client";
import Link from "next/link";
interface StoryProps {
  data: (Story & {
    company: {
      name: string
    }, 
    user: User,
  });
}
const Story = ({ data }: StoryProps) => {
  return (
    <div key={data.id} className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start space-x-4">
      <Avatar className="flex-shrink-0">
        <AvatarImage
          src={`https://source.unsplash.com/900x600/?${data.user.first_name}`}
          alt={`${data.user.first_name}'s avatar`}
        />
        <AvatarFallback delayMs={600}>
          {data.user.first_name}
        </AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
        <p className="text-gray-700 mt-2 line-clamp-3">{data.content}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-600">{data.user.first_name}</p>
            <p className="text-sm text-gray-500">{data.user.role}</p>
          </div>
          <p className="text-sm text-gray-400">{formatDate(data.posted)}</p>
        </div>
      </div>
    </div>
    <Link href={`/stories/${data.id}`} passHref>
      <div className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-300">
        Find Out More
      </div>
    </Link>
  </div>
  );
};

export default Story;

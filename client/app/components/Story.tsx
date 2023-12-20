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
    <>
    <div className="bg-white shadow-xl rounded-lg overflow-hidden mt-4">
        <div className="flex justify-between items-center p-6 space-x-6">
            <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold truncate">{props.title}</h3>
            </div>
                <p className="mt-1 text-gray-5000">{props.content}</p>
                <p className="mt-2 text-sm text-gray-400">Status: {props.status}</p>
                <p className="mt-1 text-sm text-gray-400">
                  Published: {props.date}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story
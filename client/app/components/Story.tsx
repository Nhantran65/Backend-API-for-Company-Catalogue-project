import React from "react";
import { IStory } from "./StoryList";

interface StoryProps {
  data: IStory;
}
const Story = ({ data }: StoryProps) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden mt-4">
        <div className="flex justify-between items-center p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl font-bold truncate">{data.title}</h3>
            </div>
            <p className="mt-1 text-gray-5000">{data.content}</p>
            <p className="mt-2 text-sm text-gray-400">Status: {data.status}</p>
            <p className="mt-1 text-sm text-gray-400">
              Published: {new Date(data.posted).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;

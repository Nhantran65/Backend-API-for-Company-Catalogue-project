import React, { useState, useEffect } from "react";
import Story from "./Story";
import axios from "axios";
import Spinner from "./Spinner";

export interface IStory {
  id: number;
  company_id: number;
  user_id: string;
  title: string;
  content: string;
  posted: Date;
  likes: number;
  status: string;
}

const StoryList = () => {
  const [stories2, setStories] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getAllstories = async () => {
    try {
      setIsLoading(true);
      const storiesFromBackend = await axios.get(`/api/stories`);

      setStories(storiesFromBackend.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllstories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-gray-100 py-12 mb-4">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Stories</h2>
        {stories2.map((story: IStory) => {
          return (
            <Story
              key={story.id}
              data={story}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StoryList;

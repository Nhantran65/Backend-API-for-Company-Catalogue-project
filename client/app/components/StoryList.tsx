import React, { useState, useEffect } from "react";
import Story from "./Story";
import axios from "axios";
import Spinner from "./Spinner";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface IStory {
  id: number;
  company_id: number;
  user_id: string;
  title: string;
  content: string;
  posted: Date | any;
  likes: number;
  status: string;
  first_name?: string;
  email?: string;
  role?: string;
}

const StoryList = () => {
  const [stories, setStories] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getAllstories = async () => {
    try {
      setIsLoading(true);
      const storiesFromBackend = await axios.get(`/api/stories`);

      setStories(storiesFromBackend.data);
      console.log(storiesFromBackend.data);
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
    <>
      {stories.map((story: IStory) => {
        return <Story key={story.id} data={story} />;
      })}

      <Button>Have something to share? Create your own story here</Button>
    </>
  );
};

export default StoryList;

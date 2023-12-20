import React, { useState, useEffect } from "react";
import Story from "./Story";
import axios from "axios";
import Spinner from "./Spinner";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import {Story as StoryType} from "@prisma/client"

interface StoryListProps {
  data: (StoryType & {
    company: {
      name: string
    }, 
    user: User,
  })[]
}
const StoryList = () => {
  const [stories, setStories] = useState<any>();

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

  if (isLoading || !stories) {
    return <Spinner />;
  }

  return (
    <>
      {stories.map((story:any) => {
        return <Story key={story.id} data={story} />;
      })}

      <Button>Have something to share? Create your own story here</Button>

      
    </>
  );
};

export default StoryList;

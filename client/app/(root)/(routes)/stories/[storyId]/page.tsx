"use client";
import CommentSection from "@/app/components/CommentSection";
import Spinner from "@/app/components/Spinner";
import { Comment, Story } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";



const StoryIdPage = () => {
  const params = useParams();
  const [story, setStory] = useState<Story | any>();
  const [comments, setComments] = useState<Comment[]>([]);


  // Function to handle adding new comment
  const handleNewComment = (newComment: Comment) => {
    setComments([...comments, newComment]);
  };

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`/api/stories/${params.storyId}`);
        setStory(res.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchStory();
  }, [params.storyId,comments,setComments]);

  if (!story) {
    return (
        <Spinner/>
    )
  }
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
        <p className="text-gray-700 mb-4">{story.content}</p>
        <p className="text-sm text-gray-500 mb-8">Posted by: {story.user.first_name}</p>
        
        <div className="mb-8">
          <Link href="/stories">
            <div className="text-blue-600 hover:underline">Back to stories</div>
          </Link>
        </div>

       
      </div>
      <CommentSection storyId={story.id} comments={story.comments} onNewComment={handleNewComment} />
    </div>
  );
};

export default StoryIdPage;

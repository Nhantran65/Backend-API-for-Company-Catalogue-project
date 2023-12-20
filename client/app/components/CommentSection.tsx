"use client";

import { Comment, User } from "@prisma/client";
import React, { useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { formatDate } from "../(root)/(routes)/companies/[companyId]/components/ComanyInfo";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
type SingleCommentType = Comment & {
  user: User;
};

interface CommentSectionProps {
  comments: SingleCommentType[];
  storyId: string | number | any;
  onNewComment: (newComment: any) => void;
}
const CommentSection = ({ comments, storyId, onNewComment }: CommentSectionProps) => {
  const currentUser = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const postComment = async () => {
    await axios.post(`/api/comments`, {
      storyId: storyId,
      content: newComment,
      username: currentUser.user?.username,
    });
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postComment();
      toast({
        description: "Success.",
      });
      onNewComment(newComment);
      router.refresh();
    } catch (error:any) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });

      console.log(error.message)
    } finally {
      setLoading(false)
      setNewComment("")
    }
  };
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex space-x-4">
              <Avatar className="flex-shrink-0">
                <AvatarImage
                  src={`https://source.unsplash.com/900x600/?${comment.user.first_name}`}
                  alt={`${comment.user.first_name}'s avatar`}
                />
                <AvatarFallback delayMs={600}>
                  {comment.user.first_name}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-sm">
                  {comment.user.first_name} {comment.user.last_name}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(comment.date_posted)}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{comment.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 mb-8"> {/* Added bottom margin */}
          <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-3">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              rows={3}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? <Spinner /> : <p>Post Comment</p>}
            </button>
          </form>
        </div>
    </div>
  );
};

export default CommentSection;

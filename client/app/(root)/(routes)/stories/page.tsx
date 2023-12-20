"use client";

import StoryForm from "../../../components/StoryEntryForm";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import StoryList from "../../../components/StoryList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StoryPage: React.FC = () => {
 
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Stories</CardTitle>
          <CardDescription>
            Go over some of the alumis experiences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <StoryList />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StoryPage;

"use client";

import Image from "next/image";
import { tags, story_tags } from "../constants/constants";
import Story from "./Story";

import React, {useState} from "react";


const CompanyDetails =  ({ data: company, stories}: { data: any; stories: any[] }) => {
 
  console.log(stories)

  stories.forEach(story => {
    story.tag = [];
  })

  story_tags.forEach(story_tag => {
      const foundStoryIndex = stories.findIndex(story => story.story_id == story_tag.story_id);

      if (foundStoryIndex !== -1) {
        if (!stories[foundStoryIndex].tag) stories[foundStoryIndex].tag = [];
        const name = tags.find(tagName => story_tag.tag_id == tagName.tag_id);
        stories[foundStoryIndex].tag.push(name.tag_name.toLowerCase()); 
      }
  });
  
  const [listTag, setListTags] = useState([]);
  const [listTagId, setTagId] = useState([]);

  const onTagClick = (tag, tagId) => { //get tag id, 
    //get tag name and tag id.
    setListTags([...listTag, tag]);
    setTagId([...listTagId, tagId]);
  }

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex md:items-start mb-8">
        <div className="relative w-full md:w-64 h-64 mb-4 md:mb-0 md:mr-8">
          <Image
            src={`https://source.unsplash.com/1600x900/?${company.industry}`}
            layout="fill"
            objectFit="cover"
            alt={`${company.name} Logo`}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{company.name}</h2>
          <p className="text-gray-500 mb-4">{company.description}</p>
          <p className="text-sm text-gray-400 mb-2">
            Location: {company.location}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Industry: {company.industry}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Established: {company.established}
          </p>
           <p className="text-sm text-gray-400 mb-2">Employees: {company.other_details.Employee_Count}</p>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Stories & Experiences</h3>
        <ul className="space-y-4">
          {stories.map((story) => (
          
              <Story
              key={story.story_id} 
              id={story.story_id}
              title={story.title} 
              content={story.content} 
              date={story.date_posted} 
              likes={story.likes}
              storylistTagClick={onTagClick} 
              tagslist={story?.tag}
              />
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default CompanyDetails;

import { story_tags } from '@/app/constants/constants';
import './Tagger.css';
import { useState, useEffect, useRef } from "react";
import Tag from "./Tag";


import React, { FC } from 'react';

interface TagListProps {
  tags: string[];
  storyTagClick: (index: number) => void;
}

const TagList: FC<TagListProps> = ({ tags, storyTagClick }) => {
  let renderedTags = tags.map((tag: string, index: number) => {
    return (
      <Tag
        key={index}
        name={tag.toLowerCase()}
        index={index}
        clickTag={storyTagClick}
      />
    );
  });

  return (
    <>
      <ul id='tags' className="hover-shadow">
        {renderedTags}
      </ul>
    </>
  );
}

export default TagList;
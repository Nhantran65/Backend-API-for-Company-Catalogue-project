import Tag from "./Tag";
import React, { FC } from 'react';

interface TagListProps {
  tags: string[];
  storyTagClick: (name: string, index: number) => void;
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
      <ul className="hover-shadow">
        {renderedTags}
      </ul>
    </>
  );
}

export default TagList;

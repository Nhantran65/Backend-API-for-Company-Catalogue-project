import { story_tags } from '@/app/constants/constants';
import './Tagger.css';
import { useState, useEffect, useRef } from "react";
import Tag from "./Tag";


const TagList = ({tags, storyTagClick}) => {

  
  let renderedTags = tags.map((tag, index) => {
    return(
      <Tag key={index} 
          name={tag.tag_name.toLowerCase()} 
          index={tag.tag_id}
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

export default TagList
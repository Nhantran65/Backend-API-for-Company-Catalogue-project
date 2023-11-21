
import './Tagger.css';
import React, { FC } from 'react';

interface TagProps {
  name: string;
  index: number;
  clickTag: (name: string, index: number) => void;
}

const Tag: FC<TagProps> = ({ name, index, clickTag }) => {
  const passTag = () => {
    clickTag(name, index);
  };

  return (
    <li key={index} className="tag-item cursor-pointer hover:text-gray-600 hover:bg-gray-300" onClick={passTag}>
      <span className='tag-title'>{name}</span>
    </li>
  );
}

export default Tag;
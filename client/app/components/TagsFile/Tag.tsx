

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
    <li key={index} className="bg-gray-200 inline-block text-sm m-0.5 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-300" onClick={passTag}>
      <span>{name}</span>
    </li>
  );
}

export default Tag;
import React from 'react'
import './Tagger.css';

const Tag = ({name, index, clickTag}) => {
  const passTag = () => {
      clickTag(name, index)
  }

  return (
    <li key={index} className="tag-item" onClick={passTag}>
        <span className='tag-title' >{name}</span>
    </li>
    
  )
}

export default Tag
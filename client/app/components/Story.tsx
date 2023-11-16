import React, {useState, useEffect} from 'react'
import TagList from './TagsFile/TagList';
import { tags, story_tags} from '../constants/constants';
import TagInput from './TagsFile/TagInput';

const Story = (props) => {

  const [filteredTags, setFilteredData] = useState([]);
 
  //get all tags for specific story.
  const getTagId = story_tags.filter(item => (item.story_id == props.id));
  useEffect(() => {
    if (props.tagslist.length !== 0) {
      setFilteredData(props.tagslist.filter(item => getTagId.some(tag => item.tag_id === tag.tag_id)))
    } else {
      setFilteredData([...props.tagslist]);
    }
  }, [props.tagslist]);

  
  return (
    <>
        <ul className="space-y-4">
            <li key={props.id} className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
              <h4 className="text-lg font-semibold mb-2">{props.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{props.content}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">Posted on: {props.date}</p>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">{props.likes} likes</span>
                </div>
              </div>
              <div>
              <TagList tags={filteredTags} storyTagClick={props.storylistTagClick} />
              </div>
            </li>
        </ul>
        
    </>
  )
}

export default Story
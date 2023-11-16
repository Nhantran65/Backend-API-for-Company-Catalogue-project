import {useState, useRef, useEffect} from 'react'
import Story from './Story'
import { stories, tags, companies, story_tags } from '../constants/constants';
import TagInput from './TagsFile/TagInput';
import './TagsFile/Tagger.css';
import CloseIcon from '@mui/icons-material/Close';

const StoryList = () => {
  const [listTag, setListTags] = useState([]);
  const [listTagId, setTagId] = useState([]);

  const onTagClick = (tag, tagId) => { //get tag id, 
    //get tag name and tag id.
    setListTags([...listTag, tag]);
    setTagId([...listTagId, tagId]);
  }

  const handleTagChange = (e) => {
    const value = e.target.value;
    switch (e.key) {
      case "Enter":  //collects tag name.
        if(!value.trim()) return
        setListTags([...listTag, value])
        e.target.value = ''
        break;
      case "Backspace": //removes tag name.
        if(!value){
          removeTags(listTag.length - 1);
        }
        break;
    }
  };

  const removeTags = (index) => {
    //remove tags.
    setListTags(listTag.filter((el, i) => i !== index))
    setTagId(listTagId.filter((el, i) => i !== index))
  }

  //get and filter stories, tags and story tags.
  const getTags = tags.filter(item => item.tag_name.toLowerCase().includes(listTag));
  const storyTags = story_tags.filter(item => getTags.some(tag => item.tag_id == tag.tag_id));
  const storyView = stories.filter(item => storyTags.some(tag => item.story_id == tag.story_id));
  console.log(storyView);
  //render stories.
  let renderedStories = storyView.map((story) => {
    return(
      <Story
      key={story.story_id}
      id={story.story_id}
      title={story.title} 
      content={story.content} 
      date={story.date_posted} 
      likes={story.likes}
      storylistTagClick={onTagClick}
      tagslist={tags}
      />
    )
  });
  //render tags into the input field.
  let InputTagList = listTag.map((tag, index) => {
    return(
      <li key={index} className="tag-item">
            <span className='tag-title'>{tag}</span>
            <CloseIcon className='close' onClick={() => removeTags(index)}/>       
      </li>
    );
    
  });

  return (
    <section className="bg-gray-50 py-12 mb-4">
      <div className="container mx-auto px-20">
      <div className='input-container mx-auto'>
        <ul id='tags'>
            {InputTagList}
        </ul>
        <input
          className='tags-input'
          type='text'
          placeholder='Enter to add tags'
          onKeyDown={handleTagChange}
           />
    </div>
      <h3 className="text-2xl mt-2 font-semibold text-center mb-4">Stories Feed</h3>
        {renderedStories}
      </div>
    </section>

  )
}

export default StoryList


import React, { FC, useState } from 'react';
import Story from './Story';
import { stories, tags, companies, story_tags } from '../constants/constants';
import './TagsFile/Tagger.css';
import CloseIcon from '@mui/icons-material/Close';

interface StoryListProps {}

const StoryList: FC<StoryListProps> = () => {
  const [listTag, setListTags] = useState<string[]>([]);
  const [listTagId, setTagId] = useState<number[]>([]);

  stories.forEach((story) => {
    story.tag = [];
  });

  story_tags.forEach((story_tag) => {
    const foundStoryIndex = stories.findIndex(
      (story) => story.story_id === story_tag.story_id
    );

    if (foundStoryIndex !== -1) {
      if (!stories[foundStoryIndex].tag) stories[foundStoryIndex].tag = [];
      const name = tags.find((tagName) => story_tag.tag_id === tagName.tag_id);
      stories[foundStoryIndex].tag.push(name.tag_name.toLowerCase());
    }
  });

  const onTagClick = (t: string, tagId: number) => {
    setListTags([...listTag, t]);
    setTagId([...listTagId, tagId]);
  };

  const handleTagChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    switch (e.key) {
      case 'Enter':
        if (!value.trim()) return;
        setListTags([...listTag, value]);
        e.currentTarget.value = '';
        break;
      case 'Backspace':
        if (!value) {
          removeTags(listTag.length - 1);
        }
        break;
    }
  };

  const removeTags = (index: number) => {
    setListTags(listTag.filter((el, i) => i !== index));
    setTagId(listTagId.filter((el, i) => i !== index));
  };

  const filterByTagSet = new Set(listTag);
  let filterStories = stories.filter(
    (story) =>
      listTag.length === 0 || story.tag.some((t) => filterByTagSet.has(t))
  );

  let renderedStories = filterStories.map((story) => (
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
  ));

  let InputTagList = listTag.map((tag, index) => {
    return (
      <li key={index} className="tag-item">
        <span className="tag-title">{tag}</span>
        <CloseIcon className="close" onClick={() => removeTags(index)} />
      </li>
    );
  });

  return (
    <section className="bg-gray-50 py-12 mb-4">
      <div className="container mx-auto px-20">
        <div className="input-container mx-auto">
          <ul id="tags">{InputTagList}</ul>
          <input
            className="tags-input"
            type="text"
            placeholder="Search..."
            onKeyDown={handleTagChange}
          />
        </div>
        <h3 className="text-2xl mt-2 font-semibold text-center mb-4">
          Stories Feed
        </h3>
        {renderedStories}
      </div>
    </section>
  );
};

export default StoryList;
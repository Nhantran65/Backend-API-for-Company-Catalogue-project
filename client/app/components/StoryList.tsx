import React, { FC, useState } from 'react';
import Story from './Story';
import StoryForm from './StoryEntryForm';
import { stories, tags, companies, story_tags } from '../constants/constants';
import ModalContent from "../components/modal";

interface StoryListProps { }

const StoryList: FC<StoryListProps> = () => {
  const [listTag, setListTags] = useState<string[]>([]);
  const [listTagId, setTagId] = useState<number[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

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
      listTag.length === 0 || listTag.every((t) => story.tag.includes(t))
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
      <li key={index} className="bg-gray-200 inline-flex text-sm m-0.5 px-2 py-2 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-300">
        <span className="tag-title">{tag}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-black rounded-lg text-white ml-1 text-sm justify-center" onClick={() => removeTags(index)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </li>
    );
  });

  //modal content
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <section className="bg-gray-50 py-12 px-5 mb-4">
      <button
        onClick={() => openModal()}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Add Your Story.
      </button>
      <ModalContent isVisible={isModalOpen} onClose={closeModal} />


      <div className="mx-auto px-20">
        <div className="border w-[min(80vw,600px)] flex items-center mt-1 p-0.5 rounded-lg border-solid border-grey-900   mx-auto">
          <ul className='flex flex-wrap m-1 mb-1 mx-0 p-0'>{InputTagList}</ul>
          <input
            className="grow h-12 text-sm px-0 py-2 border-none focus:outline-transparent outline-none"
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
import React from 'react'
import Story from './Story'
import { stories } from '../constants/constants';
import { companies } from '../constants/constants';

const StoryList = () => {
  return (
    <section className="bg-gray-100 py-12 mb-4">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Stories</h2>
        {stories.map((story) => {
          return(
            <Story
            key={story.story_id} 
            title={story.title} 
            content={story.content} 
            status={story.status} 
            date={new Date(story.date_posted).getFullYear()} 
            />
          )
        })}
      </div>
    </section>

  )
}

export default StoryList


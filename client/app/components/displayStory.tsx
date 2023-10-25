import React from 'react'
import { stories } from '../constants/constants';
import { companies } from '../constants/constants';

const DisplayStory = () => {
  const availableStory = stories.find((story) => story.status);
  const featuredCompany = companies.find((company) => company.featured);
  let company_name = "";
   //just for show to be removed later.
  if (featuredCompany?.company_id == availableStory?.company_id){
    company_name = featuredCompany?.name;
  }


  return (
    <section className="bg-gray-100 py-12 mb-4">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Stories</h2>

      {availableStory && (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold truncate">{availableStory.title}</h3>
              </div>
              <p className="mt-1 text-gray-5000">{availableStory.content}</p>
              <p className="mt-2 text-sm text-gray-400">By: {company_name}</p>
              <p className="mt-1 text-sm text-gray-400">
                Published: {new Date(availableStory.date_posted).getFullYear()}
              </p>
            </div>
            
          </div>
        </div>
      )}
    </div>
    </section>
    
  )
}

export default DisplayStory
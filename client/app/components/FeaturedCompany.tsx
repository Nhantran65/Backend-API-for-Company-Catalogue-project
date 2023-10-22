"use client"
import React from 'react'
import { companies } from '../constants/constants'
import Image from 'next/image';

const FeaturedCompany = () => {

    const featuredCompany = companies.find((company) => company.featured);
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Company</h2>

      {featuredCompany && (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold truncate">{featuredCompany.name}</h3>
              </div>
              <p className="mt-1 text-gray-500">{featuredCompany.description}</p>
              <p className="mt-2 text-sm text-gray-400">Location: {featuredCompany.location}</p>
              <p className="mt-1 text-sm text-gray-400">Industry: {featuredCompany.industry}</p>
              <p className="mt-1 text-sm text-gray-400">
                Established: {new Date(featuredCompany.established).getFullYear()}
              </p>
            </div>
            <div className='relative inline-block  overflow-hidden h-20 w-20 md:h-20 md:w-20'>
            <Image 
                  src={'https://source.unsplash.com/600x400/?ufc'}
                  alt={`${featuredCompany.name} Logo`}

                  fill
                 
                />
            </div>
            
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-right text-sm">
              <a
                href={featuredCompany.website}
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
  )
}

export default FeaturedCompany

"use client"
import React from 'react'
import { companies } from '../constants/constants'
import Pagination from './Pagination'
import Image from 'next/image'
const ITEMS_PER_PAGE = 5; 
const CompanyListing = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = companies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-6">Companies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paginatedCompanies.map((company, index) => (
        <div key={company.company_id} className="border rounded-lg overflow-hidden hover:shadow-lg">
          <div className="relative w-full h-40">
            <Image src={`https://source.unsplash.com/1600x900/?${company.industry}`} layout="fill" objectFit="cover" alt={`${company.name} Logo`} />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{company.description}</p>
            <p className="text-sm text-gray-400 mt-2">Location: {company.location}</p>
          </div>
        </div>
      ))}
    </div>
    <Pagination 
        totalItems={companies.length} 
        itemsPerPage={ITEMS_PER_PAGE} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
      />

    </div>
  )
}

export default CompanyListing

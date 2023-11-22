import React from 'react'
import Navbar from '../components/Navbar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
        <Navbar />
        <main  className="mt-2 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</main>
    </div>
  )
}

export default RootLayout

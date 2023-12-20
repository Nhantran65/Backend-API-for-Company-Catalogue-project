import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@/components/ui/button'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
        <Navbar />
        <main  className="mt-2 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</main>
        <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* <Logo /> */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size={"sm"} variant={"ghost"}>Privacy Policy</Button>
          <Button size={"sm"} variant={"ghost"}>Terms of service</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RootLayout

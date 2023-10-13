import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar';

interface MainLayoutProps {
    children: ReactNode; 
}
const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-xl md:text-2xl font-semibold">Companies Catalogue</h1>
          </header>
          <Navbar />
    
          <main className="flex-grow p-4 md:p-8">
            {children}
          </main>
    
          <footer className="bg-gray-800 text-white p-4">
            <p className="text-sm md:text-base">© 2023 Companies Catalogue. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default MainLayout

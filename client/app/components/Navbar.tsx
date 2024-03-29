"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SignInButton, auth , UserButton, useAuth} from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {userId} = useAuth()
 
  return (
    <nav className="bg-blue-600 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-white font-semibold">Companies Catalogue</div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className="fas fa-bars text-white"></i>
            </button>
          </div>
          <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-white">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white">
                  About
                </Link>
              </li>
              {userId ? (
                <li className="text-white">
                <SignInButton>
                <UserButton afterSignOutUrl="/" />
                </SignInButton>
              </li>
              ): (
                <li className="text-white">
                <SignInButton>
                  Join us
                </SignInButton>
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

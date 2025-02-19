"use client";

import { NavigationContext } from "../../context/NavigationContext";
import { useContext } from "react";
import { Menu } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";

export default function MyNavbar() {
  const {isMobileNavOpen, setIsMobileNavOpen, closeMobileNav} =useContext(NavigationContext)


  return (
    <>
    <nav className="bg-gray-700 text-white p-4 flex justify-between  items-center">
      <button className={`text-xs  rounded-sm`}
      onClick={()=>setIsMobileNavOpen((prev) => !prev)}
      >
        
        {/* {`${isMobileNavOpen ?"Close":"Open"}`} */}
        <Menu />

        
      </button>
      {/* Center: Logo */}
      <span className="text-xl font-xs  text-center">Agentic AI</span>

      {/* Right: Sign In Button */}
      <button className="px-4 py-2  text-xs rounded-lg">
      <UserButton /> 
      </button>
    </nav>
    </>

  );
}

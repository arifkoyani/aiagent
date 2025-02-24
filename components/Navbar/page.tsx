"use client";

import { NavigationContext } from "../../context/NavigationContext";
import { useContext } from "react";
import { Menu } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";
import { SignIn } from "@/app/SignIn/SignIn";
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
  
      {/* <UserButton />  */}
      <SignIn/>

    </nav>
    </>

  );
}

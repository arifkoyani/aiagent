"use client";

import { NavigationContext } from "@/context/NavigationContext";
import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Plus } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Sidebar() {
  const { isMobileNavOpen, setIsMobileNavOpen, closeMobileNav } =
    useContext(NavigationContext);
  const createChat = useMutation(api.newchat.createChat);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileNavOpen(!(window.innerWidth <= 768));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const AddNewChat = async () => {
    try {
      await createChat({ title: "New chat" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <div
        className={`bg-[#f1f1f3] text-black w-64 h-screen p-2 transition-all duration-300  ${isMobileNavOpen ? "translate-x-0" : "-translate-x-64"}  fixed`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xs font-bold">Chats</h1>
          <button onClick={closeMobileNav} className="text-black text-sm">
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex text-xs justify-center items-center gap-3 bg-[#dcdbdb] py-2 rounded-sm cursor-pointer hover:bg-[#cecdcd]">
            <button
              onClick={AddNewChat}
              className="flex gap-2 items-center justify-center"
            >
              <Plus strokeWidth={0.2} /> New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

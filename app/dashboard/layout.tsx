"use client";
import React from "react";
import Sidebar from "@/components/SideBar/SideBar";
import Navbar from "../../components/Navbar/page";
import { Authenticated } from "convex/react";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Authenticated>
        <Sidebar />
      </Authenticated>
      {children}
    </div>
  );
}

export default DashboardLayout;

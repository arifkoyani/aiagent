"use client";
import { NavigationProvider } from "@/context/NavigationContext";
import DashboardLayout from "./dashboard/layout";

export default function Home() {

  return (
    <>
    <NavigationProvider>
<DashboardLayout children={undefined}/>
    </NavigationProvider>
  
    </>
  );
}
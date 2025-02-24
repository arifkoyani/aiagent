"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { NavigationProvider } from "@/context/NavigationContext";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
  const { signIn } = useAuthActions(); 
  async function handleLogin() {
    try {
      const user = await signIn("github");
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <>
    <NavigationProvider>
<DashboardLayout children={undefined}/>
    </NavigationProvider>
    <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign In
    </button>
    </>
  );
}
import { NavigationProvider } from "@/context/NavigationContext";
import Navbar from "./Navbar/page";
import Sidebar from "@/components/SideBar/SideBar";
export default function Home() {
  return (
    <>
    <NavigationProvider>
    <Navbar/>
    <Sidebar/>
    </NavigationProvider>
    </>
  );
}
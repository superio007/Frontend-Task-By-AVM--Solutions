import Sidebar from "../components/general/Sidebar";
import Navbar from "../components/general/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{
        overflowY: "hidden",
        scrollbarWidth: "none",
        background: `linear-gradient(
          135deg, 
          #163031 0%, 
          #0C0D0F 40%, 
          #192e29 100%
        )`,
      }}
      className="h-screen overflow-hidden flex flex-col"
    >
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

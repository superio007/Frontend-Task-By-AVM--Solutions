import Sidebar from "../components/general/Sidebar";
import Navbar from "../components/general/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{
        overflowY: "hidden",
        scrollbarWidth: "none",
        background: `radial-gradient(
            circle at 20% 20%, 
            rgba(20, 45, 45, 1) 0%, 
            rgba(10, 15, 15, 1) 100%
        )`,
      }}
      className="h-screen overflow-hidden flex flex-col bg-linear-to-br from-[#030712] to-[#0d1117]"
    >
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

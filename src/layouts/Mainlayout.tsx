import Sidebar from "../components/general/Sidebar";
import Navbar from "../components/general/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

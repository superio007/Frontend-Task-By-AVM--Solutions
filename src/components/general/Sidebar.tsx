import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseClass = "group flex flex-col items-center gap-1 transition-colors";
  const activeClass = "text-[#2DD4BF] bg-[#2DD4BF]/30 rounded-xl py-1 px-2";
  const inactiveClass = "text-gray-500 hover:text-white";

  return (
    <aside className="w-20 bg-sidebarBg/50 hidden md:flex flex-col items-center py-6 gap-8 border-r border-white/5 shrink-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 rounded-xl bg-brand/10">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider">
          Home
        </span>
      </NavLink>

      <NavLink
        to="/analyse"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 rounded-xl">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
          </svg>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider">
          Analyse
        </span>
      </NavLink>

      <NavLink
        to="/control"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 rounded-xl">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
          </svg>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider">
          Control
        </span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;

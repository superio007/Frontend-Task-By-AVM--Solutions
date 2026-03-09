import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/nav-icons/home.svg";
import AnalyseIcon from "../../assets/nav-icons/pie.svg";
import ControlIcon from "../../assets/nav-icons/tiles.svg";

const Sidebar = () => {
  const baseClass =
    "group flex flex-col items-center gap-1 transition-all duration-300";
  const activeClass = "text-[#2DD4BF] ";
  const inactiveClass =
    "text-gray-500 hover:text-white opacity-60 hover:opacity-100";

  return (
    <aside
      style={{
        background: `linear-gradient(
          180deg, 
          #ffffff14 0%, 
          rgba(255, 255, 255, 0.02) 40%, 
          rgba(0, 0, 0, 0.15) 100%
        )`,
      }}
      className="w-24 hidden md:flex flex-col justify-center items-center py-8 gap-10 shrink-0 
      m-4 rounded-3xl  
      backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 transition-transform group-hover:scale-110">
          <img
            src={HomeIcon}
            alt="Home"
            width={28}
            height={28}
            className="brightness-110"
          />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Home
        </span>
      </NavLink>

      <NavLink
        to="/analyse"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 transition-transform group-hover:scale-110">
          <img src={AnalyseIcon} alt="Analyse" width={28} height={28} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Analyse
        </span>
      </NavLink>

      <NavLink
        to="/control"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <div className="p-2 transition-transform group-hover:scale-110">
          <img src={ControlIcon} alt="Control" width={28} height={28} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Control
        </span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;

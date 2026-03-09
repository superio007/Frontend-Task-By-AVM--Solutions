import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/nav-icons/home.svg";
import AnalyseIcon from "../../assets/nav-icons/pie.svg";
import ControlIcon from "../../assets/nav-icons/tiles.svg";

const Sidebar = () => {
  const baseClass =
    "group flex flex-col items-center gap-2 transition-all duration-300";
  const activeClass = "text-[#2DD4BF] ";
  const inactiveClass =
    "text-[#E6EAF5] hover:text-white opacity-60 hover:opacity-100";

  return (
    <aside
      style={{
        background: `linear-gradient(
          180deg, 
          #2dd4be25 0%, 
          #000000af 40%, 
          #2dd4be25 100%
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
        <div className="flex items-center justify-center h-8 transition-transform group-hover:scale-110">
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
        <div className="flex items-center justify-center h-8 transition-transform group-hover:scale-110">
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
        <div className="flex items-center justify-center h-8 transition-transform group-hover:scale-110">
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

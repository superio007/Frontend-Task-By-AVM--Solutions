import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/ds-logo.svg";
import Profileicon from "../../assets/Profile.avif";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const baseClass = "group flex items-center gap-1 transition-colors";
  const activeClass = "text-[#2DD4BF] bg-[#2DD4BF]/30 rounded-xl py-1 px-2";
  const inactiveClass = "text-black hover:text-white";

  // close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  // close on esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="flex items-center justify-between p-6 z-20 shrink-0 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-brand text-2xl font-bold tracking-tight">
            <img src={Logo} alt="Logo" width={150} height={150} />
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          {/* MOBILE BUTTON */}
          <button
            ref={buttonRef}
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FontAwesomeIcon
                icon={faX}
                className="text-[#c30010] bg-[#c30010]/10 p-1 rounded hover:opacity-90 cursor-pointer text-[32px]"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#2DD4BF] bg-[#2DD4BF]/10 p-1 rounded hover:opacity-90 cursor-pointer text-[32px]"
              />
            )}
          </button>

          <div className="flex items-center">
            <img
              alt="User Profile"
              className="w-12 h-12 rounded-full border-2 border-[#2DD4BF] "
              src={Profileicon}
            />
          </div>
        </div>
      </header>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden absolute bg-white top-24 w-full  shadow-l p-4 space-y-3 z-50"
        >
          <NavLink
            to="/"
            onClick={() => setOpen(!open)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <div className="p-2 rounded-xl bg-brand/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">
              Home
            </span>
          </NavLink>

          <NavLink
            to="/analyse"
            onClick={() => setOpen(!open)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <div className="p-2 rounded-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">
              Analyse
            </span>
          </NavLink>

          <NavLink
            to="/control"
            onClick={() => setOpen(!open)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <div className="p-2 rounded-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">
              Control
            </span>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;

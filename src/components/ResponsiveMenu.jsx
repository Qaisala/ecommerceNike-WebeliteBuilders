import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavbarMenu } from "./Navbar";
import { Link } from "react-router-dom";

function ResponsiveMenu({ toggleMenu, setToggleMenu }) {
  return (
    <div
      className={`fixed top-10 z-20 flex h-screen w-[75%] flex-col justify-between bg-white/50 backdrop:blur-sm px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md ${toggleMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-lg text-black flex flex-col">
            {NavbarMenu.map((item, index) => (
              <li key={index} onClick={() => setToggleMenu(false)}>
                <Link
                  to={item.link}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase hover:underline hover:underline-offset-3"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ResponsiveMenu;

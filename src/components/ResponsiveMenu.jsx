import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavbarMenu } from "./Navbar";
import { Link } from "react-router-dom";

function ResponsiveMenu({ toggleMenu, setToggleMenu }) {
  return (
    <div
      className={`fixed top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white backdrop-blur-md px-8 pb-6 pt-24 text-black transition-all duration-300 md:hidden rounded-r-2xl shadow-2xl ${
        toggleMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/* User profile section */}
        <div className="flex items-center justify-start gap-3 border-b border-gray-200 pb-6">
          <FaUserCircle size={50} className="text-[#138695]" />
          <div>
            <h1 className="font-bold text-gray-900">Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        {/* Menu links */}
        <nav className="mt-8">
          <ul className="space-y-4 text-lg text-black flex flex-col">
            {NavbarMenu.map((item, index) => (
              <li key={index} onClick={() => setToggleMenu(false)}>
                <Link
                  to={item.link}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase hover:text-[#138695] transition-colors"
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
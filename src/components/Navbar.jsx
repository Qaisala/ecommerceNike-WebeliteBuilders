import React, { useContext, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { UpdateFollower } from "react-mouse-follower";
import { ShopContext } from "../context/ShopContext";
import { FaUserCircle } from "react-icons/fa";

export const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Men", link: "/men" },
  { id: 3, title: "Women", link: "/women" },
  { id: 4, title: "Kids", link: "/kids" },
  { id: 5, title: "Contact", link: "/contact" },
];

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const cartItemCount = getTotalCartItems();

  // Check the current route
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";

  return (
    <div
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-colors duration-300 backdrop-blur-md ${
        isHome
          ? "text-white bg-transparent"
          : isContact
            ? "text-white bg-[#138695] shadow-sm"
            : "text-black bg-white/90 shadow-sm"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src={Logo}
              alt="Logo"
              className={`max-w-25 ${isHome || isContact ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* menu section - Desktop */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 relative z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: isHome ? "white" : "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase hover:underline hover:underline-offset-3 hover:scale-105 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}

            {/* Cart Icon with Badge */}
            <li>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: isHome ? "white" : "black",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <Link
                  to="/cart"
                  className="flex items-center relative py-2 px-2"
                >
                  <ShoppingCart className="w-6 h-6 hover:scale-105 transition-all duration-300 cursor-pointer" />
                  {cartItemCount > 0 && (
                    <div className="bg-gray-900 w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center rounded-full text-white text-xs font-bold">
                      {cartItemCount}
                    </div>
                  )}
                </Link>
              </UpdateFollower>
            </li>

            {/* User Icon */}
            <li>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: isHome ? "white" : "black",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <Link
                  to="#"
                  className="flex items-center text-xl py-2 px-2 hover:scale-105 transition-all duration-300"
                >
                  <FaRegUser />
                </Link>
              </UpdateFollower>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar Section */}
        <div className="flex gap-6 md:hidden z-50 items-center">
          <Link to={"/cart"} className="relative flex items-center">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {cartItemCount > 0 && (
              <div className="bg-gray-900 w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white text-xs font-bold z-40">
                {cartItemCount}
              </div>
            )}
          </Link>

          {/* Mobile menu toggle */}
          {toggleMenu ? (
            <HiMenuAlt1
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="transition-all cursor-pointer"
            />
          ) : (
            <HiMenuAlt3
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="transition-all cursor-pointer"
            />
          )}
        </div>
      </div>

      {/*  MOBILE MENU */}
      <div
        className={`fixed top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white backdrop-blur-md px-8 pb-6 pt-24 text-black transition-all duration-300 md:hidden rounded-r-2xl shadow-2xl ${
          toggleMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          {/* User profile section */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            {/* Left group: Avatar and text */}
            <div className="flex items-center gap-3">
              <FaUserCircle size={50} className="text-[#138695]" />
              <div>
                <h1 className="font-bold text-gray-900">Hello User</h1>
                <h1 className="text-sm text-slate-500">Premium User</h1>
              </div>
            </div>

            {/* Right: Close button */}
            <X
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="transition-all cursor-pointer"
            />
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

              {/* Optional: Add Cart to the mobile menu list */}
              <li onClick={() => setToggleMenu(false)}>
                <Link
                  to="/cart"
                  className="flex items-center justify-between text-base font-semibold py-2 px-3 uppercase hover:text-[#138695] transition-colors"
                >
                  <span>Cart</span>

                  {/* Relative wrapper for the icon and absolute badge */}
                  <span className="relative flex items-center">
                    <ShoppingCart className="w-5 h-5" />
                    {cartItemCount > 0 && (
                      <span className="bg-gray-900 text-white text-xs w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center rounded-full font-bold">
                        {cartItemCount}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

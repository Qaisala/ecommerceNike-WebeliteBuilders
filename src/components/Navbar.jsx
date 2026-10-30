import React, { useContext, useState } from "react";
import Logo from "../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";
import { ShopContext } from "../context/ShopContext";

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
  <div className={`fixed top-0 left-0 w-full py-4 z-50 transition-colors duration-300 backdrop-blur-md ${
    isHome 
      ? "text-white bg-transparent" 
      : isContact 
      ? "text-white bg-[#138695] shadow-sm" 
      : "text-black bg-white/90 shadow-sm"
  }`}>
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

        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
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
            <UpdateFollower
              mouseOptions={{
                backgroundColor: isHome ? "white" : "black",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/cart">
                <div className="relative ps-14 flex items-center">
                  <ShoppingCart className="w-6 h-6 hover:scale-105 transition-all duration-300 cursor-pointer" />
                  {cartItemCount > 0 && (
                    <div className="bg-gray-900 w-5 h-5 absolute top-0 -right-1.5 flex items-center justify-center rounded-full text-white text-xs font-bold">
                      {cartItemCount}
                    </div>
                  )}
                </div>
              </Link>
            </UpdateFollower>

            {/* User Icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: isHome ? "white" : "black",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="#">
                <button className="text-xl ps-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <FaRegUser />
                </button>
              </Link>
            </UpdateFollower>
          </ul>
        </div>

        {/* Mobile Navbar Section */}
        <div className="flex gap-8 md:hidden z-50 items-center">
          <Link to={"/cart"}>
            <div className="relative w-10 z-50 flex items-center justify-center pt-2">
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <div className="bg-[#138695] w-5 h-5 absolute top-0 right-1 flex items-center justify-center rounded-full text-white text-xs font-bold z-40">
                  {cartItemCount}
                </div>
              )}
            </div>
          </Link>
          {/* mobile menu */}
          {toggleMenu ? (
            <HiMenuAlt1
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="transition-all md:hidden z-50 cursor-pointer"
            />
          ) : (
            <HiMenuAlt3
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
              className="transition-all md:hidden z-50 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div>
        <ResponsiveMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </div>
  );
}

export default Navbar;

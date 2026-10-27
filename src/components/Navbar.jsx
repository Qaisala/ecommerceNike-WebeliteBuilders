import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Men",
    link: "/men",
  },
  {
    id: 3,
    title: "Women",
    link: "/women",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 1,
    title: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="text-white py-8">
      <div className="container flex justify-between items-center">
        {/* logo section  */}
        <div>
          <img src={Logo} alt="" className="max-w-25 invert" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
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
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link>
                <button className="text-xl ps-14 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <ShoppingCart />
                </button>
              </Link>
            </UpdateFollower>

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link>
                <button className="text-xl ps-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <FaRegUser />
                </button>
              </Link>
            </UpdateFollower>
          </ul>
        </div>

        <div className="flex gap-8 md:hidden z-50">
          <Link to={"/cart"}>
            <ShoppingCart />
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

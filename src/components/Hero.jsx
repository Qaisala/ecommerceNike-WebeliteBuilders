import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import all_product from "../Utils/all_product";
import { Link } from "react-router-dom";
import Shoes11 from "../assets/men_2.png";
import Shoes12 from "../assets/women_26.png";
import Shoes13 from "../assets/kids_27.png";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

function Hero() {
  // Filter featured products and assign the special transparent hero images based on ID
  const HeroShoesData = all_product
    .filter((item) => item.featured)
    .map((item) => {
      let heroImage = item.image; // fallback
      if (item.id === 2) heroImage = Shoes11;
      if (item.id === 26) heroImage = Shoes12;
      if (item.id === 27) heroImage = Shoes13;
      return { ...item, heroImage };
    });

  const [activeData, setActiveData] = useState(HeroShoesData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <motion.section
      initial={{ backgroundColor: activeData.bgColor || "#138695" }}
      animate={{ backgroundColor: activeData.bgColor || "#138695" }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-white"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-151.25 py-30 md:py-40">
        {/* data info */}
        <div className="order-2 flex flex-col justify-center py-14 text-white md:order-1 md:py-0 xl:max-w-125">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  /* Added max-w-full lg:max-w-[450px] break-words */
                  className="text-3xl lg:text-5xl xl:text-6xl font-bold font-handwriting text-shadow max-w-full lg:max-w-112.5"
                >
                  {activeData.name}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos."}
              </motion.p>
            </AnimatePresence>

            {/* Order Now Button */}
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor || "#138695",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div>
                      <img src={activeData.heroImage} alt="/" />
                    </div>
                  ),
                }}
              >
                <motion.div
                  key={activeData.id}
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <Link
                    to={`/products/${activeData.id}`}
                    className="px-4 py-2 bg-white text-black inline-block font-normal rounded-sm cursor-pointer"
                  >
                    Order Now
                  </Link>
                </motion.div>
              </UpdateFollower>
            </AnimatePresence>

            {/* list separator */}
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-4 md:mt-24 mb-10"
            >
              <div className="w-20 h-px bg-white"></div>
              <p className="text-sm uppercase">Top Recommendation</p>
              <div className="w-20 h-px bg-white"></div>
            </motion.div>

            {/* image switcher thumbnails */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-4 md:gap-6"
            >
              {HeroShoesData.map((item) => {
                const isActive = activeData.id === item.id;
                return (
                  <UpdateFollower
                    key={item.id}
                    mouseOptions={{
                      backgroundColor: item.bgColor || "#138695",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      onClick={() => handleActiveData(item)}
                      className={`relative p-3 rounded-xl transition-all duration-300 cursor-pointer text-center space-y-2 border ${
                        isActive
                          ? "bg-white/20 border-white/40 scale-105 shadow-xl"
                          : "bg-white/5 border-transparent opacity-70 hover:opacity-100 hover:bg-white/10"
                      }`}
                    >
                      {/* Category Pill Tag */}
                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                            isActive
                              ? "bg-white text-black"
                              : "bg-white/20 text-white/90"
                          }`}
                        >
                          {item.category}
                        </span>
                        {/* Best Seller Sub-Tag */}
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-semibold opacity-75 mt-2 text-white/75">
                          Best Seller
                        </p>
                      </div>

                      {/* Shoe Image */}
                      <div className="flex justify-center py-1">
                        <img
                          src={item.heroImage}
                          alt={item.name}
                          className={`w-16 md:w-20 object-contain img-shadow transition-transform duration-300 ${
                            isActive ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>

                      {/* Pricing Info */}
                      <div className="space-y-0.5">
                        <p className="text-xs line-through opacity-50">
                          ${item.old_price}
                        </p>
                        <p className="text-sm md:text-base font-bold">
                          ${item.new_price}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* hero image */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, x: 100, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: -35 }}
              transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.4 },
              }}
              src={activeData.heroImage}
              alt={activeData.name}
              className="w-75 md:w-112.5 lg:w-150 lg:absolute lg:top-[10%] img-shadow z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
              className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase"
            >
              {activeData.category}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

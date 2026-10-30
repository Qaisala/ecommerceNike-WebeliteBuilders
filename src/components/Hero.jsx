import React, { useState } from "react";
import Navbar from "./Navbar";
import Shoes1 from "../assets/Shoes1.png";
import Shoes2 from "../assets/Shoes2.png";
import Shoes3 from "../assets/Shoes3.png";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

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

const ShoesData = [
  {
    id: 1,
    image: Shoes1,
    title: "Jordan Luka 3 PF",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Sports",
    bgColor: "#138695",
  },
  {
    id: 2,
    image: Shoes2,
    title: "Nike G.T. Cut 3 EP",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Running",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Shoes3,
    title: "Nike G.T. Cut Academy EP",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Sports",
    bgColor: "#698869",
  },
];

function Hero() {
  const [activeData, setActiveData] = useState(ShoesData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <motion.section
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-white"
    >
      {/* Navbar component */}
      <Navbar />

      {/* Hero Component */}
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
                  className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                >
                  {activeData.title}
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
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} alt="/" />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={activeData.id}
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="px-4 py-2 bg-white text-black inline-block font-normal rounded-sm cursor-pointer"
                >
                  Order Now
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>
            {/* list separator */}
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 mb-10!"
            >
              <div className="w-20 h-px bg-white"></div>
              <p className="text-sm uppercase">Top Recommendation</p>
              <div className="w-20 h-px bg-white"></div>
            </motion.div>
            {/* image switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-10"
            >
              {ShoesData.map((item) => {
                return (
                  <UpdateFollower
                    key={item.id}
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      onClick={() => handleActiveData(item)}
                      className="space-y-3 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-20 img-shadow ${activeData.image === item.image ? "opacity-100 scale-110" : "opacity-50"}`}
                        />
                      </div>
                      <div className="text-center mt-6! space-y-1">
                        <p className="text-base line-through opacity-50">
                          {item.price}
                        </p>
                        <p className="text-xl font-bold">{item.price}</p>
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
              src={activeData.image}
              alt={activeData.title}
              className="w-75 md:w-112.5 lg:w-150 lg:absolute lg:top-[10%] img-shadow z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
              className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

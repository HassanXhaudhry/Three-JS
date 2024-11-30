import React from "react";
import AnimatedModelViewer from "./ModelLoader";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function App() {

  return (
    <div className="relative w-full h-screen bg-[#222222] overflow-x-hidden font-inter overflow-y-auto lg:overflow-hidden">
      <div className="flex sm:flex-row flex-col justify-between items-center mx-8 my-4 text-white">
        <div className="font-bold text-xl">LOGO</div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1 font-light">
            <HiOutlineShoppingBag />
            Buy Now
          </div>
          <div className="flex items-center gap-1 font-light">
            <RiUserLine />
            Account
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <motion.div
            className="h-52 w-[75%] bg-gradient-to-r from-white/30 to-white/0 absolute top-[250px] md:left-20 left-10 rounded-[45px]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
          <motion.div
            className="h-56 w-56 bg-gradient-to-r from-white/30 to-white/0 absolute top-[325px] md:left-44 left-20 rounded-[45px]"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
          />
        </div>

        <div className="relative md:top-[-15px] top-[500px] md:right-1/4 right-[-15%]">
          <div className=" md:left-[40%] left-[50%] z-10">
            <motion.div
              className="text-white text-start flex flex-col gap-0 mx-auto my-10"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
            >
              <div className="text-xl md:text-2xl font-bold">Best Wireless</div>
              <div className="text-[30px] md:text-[50px] font-bold text-[#F9C05F]">
                HeadPhone
              </div>
              <div className="text-lg md:text-[30px] font-thin">
                For Your Daily Life
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            >
              <div className="text-white w-[250px] md:w-[520px] text-start flex flex-col gap-4 my-4">
                <div className="text-lg md:text-xl font-semibold">
                  Brand PlayStation 4 Wireless Headphone
                </div>
                <div className="text-sm md:text-base font-light">
                  Lintense Pro 250 change you way of perceiving music in all its
                  beauty by giving you more control on the sound than ever
                  before paired with a unique listening experience.
                </div>
              </div>
              <div className="h-12 w-[250px] md:w-[510px] rounded-[60px] border border-white text-white hidden md:block">
                <div className="flex mx-2 items-center pt-1 gap-2">
                  <div className="h-10 w-10 rounded-full bg-[#222222] border border-white"></div>
                  <div className="h-10 w-10 rounded-full bg-[#F9C05F]"></div>
                  <div className="h-10 w-10 rounded-full bg-white"></div>
                  <span className="px-2 text-sm">Black</span>
                  <div className="w-[100px] h-[1px] bg-white"></div>
                  <div className="px-2 font-semibold">1.999 USD</div>
                  <div className="font-semibold">Buy Now</div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div></motion.div>
          <div className="flex flex-col justify-center items-center absolute lg:right-[-300px] lg:top-[550px] hidden lg:flex">
            <div
              className="text-white font-semibold transform rotate-180 origin-top-left absolute right-5 bottom-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {[..."yrammuS"].reverse().join("")}
              <div className="h-32 w-[1px] bg-gray-300 absolute right-3 top-[100px]"></div>

              <span className="w-4 h-4 rounded-full bg-[#FFFFFF] absolute right-[5px] top-[250px]"></span>
              <span className="w-4 h-4 rounded-full bg-[#FFFFFF] absolute right-[5px] top-[275px]"></span>
              <span className="w-4 h-4 rounded-full bg-[#FFFFFF] absolute right-[5px] top-[300px]"></span>
              <span className="w-4 h-4 rounded-full border-[#FFFFFF] border absolute right-[5px] top-[325px]"></span>
            </div>
          </div>
        </div>
      </div>

      <div>
      <AnimatedModelViewer
        path="/h2.glb"
        scale={1.5}
        initialRotation={[0, Math.PI / 2, 0]}
      />
    </div>
      <div className="absolute w-[350px] h-[350px] bg-[#f5ca0a] rounded-full filter blur-[900px] right-[-20px] bottom-[-150px] md:block hidden"></div>
      <div className="absolute w-[150px] h-[150px] bg-[#f5ca0a] rounded-full filter blur-[750px] left-1/3 top-[-70px] transform -translate-x-1/2"></div>
    </div>
  );
}

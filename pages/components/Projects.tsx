import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProJ from "../../Fetchers/ProjFetc.json";

type Props = {};

const Projects = (props: Props) => {

  return (
    <motion.div
      initial={{
        x: -150,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="h-screen relative items-center flex flex-col text-left max-w-full md:flex-row overflow-hidden justify-evenly mx-auto z-0"
    >
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px] items-center text-center">
        Projects
      </h3>

      <div className="relative w-full flex z-20 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#f0803c] scrollbar-track-gray-500/20 ">
        {/* 1 */}
        {ProJ.map((item, index) => {
          return (
            <div
              className="w-screen  flex-shrink-0 snap-center items-center text-center flex flex-col space-y-5 justify-center p-20 h-screen md:p-44"
              key={index}
            >
              <Link href={item.proLink}>
                <img
                  src={item.proSource}
                  alt={item.proName}
                  className="h-52 rounded-lg object-cover items-center cursor-pointer hover:scale-125 transition duration-400 ease-in-out"
                />

                <div className="space-y-10 px-0 py-5 md:px-10 max-w-5xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-center">
                    <span className="underline decoration-[#f0803c] p-2">
                      Project {index + 1}:
                    </span>{" "}
                    {item.proName}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="absolute top-[40%] bg-[#f0803c]/10 w-full h-[250px] left-0 skew-y-12" />
    </motion.div>
  );
};

export default Projects;

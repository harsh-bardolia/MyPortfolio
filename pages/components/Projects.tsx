import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProJ from "../../Fetchers/projects.json";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col items-center text-left max-w-full md:flex-row overflow-hidden justify-evenly mx-auto z-0"
    >
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px] text-center">
        Projects
      </h3>

      {/* Web-like Background Design */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[40%] bg-[#3cccf0]/20 w-full h-[250px] left-0 skew-y-12" />
        <div className="absolute top-[40%] bg-[#3cccf0]/20 w-full h-[250px] left-0 -skew-y-12" />
      </div>

      <div className="relative w-full flex z-20 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#3cccf0] scrollbar-track-gray-500/20">
        {ProJ.map((item, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center text-center space-y-5 justify-center p-20 h-screen md:p-44"
          >
            <Link href={item.proLink}>
              <img
                src={item.proSource}
                alt={item.proName}
                className="h-5/6 w-80 rounded-lg object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
              />
            </Link>
            <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-300">
              {item.proName}
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

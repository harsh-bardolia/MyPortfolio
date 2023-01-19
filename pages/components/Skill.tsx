import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skill = (props: Props) => {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <Image
        src=""
        alt="React"
        height={100}
        width={100}
        className="rounded-full border border-gray-400 object-cover p-3 w-24 h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-200 ease-in "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in z-0 group-hover:bg-white w-24 h-24 md:h-28 md:w-28  xl:h-32 xl:w-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#1b1f3b] opacity-100">55%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;

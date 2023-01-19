import React from "react";
import { motion } from "framer-motion";
import SkillFet from "../../Fetchers/SkillsFetch.json";
import Image from "next/image";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2200px] xl:px-5 min-h-screen justify-center xl:space-y-0 items-center"
    >
      <h3 className=" absolute top-20 tracking-[20px] uppercase text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className=" absolute top-40 tracking-[5px] uppercase text-gray-500 text-sm xl:mb-28">Hover over for skill proficiency</h3> */}

      <motion.div
        initial={{
          opacity: 0,
          x: -600,
        }}
        animate={{
          opacity: 100,
          x: 0,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{
          once: true,
        }}
        className="grid grid-cols-4 gap-4 px-"
      >
        {SkillFet &&
          SkillFet.map((item, index) => {
            return (
              <div className="group relative flex cursor-pointer">
                <Image
                  src={item.imgLink}
                  alt={item.skillName}
                  height={100}
                  width={100}
                  className="rounded-full border border-gray-400 object-cover p-3 w-24 h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-200 ease-in "
                />
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in z-0 group-hover:bg-white p-3 w-24 h-24 md:h-28 md:w-28  xl:h-32 xl:w-32 rounded-full">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-[#1b1f3b] opacity-100">
                      {item.rate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;

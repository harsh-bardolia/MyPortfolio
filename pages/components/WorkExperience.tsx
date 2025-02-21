import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Exx from "../../Fetchers/experience.json";
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="h-screen flex flex-col md:flex-row relative max-w-full overflow-hidden text-left items-center mx-auto px-10 justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#3cccf0] scrollbar-track-gray-500/20 items-center p-10 snap-x snap-mandatory">
        {
          Exx.map((exp) => {
            return <ExperienceCard key={exp.id} {...exp} logo={exp.logo || ''} />;
          })
        }
      </div>
    </motion.div>
  );
};

export default WorkExperience;

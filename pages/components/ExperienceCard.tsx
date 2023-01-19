import Image from "next/image";
import React from "react";
import Exx from "../../image-assests/converse logo.png";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <motion.div className="flex flex-col rounded-lg snap-center bg-[#292929]  p-10 items-center space-y-5 flex-shrink-0 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden w-[400px] md:w-[500px] lg:w-[600px]">
      <Image
        src={Exx}
        height={80}
        alt="Converse"
        className="bg-white rounded-full object-cover object-center"
      />
      <div className="flex flex-col px-0 md:px-10">
        <h4 className="text-xl font-light">Volunteer of CONVERSE</h4>
        <p className="font-bold text-sm mt-1">CONVERSE 2k22</p>

        <p className="uppercase py-2 text-gray-300">Started... Ended...</p>

        <ul className="list-disc ml-3 space-y-4 text-lg list-inside ">
          <li key={0}>Heello</li>
          <li key={1}>Nelo</li>
          <li key={2}>Yelo</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

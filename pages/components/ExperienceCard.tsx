import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

type Experience = {
  id: number;
  role: string;
  company: string;
  duration?: string;
  logo: string;
  responsibilities: string[];
}

const ExperienceCard = (props: Experience) => {
  return (
    <motion.div className="flex flex-col rounded-lg snap-center bg-[#292929] p-10 items-center space-y-5 flex-shrink-0 opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden w-[400px] md:w-[500px] lg:w-[600px] min-h-[400px]">

      <Image
        src={props.logo}
        height={80}
        width={80}
        alt={props.company}
        className="bg-white rounded-full object-cover object-center hover:scale-110 transform transition-transform duration-200"
      />
      <div className="flex flex-col flex-1 px-0 md:px-10">
        <p className="font-medium text-gray-300 text-lg mt-1">{props.company}</p>
        <h4 className="text-md font-bold">{props.role}</h4>

        <p className="uppercase py-2 text-gray-300">{props.duration}</p>
        {
          props.responsibilities && props.responsibilities.length > 0 && (
            <ul className="list-disc ml-3 space-y-4 text-lg list-inside">
              {props.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          )
        }
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

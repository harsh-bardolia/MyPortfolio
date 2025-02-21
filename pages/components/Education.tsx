import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Education = (props: Props) => {
  const [degree, useDegree] = useState({
    degreeName: [
      "Bachelor of Engineering in Information & Technology",
      "Higher Secondary School",
      "Secondary School",
    ],
    institutionName: [
      "Sarvajanik College of Engineering & Technology",
      "Leo School of Science & Commerce",
      "Sungrace School",
    ],
    yearName: ["Year: 2020-2024", "Year: 2018-2020", "Year: Till 2018"],
  });
  return (
    <div className="h-screen flex flex-col relative items-center text-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Education
      </h3>

      <div className="flex items-left justify-start absolute top-44 h-[400px]  w-1 bg-slate-300" />
      <div className="flex flex-col items-center mx-3 relative top-36 ">
        {/* 1 */}
        <div className=" flex flex-col border z-20 rounded-xl w-auto px-6 py-3 bg-[#1b1f3b] space-y-1 text-gray-500">
          <div className="text-2xl font-bold text-white">
            {degree.degreeName[0]}
          </div>
          <div className="uppercase font-medium text-gray-400">
            {degree.institutionName[0]}
          </div>
          <div className="uppercase text-sm opacity-75 text-gray-400">
            {degree.yearName[0]}
          </div>
        </div>
        <div className="-top-1 relative z-20">
          <div className="bg-[#3cccf0] z-20 h-5 w-5 absolute opacity-100 rounded-full" />
          <div className="bg-[#3cccf0] z-20 h-5 w-5 animate-ping opacity-100 rounded-full" />
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center absolute top-44  ">
          <div className=" flex flex-col z-20 border rounded-xl w-auto px-6 py-3 bg-[#1b1f3b] space-y-1 text-gray-500">
            <div className="text-2xl font-bold text-white">
              {degree.degreeName[1]}
            </div>
            <div className="uppercase font-medium text-gray-400">
              {degree.institutionName[1]}
            </div>
            <div className="uppercase text-sm opacity-75 text-gray-400">
              {degree.yearName[1]}
            </div>
          </div>
          <div className="-top-1 relative z-20">
            <div className="bg-[#3cccf0] z-20 h-5 w-5 absolute opacity-100 rounded-full" />
            <div className="bg-[#3cccf0] z-20 h-5 w-5 animate-ping opacity-100 rounded-full" />
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center top-52 relative">
          <div className=" flex flex-col z-20 border rounded-xl w-auto px-6 py-3 bg-[#1b1f3b] space-y-1 text-gray-500">
            <div className="text-2xl font-bold text-white">
              {degree.degreeName[2]}
            </div>
            <div className="uppercase font-medium text-gray-400">
              {degree.institutionName[2]}
            </div>
            <div className="uppercase text-sm opacity-75 text-gray-400">
              {degree.yearName[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

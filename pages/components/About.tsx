import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.article
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          opacity: 0,
          x: -250,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        src="https://cdn.truelancer.com/user-picture/2026064-61626d3469f19.jpg"
        alt="Harsh Bardolia"
        className="h-40 w-40 object-cover rounded-full -mb-24 md:mb-0 flex-shrink-0 md:h-[300px] md:w-64 md:rounded-lg "
      />

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-[#3cccf0] text-4xl text-semibold">
          Here&apos;s a{" "}
          <span className="underline decoration-[#d5f03c]">little</span>{" "}
          background
        </h4>
        <div className="text-sm text-[#e1bbc9]">
          Driven and self-motivated backend developer with a passion for solving complex
          software challenges. Skilled in foundational programming languages and web
          development, with a focus on optimizing performance and scalability. A coin has two
          sides—Heads and Tails—much like how every problem presents a choice: live with it or
          simplify it into a solution.
        </div>
      </div>
    </motion.article>
  );
};

export default About;

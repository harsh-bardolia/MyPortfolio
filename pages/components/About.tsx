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
        <h4 className="text-[#225560] text-4xl text-semibold">
          Here&apos;s a{" "}
          <span className="underline decoration-[#f0803c]">little</span>{" "}
          background
        </h4>
        <div className="text-sm text-[#e1bbc9]">
          Respectful self-motivated &amp; gifted for finding the relatable solution
          for every software issue well known in Basic Programming Languages &amp;
          Web Development. A coin has two choices, Heads &amp; Tails. Similarly, we
          must live with the problem or solve it in a simplified way. Currently
          working on Blockchain and exploring Web3.
        </div>
      </div>
    </motion.article>
  );
};

export default About;

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroImg from "../../image-assests/hero.jpg";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hey, The Name's Harsh Bardolia",
      "Loves-To-Code-Daily.js",
      "<Guy-Who-Loves-Chai-With-Thepla />",
      "Never_Stop_Till_Death.tsx",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  const scrollToSection = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden space-y-8 justify-center text-center items-center">
      <BackgroundCircles />
      <Image
        src={HeroImg}
        height={150}
        alt="Hero Image"
        className="rounded-full mx-auto relative object-cover "
      />

      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px] ">
          Web Developer
        </h2>

        <h1 className="text-4xl text-[#f0803c] lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f0803c" />
        </h1>

        <div className="pt-3">
          <button
            onClick={() => scrollToSection("about")}
            className="heroButton"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="heroButton"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="heroButton"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="heroButton"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="heroButton"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

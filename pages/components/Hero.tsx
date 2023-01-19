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
      "Loves_To_Code_Daily.js",
      "<Guy-Who-Loves-Chai-With-Thepla />",
      "Never_Stop_Till_Death.tsx",
    ],
    loop: true,
    delaySpeed: 1000,
  });
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
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

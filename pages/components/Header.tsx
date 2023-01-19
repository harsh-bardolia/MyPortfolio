import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}

        <SocialIcon
          url="https://twitter.com/bardolia_harsh"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/harsh-bardolia"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/harsh.bardolia"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/harsh.bardolia"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row text-gray-400 items-center cursor-pointer"
      >
        <Link href="#contactme">
          {/* <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
          /> */}
          <div className="hidden md:inline-flex text-sm text-gray-400 uppercase">
            Get In Touch
          </div>
        </Link>
      </motion.div>
    </header>
  )
}


export default Header;
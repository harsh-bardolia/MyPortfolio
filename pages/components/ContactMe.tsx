import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";


type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center items-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto">
      <h3 className="absolute  top-24 uppercase text-center text-gray-500 items-center tracking-[20px] text-2xl">
        Contact{" "}
      </h3>

      <div className="flex flex-col space-y-8">
        <h4 className="text-2xl font-bold text-center ">
          I have got just what you need.{" "}
          <span className="underline decoration-[#3cccf0]">Lets Talk</span>
        </h4>
      </div>

      <div className="space-y-5">
        {/* <div className="flex items-center space-x-5">
          <PhoneIcon className="h-7 text-[#3cccf0] animate-bounce" />
          <p className="text-xl">+91 8320339742</p>
        </div> */}

        <div className="flex items-center space-x-5">
          <MapPinIcon className="h-7 text-[#3cccf0] animate-bounce" />
          <p className="text-xl">India</p>
        </div>

        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="h-7 text-[#3cccf0] animate-bounce" />
          <p className="text-xl">hbardolia2002@gmail.com</p>
        </div>
      </div>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="contactIn"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactIn"
          />
        </div>
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactIn"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactIn"
        ></textarea>
        <button className="bg-[#3cccf0] rounded-md py-3 uppercase text-black font-bold text-md">
          Submit
        </button>
      </form> */}
    </div>
  );
};


export default ContactMe;
"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const About = () => {
  return (
    <div className="h-screen flex relative">
      {/* Left Section (Icons + Background) */}
      <div className="relative w-2/6 h-full bg-[#D2A6E7] rounded-r-3xl flex items-center justify-center">
        {/* Back Button */}
        <div>
          <Link href="/">
            <button className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#8745A5] text-white p-3 rounded-full shadow-lg hover:bg-[#A255C6]">
              <IoIosArrowBack size={20} />
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-4 text-[#8745A5] text-lg">
        <a href="https://www.facebook.com/sabrina.abro" className="transition-colors duration-300 hover:text-[#A255C6]"><FaFacebookF /></a>
        <a href="#https://www.instagram.com/sabrina_abroo/" className="transition-colors duration-300 hover:text-[#A255C6]"><FaInstagram /></a>
        <a href="https://github.com/Sabrinaabro" className="transition-colors duration-300 hover:text-[#A255C6]"><FaGithub /></a>
        <a href="https://dribbble.com/sabrina_abro" className="transition-colors duration-300 hover:text-[#A255C6]"><FaDribbble /></a>
        <a href="https://www.linkedin.com/in/sabrina-abro-a13190247/" className="transition-colors duration-300 hover:text-[#A255C6]"><FaLinkedin /></a>
      </div>
      </div>

      {/* Right Section (Text Content) */}
      <div className="w-3/5 flex items-center pl-24">
      <h1 className="text-6xl font-bold leading-tight absolute left-1/3 pl-10 transform -translate-x-1/3
               bg-gradient-to-r from-[#8745A5]  to-[#D2A6E7] bg-clip-text text-transparent">
               Hello, <br /> I’m Sabrina.
               </h1>

        <p className="text-lg text-[#A255C6] absolute left-1/3 transform pr-26 -translate-x-1/3 mt-44">
          Nice to meet you.
        </p>
      </div>
      
   
    </div>
  );
};

export default About;

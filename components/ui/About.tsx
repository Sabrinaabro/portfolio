"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter';
import Image from "next/image";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Python", level: 75 },
  { name: "Next.js", level: 65 },
  { name: "CSS", level: 98 },
  { name: "HTML", level: 98 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 60 },
  { name: "Figma", level: 100 },
  { name: "Supabase", level: 80 },
  { name: "Firebase", level: 80 },
  { name: "MySQL", level: 88 },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="h-screen flex overflow-hidden relative bg-[#F4E6FF]">

      <div className="absolute w-10 h-10 bg-[#DA70D6] rounded-full opacity-20 top-1/3 right-16"></div>
      <div className="absolute w-24 h-24 bg-gradient-to-r from-[#CA1F7B] via-[#DA70D6] to-[#A255C6] rounded-full opacity-25 bottom-10 left-1/3"></div>
      <div className="absolute w-14 h-14 bg-[#B284BE] rounded-full opacity-30 bottom-32 right-20"></div>
      
      {/* Left Sidebar */}
      <div className="relative w-2/6 h-full bg-[#D2A6E7] pt-10 rounded-r-3xl flex items-center justify-center">
        <div>
          <Link href="/">
            <button className="absolute left-6 transform -translate-y-1/2 bg-[#8745A5] text-white p-3 rounded-full shadow-lg hover:bg-[#A255C6]">
              <IoIosArrowBack size={20} />
            </button>
          </Link>
        </div>

        <div className="social-icons flex flex-col space-y-4 text-[#8745A5] text-lg">
          <a href="https://www.facebook.com/sabrina.abro" className="hover:text-[#A255C6]"><FaFacebookF /></a>
          <a href="https://www.instagram.com/sabrina_abroo/" className="hover:text-[#A255C6]"><FaInstagram /></a>
          <a href="https://github.com/Sabrinaabro" className="hover:text-[#A255C6]"><FaGithub /></a>
          <a href="https://dribbble.com/sabrina_abro" className="hover:text-[#A255C6]"><FaDribbble /></a>
          <a href="https://www.linkedin.com/in/sabrina-abro-a13190247/" className="hover:text-[#A255C6]"><FaLinkedin /></a>
        </div>
      </div>

      {/* Main Section */}
      <div className="about-container w-3/5 z-10 pr-50 relative pt-10 left-[-70px] flex flex-col justify-center">
        <h1 className="about-heading text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B284BE] via-[#DA70D6] to-[#A255C6]">
          Hello, <br /> I’m Sabrina.
        </h1>
        <p className="about-paragraph text-lg mt-2 min-h-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#CA1F7B] via-[#DA70D6] to-[#A255C6]">
          <Typewriter
            words={["Nice to meet you."]}
            loop={0}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-50 md:w-64 ">
        <Image
          src="/boy.png"
          alt="boy"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-0 right-0 md:w-64 opacity-60">
        <Image
          src="/aboutpage.png"
          alt="Decorative"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 md:w-64">
        <Image
          src="/hand.png"
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      
      <div className="w-3/5 flex flex-col pt-32 shadow-lg overflow-y-auto max-h-screen px-6">
        
        <div className="w-full flex justify-center space-x-4 mb-4">
          {["education", "experience", "skills", "extras"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded-md font-medium transition duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#CA1F7B] via-[#DA70D6] to-[#A255C6] text-white"
                  : "bg-[#DDA0DD] text-gray-600 hover:bg-gradient-to-r hover:from-[#CA1F7B] hover:via-[#DA70D6] hover:to-[#A255C6] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-left">
          {activeTab === "education" && (
            <div>
              <h2 className="text-xl font-semibold text-[#8745A5]">Education</h2>
              <p className="text-gray-600 mt-2">Bachelor's in Software Engineering</p>
              <p className="text-gray-500 text-sm">Mehran University Of Engineering & Technology, Jamshoro (2021-2025)</p>
              <p className="text-gray-600 mt-2">Pre-Engineering</p>
              <p className="text-gray-500 text-sm">County Girls College, Hyderabad (2019-2021)</p>
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <h2 className="text-xl font-semibold text-[#8745A5]">Experience</h2>
              <p className="text-gray-600 mt-2">Full Stack Developer (Intern) - Remote</p>
              <p className="text-gray-500 text-sm">CleanSpot, 2023-2024</p>
              <p className="text-gray-500 text-sm">San Francisco, USA</p>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <h2 className="skill-list text-xl font-semibold text-[#8745A5]">Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-semibold">{skill.name}</span>
                  </div>
                  <div className="w-full rounded-full h-2.5 mt-1">
                    <div
                      className="bg-[#8745A5] h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "extras" && (
            <div>
              <h2 className="text-xl font-semibold text-[#8745A5]">Extra-Curricular Credentials</h2>

              <div className="mt-2">
                <p className="text-gray-600 font-semibold">Hackathon – Coding Competition (2024)</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>Completed web development task within a given time using React and JavaScript.</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 font-semibold">SES – Software Engineering Society (2022-2023)</p>
                <p className="text-gray-500 text-sm">Director Videography</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>Led and coordinated a team of videographers.</li>
                  <li>Handled editing and production of visual content.</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 font-semibold">DTI – Delta Tech Info (2021)</p>
                <p className="text-gray-500 text-sm">Graphic Designer</p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>Designed brochures, banners, social media graphics, and website layouts for marketing.</li>
                  <li>Produced and edited engaging multimedia content to enhance brand presence.</li>
                </ul>
              </div>

              <h2 className="text-xl font-semibold text-[#8745A5] mt-6">Achievements</h2>
              <ul className="list-disc list-inside text-gray-500 text-sm mt-2">
                <li>Professional Python Developer (Certified by NAVTTC & CertiPort).</li>
                <li>Professional level Public Speaking (Model United Nations, Mehran University of Technology & Engineering).</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

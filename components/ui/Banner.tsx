"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "React.js", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/next.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "Firebase", logo: "/logos/firebase.png" },
  { name: "OpenCV", logo: "/logos/opencv.png" },
  { name: "Supabase", logo: "/logos/supabase.png" },
];

const certifications = [
  { title: "Certified Computer Vision Expert ", year: 2025 },
  { title: "Certified Python Developer", year: 2024 },
  { title: "SQL Expert", year: 2023 },
];

const Banner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 700); // Adjust speed here (500ms for each count)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
    
    <div className="relative z-20 text-center mb-8 -mt-10 grid grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* Column 1: Experience with Counter */}
  <div className="flex flex-col items-center">
    <h2 className="text-[58px] font-semibold text-yellow-300 pt-15 leading-tight relative">
      {/* Background Circle Behind Count */}
      <span className="absolute -mb-10 left-21 transform -translate-x-1/2 w-16 h-16 bg-blue-300 rounded-full -z-10"></span>

      {/* Count Number */}
      <span className="text-[#0070BB] relative z-10">{count}+</span>

      {/* Text Below */}
      <span className="text-[24px] block text-[#1F305E]">
        Years Of Experience
      </span>
    </h2>
  </div>


        {/* Column 2: Certifications */}
<div className="flex flex-col items-center">
  <div className="flex flex-col gap-4 pt-16">
    {certifications.map((cert, index) => {
      const colors = [
        "bg-[#B284BE]", 
        "bg-[#CCCCFF]", 
        "bg-[#CC8899]", 
       
      ];
      const color = colors[index % colors.length]; // Cycle through colors
      return (
        <div
          key={index}
          className={`${color} text-black px-4 py-2 rounded-full shadow-md text-sm`}
        >
          {cert.title} ({cert.year})
        </div>
      );
    })}
  </div>
</div>


        {/* Column 3: Technologies */}
        <div className="flex flex-col items-center pt-15">
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="mb-2 mx-auto"
                />
                <p className="text-sm"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

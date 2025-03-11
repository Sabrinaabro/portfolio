"use client";
import { FaLaptopCode, FaPalette, FaBrain } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
};

const services: Service[] = [
  {
    title: "UI/UX Design",
    description: "We let you be always connected through a seamless experience.",
    icon: <FaPalette className="text-2xl text-[#f538b9] mb-3" />,
    bgColor: "bg-[#ea98da]",
    textColor: "text-[#f538b9]",
  },
  {
    title: "Web Development",
    description: "Crafting modern, responsive, and scalable web applications.",
    icon: <FaLaptopCode className="text-2xl text-[#ea5753] mb-3" />,
    bgColor: "bg-[#ffc8c8]",
    textColor: "text-[#ea5753]",
  },
  {
    title: "Mobile App Development",
    description: "Building high-performance mobile apps for iOS and Android.",
    icon: <FaMobileAlt className="text-2xl text-[#6d51a5] mb-3" />,
    bgColor: "bg-[#c5aef2]",
    textColor: "text-[#6d51a5]",
  },
  {
    title: "Machine Learning Solutions",
    description: "AI-driven insights and automation using ML models.",
    icon: <FaBrain className="text-2xl text-[#43b692] mb-3" />,
    bgColor: "bg-[#87f4b5]",
    textColor: "text-[#43b692]",
  },
];

const Services = () => {
  return (
    <div className="relative bg-gray-50 py-12">

      <div className="absolute top-0 right-0 w-40 md:w-64 opacity-70">
        <Image
          src="/pink.png"
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-40 md:w-64 opacity-70">
        <Image
          src="/blue.png"
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      
      <div className="relative z-20 text-left mb-8 max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent text-left typing-text">
          Solutions Tailored For You
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card p-4 rounded-xl shadow-md text-[#8e6865] ${service.bgColor}`}
              style={{ animationDelay: `${index * 0.2}s` }} 
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className={`text-base font-semibold mt-3 mb-1 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

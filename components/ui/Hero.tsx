import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Hero = () => {
  return (
    <header className="relative bg-[#FDE7B0]  overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 flex justify-start items-start opacity-70">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60%] h-[60%] md:w-[40%] md:h-[40%]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(253, 231, 176, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(240, 192, 72, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M16.2,-21.8C17.9,-17.9,14.1,-9.9,16,-2.4C17.8,5.1,25.4,12.1,24.4,14.2C23.3,16.3,13.6,13.6,7.6,11.8C1.6,10.1,-0.8,9.4,-7.4,11C-13.9,12.6,-24.7,16.5,-28.2,14.4C-31.8,12.2,-28.1,3.9,-26.8,-4.9C-25.5,-13.8,-26.5,-23.3,-22.4,-26.7C-18.3,-30.2,-9.2,-27.6,-1,-26.5C7.3,-25.3,14.5,-25.7,16.2,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>

      <div className="absolute right-0 z-0 flex justify-end items-end opacity-70">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[30%] h-[30%] md:w-[70%] md:h-[70%]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(253, 231, 176, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(240, 192, 72, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M16.2,-21.8C17.9,-17.9,14.1,-9.9,16,-2.4C17.8,5.1,25.4,12.1,24.4,14.2C23.3,16.3,13.6,13.6,7.6,11.8C1.6,10.1,-0.8,9.4,-7.4,11C-13.9,12.6,-24.7,16.5,-28.2,14.4C-31.8,12.2,-28.1,3.9,-26.8,-4.9C-25.5,-13.8,-26.5,-23.3,-22.4,-26.7C-18.3,-30.2,-9.2,-27.6,-1,-26.5C7.3,-25.3,14.5,-25.7,16.2,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>


      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-70">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20%] h-[20%] md:w-[20%] md:h-[20%]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(253, 231, 176, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(240, 192, 72, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M16.2,-21.8C17.9,-17.9,14.1,-9.9,16,-2.4C17.8,5.1,25.4,12.1,24.4,14.2C23.3,16.3,13.6,13.6,7.6,11.8C1.6,10.1,-0.8,9.4,-7.4,11C-13.9,12.6,-24.7,16.5,-28.2,14.4C-31.8,12.2,-28.1,3.9,-26.8,-4.9C-25.5,-13.8,-26.5,-23.3,-22.4,-26.7C-18.3,-30.2,-9.2,-27.6,-1,-26.5C7.3,-25.3,14.5,-25.7,16.2,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>

      <div className="absolute inset-0 z-0 flex justify-start items-end opacity-70">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[40%] h-[40%] md:w-[40%] md:h-[20%]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(253, 231, 176, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(240, 192, 72, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M16.2,-21.8C17.9,-17.9,14.1,-9.9,16,-2.4C17.8,5.1,25.4,12.1,24.4,14.2C23.3,16.3,13.6,13.6,7.6,11.8C1.6,10.1,-0.8,9.4,-7.4,11C-13.9,12.6,-24.7,16.5,-28.2,14.4C-31.8,12.2,-28.1,3.9,-26.8,-4.9C-25.5,-13.8,-26.5,-23.3,-22.4,-26.7C-18.3,-30.2,-9.2,-27.6,-1,-26.5C7.3,-25.3,14.5,-25.7,16.2,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>


      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 pt-10 pb-20 z-10 animate-fade-in-up">
      <div className="max-w-lg pb-10 z-10">
  <p className="text-lg text-[#ffa585] mt-4 animate-fade-in-delay">Hello I'm</p>
  <h1 className="text-5xl text-[#ef709b] leading-tight animate-fade-in-up">
    Sabrina Abro
  </h1>
  <ul className="text-lg font-bold mt-4 typing-list">
  {["Software Engineer", "Web Designer", "Full Stack Developer", "UX/UI Developer", "App Developer", "ML/AI Enthusiast"].map((item, index) => (
    <li key={index} className="bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
      {item}
    </li>
  ))}
</ul>


    <div className="mt-6 flex gap-4">
      <Link href="/about">
        <Button
          aria-label="About"
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition transform hover:scale-105 animate-fade-in-up"
        >
          More About me
        </Button>
      </Link>

      <Link href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
      <Button
        aria-label="Resume"
        className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105 animate-fade-in-up"
      >
        Download Resume
      </Button>
      </Link>
    </div>
  </div>

  <div className="relative w-full md:w-1/2 flex justify-center pt-8 md:mt-0 z-10 animate-fade-in-up">
    <Image
      src="/profile.png"
      alt="Hero Image"
      width={500}
      height={500}
    />
  </div>
</div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,256C384,267,480,277,576,277.3C672,277,768,267,864,256C960,245,1056,235,1152,229.3C1248,224,1344,224,1392,224L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;

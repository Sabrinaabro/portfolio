import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-20 px-4">
      

      <div className="absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2 md:left-[75%] w-24 md:w-40 lg:w-56 opacity-40 -z-10">
        <Image
          src="/green.png"
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      {/* Content Above Background */}
      <div className="relative z-10 text-center">
        {/* Heading with Gradient Text */}
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#099773] via-[#06b6d4] to-[#4f46e5] bg-clip-text text-transparent mb-6 px-4 md:px-0">
          Prepared To Turn Your Ideas Into Reality? <br /> I'm here to help.
        </h2>

        <div className="flex justify-center">
          <Link href="/contact">
            <button className="px-5 py-2 md:px-6 md:py-3 text-white font-semibold text-sm md:text-lg rounded-lg bg-gradient-to-r from-[#9491e2] to-[#aab2ff] hover:from-[#f8acff] hover:to-[#595cff] transition duration-300 shadow-lg">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="border-t-4 border-[#40E0D0] w-[100%] mx-auto mt-20"></div>


      </div>
      </div>
    
  );
};

export default Contact;

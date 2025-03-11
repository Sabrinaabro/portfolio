import Link from "next/link";
import Image from "next/image";

const Info = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#f2f3e2] via-[#AFDBF5] to-[#f6f6f6] py-12 overflow-hidden mt-22">


      <div className="absolute top-0 right-0 w-40 md:w-64 opacity-80">
        <Image
          src="/brush.png" 
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-40 md:w-64 opacity-80">
        <Image
          src="/brush1.png"
          alt="Decorative"
          width={300}
          height={300}
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center relative z-10 max-w-6xl mx-auto px-6 md:px-12 gap-x-12">
        
        <div className="md:w-1/2 max-w-sm mb-8 md:mb-0">
          <Image
            src="/logo.png"
            alt="Personal"
            className="rounded-lg shadow-lg w-full h-auto"
            width={500}
            height={500}
            priority
          />
        </div>

      
        <div className="md:w-1/2">
          <h4 className="text-gray-700 text-sm tracking-wider uppercase mb-2">
            About Me
          </h4>
          <h2 className="text-3xl font-bold mb-4">Personal Details</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Here, I focus on creating user-friendly websites that offer seamless experiences for users. 
            My passion for web development drives me to craft clean, responsive, and efficient interfaces using Next.js, Tailwind CSS, 
            and other modern technologies. My portfolio showcases projects that reflect my dedication to detail and functionality.
          </p>
          <div>
            <Link href="/about">
              <button className="bg-gradient-to-r from-[#96c6ea] to-[#b5c6e0] text-white py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:opacity-90">
                View Full Details
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;

import Image from "next/image";
import Link from "next/link";

const Ideas = () => {
    return (
        <div className="relative bg-white py-16 pt-4 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 opacity-30 rounded-full"></div>
            <div className="absolute top-4 right-6 w-32 h-32 bg-purple-300 opacity-30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-pink-300 opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

           
            <div className="absolute top-5 left-5 opacity-70">
                <Image src="/paint.png" alt="image" width={200} height={300} />
            </div>

            <div className="absolute top-5 right-5 opacity-70">
                <Image src="/code.gif" alt="gif" width={300} height={300} unoptimized />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#f492f0] via-[#a18dce] to-[#f27a7d] text-transparent bg-clip-text">
                    Ideas To Execution 
                </h2>
                <p className="mt-3 text-lg text-[#ef709b]">
                    Turning Vision Into Reality With <span className="text-[#bc1b68] font-semibold">Code</span> & 
                    <span className="text-[#f74c06] font-semibold"> Creativity</span>.
                </p>
                <div>
                    <Link href="/projects">
                <button className="mt-6 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-[#f48ec3] to-[#fc94b3] hover:from-[#fc94b3] hover:to-[#f4bccd] transition duration-300 shadow-lg">
                    Explore Projects
                </button>
                </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Ideas;

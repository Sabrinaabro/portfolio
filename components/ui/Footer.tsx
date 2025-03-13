import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#e1dae6] to-[#eed991] text-black py-2 px-4 text-center rounded-t-lg shadow-md overflow-hidden">
     
     
      <div className="relative flex justify-center gap-3 mb-2 z-10 text-[#e49e71]">
        <Link href="https://github.com/Sabrinaabro" target="_blank">
          <FaGithub className="text-xl hover:text-[#f3a46c] transition duration-300" />
        </Link>
        <Link href="https://www.facebook.com/sabrina.abro" target="_blank">
          <FaFacebook className="text-xl hover:text-[#f3a46c] transition duration-300" />
        </Link>
        <Link href="https://www.instagram.com/sabrina_abroo/" target="_blank">
          <FaInstagram className="text-xl hover:text-[#f3a46c] transition duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/sabrina-abro-a13190247/" target="_blank">
          <FaLinkedinIn className="text-xl hover:text-[#f3a46c] transition duration-300" />
        </Link>
      </div>

    
      <p className="relative text-sm text-[#f67b6b] z-10">
        © {new Date().getFullYear()} Sabrina Abro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

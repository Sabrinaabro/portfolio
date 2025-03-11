"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#FFFFF0] shadow-md"
    >
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sabrina's Portfolio Logo"
            width={60}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#C3B091] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link
            href="/"
            className={`transition ${
              pathname === "/" ? "text-[#C3B091]" : "hover:text-[#C3B091]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition ${
              pathname === "/about" ? "text-[#C3B091]" : "hover:text-[#C3B091]"
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`transition ${
              pathname === "/projects"
                ? "text-[#C3B091]"
                : "hover:text-[#C3B091]"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={`transition ${
              pathname === "/resume"
                ? "text-[#C3B091]"
                : "hover:text-[#C3B091]"
            }`}
          >
            Resume
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-[#C3B091] text-white px-4 py-2 rounded-md">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFFF0] px-8 py-4 space-y-4">
          <Link
            href="/"
            className={`block transition ${
              pathname === "/" ? "text-[#C3B091]" : "hover:text-[#C3B091]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block transition ${
              pathname === "/about" ? "text-[#C3B091]" : "hover:text-[#C3B091]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`block transition ${
              pathname === "/projects"
                ? "text-[#C3B091]"
                : "hover:text-[#C3B091]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={`block transition ${
              pathname === "/resume"
                ? "text-[#C3B091]"
                : "hover:text-[#C3B091]"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="bg-[#C3B091] text-white w-full py-2 rounded-md">
              Let's Talk
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

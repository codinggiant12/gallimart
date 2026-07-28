import React, { useState } from "react";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

type LoginProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC<LoginProps> = ({ setIsLoginOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed  z-20 mx-auto max-w-7xl">
      <div className="flex h-20 w-lvw  items-center justify-around px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer ">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-white shadow-md">
            <HiOutlineSparkles className="h-5 w-5" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
            Eventora<span className="text-[#D4AF37]">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <a href="#venues" className="hover:text-[#D4AF37] transition-colors">
            Venues
          </a>
          <a href="#vendors" className="hover:text-[#D4AF37] transition-colors">
            Vendors
          </a>
          <a
            href="#packages"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Packages
          </a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">
            About Us
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 transition-colors"
            onClick={() => setIsLoginOpen(true)}
          >
            Log In
          </button>
          <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#D4AF37] hover:shadow-xl transition-all duration-300">
            Plan an Event
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-white/95 p-6 backdrop-blur-md shadow-2xl border border-white/20 z-50">
          <div className="flex flex-col space-y-4 font-medium text-slate-800">
            <a href="#venues" className="hover:text-[#D4AF37]">
              Venues
            </a>
            <a href="#vendors" className="hover:text-[#D4AF37]">
              Vendors
            </a>
            <a href="#packages" className="hover:text-[#D4AF37]">
              Packages
            </a>
            <a href="#about" className="hover:text-[#D4AF37]">
              About Us
            </a>
            <hr className="border-slate-100" />
            <button className="w-full text-center font-semibold text-slate-700 py-2">
              Log In
            </button>
            <button className="w-full rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white">
              Plan an Event
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

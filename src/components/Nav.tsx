import React, { useState } from "react";
import { Link } from "react-router";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 border w-full">
      {/* Desktop & Tablet View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="">
            <a href="/" className="flex items-center gap-1">
              <span className="text-3xl font-extrabold tracking-tight">
                <span className="text-green-600">Galli</span>
                <span className="text-slate-800">Mart</span>
              </span>
            </a>
          </div>

          {/* Search Bar (Grocery focused) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-10">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Daily Needs (Atta, Dal, Oil...)"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-4 pl-11 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[10px] uppercase font-bold mt-0.5">
                Profile
              </span>
            </button>

            <button className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors relative">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="text-[10px] uppercase font-bold mt-0.5">
                  My Cart
                </span>
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <input
            type="text"
            placeholder="Search grocery..."
            className="w-full bg-gray-100 border-none rounded-md py-3 px-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 rounded-lg font-semibold italic">
              My Account
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold">
              Cart (0)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa"; // Using react-icons as per preference
import { Link } from "react-router";
import { AuthRouteType } from "../../../enum/authtype";

const Register: React.FC = () => {
  return (
    /* Main Wrapper: Use min-h-screen if it's a standalone page, 
       or remove it if placing inside a specific section */
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
      {/* Card Container: Added max-width and shadow for page integration */}
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-900/5 border border-gray-100">
        {/* Header Section */}
        <div className="bg-green-600 p-10 text-center text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <h1 className="text-4xl font-black italic tracking-tighter relative z-10">
            Galli Mart
          </h1>
          <p className="text-green-100 text-xs font-bold mt-2 uppercase tracking-[0.2em] relative z-10">
            Naya Account Banayein
          </p>
        </div>

        <div className="p-8 md:p-12">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Poora Naam
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all font-medium"
                />
                <FaUser className="w-4 h-4 text-green-600 absolute left-4 top-1/2 -translate-y-1/2 opacity-70 group-focus-within:opacity-100" />
              </div>
            </div>

            {/* Email Address */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all font-medium"
                />
                <FaEnvelope className="w-4 h-4 text-green-600 absolute left-4 top-1/2 -translate-y-1/2 opacity-70 group-focus-within:opacity-100" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Phone Number
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-1 border-r border-gray-200 pr-2">
                  <FaPhoneAlt className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-bold text-gray-400">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-5 pl-20 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all font-bold"
                />
              </div>
            </div>

            {/* Password */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-5 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="md:col-span-2 pt-6">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-green-200 transition-all hover:-translate-y-0.5 active:scale-[0.98] uppercase tracking-[0.15em] text-sm">
                Join Galli Mart
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-10 text-center border-t border-gray-50 pt-8">
            <p className="text-sm text-gray-400 font-semibold uppercase tracking-tight">
              Pehle se account hai?{" "}
              <Link to={`/auth/${AuthRouteType.LOGIN}`}>Login Karein</Link>
              {/* <a
                href="#"
                className="text-green-600 font-black hover:text-green-700 transition-colors ml-1"
              >
                Login Karein
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

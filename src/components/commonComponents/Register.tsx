import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-green-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-600 p-8 text-center text-white relative">
          <h1 className="text-3xl font-black italic tracking-tighter">
            Galli Mart
          </h1>
          <p className="text-green-100 text-xs font-bold mt-2 uppercase tracking-[0.2em]">
            Naya Account Banayein
          </p>
        </div>

        <div className="p-8 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Poora Naam
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-3.5 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
                />
                <svg
                  className="w-5 h-5 text-green-600 absolute left-4 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Email Address */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-3.5 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
                />
                <svg
                  className="w-5 h-5 text-green-600 absolute left-4 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Phone Number */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 font-bold text-gray-400 border-r border-gray-100 pr-2">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-3.5 px-5 pl-16 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold"
                />
              </div>
            </div>

            {/* Password */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
              />
            </div>

            {/* Confirm Password */}
            <div className="md:col-span-1">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
              />
            </div>

            {/* Register Button */}
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-widest text-sm">
                Join Galli Mart
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 font-medium">
              Pehle se account hai? <br />
              <a href="#" className="text-green-600 font-black hover:underline">
                Login Karein
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50/30 flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-green-100 overflow-hidden">
        {/* Top Header Section */}
        <div className="bg-green-600 p-10 text-center text-white relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black italic tracking-tighter">
            Galli Mart
          </h1>
          <p className="text-green-100 text-sm font-medium mt-2 uppercase tracking-widest">
            Login to your account
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-10">
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
                />
                <svg
                  className="w-5 h-5 text-green-600 absolute left-4 top-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
                  />
                </svg>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-4 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium"
                />
                <svg
                  className="w-5 h-5 text-green-600 absolute left-4 top-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-xs font-bold text-green-600 hover:text-green-700"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 uppercase tracking-widest text-sm">
              Sign In
            </button>
          </form>

          {/* Social or Register Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-8">
            <p className="text-sm text-gray-500 font-medium">
              Naye ho Galli Mart par? <br />
              <a href="#" className="text-green-600 font-black hover:underline">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

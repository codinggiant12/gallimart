import React, { useState } from "react";

const ForgetPassword: React.FC = () => {
  const [method, setMethod] = useState<"phone" | "email">("phone");

  return (
    <div className="min-h-screen bg-green-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-green-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-600 p-10 text-center text-white relative">
          <div className="absolute top-4 left-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-black italic tracking-tighter">
            Galli Mart
          </h1>
          <p className="text-green-100 text-xs font-bold mt-2 uppercase tracking-widest">
            Reset Password
          </p>
        </div>

        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Password Bhul Gaye?
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Chinta mat karein, hum aapko recovery code bhej denge.
            </p>
          </div>

          {/* Method Selector */}
          <div className="flex bg-green-50 p-1 rounded-2xl mb-8">
            <button
              onClick={() => setMethod("phone")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${method === "phone" ? "bg-white text-green-600 shadow-sm" : "text-gray-400"}`}
            >
              Phone
            </button>
            <button
              onClick={() => setMethod("email")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${method === "email" ? "bg-white text-green-600 shadow-sm" : "text-gray-400"}`}
            >
              Email
            </button>
          </div>

          {/* Conditional Input */}
          <div className="space-y-6">
            {method === "phone" ? (
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                  Registered Phone
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 font-bold text-gray-400 border-r border-gray-200 pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-4 px-5 pl-16 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                  Registered Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="aapka@email.com"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            )}

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-widest text-sm">
              Send Reset Link
            </button>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="text-sm font-black text-green-600 hover:text-green-700 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

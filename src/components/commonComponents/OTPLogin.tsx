import React, { useState } from "react";

const OTPLogin: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Phone Input, 2: OTP Input

  return (
    <div className="min-h-screen bg-green-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-green-100 overflow-hidden">
        {/* Branding Header */}
        <div className="bg-green-600 p-10 text-center text-white">
          <h1 className="text-3xl font-black italic tracking-tighter">
            Galli Mart
          </h1>
          <p className="text-green-100 text-xs font-bold mt-2 uppercase tracking-[0.2em]">
            {step === 1 ? "Welcome Back!" : "Verify OTP"}
          </p>
        </div>

        <div className="p-8 md:p-10">
          {step === 1 ? (
            /* Step 1: Phone Number Input */
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Login via Mobile
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Hum aapko ek 6-digit OTP bhejenge
                </p>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 font-bold text-gray-400 border-r border-gray-200 pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98765 43210"
                    className="w-full bg-green-50/50 border border-green-100 rounded-2xl py-4 px-5 pl-16 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-bold text-lg tracking-widest"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-widest text-sm"
              >
                Send OTP
              </button>
            </div>
          ) : (
            /* Step 2: OTP Input */
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Enter OTP</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Sent to +91 9XXXX XX210
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-green-600 font-bold hover:underline mt-1"
                >
                  Change Number?
                </button>
              </div>

              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-12 h-14 bg-green-50/50 border border-green-100 rounded-xl text-center text-xl font-black text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                  />
                ))}
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-widest text-sm">
                Verify & Login
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-400 font-bold">
                  Didn't receive code?
                </p>
                <button className="text-xs text-green-600 font-black mt-1 hover:text-green-700">
                  RESEND OTP (in 00:45)
                </button>
              </div>
            </div>
          )}

          <p className="mt-8 text-[10px] text-gray-400 text-center font-medium leading-relaxed">
            By continuing, you agree to Galli Mart's <br />
            <span className="underline cursor-pointer">
              Terms of Service
            </span> &{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPLogin;

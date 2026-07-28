import React from "react";

const VendorLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-200">
        {/* Header Section */}
        <div className="bg-slate-900 p-12 text-center relative">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <svg
              className="w-20 h-20 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase">
            Galli Mart <span className="text-green-500">Partner</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase tracking-[0.3em]">
            Vendor Control Center
          </p>
        </div>

        {/* Form Body */}
        <div className="p-10 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Store ID / Email
              </label>
              <input
                type="text"
                placeholder="store-10293"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-green-500 transition-all font-bold text-slate-700"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-green-500 transition-all font-bold text-slate-700"
              />
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-100 transition-all uppercase tracking-[0.2em] text-xs">
            Enter Dashboard
          </button>

          <div className="pt-4 text-center">
            <a
              href="#"
              className="text-xs font-bold text-slate-400 hover:text-green-600 uppercase tracking-widest"
            >
              Forgot Store Credentials?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VendorLogin;

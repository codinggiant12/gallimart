import React from "react";

const VendorHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-100 h-20 flex items-center sticky top-0 z-30 shadow-sm px-6 md:px-10">
      <div className="flex items-center justify-between w-full">
        {/* Left Side: Store Status Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">
              Gupta Kirana Store
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Store ID: GM-10293
            </p>
          </div>

          {/* Live Status Toggle Toggle (UI Only) */}
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">
              Store Open
            </span>
          </div>
        </div>

        {/* Middle: Quick Search (Optional for Dashboard) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-10">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Orders, Inventory..."
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 pl-10 text-xs focus:outline-none focus:ring-2 focus:ring-green-500/10 transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-green-600 transition-colors bg-slate-50 rounded-xl">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Vertical Divider */}
          <div className="h-8 w-[1px] bg-slate-100 hidden md:block"></div>

          {/* Profile Dropdown UI */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-slate-200 group-hover:bg-green-600 transition-colors">
              GK
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black text-slate-900 uppercase">
                Owner
              </span>
              <svg
                className="w-3 h-3 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;

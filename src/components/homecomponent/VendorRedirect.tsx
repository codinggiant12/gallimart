import React from "react";

const VendorRedirect: React.FC = () => {
  return (
    <section className="w-full bg-[#062c1d] py-16 md:py-24 overflow-hidden relative">
      {/* Decorative patterns for a professional look */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">
              Dukandaar Bhaiyo, <br />
              <span className="text-green-400">Galli Mart Se Judिये!</span>
            </h2>
            <p className="mt-4 text-green-100/70 text-lg font-medium">
              Apne business ko online le jaayein aur pados ke har ghar tak
              delivery pahunchayein. Register karein hamare dedicated vendor
              portal par.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest">
                  0% Commission
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest">
                  Instant Payouts
                </span>
              </div>
            </div>
          </div>

          {/* Redirect Button Area */}
          <div className=" w-full lg:w-auto">
            <a
              href="https://vendor.gallimart.com" // Replace with your actual vendor website URL
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.15em] transition-all shadow-2xl shadow-green-500/20 active:scale-95 w-full lg:w-72"
            >
              Start Selling
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <p className="text-center text-green-200/40 text-[10px] font-bold mt-4 uppercase tracking-widest">
              Redirecting to Vendor Portal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorRedirect;

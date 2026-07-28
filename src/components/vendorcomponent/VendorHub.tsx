import React from "react";

const VendorHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-50 border-b border-gray-100 py-2 px-4 md:px-12 flex justify-between items-center text-[10px] md:text-xs text-slate-500 font-medium">
        <p>
          Existing Seller? Explore our product recommendations with{" "}
          <span className="text-green-600 font-bold">
            Galli Dhamaka Selection
          </span>
        </p>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="text-2xl font-black italic tracking-tighter">
            Galli<span className="text-green-600">Mart</span>
            <span className="ml-2 not-italic text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase tracking-widest">
              Seller Hub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              "Sell Online",
              "Fees and Commission",
              "Grow",
              "Learn",
              "Shopsy",
            ].map((item) => (
              <div
                key={item}
                className="group relative flex items-center gap-1 cursor-pointer"
              >
                <span className="text-sm font-bold text-slate-600 group-hover:text-green-600 transition-colors">
                  {item}
                </span>
                <svg
                  className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-slate-700 hover:text-green-600 px-4">
            Login
          </button>
          <button className="bg-[#FFC200] hover:bg-[#E6AF00] text-slate-900 px-6 py-3 rounded-md text-sm font-black uppercase tracking-tight shadow-md transition-all active:scale-95">
            Start Selling
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative w-full bg-[#f1f3f6] overflow-hidden py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Hero Left Content */}
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
              Ab se <br />
              <span className="text-green-600 text-[120px] md:text-[180px] block leading-none">
                0%
              </span>
              <span className="text-3xl md:text-5xl -mt-4 block font-black">
                Commission*
              </span>
              <span className="text-2xl md:text-4xl block font-medium mt-2 text-slate-700">
                pe zyada becho,
              </span>
              <span className="text-4xl md:text-6xl block font-black text-slate-800 tracking-tight">
                full on nacho!
              </span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-orange-500 font-bold text-xs uppercase italic">
                & Big Drop in Return Fee
              </div>
              <div className="text-green-700 font-black text-xl italic animate-pulse">
                LIVE NOW
              </div>
            </div>
          </div>

          {/* Hero Right Image (Placeholder for the Vendor Illustration) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square bg-gradient-to-tr from-green-200 to-green-100 rounded-full absolute opacity-20 blur-3xl"></div>
            <div className="relative z-10 scale-110">
              {/* Replace this with actual vendor image */}
              <div className="text-[150px] md:text-[200px] filter drop-shadow-2xl">
                🏬
              </div>
              <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-green-50 animate-bounce">
                <span className="text-3xl">📈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY STATS (Floating Bar) */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 md:-mt-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 grid grid-cols-2 md:grid-cols-4 py-10 md:py-14">
          {[
            { label: "Seller community", val: "14 Lakh+" },
            { label: "Online Business", val: "24×7" },
            { label: "days* payment", val: "7" },
            { label: "Pincodes served", val: "19000+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center px-4 border-r last:border-0 border-gray-100"
            >
              <h3 className="text-2xl md:text-4xl font-black text-green-600 tracking-tighter">
                {stat.val}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mt-2 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. "WHY DO SELLERS LOVE..." SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Why do{" "}
            <span className="text-green-600 underline decoration-green-200 underline-offset-8">
              sellers love selling
            </span>{" "}
            on Galli Mart?
          </h2>
          <p className="mt-6 text-slate-500 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
            45 crore+ customers across India trust GalliMart.com to be their
            number 1 online shopping destination. It is no surprise that more
            than a million sellers trust their products to be made available
            24×7 on Galli Mart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex gap-6 group">
              <div className="text-4xl group-hover:scale-110 transition-transform">
                🔭
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 uppercase italic">
                  Opportunity
                </h4>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed font-medium">
                  45 crore+ of customers across 19000+ pincodes, and access to
                  shopping festivals like The Big Billion Days, and more.
                </p>
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex gap-6 group">
              <div className="text-4xl group-hover:scale-110 transition-transform">
                🤏
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 uppercase italic">
                  Ease of Doing Business
                </h4>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed font-medium">
                  Create your Galli Mart seller account in under 10 minutes with
                  just 1 product and a valid GSTIN number.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image Placeholder (Like the Woman's photo in Flipkart Hub) */}
          <div className="relative">
            <div className="aspect-[4/5] bg-green-50 rounded-[3rem] overflow-hidden flex items-end justify-center pt-20">
              {/* Replace with actual high-quality vendor photo */}
              <div className="text-[250px] leading-none grayscale opacity-20">
                👤
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-3xl shadow-2xl">
              <p className="text-2xl font-black italic">"Best Decision!"</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">
                Rina, Galli Mart Seller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-slate-900 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
          Ready to grow your business?
        </h2>
        <button className="mt-10 bg-[#FFC200] text-slate-900 px-12 py-5 rounded-xl text-lg font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default VendorHub;

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              🚀 Fast Delivery to your Doorstep
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Aapki Apni <br />
              <span className="text-green-600">Galli Wali Dukaan</span> <br />
              Ab Online!
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Fresh grocery, daily essentials, aur mahine ka poora rashan—sab
              kuch best prices par. Galli Mart se mangwayein aur samay
              bachayein.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1">
                Order Now
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-green-600 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                View Offers
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-green-200/50 pt-8">
              <div className="flex items-center gap-2">
                <div className="text-green-600 bg-white p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Pure Quality
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-green-600 bg-white p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  30 Min Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className=" from-green-400 to-green-600 rounded-3xl p-1 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-[1.4rem] overflow-hidden p-6 text-center">
                <div className="grid grid-cols-2 gap-4">
                  {/* Category Boxes */}
                  <div className="bg-orange-50 p-6 rounded-2xl hover:bg-orange-100 transition-colors group cursor-pointer">
                    <span className="text-4xl block group-hover:scale-110 transition-transform">
                      🍚
                    </span>
                    <p className="mt-2 font-bold text-gray-800">Rice & Atta</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl hover:bg-blue-100 transition-colors group cursor-pointer">
                    <span className="text-4xl block group-hover:scale-110 transition-transform">
                      🍼
                    </span>
                    <p className="mt-2 font-bold text-gray-800">Dairy Items</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-2xl hover:bg-yellow-100 transition-colors group cursor-pointer">
                    <span className="text-4xl block group-hover:scale-110 transition-transform">
                      🌻
                    </span>
                    <p className="mt-2 font-bold text-gray-800">Cooking Oil</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl hover:bg-purple-100 transition-colors group cursor-pointer">
                    <span className="text-4xl block group-hover:scale-110 transition-transform">
                      🧼
                    </span>
                    <p className="mt-2 font-bold text-gray-800">Cleaning</p>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-xl border border-dashed border-green-300">
                  <p className="text-green-800 font-medium">
                    Upto 20% Off on Monthly Rashan! 🛍️
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-2xl border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  5★
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    Local Trusted
                  </p>
                  <p className="text-xs text-gray-500">1000+ Happy Neighbors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";

const activeVendors = [
  { id: 1, name: "Gupta Grocery", image: "🏪" },
  { id: 2, name: "Aggarwal Sweets", image: "🍬" },
  { id: 3, name: "Sharma Kirana", image: "🛒" },
  { id: 4, name: "Verma Store", image: "📦" },
  { id: 5, name: "Galli Dukan", image: "🏠" },
  { id: 6, name: "Quick Mart", image: "⚡" },
  { id: 7, name: "Desi Masala", image: "🌶️" },
  { id: 8, name: "Fresh Dairy", image: "🥛" },
  { id: 9, name: "Pooja Store", image: "🪔" },
];

const ActiveVendors: React.FC = () => {
  return (
    // Full width background
    <section className="w-full bg-white py-8 border-b border-gray-50">
      {/* Aligned Content Container (Matches Navbar/Hero width) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Active Shops in your Area
          </h2>
        </div>

        {/* Horizontal Scroll with 2/3 Size Circles */}
        <div className="flex items-start gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-2">
          {activeVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="flex flex-col items-center  group cursor-pointer"
            >
              {/* Circle Container - Now 2/3 size (w-16 to w-20) */}
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-2xl md:text-3xl shadow-sm group-hover:border-green-500 group-hover:shadow-md transition-all duration-300">
                  {vendor.image}
                </div>

                {/* Active Status Dot */}
                <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                </span>
              </div>

              {/* Shop Name - Compact */}
              <p className="mt-3 font-bold text-gray-700 text-[10px] md:text-xs text-center uppercase tracking-tighter w-16 md:w-20 leading-tight group-hover:text-green-600 transition-colors">
                {vendor.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ActiveVendors;

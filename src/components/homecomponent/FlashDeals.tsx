import React from "react";

const flashProducts = [
  {
    id: 1,
    name: "Maggi Pazzta (Cheese)",
    price: 22,
    oldPrice: 28,
    discount: "21% OFF",
    image: "🍝",
  },
  {
    id: 2,
    name: "Surf Excel Matic (1kg)",
    price: 199,
    oldPrice: 230,
    discount: "₹31 OFF",
    image: "🧼",
  },
  {
    id: 3,
    name: "Dabur Honey (250g)",
    price: 95,
    oldPrice: 115,
    discount: "18% OFF",
    image: "🍯",
  },
  {
    id: 4,
    name: "Amul Butter (100g)",
    price: 52,
    oldPrice: 58,
    discount: "10% OFF",
    image: "🧈",
  },
];

const FlashDeals: React.FC = () => {
  return (
    <section className="w-full py-12 bg-green-50/50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Green Timer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 text-white p-2 rounded-xl shadow-lg shadow-green-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">
                Galli Deals
              </h2>
              <p className="text-xs text-green-700 font-bold uppercase tracking-widest">
                Sasta aur Sabse Tez
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-green-100">
            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider">
              Ends In:
            </span>
            <div className="flex gap-1 text-green-700 font-mono font-black">
              <span className="bg-green-50 px-2 py-1 rounded">02</span>
              <span className="animate-pulse">:</span>
              <span className="bg-green-50 px-2 py-1 rounded">45</span>
              <span className="animate-pulse">:</span>
              <span className="bg-green-50 px-2 py-1 rounded">12</span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {flashProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white  p-5 border border-green-50 hover:border-green-400 hover:shadow-xl hover:shadow-green-100/50 transition-all group relative"
            >
              {/* Green Discount Tag */}
              <div className="absolute top-4 left-4 bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded-full z-10 shadow-md">
                {item.discount}
              </div>

              {/* Image Area */}
              <div className="h-32 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 mb-4 bg-green-50/30 ">
                {item.image}
              </div>

              {/* Info */}
              <h3 className="text-sm font-bold text-gray-800 line-clamp-1 mb-2 group-hover:text-green-700 transition-colors">
                {item.name}
              </h3>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-xl font-black text-gray-900 leading-none">
                  ₹{item.price}
                </span>
                <span className="text-xs text-gray-400 line-through font-bold">
                  ₹{item.oldPrice}
                </span>
              </div>

              {/* Add Button */}
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-green-100 active:scale-95">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;

import React from "react";

const products = [
  {
    id: 1,
    name: "Aashirvaad Atta (5kg)",
    price: 245,
    oldPrice: 280,
    image: "🌾",
    category: "Flour",
  },
  {
    id: 2,
    name: "Fortune Mustard Oil (1L)",
    price: 165,
    oldPrice: 190,
    image: "🌻",
    category: "Oil",
  },
  {
    id: 3,
    name: "Tata Salt (1kg)",
    price: 28,
    oldPrice: 30,
    image: "🧂",
    category: "Spices",
  },
  {
    id: 4,
    name: "Toor Dal Premium (1kg)",
    price: 155,
    oldPrice: 175,
    image: "🍲",
    category: "Pulses",
  },
];

const ProductSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Daily Essentials
          </h2>
          <p className="text-gray-500 mt-2">
            Best quality rashan delivered to your home.
          </p>
        </div>
        <button className="text-green-600 font-bold hover:underline flex items-center gap-1">
          View All
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
              SAVE ₹{product.oldPrice - product.price}
            </div>

            {/* Product Image Placeholder */}
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
              {product.image}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2 h-12 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-black text-gray-900">
                  ₹{product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-white border-2 border-green-600 text-green-600 font-bold py-2.5 rounded-lg hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center gap-2">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Banner - Bottom */}
      <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Ghar Ka Rashan, Galli Mart Se
          </h3>
          <p className="text-slate-400">
            Order above ₹499 and get{" "}
            <span className="text-green-400 font-bold">FREE DELIVERY</span>{" "}
            today!
          </p>
        </div>
        <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-bold transition-all whitespace-nowrap">
          Order on WhatsApp
        </button>
      </div>
    </section>
  );
};

export default ProductSection;

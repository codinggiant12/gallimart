import React from "react";

const cartItems = [
  { id: 1, name: "Aashirvaad Atta (5kg)", price: 245, qty: 1, image: "🌾" },
  { id: 2, name: "Fortune Mustard Oil (1L)", price: 165, qty: 2, image: "🌻" },
  { id: 3, name: "Amul Butter (100g)", price: 52, qty: 1, image: "🧈" },
];

const Cart: React.FC = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="w-full bg-green-50/30 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8 italic uppercase tracking-tighter">
          Aapka <span className="text-green-600">Shopping Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Items List */}
          <div className="lg:col-span-2 space-y-4">
            {/* Free Delivery Tracker */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
              <p className="text-sm font-bold text-gray-700 mb-2">
                {subtotal > 500
                  ? "🎉 Party! Aapki Delivery FREE hai!"
                  : `₹${500 - subtotal} aur add karein FREE Delivery ke liye`}
              </p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full transition-all duration-500"
                  style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-3xl flex items-center gap-4 border border-green-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-3xl">
                  {item.image}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-green-600 font-black">₹{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-green-50 rounded-xl p-1 border border-green-100">
                  <button className="w-8 h-8 flex items-center justify-center font-bold text-green-700 hover:bg-white rounded-lg transition-colors">
                    -
                  </button>
                  <span className="w-10 text-center font-black text-gray-800">
                    {item.qty}
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center font-bold text-green-700 hover:bg-white rounded-lg transition-colors">
                    +
                  </button>
                </div>

                <button className="text-red-400 hover:text-red-600 p-2">
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Bill Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-green-900/5 border border-green-100 sticky top-24">
              <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Bill Details
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Item Total</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Delivery Fee</span>
                  <span
                    className={
                      deliveryFee === 0 ? "text-green-600 font-bold" : ""
                    }
                  >
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-black text-gray-900">
                    To Pay
                  </span>
                  <span className="text-lg font-black text-green-600">
                    ₹{total}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-2xl mb-6 flex items-center gap-3 border border-green-100">
                <span className="text-xl">🎟️</span>
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="bg-transparent border-none outline-none text-sm font-bold w-full uppercase placeholder:text-green-300"
                />
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 uppercase tracking-widest text-sm">
                Proceed to Checkout
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-4 font-bold uppercase tracking-widest">
                Safe & Secure Payments 🔒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

const categories = [
  { id: 1, name: "Atta & Rice", icon: "🌾", color: "bg-orange-50" },
  { id: 2, name: "Dal & Pulses", icon: "🍲", color: "bg-yellow-50" },
  { id: 3, name: "Oil & Ghee", icon: "🌻", color: "bg-amber-50" },
  { id: 4, name: "Masale", icon: "🌶️", color: "bg-red-50" },
  { id: 5, name: "Dairy & Bread", icon: "🥛", color: "bg-blue-50" },
  { id: 6, name: "Biscuits", icon: "🍪", color: "bg-orange-100" },
  { id: 7, name: "Snacks", icon: "🍟", color: "bg-yellow-100" },
  { id: 8, name: "Cleaning", icon: "🧼", color: "bg-purple-50" },
  { id: 9, name: "Personal Care", icon: "🪥", color: "bg-pink-50" },
  { id: 10, name: "Pooja Needs", icon: "🪔", color: "bg-orange-50" },
];

const CategorySection: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Container for horizontal scroll on mobile */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-6 md:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center  cursor-pointer group"
            >
              {/* Circle Icon */}
              <div
                className={`${cat.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200 border border-white`}
              >
                {cat.icon}
              </div>

              {/* Label */}
              <span className="mt-2 text-[11px] md:text-xs font-bold text-gray-700 uppercase tracking-tight text-center group-hover:text-green-600">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Hint (Only visible on small screens) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategorySection;

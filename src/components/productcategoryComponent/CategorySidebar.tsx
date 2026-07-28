import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineCake,
  HiOutlineBeaker,
} from "react-icons/hi";
import {
  GiFruitBowl,
  GiMilkCarton,
  GiSteak,
  GiCarrot,
  GiSodaCan,
  GiSittingDog,
} from "react-icons/gi";
import { MdOutlineBabyChangingStation } from "react-icons/md";

const categories = [
  { name: "All Categories", icon: <HiOutlineViewGrid />, active: true },
  { name: "Fruits & Vegetables", icon: <GiFruitBowl /> },
  { name: "Dairy & Breakfast", icon: <GiMilkCarton /> },
  { name: "Meat & Seafood", icon: <GiSteak /> },
  { name: "Organic Produce", icon: <GiCarrot /> },
  { name: "Snacks & Munchies", icon: <HiOutlineCake /> },
  { name: "Cold Drinks & Juices", icon: <GiSodaCan /> },
  { name: "Baby Care", icon: <MdOutlineBabyChangingStation /> },
  { name: "Pet Care", icon: <GiSittingDog /> },
];

const CategorySidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-100 hidden md:block sticky top-0 fixed">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 tracking-tight">
          Categories
        </h2>
        <nav className="space-y-1">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                category.active
                  ? "bg-green-600 text-white shadow-md shadow-green-100"
                  : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
              }`}
            >
              <span
                className={`text-xl ${category.active ? "text-white" : "text-gray-400 group-hover:text-green-600"}`}
              >
                {category.icon}
              </span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* G Mart Loyalty Card */}
      <div className="mx-4 mt-4 p-5 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl text-white">
        <p className="text-xs opacity-80">G Mart Plus</p>
        <p className="text-sm font-bold mt-1">
          Free Delivery on all orders above $20
        </p>
        <button className="mt-4 w-full py-2 bg-white text-green-700 text-xs font-bold rounded-lg hover:bg-gray-100">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

export default CategorySidebar;

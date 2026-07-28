import React, { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { Product } from "../../../network/api/get_all_product/AllProduct.interface";
import { AllProduct } from "../../../network/api/get_all_product/AllProduct.api";
import { ProductContext } from "../../context/ProductContext";

const allProducts = [
  {
    id: 1,
    name: "Fresh Banana",
    price: "₹40",
    unit: "1 dozen",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1571771894821-ad990241274d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Red Apple",
    price: "₹120",
    unit: "1 kg",
    tag: "Organic",
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Organic Carrot",
    price: "₹30",
    unit: "500g",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b996a66f1d?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Full Cream Milk",
    price: "₹66",
    unit: "1L",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1563636619-e9107da4a1bb?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Paneer",
    price: "₹80",
    unit: "200g",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Brown Bread",
    price: "₹45",
    unit: "400g",
    tag: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Broccoli",
    price: "₹60",
    unit: "1 pc",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Salted Butter",
    price: "₹55",
    unit: "100g",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=200&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Spinach",
    price: "₹20",
    unit: "1 bunch",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
  },
  {
    id: 10,
    name: "Greek Yogurt",
    price: "₹70",
    unit: "1 cup",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop",
  },
  {
    id: 1,
    name: "Fresh Banana",
    price: "₹40",
    unit: "1 dozen",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1571771894821-ad990241274d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Red Apple",
    price: "₹120",
    unit: "1 kg",
    tag: "Organic",
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Organic Carrot",
    price: "₹30",
    unit: "500g",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b996a66f1d?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Full Cream Milk",
    price: "₹66",
    unit: "1L",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1563636619-e9107da4a1bb?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Fresh Paneer",
    price: "₹80",
    unit: "200g",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Brown Bread",
    price: "₹45",
    unit: "400g",
    tag: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Broccoli",
    price: "₹60",
    unit: "1 pc",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Salted Butter",
    price: "₹55",
    unit: "100g",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=200&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Spinach",
    price: "₹20",
    unit: "1 bunch",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
  },
  {
    id: 10,
    name: "Greek Yogurt",
    price: "₹70",
    unit: "1 cup",
    tag: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop",
  },
];

const Allproduct = () => {
  // const [products, setProducts] = useState<Product[] | undefined>();
  const context = useContext(ProductContext);
  if (!context) return null;
  const { products } = context;
  // useEffect(() => {
  //   (async () => {
  //     const res = await AllProduct.getAllProducts(setProducts);
  //     setProducts(res.data);
  //   })();
  // });
  // console.log(products);

  return (
    <div className="w-2/3 flex-1 h-screen overflow-y-auto bg-gray-50 p-10 no-scrollbar pb-40">
      {/* Style to hide scrollbar across browsers 
         Add this to your globals.css or keep it here in a style tag 
      */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">G Mart Catalog</h1>
        <p className="text-gray-500 text-sm">Fresh picks just for you</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl border border-gray-100 p-3 hover:shadow-xl transition-all duration-300 group relative"
          >
            <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <AiOutlineHeart size={18} />
            </button>

            <div className="h-40 w-full rounded-xl bg-gray-50 overflow-hidden mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase">
                {product.category}
              </span>
              <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500">{product.price}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-extrabold text-gray-900">
                {product.price}
              </p>
              <button className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-700 transition-all">
                <HiOutlineShoppingBag size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;

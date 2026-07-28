import React, { useState } from "react";
import Nav from "../../components/Nav";

const page: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  console.log(isLoginOpen);
  return (
    <>
      <Nav setIsLoginOpen={setIsLoginOpen} />
      <div className="min-h-screen bg-green-50/30 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-black text-gray-900 italic uppercase tracking-tighter">
              My <span className="text-green-600">Profile</span>
            </h1>
            <p className="text-slate-500 font-medium mt-1">
              Manage your account and track your grocery orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[2.5rem] border border-green-100 shadow-xl shadow-green-900/5 p-8 text-center sticky top-24">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-green-100 border-4 border-white shadow-lg flex items-center justify-center text-5xl text-green-700 font-black">
                    R
                  </div>
                  <button className="absolute bottom-1 right-1 bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-all">
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
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>

                <h2 className="text-2xl font-black text-gray-900">
                  Rahul Sharma
                </h2>
                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mt-1">
                  +91 98765 43210
                </p>

                <div className="mt-8 space-y-3">
                  <button className="w-full bg-green-600 text-white py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all">
                    Edit Profile
                  </button>
                  <button className="w-full bg-slate-50 text-red-500 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all">
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Details & History */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-green-50 shadow-sm text-center">
                  <p className="text-2xl font-black text-gray-900">12</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Total Orders
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-green-50 shadow-sm text-center">
                  <p className="text-2xl font-black text-green-600">₹450</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Galli Wallet
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-green-50 shadow-sm text-center hidden md:block">
                  <p className="text-2xl font-black text-orange-500">Gold</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Membership
                  </p>
                </div>
              </div>

              {/* Recent Orders Section */}
              <div className="bg-white rounded-[2.5rem] border border-green-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="font-black text-gray-900 uppercase tracking-tight italic">
                    Recent Orders
                  </h3>
                  <button className="text-xs font-bold text-green-600 hover:underline">
                    View All
                  </button>
                </div>

                <div className="divide-y divide-gray-50">
                  {[1, 2].map((order) => (
                    <div
                      key={order}
                      className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-green-50/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
                          🛍️
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">
                            Order #GM-4921
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            12 Jan 2026 • 4 Items
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6">
                        <div className="text-right">
                          <p className="font-black text-gray-900">₹1,240</p>
                          <p className="text-[10px] font-black text-green-600 uppercase">
                            Delivered
                          </p>
                        </div>
                        <button className="border-2 border-green-100 text-green-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-green-600 hover:text-white transition-all">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Addresses */}
              <div className="bg-white rounded-[2.5rem] border border-green-100 shadow-sm p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-black text-gray-900 uppercase tracking-tight italic">
                    Saved Addresses
                  </h3>
                  <button className="text-xs font-black text-green-600">
                    + Add New
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-green-50 p-5 rounded-3xl relative group">
                    <span className="absolute top-4 right-4 text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold uppercase">
                      Home
                    </span>
                    <p className="font-bold text-gray-800">Rahul Sharma</p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      H-No 402, Block C, Green View Apartments, <br />
                      Sector 45, Gurgaon - 122003
                    </p>
                  </div>
                  <div className="border-2 border-gray-50 p-5 rounded-3xl opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold uppercase">
                      Work
                    </span>
                    <p className="font-bold text-gray-800 mt-3">Rahul Sharma</p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Tech Park Z, Tower B, 5th Floor, <br />
                      Cyber City, Gurgaon - 122002
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

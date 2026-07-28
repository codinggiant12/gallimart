import React, { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiChevronDown,
  FiCheckCircle,
  FiMusic,
  FiCamera,
  FiArrowRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
// import { HiOutlineSparkles, HiOutlineUtensils } from 'react-icons/hi2';
import { FaStar } from "react-icons/fa6";
import image from "../../../public/herosectioninage.png";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("venues");

  return (
    <div className="min-h-[975px] bg-[#FDFBF7] font-sans text-slate-800 antialiased selection:bg-[#D4AF37] selection:text-white">
      {/* BACKGROUND & HERO CONTAINER */}
      <div className="relative min-h-[975px] w-full overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 z-0 right-0 bg-cover bg-right lg:bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('../../../public/herosectioninage.png')`, // Replace with your image asset path
          }}
        >
          {/* Subtle overlay gradient to ensure readability for hero text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent lg:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent lg:hidden" />
        </div>

        {/* NAVIGATION BAR */}

        {/* HERO CONTENT SECTION */}
        <main className="relative z-10 mx-auto max-w-7xl px-4 flex items-center sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column (Main Value Proposition & Search) */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-8 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/60 px-4 py-1.5 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                  India’s Most Trusted Event Platform
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15]">
                  Plan your entire wedding{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#8A6309]">
                    from one place.
                  </span>
                </h1>
                <p className="text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                  Discover luxury marriage lawns, tailored catering, royal
                  decor, and top photographers—all backed by transparent pricing
                  and instant booking.
                </p>
              </div>

              {/* SEARCH & FILTER WIDGET */}
              <div className="rounded-2xl bg-white/90 p-3 sm:p-4 shadow-xl backdrop-blur-xl border border-white/60">
                {/* Search Tabs */}
                <div className="flex border-b border-slate-100 pb-3 gap-2">
                  {[
                    { id: "venues", label: "Venues" },
                    { id: "catering", label: "Catering" },
                    { id: "decor", label: "Decoration" },
                    { id: "photography", label: "Photography" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                        activeTab === tab.id
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Filter Controls Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  {/* Location Selector */}
                  <div className="flex flex-col justify-center px-3 py-2 bg-slate-50/80 rounded-xl border border-slate-200/60 hover:border-[#D4AF37] transition-colors cursor-pointer">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      Location
                    </label>
                    <div className="flex items-center justify-between text-slate-800 text-sm font-semibold mt-0.5">
                      <div className="flex items-center gap-1.5 truncate">
                        <FiMapPin className="h-4 w-4 text-[#D4AF37]" />
                        <span className="truncate">Lucknow, UP</span>
                      </div>
                      <FiChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Guest Count Selector */}
                  <div className="flex flex-col justify-center px-3 py-2 bg-slate-50/80 rounded-xl border border-slate-200/60 hover:border-[#D4AF37] transition-colors cursor-pointer">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      Guests
                    </label>
                    <div className="flex items-center justify-between text-slate-800 text-sm font-semibold mt-0.5">
                      <div className="flex items-center gap-1.5">
                        <FiUsers className="h-4 w-4 text-[#D4AF37]" />
                        <span>500 - 800</span>
                      </div>
                      <FiChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Date Selector */}
                  <div className="flex flex-col justify-center px-3 py-2 bg-slate-50/80 rounded-xl border border-slate-200/60 hover:border-[#D4AF37] transition-colors cursor-pointer">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      Date
                    </label>
                    <div className="flex items-center justify-between text-slate-800 text-sm font-semibold mt-0.5">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="h-4 w-4 text-[#D4AF37]" />
                        <span>Nov 2026</span>
                      </div>
                      <FiChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Submit Search Button */}
                <button className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] py-3 text-sm font-bold text-white shadow-lg hover:brightness-105 active:scale-[0.99] transition-all">
                  <FiSearch className="h-4 w-4" />
                  <span>Search Available Options</span>
                </button>
              </div>

              {/* Service Highlights / Value Points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-slate-700">
                    Verified Venues
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-slate-700">
                    Transparent Rates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-slate-700">
                    1-Click Booking
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Floating Decorative Cards over Venue Showcase) */}
            <div className="lg:col-span-5 xl:col-span-6 relative hidden lg:block h-[500px]">
              {/* Card 1: Rating Badge */}
              <div className="absolute top-10 left-8 rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-md border border-white/60 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <FaStar className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">
                      4.9 / 5.0
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Over 1,200+ weddings</p>
                </div>
              </div>

              {/* Card 2: Feature Included Box */}
              <div className="absolute bottom-20 left-4 rounded-2xl bg-white/85 p-4 shadow-2xl backdrop-blur-md border border-white/60 space-y-2 w-64">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#D4AF37]">
                  Package Highlight
                </span>
                <div className="text-sm font-bold text-slate-900">
                  Royal Lawn Package
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    {/* <HiOutlineUtensils className="h-3.5 w-3.5 text-slate-400" /> */}
                    <span>Multi-Cuisine Catering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMusic className="h-3.5 w-3.5 text-slate-400" />
                    <span>DJ & Premium Sound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCamera className="h-3.5 w-3.5 text-slate-400" />
                    <span>Cinematic Drone Shoot</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Price Tag Badge */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-2xl bg-slate-900/90 text-white p-4 shadow-2xl backdrop-blur-md border border-slate-700/50">
                <span className="text-[10px] uppercase tracking-wider text-slate-400">
                  Starting From
                </span>
                <div className="text-xl font-bold text-[#D4AF37]">
                  ₹2,50,000
                </div>
                <span className="text-[10px] text-slate-300">
                  All inclusive packages
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

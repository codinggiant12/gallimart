import React from "react";
import { FiCalendar, FiMapPin, FiSmile } from "react-icons/fi";
import { HiOutlineBuildingLibrary, HiOutlineSparkles } from "react-icons/hi2";

interface StatItem {
  id: string;
  number: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const statsData: StatItem[] = [
  {
    id: "events",
    number: "10,000+",
    label: "Events Planned",
    description:
      "Flawlessly executed grand celebrations and intimate ceremonies.",
    icon: FiCalendar,
  },
  {
    id: "venues",
    number: "500+",
    label: "Verified Venues",
    description:
      "Handpicked royal lawns, luxury banquet halls, and heritage resorts.",
    icon: HiOutlineBuildingLibrary,
  },
  {
    id: "cities",
    number: "50+",
    label: "Cities Covered",
    description:
      "Seamless event planning network across major Indian destinations.",
    icon: FiMapPin,
  },
  {
    id: "customers",
    number: "25,000+",
    label: "Happy Customers",
    description:
      "Trusted by families nationwide to bring dream weddings to life.",
    icon: FiSmile,
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden font-sans">
      {/* Decorative Gold Radial Glows in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-[#FDFBF7]/40 to-transparent blur-3xl opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FDFBF7] px-4 py-1.5 shadow-sm">
            <HiOutlineSparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#AA7C11]">
              Proven Track Record
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Trusted by Thousands Across India
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We connect couples with premier venues and top-tier vendors to
            deliver unforgettable wedding experiences.
          </p>
        </div>

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat) => {
            const IconComponent = stat.icon;

            return (
              <div
                key={stat.id}
                className="group relative flex flex-col justify-between rounded-[16px] bg-gradient-to-b from-[#FDFBF7]/80 to-white p-8 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/40 hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Subtle Card Accent Gradient Line on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div>
                  {/* Icon Container with Gold Glow effect on hover */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50/80 text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-white group-hover:shadow-md transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Stat Number */}
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-[#AA7C11] transition-colors duration-300">
                    {stat.number}
                  </div>

                  {/* Stat Label */}
                  <h3 className="mt-2 text-lg font-semibold text-slate-800">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

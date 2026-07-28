import React, { useState } from "react";
import {
  FiSearch,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  //   GiHeartRing,
  GiBigDiamondRing,
  //   GiGlassClinking,
  GiPaintBrush,
  GiMusicalNotes,
  GiCakeSlice,
  GiPartyPopper,
  GiTie,
} from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";
// import { MdOutlineFlower } from 'react-icons/md';

interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  icon: React.ElementType;
}

const ALL_CATEGORIES: EventCategory[] = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Grand lawns, regal mandaps & luxurious arrangements.",
    count: "2,400+ Venues",
    icon: GiBigDiamondRing,
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "Chic banquet halls & intimate ring ceremony settings.",
    count: "1,200+ Venues",
    icon: GiBigDiamondRing,
  },
  {
    id: "reception",
    title: "Reception",
    subtitle: "Elegant ballrooms & high-capacity dining pavilions.",
    count: "1,800+ Venues",
    icon: GiBigDiamondRing,
  },
  {
    id: "haldi",
    title: "Haldi",
    subtitle: "Vibrant outdoor setups, marigold decor & pool lawns.",
    count: "950+ Venues",
    icon: GiBigDiamondRing,
  },
  {
    id: "mehendi",
    title: "Mehendi",
    subtitle: "Cozy lounge seating, colorful drapes & henna setups.",
    count: "870+ Venues",
    icon: GiPaintBrush,
  },
  /* --- The following are hidden initially --- */
  {
    id: "sangeet",
    title: "Sangeet",
    subtitle: "Dynamic stages, concert lighting & state-of-the-art audio.",
    count: "1,100+ Venues",
    icon: GiMusicalNotes,
  },
  {
    id: "birthday",
    title: "Birthday",
    subtitle: "Themed decorations, private halls & party lawns.",
    count: "3,100+ Venues",
    icon: GiCakeSlice,
  },
  {
    id: "anniversary",
    title: "Anniversary",
    subtitle: "Romantic fine dining, rooftop venues & resorts.",
    count: "1,450+ Venues",
    icon: GiPartyPopper,
  },
  {
    id: "corporate",
    title: "Corporate Event",
    subtitle: "Modern convention centers, AV tech & executive dining.",
    count: "2,100+ Venues",
    icon: GiTie,
  },
];

// Constant for initial display limit (4 or 5 is recommended)
const INITIAL_DISPLAY_LIMIT = 3;

export default function BrowseEventsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredAllCategories = ALL_CATEGORIES.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Determine which categories to show based on search and expansion state
  const categoriesToShow =
    searchQuery.length > 0 || isExpanded
      ? filteredAllCategories
      : ALL_CATEGORIES.slice(0, INITIAL_DISPLAY_LIMIT);

  const showSeeMoreButton =
    !isExpanded &&
    searchQuery.length === 0 &&
    ALL_CATEGORIES.length > INITIAL_DISPLAY_LIMIT;

  return (
    <section className="relative bg-white py-20 lg:py-28 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER & SEARCH BAR AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          {/* Section Title */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FDFBF7] px-4 py-1.5 shadow-sm">
              <HiOutlineSparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#AA7C11]">
                Explore Categories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Browse by Event Type
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Find curated venues, expert vendors, and tailored packages for
              every milestone.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search event type..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.length > 0) setIsExpanded(true); // Auto-expand on search
                }}
                className="w-full rounded-2xl border border-slate-200 bg-[#FDFBF7] py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* 3-COLUMN GRID */}
        {categoriesToShow.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
              {categoriesToShow.map((cat) => {
                const IconComponent = cat.icon;

                return (
                  <div
                    key={cat.id}
                    className="group relative flex flex-col justify-between rounded-[16px] bg-white p-7 border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Subtle Corner Background Glow */}
                    <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-2xl group-hover:bg-[#D4AF37]/20 transition-all duration-300" />

                    <div>
                      {/* Top Row: Icon + Arrow */}
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDFBF7] border border-[#D4AF37]/20 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] group-hover:shadow-md transition-all duration-300">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                          <FiArrowUpRight className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#AA7C11] transition-colors duration-300 relative z-10">
                        {cat.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed relative z-10">
                        {cat.subtitle}
                      </p>
                    </div>

                    {/* Bottom Listing Badge */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#AA7C11] relative z-10">
                      <span>{cat.count}</span>
                      <span className="text-slate-400 font-normal group-hover:text-slate-700 transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SEE MORE / SEE LESS BUTTON */}
            {ALL_CATEGORIES.length > INITIAL_DISPLAY_LIMIT &&
              searchQuery.length === 0 && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-md hover:border-[#D4AF37] hover:bg-[#FDFBF7] hover:text-[#AA7C11] hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Fewer Categories</span>
                        <FiChevronUp className="h-4 w-4 text-[#D4AF37]" />
                      </>
                    ) : (
                      <>
                        <span>
                          See More (
                          {ALL_CATEGORIES.length - INITIAL_DISPLAY_LIMIT}{" "}
                          Categories)
                        </span>
                        <FiChevronDown className="h-4 w-4 text-[#D4AF37]" />
                      </>
                    )}
                  </button>
                </div>
              )}
          </>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#FDFBF7] rounded-[16px] border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium text-base">
              No event category found matching "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-xs font-semibold text-[#D4AF37] underline hover:text-[#AA7C11]"
            >
              Clear search query
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

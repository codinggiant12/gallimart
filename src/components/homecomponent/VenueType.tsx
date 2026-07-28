import React, { useState } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

interface VenueTypeCard {
  id: string;
  image: string;
  title: string;
  description: string;
  count: string;
  ctaText: string;
}

const venueTypes: VenueTypeCard[] = [
  {
    id: "lawn",
    image:
      "https://images.unsplash.com/photo-1591604466107-dd9ba48090c0?q=80&w=600&auto=format&fit=crop",
    title: "Marriage Lawn",
    description:
      "Expansive outdoor settings for grand celebrations and elegant receptions.",
    count: "320+ Venues",
    ctaText: "Explore Lawns",
  },
  {
    id: "hall",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop",
    title: "Banquet Hall",
    description:
      "Sophisticated indoor ballrooms with crystal lighting and flexible setups.",
    count: "450+ Venues",
    ctaText: "Explore Halls",
  },
  {
    id: "resort",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620fba?q=80&w=600&auto=format&fit=crop",
    title: "Resort",
    description:
      "Scenic getaway destinations perfect for unforgettable destination weddings.",
    count: "180+ Venues",
    ctaText: "Explore Resorts",
  },
  {
    id: "hotel",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    title: "Hotel",
    description:
      "Seamless luxury with combined stay, dining, and venue services.",
    count: "290+ Venues",
    ctaText: "Explore Hotels",
  },
  {
    id: "farmhouse",
    image:
      "https://images.unsplash.com/photo-1610312111009-38379f82d906?q=80&w=600&auto=format&fit=crop",
    title: "Farm House",
    description:
      "Rustic charm and private estates for intimate or rustic celebrations.",
    count: "150+ Venues",
    ctaText: "Explore Farms",
  },
  {
    id: "community",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    title: "Community Hall",
    description:
      "Spacious and affordable options for gatherings, festivals, and events.",
    count: "210+ Venues",
    ctaText: "Explore Halls",
  },
];

export default function VenueType() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter based on search input
  const filteredVenues = venueTypes.filter(
    (venue) =>
      venue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="relative bg-white py-20 lg:py-28 font-sans">
      {/* Subtle decorative gold patterned background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#D4AF37]/5 via-white to-white blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-l from-[#D4AF37]/5 via-white to-white blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FDFBF7] px-4 py-1.5 shadow-sm">
            <HiOutlineSparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#AA7C11]">
              Eventora Curated Collections
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            Browse by Venue Type
          </h2>

          <p className="text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Discover the perfect backdrop for your dream celebration from our
            handpicked selection of premier spaces.
          </p>
        </div>

        {/* SEARCH BAR & CONTROLS */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search for lawns, banquet halls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-[#FDFBF7] py-4 pl-12 pr-6 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10 transition-all shadow-sm"
            />
          </div>

          {/* Decorative Navigation Buttons (mimicking reference) */}
          <div className="flex items-center gap-2">
            <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDFBF7] border border-slate-200 text-slate-400 hover:border-[#D4AF37] hover:text-[#AA7C11] hover:bg-white transition-all shadow-sm active:scale-95">
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDFBF7] border border-slate-200 text-slate-400 hover:border-[#D4AF37] hover:text-[#AA7C11] hover:bg-white transition-all shadow-sm active:scale-95">
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* VENUE TYPE GRID */}
        {filteredVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="group relative flex flex-col justify-between rounded-[24px] bg-white p-7 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/40 hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Subtle border accent glow on hover */}
                <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-2xl group-hover:bg-[#D4AF37]/20 transition-all duration-300" />

                <div>
                  {/* Venue Image (Rounded at top) */}
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[20px] shadow-inner">
                    <img
                      src={venue.image}
                      alt={`${venue.title} showcase`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Subtle soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Venue Text Content */}
                  <div className="px-1 space-y-2">
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#AA7C11] transition-colors duration-300">
                      {venue.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {venue.description}
                    </p>
                  </div>
                </div>

                {/* COUNT & CTA BUTTON */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5 px-1">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#AA7C11]">
                      {venue.count}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                      Available
                    </span>
                  </div>

                  {/* Premium Gold CTA Button */}
                  <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:brightness-105 hover:shadow-xl active:scale-[0.98] transition-all">
                    <span>{venue.ctaText}</span>
                    <FiChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FDFBF7] rounded-[24px] border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium text-base">
              No venue types found matching "{searchQuery}".
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

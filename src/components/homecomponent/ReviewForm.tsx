// src/components/ReviewForm.tsx
import React, { useState } from "react";

// Star Selector SVG Component
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`h-7 w-7 transition-colors cursor-pointer ${filled ? "text-[#D4AF37]" : "text-slate-200 hover:text-amber-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting review:", { rating, reviewText });
    alert("Thank you for your feedback! This is a dynamic submission demo.");
  };

  return (
    <div className="w-full mt-24">
      {/* Section Header */}
      <div className="relative text-center mb-16">
        <span className="absolute inset-0 top-1/2 h-px bg-slate-100 z-0"></span>
        <h2 className="relative inline-block bg-[#FDFBF7] px-8 text-3xl font-serif font-bold text-slate-900 tracking-tight z-10">
          Submit Your Review
        </h2>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Row 1: Name and Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nameOrEvent"
              className="text-sm font-semibold text-slate-700"
            >
              Name (or Event Title)
            </label>
            <input
              id="nameOrEvent"
              type="text"
              placeholder="e.g., Sharma Wedding Reception"
              className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
              Overall Rating (1-5 Stars)
            </label>
            <div className="flex items-center gap-1.5 pt-1.5">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i + 1}
                  onClick={() => setRating(i + 1)}
                >
                  <StarIcon filled={i < rating} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Review Text */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="reviewText"
            className="text-sm font-semibold text-slate-700"
          >
            Your Review Text
          </label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={6}
            placeholder="Describe your experience with the venue, comparison tools, and Eventora service..."
            className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition resize-y"
            required
          />
        </div>

        {/* Row 3: Date and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="weddingDate"
              className="text-sm font-semibold text-slate-700"
            >
              Event Date
            </label>
            <input
              id="weddingDate"
              type="date"
              className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-sm font-semibold text-slate-700"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g., Mumbai, Pune, Delhi"
              className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-slate-950 py-4 text-center text-sm font-bold text-white shadow-xl hover:bg-slate-800 transition active:scale-[0.98]"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

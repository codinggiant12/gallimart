// src/components/TestimonialCard.tsx
import React from "react";

// Verification Badge Icon (matching the design)
const VerifiedBadge = () => (
  <div className="absolute bottom-4 right-4 flex items-center justify-center h-6 w-6 rounded-full bg-slate-900 border-2 border-white shadow-lg">
    <svg
      className="h-3 w-3 text-[#D4AF37]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

// Gold Star Icon Component
const GoldStar = () => (
  <svg
    className="h-4 w-4 text-[#D4AF37]"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  city: string;
  eventType: string;
  reviewText: string;
  bookingDate: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarUrl,
  name,
  city,
  eventType,
  reviewText,
  bookingDate,
}) => {
  return (
    <div className="relative rounded-3xl bg-white p-7 border border-slate-100/70 shadow-[0_8px_40px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_12px_60px_rgba(212,175,55,0.08)] hover:-translate-y-1">
      {/* Verification Badge */}
      <VerifiedBadge />

      <div className="flex items-start gap-4 mb-6">
        {/* Avatar with placeholder logic */}
        <img
          src={avatarUrl}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border border-slate-100 bg-slate-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=fdfbf7&color=AA7C11&bold=true`;
          }}
        />
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            {name}
          </h4>
          <p className="text-sm text-slate-500 font-normal">
            ({city}, {eventType})
          </p>
        </div>
      </div>

      {/* 5-Star Rating */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <GoldStar key={i} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
        {reviewText}
      </p>

      {/* Footer / Booking Date */}
      <div className="text-sm text-slate-500 font-normal border-t border-slate-100 pt-5">
        <span className="font-semibold text-slate-700">Booked:</span>{" "}
        {bookingDate}
      </div>
    </div>
  );
};

export default TestimonialCard;

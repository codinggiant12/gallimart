// src/components/EventoraReviewsPage.tsx
import React from "react";
import TestimonialCard from "./TestimonialCard";
import ReviewForm from "./ReviewForm";

// Sample Testimonial Data
const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    eventType: "Wedding",
    avatarUrl: "/path/to/avatar1.jpg", // Replace with actual paths
    bookingDate: "May 15, 2026",
    reviewText:
      "Booking our wedding venue was incredibly easy. The comparison feature saved us so much time.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    eventType: "Wedding",
    avatarUrl: "/path/to/avatar2.jpg",
    bookingDate: "May 15, 2026",
    reviewText:
      "Booking our wedding venue was cash and close comparison event of our promise.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    eventType: "Wedding",
    avatarUrl: "/path/to/avatar3.jpg",
    bookingDate: "May 15, 2026",
    reviewText:
      "Booking our wedding venue was more incredibly easy. It's the comparises.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    eventType: "Wedding",
    avatarUrl: "/path/to/avatar4.jpg",
    bookingDate: "May 15, 2026",
    reviewText: "Booking our wedding venue was saved and comfortable quality.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    eventType: "Wedding",
    avatarUrl: "/path/to/avatar5.jpg",
    bookingDate: "May 15, 2026",
    reviewText:
      "Booking our wedding venue was noise and luxury variety of events.",
  },
];

const EventoraReviewsPage: React.FC = () => {
  return (
    // Solid background matching the creamy/beige design
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* PAGE HEADER */}
        <div className="text-center mb-20 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            Loved by Thousands of Event Planners
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto pt-1">
            Real experiences from people who booked their perfect venue with
            Eventora.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* "SEE ALL REVIEWS" CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-white px-8 py-3 text-sm font-semibold text-[#AA7C11] shadow-lg shadow-[#D4AF37]/10 hover:bg-[#FDFBF7] hover:shadow-xl hover:shadow-[#D4AF37]/15 transition duration-300">
            See All Reviews
          </button>
        </div>

        {/* SUBMIT YOUR REVIEW FORM SECTION */}
        <ReviewForm />
      </div>
    </div>
  );
};

export default EventoraReviewsPage;

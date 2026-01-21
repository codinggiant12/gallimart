import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sunita Sharma",
    location: "Shanti Nagar",
    comment:
      "Galli Mart se rashan mangwana bahut aasaan hai. Atta aur Dal ki quality hamesha fresh hoti hai. 30 min mein delivery ho gayi!",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Amit Verma",
    location: "Model Town",
    comment:
      "Pahle dukan par jaana padta tha, ab ghar baithe sab mil jata hai. Rates bhi market se kam hain. Best service in our area.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Priya Gupta",
    location: "Civil Lines",
    comment:
      "Packaging bahut acchi hai. Oil aur cleaning items alag se pack hokar aate hain. Highly recommended for daily needs!",
    rating: 4,
    date: "5 days ago",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="w-full bg-green-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 italic">
            Log Kya Kehte Hain?
          </h2>
          <p className="text-gray-600 mt-2">
            Pados ke 1000+ parivaron ka bharosa
          </p>
          <div className="flex justify-center mt-4 gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 font-bold text-gray-700">4.9/5 Rating</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-green-100">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171V14H17.0171C15.3603 14 14.0171 12.6569 14.0171 11V7H20.0171V11H18.0171V13H19.0171C20.1217 13 21.0171 13.8954 21.0171 15V21H14.0171ZM3.01711 21L3.01711 18C3.01711 16.8954 3.91255 16 5.01711 16H8.01711V14H6.01711C4.36026 14 3.01711 12.6569 3.01711 11V7H9.01711V11H7.01711V13H8.01711C9.12168 13 10.0171 13.8954 10.0171 15V21H3.01711Z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{rev.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {rev.location} • {rev.date}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Buyer
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

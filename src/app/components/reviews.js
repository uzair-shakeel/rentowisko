"use client";
import React, { useState } from "react";

const reviews = [
  {
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    review:
      "We are very happy with the service from Rentowisko. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "21 July 2022",
    rating: 4,
    imageUrl: "/Avatar1.jpeg", // Update this with the correct path
  },
  {
    name: "Skylar Dias",
    position: "CEO at Amazon",
    review:
      "We are greatly helped by the services of Rentowisko. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "20 July 2022",
    rating: 4,
    imageUrl: "/Avatar2.jpeg", // Update this with the correct path
  },
  {
    name: "John Doe",
    position: "Manager at XYZ",
    review:
      "The service from Rentowisko is exceptional. Great prices and variety of cars. Great prices and variety of cars. Highly recommend.",
    date: "19 July 2022",
    rating: 5,
    imageUrl: "/Avatar1.jpeg", // Update this with the correct path
  },
  {
    name: "Jane Smith",
    position: "Director at ABC Corp",
    review:
      "Rentowisko offers an excellent selection of cars at excellent selection of cars at affordable prices. The service is top-notch.",
    date: "18 July 2022",
    rating: 5,
    imageUrl: "/Avatar2.jpeg", // Update this with the correct path
  },
  // Add more reviews here if needed
];

const Review = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews.slice(0, 4) : reviews.slice(0, 2);

  return (
    <div className=" mx-auto py-8 bg-[#F5F6FB]">
      <div className="max-w-4xl mx-auto px-[5%]">
        <h2 className="text-[18px] md:text-[28px] font-[700] leading-[34px] text-center mb-8">
          Reviews
        </h2>
        {displayedReviews.map((review, index) => (
          <div key={index} className="flex items-start mb-8">
            <img
              src={review.imageUrl}
              alt={review.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-[20px] font-[700] leading-[30px]">
                    {review.name}
                  </h3>
                  <p className="text-[#90A3BF] text-[14px] font-[500]">
                    {review.position}
                  </p>
                </div>
                <div>
                  <span className="text-[#90A3BF] text-[14px] font-[500]">
                    {review.date}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.34 4.11a1 1 0 00.95.69h4.317c.969 0 1.372 1.24.588 1.81l-3.482 2.53a1 1 0 00-.364 1.118l1.34 4.11c.3.921-.755 1.688-1.54 1.118l-3.482-2.53a1 1 0 00-1.176 0l-3.482 2.53c-.784.57-1.838-.197-1.54-1.118l1.34-4.11a1 1 0 00-.364-1.118L2.183 9.537c-.784-.57-.38-1.81.588-1.81h4.317a1 1 0 00.95-.69l1.34-4.11z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <p className="mt-2 text-[#596780] text-[14px] leading-[28px]">
                  {review.review}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            className="text-blue-600"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;

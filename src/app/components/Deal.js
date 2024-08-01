import React from "react";

const deals = [
  {
    name: "Koenigsegg",
    type: "Sport",
    tags: ["Wedding", "Long Term"],
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00/day",
    imageUrl: "/images/koenigsegg.png", // Update this with the correct path
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    tags: ["Long Term"],
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    oldPrice: "$100.00/day",
    price: "$80.00/day",
    imageUrl: "/images/nissan-gtr.png", // Update this with the correct path
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    tags: ["Wedding"],
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00/day",
    imageUrl: "/images/rolls-royce.png", // Update this with the correct path
  },
];

const Deal = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Most popular cars rental deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {deals.map((deal, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img
              src={deal.imageUrl}
              alt={deal.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
            <p className="text-gray-600">{deal.type}</p>
            <div className="flex space-x-2 mb-2">
              {deal.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-gray-700 mb-2">
              <p>Fuel: {deal.fuel}</p>
              <p>Transmission: {deal.transmission}</p>
              <p>Capacity: {deal.capacity}</p>
            </div>
            {deal.oldPrice && (
              <p className="line-through text-gray-500">{deal.oldPrice}</p>
            )}
            <p className="text-xl font-bold text-blue-600 mb-4">{deal.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deal;

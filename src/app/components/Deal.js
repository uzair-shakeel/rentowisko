import React from "react";
import "../globals.css";

const deals = [
  {
    name: "Koenigsegg",
    type: "Sport",
    tags: ["Wedding", "Long Term"],
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00",
    imageUrl: "/car-img1.png", // Update this with the correct path
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    tags: ["Long Term"],
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    oldPrice: "$100.00/day",
    price: "$80.00",
    imageUrl: "/car-img2.png", // Update this with the correct path
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    tags: ["Wedding"],
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00",
    imageUrl: "/car-img3.png", // Update this with the correct path
  },
];

const Deal = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-[13px] md:text-[16px] text-[#8F8C8C] font-[700] leading-[25px] text-center md:mb-3">
        POPULAR RENTAL DEALS
      </h2>
      <h2 className="text-[15px] md:text-[28px] font-[700] leading-[43px] text-center mb-3 md:mb-8 lg:mb-14">
        Most popular cars rental deals
      </h2>
      <div className="py-14 px-[8%]">
        <div className="flex justify-between mb-8">
          <p className="text-[16px] font-[600] text-[#90A3BF] leading-[24px]">
            Popular Cars
          </p>
          <button className="text-[16px] font-[800] text-[#3563E9] leading-[24px] cursor-pointer">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {deals.map((deal, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-[20px] leading-[30px] font-bold mb-2">
                {deal.name}
              </h3>
              <p className="text-gray-600 text-[14px] font-[700] leading-[21px]">
                {deal.type}
              </p>
              <div className="flex py-3 space-x-2 mb-2">
                {deal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className=" text-[#629FFD] cursor-pointer border-2 border-[#629FFD] text-[10px] font-[700] leading-[15px] mr-2 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-40 w-full relative">
                <img
                  src={deal.imageUrl}
                  alt={deal.name}
                  className="w-full h-auto max-h-24  object-cover mb-4"
                />
                <span className="absolute h-full w-full gradient bottom-0"></span>
              </div>
              <div className="flex flex-col justify-between h-24">
                <div className="text-gray-700 mb-2 flex justify-between">
                  <span className="flex gap-2">
                    <img src="/icons/gas-station.svg" /> {deal.fuel}
                  </span>
                  <span className="flex gap-2">
                    <img src="/icons/Car.svg" /> {deal.transmission}
                  </span>
                  <span className="flex gap-2">
                    <img src="/icons/profile-2user.svg" /> {deal.capacity}
                  </span>
                </div>
                <div className=" flex justify-between items-end">
                  <div>
                    <p className="text-xl font-bold text-black ">
                      {deal.price}{" "}
                      <span className="text-[14px] text-[#90A3BF]">/ day</span>
                    </p>
                    {deal.oldPrice && (
                      <p className="line-through text-[14px] text-[#90A3BF] font-[700]">
                        {deal.oldPrice}
                      </p>
                    )}
                  </div>
                  <button className="bg-[#629FFD] text-white px-4 py-2 rounded">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deal;

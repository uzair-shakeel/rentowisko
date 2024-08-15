// components/CarDetails.jsx
"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const CarDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="text-xl font-bold">BMW E46</div>
        <div className="text-blue-600 text-lg font-semibold">120$/Day</div>
      </div>
      <div className="text-gray-500">Hybrid</div>
      <div className="mt-4">
        <img
          src="/details/car1.png"
          alt="Main Car"
          className="w-full h-[376px] object-cover rounded-[15px]"
        />
        <div className="flex justify-between gap-2 mt-12">
          <img
            src="/details/car2.png"
            alt="Car 1"
            className="w-[172px] h-[95px] object-cover rounded-[10px]"
          />
          <img
            src="/details/car3.png"
            alt="Car 2"
            className="w-[172px] h-[95px] object-cover rounded-[10px]"
          />
          <img
            src="/details/car4.png"
            alt="Car 3"
            className="w-[172px] h-[95px] object-cover rounded-[10px]"
          />
          <button className=" h-[95px] flex flex-col items-center justify-center gap-1 text-white p-4 bg-[#629FFD] rounded-[10px]">
            <FaChevronRight size={25} />
            More
          </button>
        </div>
      </div>
      <div className="mt-4">
        <ul className="flex border-b">
          <li className="mr-4">
            <a
              href="#overview"
              className="text-blue-500 border-b-2 border-blue-500 pb-2"
            >
              Overview
            </a>
          </li>
          <li className="mr-4">
            <a href="#rental" className="text-gray-500 pb-2">
              Rental
            </a>
          </li>
          <li>
            <a href="#reviews" className="text-gray-500 pb-2">
              Reviews
            </a>
          </li>
        </ul>
        <div id="overview" className="mt-4">
          <p className="text-gray-600">
            The 718 models were made for the sport of it. They are mid-engined
            roadsters that unite the sporting spirit of the legendary Porsche
            718 with the sports car of tomorrow.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="font-semibold">Car Info</div>
        <div className="flex gap-2 mt-2">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            Electric
          </div>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">510 Hp</div>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            200 km/h
          </div>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            2 Seats
          </div>
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">AC</div>
          <button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            className="p-2 rounded-lg bg-blue-100 text-blue-600"
          >
            {showMoreInfo ? "Less" : "More"}
          </button>
        </div>
        {showMoreInfo && (
          <div className="mt-2">
            <div className="font-semibold">More Information</div>
            <table className="w-full mt-2 text-left">
              <tbody>
                <tr>
                  <td className="font-semibold">Color</td>
                  <td>Silver Metallic</td>
                </tr>
                <tr>
                  <td className="font-semibold">
                    Combined fuel consumption/emissions in 1/100 km
                  </td>
                  <td>11.1</td>
                </tr>
                <tr>
                  <td className="font-semibold">CO2 emissions comb. in g/km</td>
                  <td>251</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;

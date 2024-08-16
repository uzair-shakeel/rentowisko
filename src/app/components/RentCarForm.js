// components/RentCarForm.jsx
"use client";
import React, { useState } from "react";

const RentCarForm = () => {
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const calculateTotal = () => {
    // Logic for calculating the total can be added here
    return 1480; // Placeholder value
  };

  const handleRent = () => {
    alert("Car rented successfully!");
  };

  const handleReset = () => {
    setPickUpDate("");
    setDropOffDate("");
    setPickUpTime("");
    setDropOffTime("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
      <div className="font-[700] text-[24px] md:text-[22px]">Renter</div>
      <div className="flex items-center gap-4">
        <img
          src="/details/boy.png"
          alt="Renter"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-bold">Rabie K. Houssaini</div>
          <div className="text-sm text-gray-500">Renter</div>
        </div>
      </div>
      <div>
        <div className="font-[600] text-[20px]">Car Address</div>
        <div className="text-[#6B6868] mt-3">1231 Street NY 123 USA</div>
        <div className="mt-2">
          <div className="font-[600] text-[20px]">Map Preview</div>
          <img
            src="/details/map.png"
            alt="Map Preview"
            className="w-full h-[340px] pt-4 object-cover rounded-[11px]"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="font-[600] text-[20px]">Rent The Car</div>
        <form className="flex flex-col text-[#6B6868] text-[15px] font-[700] gap-4 mt-2">
          <p>Pick-up</p>
          <div className="flex gap-2 text-[#6B6868] text-[15px] font-[700]">
            <label className="flex flex-col ">
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                className="border rounded-lg p-2"
              />
            </label>
            <input
              type="time"
              value={pickUpTime}
              onChange={(e) => setPickUpTime(e.target.value)}
              className="border rounded-lg p-2"
            />
          </div>
          <p>Drop-Off</p>
          <div className="flex gap-2">
            <label className="flex flex-col">
              <input
                type="date"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
                className="border rounded-lg p-2"
              />
            </label>
            <input
              type="time"
              value={dropOffTime}
              onChange={(e) => setDropOffTime(e.target.value)}
              className="border rounded-lg p-2"
            />
          </div>
        </form>
      </div>
      <div className="mt-4 text-[#6B6868] text-[15px] font-[700]">
        <div className="font-[600] text-[20px] text-black">Billing Summary</div>
        <div className="bg-gray-100 p-6 mt-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <span>Days</span>
            <span>4 × 120 = 480 $</span>
          </div>
          <div className="flex justify-between my-4">
            <span>Fuel Included</span>
            <span>50 × 10$ = 500 $</span>
          </div>
          <div className="flex justify-between my-4 mb-6">
            <span>Insurance</span>
            <span>500 $</span>
          </div>
          <hr className="" />
          <div className="flex justify-between pt-6 font-[700] border-t-3 border-spacing-10 border-dashed border-black text-black text-[20px]">
            <span>Total</span>
            <span>{calculateTotal()} $</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 mt-4">
        <button
          onClick={handleRent}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Rent
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-200 py-2 px-4 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RentCarForm;

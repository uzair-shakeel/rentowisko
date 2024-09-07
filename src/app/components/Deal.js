"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../globals.css";
import Image from "next/image";
import { BaseURL } from "@/utils/config";
import DUmmyImage from "../../../public/car-img3.png";
import Link from "next/link";

// Static fallback deals
const fallbackDeals = [
  {
    model: "Koenigsegg",
    carType: "Sport",
    tags: ["Wedding", "Long Term"],
    gasType: "90L",
    horsepower: "Manual",
    seats: "2 People",
    price1: "$99.00",
    first_image: "/car-img1.png",
  },
  {
    model: "Nissan GT-R",
    carType: "Sport",
    tags: ["Long Term"],
    gasType: "80L",
    horsepower: "Manual",
    seats: "2 People",
    price2: "$100.00/day",
    price1: "$80.00",
    first_image: "/car-img2.png",
  },
  {
    model: "Rolls-Royce",
    carType: "Sport",
    tags: ["Wedding"],
    gasType: "70L",
    horsepower: "Manual",
    seats: "4 People",
    price1: "$96.00",
    first_image: "/car-img3.png",
  },
];

const Deal = () => {
  const [deals, setDeals] = useState(fallbackDeals);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${BaseURL}/all-cars`);
        const data = response.data;
        console.log(response);

        if (response.status == 200) {
          setDeals(data);
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div classmodel="bg-white">
      <div classmodel="max-w-[1270px] mx-auto lg:px-[2%] py-8 lg:py-20">
        <h2 className="text-[15px] md:text-[16px] lg:text-[18px] text-[#8F8C8C] font-[700] leading-[25px] text-center md:mb-3">
          POPULAR RENTAL DEALS
        </h2>
        <h2 className="text-[24px] md:text-[28px] lg:text-[33px] font-[700] leading-[43px] text-center mb-3 md:mb-8 lg:mb-14">
          Most popular cars rental deals
        </h2>
        <div className="py-14 px-[8%]">
          <div className="flex justify-between mb-8">
            <p className="text-[16px] lg:text-[18px] font-[600] text-[#90A3BF] leading-[24px]">
              Popular Cars
            </p>
            <button className="text-[16px] lg:text-[18px] font-[800] text-[#3563E9] leading-[24px] cursor-pointer">
              See All
            </button>
          </div>
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {deals.map((deal, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg">
                <h3 className="text-[20px] lg:text-[23px] leading-[30px] font-bold mb-2">
                  {deal?.model}
                </h3>
                <p className="text-gray-600 text-[14px] lg:text-[16px] font-[700] leading-[21px]">
                  {deal?.carType}
                </p>
                <div className="flex py-3 space-x-2 mb-2">
                  {deal?.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className=" text-[#629FFD] cursor-pointer border-2 border-[#629FFD] text-[10px] lg:text-[12px] font-[700] leading-[15px] mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-40 w-full relative">
                  <img
                    src={"/car-img1.png"}
                    alt={deal?.model}
                    className="w-full h-auto max-h-24  object-cover mb-4"
                  />
                  <span className="absolute h-full w-full gradient bottom-0"></span>
                </div>
                <div className="flex flex-col justify-between h-24">
                  <div className="text-gray-700 mb-2 flex justify-between">
                    <span className="flex gap-2">
                      <img src="/icons/gas-station.svg" />{" "}
                      {deal?.gasType || "90L"}
                    </span>
                    <span className="flex gap-2">
                      <img src="/icons/Car.svg" />{" "}
                      {deal?.horsepower || "manual"}
                    </span>
                    <span className="flex gap-2">
                      <img src="/icons/profile-2user.svg" />{" "}
                      {deal?.seats || "2 seats"}
                    </span>
                  </div>
                  <div className=" flex justify-between items-end">
                    <div>
                      <p className="text-xl font-bold text-black ">
                        ${deal.price1}{" "}
                        <span className="text-[14px] text-[#90A3BF]">
                          / day
                        </span>
                      </p>
                      {deal.price2 && (
                        <p className="line-through text-[14px] text-[#90A3BF] font-[700]">
                          {deal.price2}
                        </p>
                      )}
                    </div>
                    <Link
                      href={"/cars/cardetails"}
                      className="bg-[#629FFD] text-white px-4 py-2 rounded"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Add mobile view as per the original code */}
        </div>
      </div>
    </div>
  );
};

export default Deal;

"use client";
import FilterSidebar from "@/app/components/Filters";
import CarCard from "@/app/components/CarCards";
import Layout from "../components/SidebarLayout";
import "./car.css";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { FaLocationDot, FaChevronDown } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { BaseURL } from "@/utils/config";
import axios from "axios";

export default function HomePage() {
  const [isFilteropen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${BaseURL}/all-cars`);
        const data = response.data;

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
    <Layout>
      <div className="flex justify-end gap-5">
        <aside className="hidden md:flex  left-0 fixed w-1/3 lg:w-1/4">
          <FilterSidebar />
        </aside>
        <main className="w-full md:w-2/3 lg:w-3/4 p-4">
          <Input
            type="email"
            placeholder="10312 Barrows river king street, Melbourne"
            labelPlacement="outside"
            startContent={
              <FaLocationDot
                size={20}
                className=" text-2xl text-[#9FC5FF] pointer-events-none flex-shrink-0"
              />
            }
            className="hidden md:block"
            classNames={{
              //behind the input
              inputWrapper: "bg-white",

              input: [
                "bg-green-500",
                "text-black",
                "placeholder:text-gray-400",
              ],
              // input tag inside innerWrapper
            }}
          />
          <div className="my-6 space-x-3 hidden md:flex w-full">
            {/* Range in KM */}
            <div className="relative w-full">
              <label className="w-full flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src="/distance.png" className="w-5 h-5" />
                </div>
                <select className="appearance-none outline-none w-full bg-white border border-gray-300 text-gray-600 py-3 pl-10 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Range In KM</option>
                  <option>1-10 KM</option>
                  <option>10-20 KM</option>
                  <option>20-50 KM</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <FaChevronDown />
                </div>
              </label>
            </div>

            {/* Type */}
            <div className="relative w-full mx-8">
              <label className="w-full flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src="/car.png" className="w-5 h-5" />
                </div>
                <select className="appearance-none outline-none w-full bg-white border border-gray-300 text-gray-600 py-3 pl-10 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Type</option>
                  <option>Type # 1</option>
                  <option>Type # 2</option>
                  <option>Type # 3</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <FaChevronDown />
                </div>
              </label>
            </div>

            {/* Make */}
            <div className="relative w-full">
              <label className="w-full flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src="/brand.png" className="w-5 h-5" />
                </div>
                <select className="appearance-none outline-none w-full bg-white border border-gray-300 text-gray-600 py-3 pl-10 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Make</option>
                  <option>Make # 1</option>
                  <option>Make # 2</option>
                  <option>Make # 3</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <FaChevronDown />
                </div>
              </label>
            </div>

            {/* Model */}
            <div className="relative w-full">
              <label className="w-full flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src="/model.png" className="w-5 h-5 my-auto" />
                </div>
                <select className="appearance-none outline-none w-full bg-white border border-gray-300 text-gray-600 py-3 pl-10 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer">
                  <option>Model</option>
                  <option>Model # 1</option>
                  <option>Model # 2</option>
                  <option>Model # 3</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <FaChevronDown />
                </div>
              </label>
            </div>
          </div>

          {/* for small devices */}
          <div className="flex items-center justify-between md:hidden">
            <h1 className=" w-full py-4 px-3 text-[#3563E9] lg:hidden uppercase text-[28px] font-[700] leading-[36px]">
              Rentowisko
            </h1>
            <VscSettings
              onClick={() => setIsFilterOpen(!isFilteropen)}
              className="flex h-12 w-12  my-4 p-1 border border-gray-200 rounded"
            />
          </div>
          {/* <div className="relative">
            <aside
              className={`md:hidden w-full duration-300 absolute top-0 z-50 ${
                isFilteropen === false ? "-right-[400px]" : "right-4"
              } `}
            >
              <FilterSidebar />
            </aside>
          </div> */}
          <div className="relative">
            <aside
              className={`md:hidden w-full h-screen duration-300 absolute top-0 z-50  transition-transform transform ${
                isFilteropen ? "-translate-x-[15px]" : "-translate-x-[400px]"
              }`}
            >
              <FilterSidebar />
            </aside>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((car, index) => (
              <CarCard key={index} car={car} index={index} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}

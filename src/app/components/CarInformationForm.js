"use client";
import React from "react";
import { Checkbox, Input, Select, SelectItem } from "@nextui-org/react";

const CarDetailsSection = () => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Car Details</h2>

      <h2 className="text-2xl font-semibold mb-4">General Info</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <Input placeholder="Write your car location" className="w-full mt-1" />
      </div>
      <div className="mb-4 flex items-center">
        <Checkbox id="companyLocation" className="mr-2" />
        <label htmlFor="companyLocation" className="text-gray-700">
          User Current Company Location
        </label>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Car Info</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <Select placeholder="Select your car type" className="w-full mt-1">
          <SelectItem value="">Select your car type</SelectItem>
          {/* Add more options here */}
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div className="mb-4">
          <label className="block text-gray-700">Make</label>
          <Select placeholder="Select your car make" className="w-full mt-1">
            <SelectItem value="">Select your car make</SelectItem>
            {/* Add more options here */}
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Model</label>
          <Select placeholder="Select your car model" className="w-full mt-1">
            <SelectItem value="">Select your car model</SelectItem>
            {/* Add more options here */}
          </Select>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Basic Features</h2>
      <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-1">
        <div className="mb-4">
          <label className="block text-gray-700">Engine Size</label>
          <Select placeholder="Select the engine size" className="w-full mt-1">
            <SelectItem value="">Select the engine size</SelectItem>
            {/* Add more options here */}
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">HP</label>
          <Select placeholder="Select the HP" className="w-full mt-1">
            <SelectItem value="">Select the HP</SelectItem>
            {/* Add more options here */}
          </Select>
        </div>
      </div>

      {/* Fuel Type */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Fuel Type</label>
        <Select placeholder="Select the fuel type" className="w-full">
          <SelectItem value="petrol">Petrol</SelectItem>
          <SelectItem value="diesel">Diesel</SelectItem>
          <SelectItem value="electric">Electric</SelectItem>
          <SelectItem value="hybrid">Hybrid</SelectItem>
        </Select>
      </div>

      {/* Number of Doors */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Number of Doors</label>
        <Select placeholder="Select number of doors" className="w-full">
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </Select>
      </div>

      {/* Number of Seats */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Number of Seats</label>
        <Select placeholder="Select number of seats" className="w-full">
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="7">7</SelectItem>
        </Select>
      </div>

      {/* Additional Features */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-4">Additional Features</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              CAPACITY
            </label>
            <Checkbox>Pet Friendly</Checkbox>
            <Checkbox>AndroidToMac</Checkbox>
            <Checkbox>isHeatedSeat</Checkbox>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              CAPACITY
            </label>
            <Checkbox>isCooledSeat</Checkbox>
            <Checkbox>isNavigation</Checkbox>
            <Checkbox>ParkingSensor</Checkbox>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              CAPACITY
            </label>
            <Checkbox>BackupCamera</Checkbox>
            <Checkbox>AuxCable</Checkbox>
            <Checkbox>Bluetooth</Checkbox>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              CAPACITY
            </label>
            <Checkbox>USBCharger</Checkbox>
            <Checkbox>isVisible</Checkbox>
            <Checkbox>isWedding</Checkbox>
            <Checkbox>isAvailable</Checkbox>
          </div>
        </div>
      </div>

      {/* Car Prices */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Car Prices</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input
            placeholder="Please enter the first price"
            className="border p-2 rounded w-full"
          />
          <Input
            placeholder="Please enter the second price"
            className="border p-2 rounded w-full"
          />
          <Input
            placeholder="Please enter the third price"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md w-full">
        Post Now
      </button>

      {/* Security Notice */}
      <div className="mt-4 text-[#90A3BF] text-center">
        <img
          src="/ic-security-safety.svg"
          className="h-9 w-auto mx-auto my-4 mt-8"
        />
        <p className="text-black text-[16px] font-[600]">
          All your data are safe
        </p>
        <p className="text-[14px] font-[500]">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default CarDetailsSection;

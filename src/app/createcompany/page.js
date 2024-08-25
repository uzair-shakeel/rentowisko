"use client";
import React from "react";
import { Checkbox, Input } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/SidebarLayout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev-arrow`} onClick={onClick}>
      <FaChevronLeft
        size={30}
        className="absolute -top-12 -right-12 text-black"
      />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow text-black bg-black`}
      onClick={onClick}
    >
      <FaChevronRight
        size={30}
        className="absolute -top-12 -left-12 text-black"
      />
    </div>
  );
};

const CreateCompanyPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cars = [
    {
      id: 1,
      name: "CR-V",
      price: "$80.00",
      type: "SUV",
      image: "/car-img1.png",
    },
    {
      id: 2,
      name: "CR-V",
      price: "$80.00",
      type: "SUV",
      image: "/car-img2.png",
    },
    {
      id: 3,
      name: "CR-V",
      price: "$80.00",
      type: "SUV",
      image: "/car-img3.png",
    },
    {
      id: 4,
      name: "CR-V",
      price: "$80.00",
      type: "SUV",
      image: "/car-img1.png",
    },
  ];

  return (
    <Layout>
      <div className="bg-white p-6 m-4 md:m-8 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Create Company
        </h2>

        {/* General Info */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-medium mb-2">General</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Company Name</label>
              <Input placeholder="Enter company name" className="w-full mt-1" />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <Input placeholder="Enter address" className="w-full mt-1" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Description</label>
            <Input
              placeholder="Enter company description"
              className="w-full mt-1"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-medium mb-2">Contact Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <Input placeholder="Enter email" className="w-full mt-1" />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <Input placeholder="Enter phone number" className="w-full mt-1" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Social Link</label>
            <Input placeholder="Enter social link" className="w-full mt-1" />
            <a
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition duration-200 cursor-pointer"
              href="#"
            >
              + Add social link
            </a>
          </div>
        </div>

        {/* Required Info */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-medium mb-2">Required Info</h3>
          <div>
            <label className="block text-gray-700">NIP Number</label>
            <Input placeholder="Enter NIP number" className="w-full mt-1" />
          </div>
        </div>

        {/* Company Inventory */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-medium mb-2">
            Company Inventory
          </h3>
          <div style={{ width: "100%", height: "300px" }}>
            <Slider {...settings} className="space-x-4">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="p-4 border-2 border-blue-400 rounded-[50px] mr-2"
                >
                  <div className="h-[120px] w-full overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="mx-auto h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-lg font-semibold">{car.name}</p>
                        <p className="text-gray-600">{car.type}</p>
                      </div>
                      <p className="text-lg font-semibold">{car.price}</p>
                    </div>
                    <div className="flex justify-end px-8 py-3">
                      <Checkbox className="mt-2" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <p className="mt-4 text-gray-500">
            Need to add more cars?{" "}
            <a href="#" className="text-blue-500 cursor-pointer">
              add new car
            </a>
          </p>
        </div>

        <div className="my-4 text-gray-500">
          <Checkbox>by checking here i will agree with all politics</Checkbox>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded w-full md:w-auto">
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCompanyPage;

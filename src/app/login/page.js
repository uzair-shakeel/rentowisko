"use client";
import React from "react";
import Layout from "../components/SidebarLayout";
import Slider from "react-slick";
import Link from "next/link";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  "/details/carousel.jpeg",
  "/details/carousel.jpeg",
  "/details/carousel.jpeg",
  // Add more images if needed
];

const Login = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-[500px] md:flex-row">
        {/* Left Side - Login Form */}
        <h1 className="md:hidden bg-white w-full py-4 px-3 text-[#3563E9] lg:hidden uppercase text-[34px] font-[700] leading-[36px]">
          Rentowisko
        </h1>
        <div className="flex flex-col justify-center w-full p-8 bg-white md:w-1/2">
          <h2 className="mb-8 text-2xl font-semibold text-gray-800 md:text-3xl">
            Login
          </h2>

          <div className="mt-6">
            <label
              className="block mb-2 text-sm text-gray-600"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-md focus:border-blue-500 focus:bg-white focus:outline-none"
              type="text"
              id="username"
              placeholder="Your name"
            />
          </div>

          <div className="mt-6">
            <label
              className="block mb-2 text-sm text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-md focus:border-blue-500 focus:bg-white focus:outline-none"
              type="password"
              id="password"
              placeholder="Your password"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <a href="#" className="text-sm text-blue-500">
              Forgot Password?
            </a>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4 mr-2 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:outline-none"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Login
          </button>

          <div className="flex items-center justify-center mt-6">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href={"/signup"} className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-6 gap-4 md:gap-0 md:space-x-2">
            <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Facebook
            </button>
            <button className="w-full px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Google
            </button>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative hidden bg-white px-8 py-3  md:block md:w-1/2">
          <Slider {...settings}>
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className="w-full h-[500px] overflow-hidden rounded-3xl"
              >
                <img
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

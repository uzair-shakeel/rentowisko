// components/CarDetails.jsx
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
("../globals.css");
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImageSlider from "./ImageSlider";
import { RxCross2 } from "react-icons/rx";





const carInfoData = [
  { id: 1, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 2, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 3, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 4, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 5, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 6, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 7, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 8, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 9, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 10, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 11, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 12, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 13, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
  { id: 14, src: "/electric.svg", alt: "Electric", text: "Electric Car" },
];

const CarDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const [selectedImage, setSelectedImage] = useState("/details/car1.png");
  const [activeTab, setActiveTab] = useState("overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [showMore, setShowMore] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultBoxes = {
    mobile: 5,
    desktop: 7,
  };

  const boxesToShow = showMore
    ? carInfoData.length
    : screenWidth >= 768
      ? defaultBoxes.desktop
      : defaultBoxes.mobile;

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const carImages = [
    "/details/car1.png",
    "/details/car2.png",
    "/details/car3.png",
    "/details/car4.png",
  ];


  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const [showSlider, setShowSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/details/car1.png', '/details/car2.png', '/details/car3.png', '/details/car4.png'];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowSlider(true);
  };


  return (
    <>
      <div>
        <div className="md:py-[30px] sm:py-[53px] bg-white rounded-[15px] shadow-lg flex flex-col gap-4">
          <div className="md:flex hidden items-center justify-between w-full px-[30px]">
            <div>
              <h2 className="text-[#131111] text-[28px] leading-[42px] font-bold font-inter">
                BMW E46
              </h2>
              <h4 className="text-[#8F8C8C] text-[20px] font-medium font-inter leading-[30.5px]">
                Hybrid
              </h4>
            </div>
            <h2 className="text-[#629FFD] text-[28px] leading-[42px] font-bold font-inter">
              120$/Day
            </h2>
          </div>


          <div className="max-w-[920px] mx-auto w-full px-5 my-[20px] hidden md:block">
            <Image
              src={selectedImage}
              alt="Main Car"
              width={900}
              height={376}
              className={`w-full rounded-[15px]`}
            />
            <div className="flex justify-between gap-2 mt-12">
              <img
                src="/details/car1.png"
                alt="Car 0"
                onClick={() => setSelectedImage("/details/car1.png")}
                className={`md:w-[172px] md:h-[95px] w-[96px] h-[64px] cursor-pointer object-cover rounded-[10px]  ${
                  selectedImage === "/details/car1.png" &&
                  "border-3 border-blue-500 p-[1px]"
                }`}
              />
              <img
                src="/details/car2.png"
                alt="Car 1"
                onClick={() => setSelectedImage("/details/car2.png")}
                className={`md:w-[172px] md:h-[95px] w-[96px] h-[64px] cursor-pointer object-cover rounded-[10px]  ${
                  selectedImage === "/details/car2.png" &&
                  "border-3 border-blue-500 p-[1px]"
                }`}
              />
              <img
                src="/details/car3.png"
                alt="Car 2"
                onClick={() => setSelectedImage("/details/car3.png")}
                className={`md:w-[172px] md:h-[95px] w-[96px] h-[64px] cursor-pointer object-cover rounded-[10px]   ${
                  selectedImage === "/details/car3.png" &&
                  "border-3 border-blue-500 p-[1px]"
                }`}
              />
              <img
                src="/details/car4.png"
                alt="Car 3"
                onClick={() => setSelectedImage("/details/car4.png")}
                className={`md:w-[172px] md:h-[95px] w-[96px] h-[64px] cursor-pointer object-cover rounded-[10px]  ${
                  selectedImage === "/details/car.png" &&
                  "border-3 border-blue-500 p-[1px]"
                }`}
              />
              <button className="h-[92px] w-[58px] md:flex hidden flex-col items-center justify-center gap-1.5 text-white bg-[#629FFD] rounded-[7px] text-[11px] leading-[16px] font-bold font-inter uppercase">
                <FaChevronRight size={25} />
                More
              </button>
            </div>
          </div>


          {/* Mobile */}
          <div className="md:hidden no-scrollbar p-1 flex overflow-x-auto space-x-6 max-w-[920px] mx-auto w-full h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full h-[200px] flex-shrink-0 overflow-hidden"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={src}
                  alt={`Car ${index + 1}`}
                  className="w-full h-full object-cover rounded-[15px] cursor-pointer"
                />
              </div>
            ))}

            {showSlider && (
              <div className="space-0 fixed top-0 left-0 bottom-0 right-0 p-2 min-w-full h-full z-50  bg-black bg-opacity-80">
                <button
                  onClick={() => setShowSlider(false)}
                  className="absolute top-4 text-white z-50 text-[30px] right-0"
                >
                  <RxCross2 />
                </button>
                <div className="flex items-center justify-center h-full">
                  <ImageSlider images={images} initialIndex={currentIndex} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 border-2 border-[#6B686821] w-full rounded-[15px] bg-white px-5 sm:px-9 pt-[24px] pb-7">
          {/* Tab */}
          <div className="flex items-center md:gap-12 px-2 justify-between md:justify-normal">
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter px-1 sm:px-2 ${activeTab === "overview"
                ? "text-[#629FFD] font-bold border-b-4 border-[#629FFD]"
                : "text-[#6B6868] font-medium"
                }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter  px-1 sm:px-2 ${activeTab === "rental"
                ? "text-[#629FFD] font-bold border-b-4 border-[#629FFD]"
                : "text-[#6B6868] font-medium"
                }`}
              onClick={() => setActiveTab("rental")}
            >
              Rental
            </button>
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter  px-1 sm:px-2 ${activeTab === "reviews"
                ? "text-[#629FFD] font-bold border-b-4 border-[#629FFD]"
                : "text-[#6B6868] font-medium"
                }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* Tabs Content */}
          <div className="mt-8">
            {activeTab === "overview" && (
              <div>
                <p className="text-[#6B6868] text-[15px] sm:text-[20px] sm:leading-[30px] font-inter ">
                  The 718 models were made for the sport of it. They are
                  mid-engined roadsters that unite the sporting spirit of the
                  legendary Porsche 718 with the sports car of tomorrow.
                  <span
                    ref={contentRef}
                    className={`block transition-max-height duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-40" : "max-h-0"
                      }`}
                  >
                    This is the additional text that is shown when the user
                    clicks "Read More." You can add more detailed information
                    here about the car's features, history, or anything else
                    relevant.
                  </span>
                </p>
                <button
                  className="text-[#9FC5FF] text-[20px] leading-[30px] font-inter font-medium sm:block hidden"
                  onClick={toggleReadMore}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            )}
            {activeTab === "rental" && (
              <div>
                <p className="text-[15px] sm:text-[20px]">
                  Rental details will be displayed here.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="text-[15px] sm:text-[20px]">
                  Reviews will be displayed here.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 border-2 border-[#6B686821] w-full rounded-[15px] bg-white px-5 sm:px-9 pt-[24px] pb-3.5">
          <h3 className="text-[#131111] text-[20px] leading-[30px] font-bold font-inter">
            Car Info
          </h3>
          <div
            className={`mt-5 grid grid-cols-5 md:grid-cols-7 gap-4 justify-between transition-max-h duration-300`}
          >
            {carInfoData.slice(0, boxesToShow).map((item) => (
              <div key={item.id} className="flex items-center flex-col gap-2">
                <div className="w-full sm:h-[70px]  h-[90px] rounded-lg bg-[#9FC5FF] flex items-center justify-center text-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={50}
                    height={50}
                    className="sm:w-[50px] sm:h-[50px] w-[25px] h-[25px]"
                  />
                </div>
                <p className="text-xs mt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-[30px]">
            <button
              className="flex items-center gap-3 text-[#131111] text-[20px] font-normal font-inter leading-[30px]"
              onClick={handleToggle}
            >
              <Image
                src="/angle-double-right.svg"
                alt="angle-double-right"
                width={18}
                height={18}
              />
              {showMore ? "Less" : "More"}
            </button>
          </div>
        </div>

        <div className="mt-7 border-2 border-[#6B686821] w-full rounded-[15px] bg-white px-5 sm:px-9 pt-[34px] pb-10 sm:pb-20">
          <div className="text-[#131111] text-[22px] leading-[30px] font-inter font-bold mb-10">
            More Information
          </div>
          <table className="w-full mt-2 text-left">
            <tbody>
              <tr className="border-b border-[#6B686821]">
                <td className="text-[#131111]  text-[15px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter">
                  Color
                </td>
                <td className="text-right text-[#131111]  text-[15px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter pb-1.5 text-nowrap">
                  Silver Metallic
                </td>
              </tr>
              <tr className="border-b border-[#6B686821]">
                <td className="text-[#131111] text-[15px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter">
                  Combined fuel consumption/emissions in 1/100 km
                </td>
                <td className="text-right text-[#131111]  text-[17px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter py-1.5">
                  11.1
                </td>
              </tr>
              <tr className="border-b border-[#6B686821]">
                <td className="text-[#131111]  text-[15px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter">
                  CO2 emissions comb. in g/km
                </td>
                <td className="text-right text-[#131111]  text-[15px] sm:text-[20px] sm:leading-[30px] font-semibold font-inter py-1.5">
                  251
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Car"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )} */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-[97%] md:w-[70%] max-w-3xl bg-white rounded-lg p-1">
            <button
              className="absolute top-3 right-3 text-white "
              onClick={handleCloseModal}
            >
              <FaTimes size={20} />
            </button>
            <div className="flex items-center justify-between">
              <button
                className="absolute  bottom-2 left-2 text-white "
                onClick={handlePreviousImage}
              >
                <FaChevronLeft size={30} />
              </button>
              <Image
                src={carImages[selectedImageIndex]}
                alt={`Car ${selectedImageIndex + 1}`}
                width={900}
                height={600}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute bottom-2 right-2 text-white"
                onClick={handleNextImage}
              >
                <FaChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetails;

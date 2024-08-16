// components/CarDetails.jsx
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
("../globals.css");

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
];

const CarDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
    mobile: 6,
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

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <div className="py-[30px] sm:py-[53px] bg-white rounded-[15px] shadow-lg flex flex-col gap-4">
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
              src="/car-s.svg"
              alt="Main Car"
              width={900}
              height={376}
              className="w-full rounded-[15px]"
            />
            <div className="flex justify-between gap-2 mt-12">
              <img
                src="/details/car2.png"
                alt="Car 1"
                className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
              />
              <img
                src="/details/car3.png"
                alt="Car 2"
                className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
              />
              <img
                src="/details/car4.png"
                alt="Car 3"
                className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
              />
              <button className="h-[92px] w-[58px] md:flex hidden flex-col items-center justify-center gap-1.5 text-white bg-[#629FFD] rounded-[7px] text-[11px] leading-[16px] font-bold font-inter uppercase">
                <FaChevronRight size={25} />
                More
              </button>
            </div>
          </div>
          <div className="md:hidden no-scrollbar flex overflow-x-scroll space-x-6 max-w-[920px] mx-auto w-full px-5 my-[20px]">
            <Image
              src="/car-s.svg"
              alt="Main Car"
              width={900}
              height={376}
              className="w-full rounded-[15px]"
              onClick={() => handleImageClick("/car-s.svg")}
            />
            <Image
              src="/details/car2.png"
              alt="Main Car"
              width={900}
              height={376}
              className="w-full rounded-[15px]"
              onClick={() => handleImageClick("/details/car2.png")}
            />
            <Image
              src="/details/car3.png"
              alt="Main Car"
              width={900}
              height={376}
              className="w-full rounded-[15px]"
              onClick={() => handleImageClick("/details/car3.png")}
            />
            <Image
              src="/details/car4.png"
              alt="Main Car"
              width={900}
              height={376}
              className="w-full rounded-[15px]"
              onClick={() => handleImageClick("/details/car4.png")}
            />
            {/* <div className="flex justify-between gap-2 mt-12">
            <img
              src="/details/car2.png"
              alt="Car 1"
              className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
            />
            <img
              src="/details/car3.png"
              alt="Car 2"
              className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
            />
            <img
              src="/details/car4.png"
              alt="Car 3"
              className="md:w-[172px] md:h-[95px] w-[96px] h-[64px] object-cover rounded-[10px]"
            />
            <button className="h-[92px] w-[58px] md:flex hidden flex-col items-center justify-center gap-1.5 text-white bg-[#629FFD] rounded-[7px] text-[11px] leading-[16px] font-bold font-inter uppercase">
              <FaChevronRight size={25} />
              More
            </button>
          </div> */}
          </div>
        </div>

        <div className="mt-7 border-2 border-[#6B686821] w-full rounded-[15px] bg-white px-5 sm:px-9 pt-[24px] pb-7">
          {/* Tab */}
          <div className="flex items-center md:gap-12 px-2 justify-between md:justify-normal">
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter px-1 sm:px-2 ${
                activeTab === "overview"
                  ? "text-[#629FFD] font-bold border-b-4 border-[#629FFD]"
                  : "text-[#6B6868] font-medium"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter  px-1 sm:px-2 ${
                activeTab === "rental"
                  ? "text-[#629FFD] font-bold border-b-4 border-[#629FFD]"
                  : "text-[#6B6868] font-medium"
              }`}
              onClick={() => setActiveTab("rental")}
            >
              Rental
            </button>
            <button
              className={`text-[17px] sm:text-[20px] leading-[30px] font-inter  px-1 sm:px-2 ${
                activeTab === "reviews"
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
                    className={`block transition-max-height duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-40" : "max-h-0"
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
            className={`mt-5 flex flex-wrap gap-4 justify-between transition-max-h duration-300`}
          >
            {carInfoData.slice(0, boxesToShow).map((item) => (
              <div key={item.id} className="flex items-center flex-col gap-2">
                <div className="sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-lg bg-[#9FC5FF] flex items-center justify-center text-center">
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
      {isModalOpen && (
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
      )}
    </>
  );
};

export default CarDetails;

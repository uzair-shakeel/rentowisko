"use client";
import React, { useState } from "react";
import { FaHome, FaCar, FaUserCircle, FaCog } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import Link from "next/link";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white text-black  flex-col py-4 lg:flex hidden shadow-lg ${
          isSidebarOpen ? "w-[200px] pl-7" : "w-[50px]"
        } transition-width duration-300`}
      >
        <div
          className="flex items-center justify-center mb-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <RiMenuFill className="text-2xl text-[#629FFD]" />
        </div>
        <nav className="flex-1 flex flex-col items-center space-y-4">
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaHome className="text-xl text-[#629FFD]" />
            {isSidebarOpen && <span className="ml-4">Dashboard</span>}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaCar className="text-xl text-[#629FFD]" />
            {isSidebarOpen && <span className="ml-4">Car Rent</span>}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaUserCircle className="text-xl text-[#629FFD]" />
            {isSidebarOpen && <span className="ml-4">Profile</span>}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaCog className="text-xl text-[#629FFD]" />
            {isSidebarOpen && <span className="ml-4">Settings</span>}
          </a>
        </nav>
      </aside>
      {/* Sidebar */}
      <aside
        className={`bg-white text-black  flex-col py-4 flex lg:hidden shadow-lg ${
          isSidebarOpen ? "w-[200px] pl-7" : "w-[0px]"
        } transition-width duration-300 relative`}
      >
        <div
          className="flex items-center justify-center mb-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <RiMenuFill className="absolute -right-14 top-3 text-3xl text-[#629FFD]" />
        </div>
        <nav className="flex-1 flex flex-col items-center space-y-4">
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            {isSidebarOpen && (
              <span className="md:ml-4 flex gap-3">
                <FaHome className="text-xl text-[#629FFD]" />
                Dashboard
              </span>
            )}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            {isSidebarOpen && (
              <span className="md:ml-4 flex gap-3">
                <FaCar className="text-xl text-[#629FFD]" />
                Car Rent
              </span>
            )}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            {isSidebarOpen && (
              <Link href="/profile" className="md:ml-4 flex gap-3">
                <FaUserCircle className="text-xl text-[#629FFD]" />
                Profile
              </Link>
            )}
          </a>
          <a
            href="#"
            className={`flex items-center w-full p-2 hover:bg-gray-200 ${
              isSidebarOpen ? "justify-start" : "justify-center"
            }`}
          >
            {isSidebarOpen && (
              <span className="md:ml-4 flex gap-3">
                <FaCog className="text-xl text-[#629FFD]" />
                Settings
              </span>
            )}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white flex items-center shadow-md justify-end px-4">
          <div className="flex items-center space-x-4">
            <button className=" border border-[#C3D4E9]/40 text-[#3D5278] rounded-full w-[44px] h-[44px] hidden md:flex items-center justify-center">
              <FaHeart size={20} />
            </button>
            <button className="border border-[#C3D4E9]/40 text-[#3D5278] rounded-full w-[44px] h-[44px] hidden md:flex items-center justify-center">
              <IoIosNotifications size={23} />
            </button>
            <button className="border border-[#C3D4E9]/40 text-[#3D5278] rounded-full w-[44px] h-[44px] hidden md:flex items-center justify-center">
              <IoMdSettings size={23} />
            </button>
            <div className="border border-[#C3D4E9]/40 overflow-hidden rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <img src="/Avatar1.jpeg" className="object-cover w-full h-full" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

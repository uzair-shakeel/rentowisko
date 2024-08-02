"use client";
import React, { useState } from "react";
import { FaHome, FaCar, FaUserCircle, FaCog } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";

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
          isSidebarOpen ? "w-[200px] pl-7" : "w-[80px]"
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white flex items-center shadow-md justify-end px-4">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded">
              Profile
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

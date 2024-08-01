"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-64 h-full px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <button
        className="text-gray-500 focus:outline-none lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center justify-center mt-8">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.293a1 1 0 00-1.414 0L9 12.586V7a1 1 0 10-2 0v5.586L5.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                Rentowisko
              </span>
            </a>
          </Link>
        </div>

        <nav className="mt-10">
          <Link href="/" legacyBehavior>
            <a className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                ></path>
              </svg>
              <span className="mx-4 font-medium">Home</span>
            </a>
          </Link>

          <Link href="/search" legacyBehavior>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                ></path>
              </svg>
              <span className="mx-4 font-medium">Search</span>
            </a>
          </Link>

          <Link href="/favorites" legacyBehavior>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                ></path>
              </svg>
              <span className="mx-4 font-medium">Favorites</span>
            </a>
          </Link>

          <Link href="/profile" legacyBehavior>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
                ></path>
              </svg>
              <span className="mx-4 font-medium">Profile</span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

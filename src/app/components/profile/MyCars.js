"use client";
import { HiDotsVertical } from "react-icons/hi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const carData = [
  {
    id: 1,
    imageUrl: "/car-img1.png",
    name: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
  },
  {
    id: 2,
    imageUrl: "/car-img2.png",
    name: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
  },
  {
    id: 3,
    imageUrl: "/car-img3.png",
    name: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
  },
  {
    id: 4,
    imageUrl: "/car-img1.png",
    name: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
  },
  // Add more car objects here
];

const MyCars = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Cars</h2>
        <a href="#" className="text-blue-500">
          View All
        </a>
      </div>
      <ul>
        {carData.map((car) => (
          <li key={car.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-20 h-14 overflow-hidden rounded-lg mr-4">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">{car.date}</span>
              <div className="relative">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="none">
                      <HiDotsVertical size={25} />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key={`edit-${car.id}`}>Edit Car</DropdownItem>
                    <DropdownItem
                      key={`delete-${car.id}`}
                      className="text-danger"
                      color="danger"
                    >
                      Delete Car
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCars;

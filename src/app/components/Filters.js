"use client";
import { Accordion, AccordionItem, Slider } from "@nextui-org/react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FilterSidebar = () => {
  const [carType, setCarType] = useState("Coupes");
  const [seatingCapacity, setSeatingCapacity] = useState("2-5 passengers");
  const [rentingType, setRentingType] = useState("1-6 days");
  const [priceRange, setPriceRange] = useState(0.4);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="w-full p-4 m-4 bg-white rounded-xl shadow-md">
      <Accordion>
        {/* Car Type Filter */}
        <AccordionItem
          key="carType"
          aria-label="Car Type"
          indicator={<FaChevronUp />}
          title="Car Type"
          className="font-semibold text-lg"
        >
          <div className="mb-6 font-normal text-medium">
            <ul>
              {[
                "Super Cars",
                "SUVs",
                "Coupes",
                "Convertibles",
                "Luxury Sedans",
                "Hatchbacks",
              ].map((type) => (
                <li key={type}>
                  <label className="inline-flex items-center my-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6"
                      checked={carType === type}
                      onChange={() => setCarType(type)}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        {/* Seating Capacity Filter */}
        <AccordionItem
          key="seatingCapacity"
          indicator={<FaChevronUp />}
          aria-label="Seating Capacity"
          title="Seating Capacity"
          className="font-semibold text-lg"
        >
          <div className="mb-6 font-normal text-medium">
            <ul>
              {["2-5 passengers", "6 or more passengers"].map((capacity) => (
                <li key={capacity}>
                  <label className="inline-flex items-center my-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 "
                      checked={seatingCapacity === capacity}
                      onChange={() => setSeatingCapacity(capacity)}
                    />
                    <span className="ml-2">{capacity}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        {/* Renting Type Filter */}
        <AccordionItem
          key="rentingType"
          indicator={<FaChevronUp />}
          aria-label="Renting Type"
          title="Renting Type"
          className="font-semibold text-lg"
        >
          <div className="mb-6 font-normal text-medium">
            <ul>
              {["1-6 days", "1-3 weeks", "1+ months"].map((type) => (
                <li key={type}>
                  <label className="inline-flex items-center my-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6"
                      checked={rentingType === type}
                      onChange={() => setRentingType(type)}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        {/* Price Range Filter */}
        <AccordionItem
          key="priceRange"
          indicator={<FaChevronUp />}
          aria-label="Price Range"
          title="Price Range"
          className="font-semibold text-lg"
        >
          <div className="mb-6 font-normal text-medium">
            <Slider
              label=""
              step={1}
              maxValue={100}
              minValue={0}
              value={priceRange}
              onChange={handleSliderChange}
              className="max-w-md"
            />
            <div className="text-left">max. {priceRange * 200}.00 $</div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="brand"
          aria-label="Brand"
          indicator={<FaChevronUp />}
          title="Brand"
          className="font-semibold text-lg"
        >
          <div className="mb-6 font-normal text-medium">
            <ul>
              {[
                "Super Cars",
                "SUVs",
                "Coupes",
                "Convertibles",
                "Luxury Sedans",
                "Hatchbacks",
              ].map((type) => (
                <li key={type}>
                  <label className="inline-flex items-center my-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6"
                      checked={carType === type}
                      onChange={() => setCarType(type)}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;

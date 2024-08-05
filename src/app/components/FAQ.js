"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="py-12 px-[5%] md:px-[9%] lg:px-[14%] ">
      <h2 className="text-[24px] md:text-[28px] text-center font-[700] leading-[43px] py-5">
        Frequently Asked Questions
      </h2>
      <Accordion variant="light">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="How to look for cars for rent?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Can I put my car on rent?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="How to rent a car through Rentowisko?"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;

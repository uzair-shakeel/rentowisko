import CarDetails from "@/app/components/CarDetails";
import RentCarForm from "@/app/components/RentCarForm";
import Layout from "@/app/components/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <Layout className="container mx-auto p-4">
      <div className="flex gap-8 p-4 md:p-8 lg:flex-row flex-col">
        <div className="lg:w-[70%] w-full">
          <CarDetails />
        </div>
        <div className="lg:w-[30%] w-full">
          <RentCarForm />
        </div>
      </div>
    </Layout>
  );
};

export default page;

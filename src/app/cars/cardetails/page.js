import CarDetails from "@/app/components/CarDetails";
import RentCarForm from "@/app/components/RentCarForm";
import Layout from "@/app/components/SidebarLayout";
import React from "react";

const page = () => {
  return (
    <Layout className="container mx-auto p-4">
      <div className="flex gap-8 p-8">
        <div className="w-[70%]">
          <CarDetails />
        </div>
        <div className="w-[30%]">
          <RentCarForm />
        </div>
      </div>
    </Layout>
  );
};

export default page;

// components/PostCar.jsx

import React from "react";
import CarInformationForm from "../components/CarInformationForm";
import ImageUploadSection from "../components/ImageUpload";
import Layout from "../components/SidebarLayout";

const PostCar = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 p-8 bg-gray-100 min-h-screen">
        {/* Left Section: Car Information Form */}
        <div className="w-full md:w-2/3 mr-8 order-2 md:order-1">
          <CarInformationForm />
        </div>

        {/* Right Section: Image Upload */}
        <div className="w-full md:w-1/3 order-1 md:order-2">
          <ImageUploadSection />
        </div>
      </div>
    </Layout>
  );
};

export default PostCar;

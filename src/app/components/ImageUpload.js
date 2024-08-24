// components/ImageUploadSection.jsx
"use client";
import React, { useState } from "react";

const ImageUploadSection = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
    if (!selectedImage && newImages.length > 0) {
      setSelectedImage(newImages[0]);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Picture</h2>
      <p className="text-gray-500 mb-4">
        Please take some high quality pictures from different sides
      </p>

      {/* Image Preview */}
      {selectedImage && (
        <div className="mb-4">
          <img
            src={selectedImage}
            alt="Selected Preview"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Small Image Thumbnails */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className={`w-full h-20 ${
              selectedImage === image ? "border-2 border-blue-500" : "border"
            } rounded-lg overflow-hidden cursor-pointer`}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded shadow-md"
      >
        Upload Images
      </label>
    </div>
  );
};

export default ImageUploadSection;

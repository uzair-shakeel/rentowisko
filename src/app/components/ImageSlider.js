import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageSlider = ({ images, initialIndex }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={initialIndex}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="space-x-0 w-full h-full object-cover rounded-[15px]" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;

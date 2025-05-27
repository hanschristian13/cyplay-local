/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider1 from '@/public/assets/slider/1.webp';
import Slider2 from '@/public/assets/slider/2.webp';
import Slider3 from '@/public/assets/slider/3.webp';
import Slider4 from '@/public/assets/slider/4.webp';
import Slider5 from '@/public/assets/slider/5.webp';
import Slider6 from '@/public/assets/slider/6.webp';
import Slider7 from '@/public/assets/slider/7.webp';
const Carousel = () => {
  const images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="relative w-full  overflow-x-hidden isolation"
      onTouchStart={(e) => {
        const touchStartX = e.touches[0].clientX;
        e.currentTarget.dataset.touchStartX = touchStartX.toString();
      }}
      onTouchEnd={(e) => {
        const touchStartX = parseFloat(
          e.currentTarget.dataset.touchStartX || '0'
        );
        const touchEndX = e.changedTouches[0].clientX;
        const touchDifference = touchStartX - touchEndX;

        if (touchDifference > 50) {
          // Swipe left
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (touchDifference < -50) {
          // Swipe right
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        }
      }}
    >
      <h3 className=" absolute top-[30px] text-[20px] text-[#4D4D4D] z-0">
        COMING <strong className="text-[#FBA10F]">SOON</strong>
      </h3>
      <div
        className="flex transition-transform duration-500 z-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image}
              alt={`Slider ${index + 1}`}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={` rounded-full ${
              currentIndex === index
                ? 'bg-[#FFFFFF] w-4 h-[5px]'
                : 'bg-[#00000080] w-[5px] h-[5px]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

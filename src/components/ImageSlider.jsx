import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxComponentInstance, RxDotFilled } from "react-icons/rx";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80",
      title: "Lobster",
    },
    {
      url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Sushi",
    },
    {
      url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Pasta",
    },
    {
      url: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Salmon",
    },
  ];
  const [currentSlide, setCurentSlide] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurentSlide(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurentSlide(newSlide);
  };
  const selectSlide = (value) => {
    setCurentSlide(value);
  };

  return (
    <div className="group relative max-w-[1400px] w-full h-[500px] mx-auto my-16 px-4">
      <div
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      />
      {/* Left arrow */}
      <div
        onClick={prevSlide}
        className="text-white group-hover:bg-black/20 absolute rounded-full p-1 top-[50%] translate-x-0 translate-y-0 left-8 cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right arrow */}
      <div
        onClick={nextSlide}
        className="text-white group-hover:bg-black/20 absolute rounded-full p-1 top-[50%] translate-x-0 translate-y-0 right-8 cursor-pointer "
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex justify-center top-20">
        {slides.map((slide, index) => (
          <div
            className={`text-slate-500 cursor-pointer  ${
              currentSlide === index && "scale-125 text-slate-700" 
            }`}
            key={index}
          >
            <RxDotFilled size={25} onClick={() => selectSlide(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;

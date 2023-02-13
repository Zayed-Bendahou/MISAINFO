import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const SlideShow = () => {
  const slides = [
    {
      url: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/525610/1f1f63bf9bdcb8652b233cd7cdb56063198119a9.jpg',
    },
    { url: 'https://dev.gsitranslations.com/img/science2_bg.jpeg' },
    {
      url: 'https://cdnn1.lt.sputniknews.com/img/48/73/487330_0:100:1921:1180_1920x0_80_0_0_f12b1bf0b089f3af839166878213bda2.jpg',
    },
    {
      url: 'https://dev.gsitranslations.com/img/science2_bg.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastslide = currentIndex === slides.length - 1;
    const newIndex = isLastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="max-w-[1500px] h-[740px] w-full m-auto py-14 px-0 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex mt-3 justify-center ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

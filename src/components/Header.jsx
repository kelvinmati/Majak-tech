import React, { useState, useRef } from "react";

// import header_img from "../images/header-bg.jpg";
import svg from "../images/5954263_21770-removebg-preview.png";
import robot from "../images/robot-removebg-preview.png";
import Ai from "../images/Ai-removebg-preview.png";

// import test from "../images/ceo-removebg-preview.png";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Navbar from "./Navbar";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);
const Header = () => {
  const swiperRef = useRef(null);
  return (
    <section className=" w-full   text-white   bg-black">
      <Navbar />
      <div className="w-mobile md:w-container_width mx-auto ">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
        >
          <div onClick={() => swiperRef.current.swiper.slidePrev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10  p-2 bg-white text-black hover:bg-gray-300  rounded-full cursor-pointer absolute top-[43%] z-50 left-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div onClick={() => swiperRef.current.swiper.slideNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 p-2 bg-white text-black hover:bg-gray-300  rounded-full cursor-pointer absolute top-[43%] z-50 right-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          {sliders.map((slider, index) => {
            return (
              <SwiperSlide
                key={index}
                className="  py-4 grid sm:grid-cols-2  gap-9 items-center"
              >
                <div className="flex   h-[35vh]  sm:h-[70vh] w-full">
                  <img
                    src={slider.image}
                    alt=""
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="space-y-12 hidden sm:block">
                  <div>
                    <p className="text-6xl my-2">Preserving possibilities,</p>
                  </div>
                  <div>
                    <Link to="/services">
                      <button className="px-6 py-4 rounded-full   hover:bg-hoverColor bg-mainGreen transition ">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Header;
// const loop = [1, 2, 3, 4];
const sliders = [
  {
    image: `${robot}`,
  },
  {
    image: `${Ai}`,
  },
  {
    image: `${svg}`,
  },
];

import React, { useState, useRef } from "react";
import logo from "../images/logo-removebg-preview.png";
import header_img from "../images/header-bg.jpg";
import svg from "../images/5954263_21770-removebg-preview.png";
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
                className="h-[70vh]  py-4 grid sm:grid-cols-2 items-center"
              >
                <div className="flex justify-center h-full w-full">
                  <img src={svg} alt="" className="rounded-lg " />
                </div>
                <div className="space-y-12 hidden sm:block">
                  <div>
                    <p className="text-6xl my-2">Preserving possibilities,</p>
                  </div>
                  <button className="px-6 py-4 rounded-full   hover:bg-hoverColor bg-mainGreen transition ">
                    Learn more
                  </button>
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
    image:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://img.freepik.com/free-vector/isometric-data-analysis-flowchart_1284-21521.jpg?size=338&ext=jpg&uid=R76010349&ga=GA1.2.940152230.1659185871",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
// <div className="h-[330px]  flex  justify-center">
//   <img src={svg} alt="" className=" " />
// </div>
{
  /* <div className="space-y-12">
  <div>
    <p className="text-5xl my-2">Preserving possibilities,</p>
    <p>Building the future with technology</p>
  </div>
  <button className="px-6 py-4 rounded-full   hover:bg-hoverColor bg-mainGreen transition ">
    Learn more
  </button>
</div> */
}

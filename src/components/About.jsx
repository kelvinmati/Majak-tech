import React from "react";
import Navbar from "./Navbar";
import about_img from "../images/pexels.jpg";
const About = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${about_img})`,
        }}
        className="h-[55vh]  bg-no-repeat bg-cover bg-center  bg-[rgba(0,0,0,0.8)] text-white   bg-blend-multiply"
      >
        <Navbar />

        <div className=" mt-11 text-center flex flex-col  w-mobile md:w-container_width mx-auto">
          <p className="text-2xl">ABOUT US</p>
          <p className="text-hoverColor text-lg">Know more about Majaktech</p>
        </div>
      </section>
      <div className="w-mobile md:w-container_width mx-auto grid grid-cols-2 items-center gap-4 py-10">
        <div className="space-y-5">
          <p>
            While based in Nairobi, Kenya, we assist customers from all over the
            world in expanding their digital market presence and expanding their
            brand's reach.
          </p>
          <p>
            MajakTech was created by a group of IT and Marketing experts that
            had a common vision. Due to the growing necessity to digitize all
            daily activities, research was conducted to determine the needs of
            East African firms as the globe transitions to digital everything.
          </p>
          <p>
            Our years of expertise in the digital marketing sector have equipped
            us with the most inventive problem-solving strategies.
          </p>
        </div>
        <div>
          <div className="h-[350px] flex ">
            <img
              src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="object-cover w-full rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

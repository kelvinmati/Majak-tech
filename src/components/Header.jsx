import React, { useState } from "react";
import logo from "../images/logo-removebg-preview.png";
import header_img from "../images/header-bg.jpg";
import svg from "../images/5954263_21770-removebg-preview.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section
      className="h-[95vh] w-full  bg-no-repeat bg-cover text-white  bg-blend-multiply bg-[rgba(0,0,0,0.9)]    "
      style={{ backgroundImage: `url(${header_img})` }}
    >
      <Navbar />
      <div className="grid grid-cols-2 gap-3   items-center py-14  ">
        <div className="  h-[370px]  flex   items-center  ">
          <img src={svg} alt="" className=" " />
        </div>
        <div className="space-y-12">
          <div>
            <p className="text-5xl my-2">Preserving possibilities,</p>
            <p>Building the future with technology</p>
          </div>
          <button className="px-6 py-4 rounded-full   hover:bg-hoverColor bg-mainGreen transition ">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

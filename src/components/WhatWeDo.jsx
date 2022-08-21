import React from "react";
import { Link } from "react-router-dom";
import what_we_do_img from "../images/meeting.jpeg";
const WhatWeDo = () => {
  return (
    <section className="py-20">
      <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-2 gap-11 items-center">
        <div className=" space-y-5  ">
          <h2 className="text-2xl">We Provide The Best Quality Services</h2>
          <p>
            MajakTech is a digital marketing service that aims to expand your
            market reach through professional website design, online
            advertising, training, and brand management.{" "}
          </p>
          <div>
            <Link to="/about">
              <button className="px-6 py-4 rounded-full  text-white hover:bg-hoverColor bg-mainGreen transition ">
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="h-[300px] flex ">
            <img src={what_we_do_img} alt="" className="rounded object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

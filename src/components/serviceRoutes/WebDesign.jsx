import React from "react";
import Navbar from "../Navbar";
import web_design from "../../images/web-design.jpg";
const WebDesign = () => {
  return (
    <section className="bg-grey">
      <div className="bg-black text-white h-full">
        <Navbar />
      </div>
      <div className="py-16 w-mobile md:w-container_width mx-auto grid sm:grid-cols-2 items-center gap-5">
        <div>
          <img src={web_design} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-orange-400">Web Design</h2>
          <p>
            The term "web design" describes the layout of websites that are seen
            online. Instead of software development, it typically refers to the
            user experience components of website development. We create a
            Clear, professional website with an organized design that never
            compromises on usability to make your statement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDesign;

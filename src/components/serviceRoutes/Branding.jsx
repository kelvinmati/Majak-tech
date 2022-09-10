import React from "react";
import branding from "../../images/branding.jpg";
import Navbar from "../Navbar";
const Branding = () => {
  return (
    <section>
      <div className="bg-black text-white h-full">
        <Navbar />
      </div>
      <div className="py-16 w-mobile md:w-container_width mx-auto grid sm:grid-cols-2 gap-10">
        <div className="h-[250px] flex">
          <img src={branding} alt="" className="rounded w-full object-cover" />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-orange-400">Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
            illum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            dolor dolorem possimus voluptates perspiciatis odio ad! Voluptate
            accusantium excepturi aperiam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branding;

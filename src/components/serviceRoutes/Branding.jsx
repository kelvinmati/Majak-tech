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
            A brand is a good, service, or idea that is publicly set apart from
            similar ones so that it can be promoted and communicated more
            effectively. Our responsibility is to use a credible brand to ensure
            that your product is known around the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branding;

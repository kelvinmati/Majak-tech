import React from "react";
import ceo_img from "../images/ceo.jpg";
const WhyUs = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl">Why choose Majaktech</h2>
      <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-2 items-center gap-16  py-16">
        <div className="flex space-x-5 items-center p-3">
          <div className="bg-orange-400 text-white  rounded h-[80%]   items-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-orange-400 font-bold text-2xl">Versatile</h2>
            <p>
              It is our goal to help you break out of your market's boundaries
              by providing you with a high-quality website and online marketing.{" "}
            </p>
          </div>
        </div>
        <div className="flex space-x-5 items-center p-3">
          <div className="bg-blue-400 text-white  rounded h-[80%]   items-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-blue-400 font-bold text-2xl">Diverse</h2>
            <p>
              MajakTech is situated in Nairobi, Kenya, but works with clients
              all over the world to assist them to expand their digital market
              reach and expand their brand's reach.
            </p>
          </div>
        </div>
        <div>
          {/* <div className="h-[300px]  flex sm:justify-end justify-center">
            <img src={ceo_img} alt="" className="rounded-full shadow-lg" />
          </div> */}
          <div className=" w-[300px] h-[300px]  flex justify-center mx-auto ">
            <img src={ceo_img} alt="" className=" shadow-xl rounded-full " />
          </div>
        </div>
        <div className="space-y-7">
          <h2 className="text-2xl">About the Founder</h2>
          <p>
            Majak Mayol is a forward-thinking, young person who works for
            progressive organizations that support and reward the implementation
            of new ideas and exponential employee growth to meet today's and
            tomorrow's organizational issues. Majak is an information
            technology-skilled youth who created MajakTech to empower women and
            engage youth in research and technology use.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

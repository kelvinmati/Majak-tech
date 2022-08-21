import React from "react";
import Navbar from "./Navbar";
import services_img from "../images/pexels.jpg";
const Services = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${services_img})`,
        }}
        className="h-[50vh]  bg-no-repeat bg-cover bg-center  bg-[rgba(0,0,0,0.8)] text-white   bg-blend-multiply"
      >
        <Navbar />

        <div className=" mt-11 text-center flex flex-col  w-mobile md:w-container_width mx-auto">
          <p className="text-2xl">Services</p>
          <p className=" text-lg">
            We have the most inventive problem-solving strategies.
          </p>
        </div>
      </header>
      <section className="bg-mainGreen text-white py-16">
        <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-3  gap-14">
          <div className="">
            <h2 className="text-lg font-semibold">Web design</h2>
            <p>
              {" "}
              This is the process of creating a website that is easy to use,
              appealing to the eye, and effective in conveying the intended
              message, it also involves both graphical and technical aspects of
              a website.{" "}
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">Training</h2>
            <p>
              {" "}
              This is to provide individuals with the skills and knowledge
              necessary to plan, execute, and measure digital marketing
              campaigns across a variety of channels. The training can cover
              topics such as search engine optimization, pay-per-click
              advertising, content marketing, social media marketing, and
              emailing
            </p>
          </div>{" "}
          <div className="">
            <h2 className="text-lg font-semibold">Consultation</h2>
            <p>
              {" "}
              This is a professional service provided by our experts in a
              particular field to other individuals or organizations, so the
              purpose of a consultation is to offer advice, guidance, and
              recommendations on a specific issue or concern.
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">Branding</h2>
            <p>
              {" "}
              Involves creating a name, symbol, or design that identifies and
              differentiates a product or service from other products and
              services.
            </p>
          </div>{" "}
          <div className="">
            <h2 className="text-lg font-semibold">Digital marketing</h2>
            <p>
              his is the process of using online channels to promote and sell
              products or services. It can be done through various online
              channels such as email, social media, and search engines.
            </p>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default Services;

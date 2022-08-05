import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";
const Footer = () => {
  return (
    <section className="py-14  bg-gray-100">
      <div className=" flex flex-col  space-y-4 text-center  items-center w-mobile md:w-container_width mx-auto">
        <div className="">
          <img
            // src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,w_311,h_200/v1659646477/logos/logo-removebg-preview_ka58hd.png"
            src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,w_207,h_134/v1659646477/logos/logo-removebg-preview_ka58hd.png"
            alt=""
          />
        </div>
        <ul className="flex md:flex-row flex-col md:space-x-5 space-x-0 space-y-2 md:space-y-0">
          <Link
            className="hover:text-mainGreen hover:scale-110 transition"
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className="hover:text-mainGreen hover:scale-110 transition"
            to="/"
          >
            <li>About</li>
          </Link>
          <Link
            className="hover:text-mainGreen hover:scale-110 transition"
            to="/"
          >
            <li>Services</li>
          </Link>
          <Link
            className="hover:text-mainGreen hover:scale-110 transition"
            to="/"
          >
            <li>Blog</li>
          </Link>
        </ul>
        <div className="flex space-x-4 text-hoverColor ">
          <ion-icon size="large" name="logo-facebook"></ion-icon>
          <ion-icon size="large" name="logo-twitter"></ion-icon>
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </div>
        <div>
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Majaktech.All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
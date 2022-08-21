import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo-removebg-preview.png";
import logo from "../images/new_logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative">
      <div className="w-mobile md:w-container_width mx-auto">
        <nav className="h-[120px] md:h-[150px] w-full  ">
          <div className="flex justify-between items-center h-full">
            <Link to="/">
              <div className="h-[100px] md:h-[150px] flex ">
                <img src={logo} alt="" />
              </div>
              {/* <img
                src="https://res.cloudinary.com/kelvin45/image/upload/q_auto/c_scale,w_207,h_134/v1659646477/logos/logo-removebg-preview_ka58hd.png"
                alt=""
              /> */}
            </Link>
            <div className="hidden md:block">
              <ul className="flex space-x-10">
                <Link to="/">
                  <li className="hover:text-hoverColor cursor-pointer">Home</li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-hoverColor cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/services">
                  <li className="hover:text-hoverColor cursor-pointer">
                    Services
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="hover:text-hoverColor cursor-pointer">Blog</li>
                </Link>
              </ul>
            </div>
            <div className="space-x-4 hidden  md:block">
              <a
                target="_blank"
                href="https://www.facebook.com/MajakTech-110431388425040/"
              >
                <ion-icon size="large" name="logo-facebook"></ion-icon>
              </a>
              <ion-icon size="large" name="logo-twitter"></ion-icon>
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </div>
            <div className="md:hidden block" onClick={showSideBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </div>
        </nav>
        <div
          className={
            isOpen
              ? " block sm:hidden    absolute right-0  bg-black rounded-br-3xl rounded-bl-3xl  text-white z-50 w-full  translate-y-[0px] p-3 transition "
              : " block sm:hidden  absolute right-0  bg-black text-white z-50 w-full  -translate-y-[350px] p-3 transition "
          }
        >
          <ul className="flex flex-col ">
            <Link to="/">
              <li className="hover:text-hoverColor cursor-pointer p-3">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-hoverColor cursor-pointer p-3">
                About
              </li>
            </Link>
            <Link to="/services">
              <li className="hover:text-hoverColor cursor-pointer p-3">
                Services
              </li>
            </Link>
            <Link to="/blog">
              <li className="hover:text-hoverColor cursor-pointer p-3">Blog</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

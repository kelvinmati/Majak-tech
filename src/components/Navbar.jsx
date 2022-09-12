import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo-removebg-preview.png";
import logo from "../images/new_logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const showSideBar = () => {
    setIsOpen(!isOpen);
  };
  // const details = [
  //   { type: "Ruiru 11", quantity: "400" },
  //   { type: "SK 1", quantity: "600" },
  //   { type: "DK 90", quantity: "200" },
  //   { type: "MK 10", quantity: "300" },
  // ];
  // // console.log("details are", details);
  // const quantity = details.map((detail) => {
  //   return parseInt(detail.quantity);
  // });
  // // console.log("quantity is", quantity);
  // const total = quantity.reduce((a, b) => {
  //   return a + b;
  // });
  // console.log(total);
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
                {/* <Link to="/services">
                  <li className="hover:text-hoverColor cursor-pointer">
                    Services
                  </li>
                </Link> */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <li className="flex space-x-3 items-center  cursor-pointer">
                    <span>Services</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={
                        isDropdownOpen
                          ? "w-5 h-5 rotate-180 transition-all"
                          : "w-5 h-5 rotate-0  transition-all"
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>

                  <ul
                    className={
                      isDropdownOpen
                        ? "bg-white shadow  z-50 text-black py-4 rounded absolute top-[40px] -left-[30px] w-[200px]"
                        : "hidden"
                    }
                  >
                    <div className="absolute -top-[19px] w-[200px] h-[20px] "></div>
                    <div className="absolute -top-[12px]  right-[60%] rotate-45 w-6 h-6 bg-white"></div>
                    <Link to="/services/web-design">
                      <li className="hover:bg-gray-50 p-2 rounded">
                        Web design
                      </li>
                    </Link>
                    <Link to="/services/training">
                      <li className="hover:bg-gray-50 p-2 rounded">Training</li>
                    </Link>
                    <Link to="/services/consultation">
                      <li className="hover:bg-gray-50 p-2 rounded">
                        Consultation
                      </li>
                    </Link>
                    <Link to="/services/branding">
                      <li className="hover:bg-gray-50 p-2 rounded">Branding</li>
                    </Link>
                    <Link to="/services/digital-marketing">
                      <li className="hover:bg-gray-50 p-2 rounded">
                        Digital marketing
                      </li>
                    </Link>
                  </ul>
                </div>
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
              : " block sm:hidden  absolute right-0  bg-black text-white z-50 w-full  -translate-y-[500px] p-3 transition "
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
            <div>
              <li className="hover:text-hoverColor cursor-pointer p-3 space-y-3">
                <li
                  onClick={() => setMobileDropDown(!mobileDropDown)}
                  className="flex space-x-3"
                >
                  <span>Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={
                      mobileDropDown
                        ? "w-5 h-5 rotate-180 transition-all"
                        : "w-5 h-5 rotate-0  transition-all"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </li>
                <ul
                  className={
                    mobileDropDown
                      ? "bg-white text-black  rounded"
                      : "bg-white text-black  rounded hidden"
                  }
                >
                  <Link to="/services/web-design">
                    <li className="p-2">Web design</li>
                  </Link>
                  <Link to="/services/training">
                    <li className="p-2">Training</li>
                  </Link>
                  <Link to="/services/consultation">
                    <li className="p-2">Consultation</li>
                  </Link>
                  <Link to="/services/branding">
                    <li className="p-2">Branding</li>
                  </Link>
                  <Link to="/services/digital-marketing">
                    <li className="p-2">Digital marketing</li>
                  </Link>
                </ul>
              </li>
            </div>

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
